/* eslint-disable react/no-multi-comp */

import React from 'react';
import { assert } from 'chai';
import { spy, stub } from 'sinon';
import PropTypes from 'prop-types';
import {
  createShallow,
  createMount,
  getClasses,
  unwrap
} from '@material-ui/core/test-utils';
import Fade from '@material-ui/core/Fade';
import Portal from '@material-ui/core/Portal';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';

describe('<Dialog />', () => {
  let mount;
  let shallow;
  let classes;
  const defaultProps = {
    open: false,
  };

  before(() => {
    mount = createMount();
    shallow = createShallow({ dive: true });
    classes = getClasses(<Dialog {...defaultProps}>foo</Dialog>);
  });

  after(() => {
    mount.cleanUp();
  });

  it('should render a Modal', () => {
    const wrapper = shallow(<Dialog {...defaultProps}>foo</Dialog>);
    assert.strictEqual(wrapper.type(), Modal);
  });

  it('should render a Modal with TransitionComponent', () => {
    const Transition = props => <div className="cloned-element-class" {...props} />;
    const wrapper = shallow(
      <Dialog {...defaultProps} TransitionComponent={Transition}>
        foo
      </Dialog>,
    );
    assert.strictEqual(wrapper.find(Transition).length, 1);
  });

  it('should put Modal specific props on the root Modal node', () => {
    const onBackdropClick = () => {};
    const onEscapeKeyDown = () => {};
    const onClose = () => {};
    const wrapper = shallow(
      <Dialog
        open
        transitionDuration={100}
        onBackdropClick={onBackdropClick}
        onEscapeKeyDown={onEscapeKeyDown}
        onClose={onClose}
        hideOnBackdropClick={false}
        hideOnEscapeKeyUp={false}
      >
        foo
      </Dialog>,
    );
    assert.strictEqual(wrapper.props().open, true);
    assert.strictEqual(wrapper.props().BackdropProps.transitionDuration, 100);
    assert.strictEqual(wrapper.props().onBackdropClick, onBackdropClick);
    assert.strictEqual(wrapper.props().onEscapeKeyDown, onEscapeKeyDown);
    assert.strictEqual(wrapper.props().onClose, onClose);
    assert.strictEqual(wrapper.props().hideOnBackdropClick, false);
    assert.strictEqual(wrapper.props().hideOnEscapeKeyUp, false);
  });

  it('should spread custom props on the paper (dialog "root") node', () => {
    const wrapper = shallow(
      <Dialog {...defaultProps} data-my-prop="woofDialog">
        foo
      </Dialog>,
    );
    assert.strictEqual(wrapper.props()['data-my-prop'], 'woofDialog');
  });

  it('should render with the user classes on the root node', () => {
    const wrapper = shallow(
      <Dialog {...defaultProps} className="woofDialog">
        foo
      </Dialog>,
    );
    assert.strictEqual(wrapper.hasClass('woofDialog'), true);
  });

  it('should render Fade > div > Paper > children inside the Modal', () => {
    const children = <p>Hello</p>;
    const wrapper = shallow(<Dialog {...defaultProps}>{children}</Dialog>);

    const fade = wrapper.childAt(0);
    assert.strictEqual(fade.type(), Fade);

    const div = fade.childAt(0);
    assert.strictEqual(div.type(), 'div');

    const paper = div.childAt(0);
    assert.strictEqual(paper.length === 1 && paper.type(), Paper);

    assert.strictEqual(paper.hasClass(classes.paper), true);
  });

  it('should not be open by default', () => {
    const wrapper = shallow(<Dialog {...defaultProps}>foo</Dialog>);
    assert.strictEqual(wrapper.props().open, false);
    assert.strictEqual(wrapper.find(Fade).props().in, false);
  });

  it('should be open by default', () => {
    const wrapper = shallow(<Dialog open>foo</Dialog>);
    assert.strictEqual(wrapper.props().open, true);
    assert.strictEqual(wrapper.find(Fade).props().in, true);
  });

  it('should fade down and make the transition appear on first mount', () => {
    const wrapper = shallow(<Dialog {...defaultProps}>foo</Dialog>);
    assert.strictEqual(wrapper.find(Fade).props().appear, true);
  });

  describe('backdrop', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Dialog open>foo</Dialog>);
    });

    it('should attach a handler to the backdrop that fires onClose', () => {
      const onClose = spy();
      wrapper.setProps({ onClose });

      const handler = wrapper.instance().handleBackdropClick;
      const backdrop = wrapper.find('[role="document"]');
      assert.strictEqual(backdrop.props().onClick, handler);

      handler({});
      assert.strictEqual(onClose.callCount, 1);
    });

    it('should let the user disable backdrop click triggering onClose', () => {
      const onClose = spy();
      wrapper.setProps({ onClose, disableBackdropClick: true });

      const handler = wrapper.instance().handleBackdropClick;

      handler({});
      assert.strictEqual(onClose.callCount, 0);
    });

    it('should call through to the user specified onBackdropClick callback', () => {
      const onBackdropClick = spy();
      wrapper.setProps({ onBackdropClick });

      const handler = wrapper.instance().handleBackdropClick;

      handler({});
      assert.strictEqual(onBackdropClick.callCount, 1);
    });

    it('should ignore the backdrop click if the event did not come from the backdrop', () => {
      const onBackdropClick = spy();
      wrapper.setProps({ onBackdropClick });

      const handler = wrapper.instance().handleBackdropClick;

      handler({
        target: {
          /* a dom node */
        },
        currentTarget: {
          /* another dom node */
        },
      });
      assert.strictEqual(onBackdropClick.callCount, 0);
    });

    it('should store the click target on mousedown', () => {
      const mouseDownTarget = 'clicked element';
      const backdrop = wrapper.find('[role="document"]');
      backdrop.simulate('mousedown', { target: mouseDownTarget });
      assert.strictEqual(wrapper.instance().mouseDownTarget, mouseDownTarget);
    });

    it('should clear click target on successful backdrop click', () => {
      const onBackdropClick = spy();
      wrapper.setProps({ onBackdropClick });

      const mouseDownTarget = 'backdrop';

      const backdrop = wrapper.find('[role="document"]');
      backdrop.simulate('mousedown', { target: mouseDownTarget });
      assert.strictEqual(wrapper.instance().mouseDownTarget, mouseDownTarget);
      backdrop.simulate('click', { target: mouseDownTarget, currentTarget: mouseDownTarget });
      assert.strictEqual(onBackdropClick.callCount, 1);
      assert.strictEqual(wrapper.instance().mouseDownTarget, null);
    });

    it('should not close if the target changes between the mousedown and the click', () => {
      const onBackdropClick = spy();
      wrapper.setProps({ onBackdropClick });

      const backdrop = wrapper.find('[role="document"]');

      backdrop.simulate('mousedown', { target: 'backdrop' });
      backdrop.simulate('click', { target: 'dialog', currentTarget: 'dialog' });
      assert.strictEqual(onBackdropClick.callCount, 0);
    });
  });

  describe('prop: classes', () => {
    it('should add the class on the Paper element', () => {
      const className = 'foo';
      const wrapper = shallow(
        <Dialog {...defaultProps} classes={{ paper: className }}>
          foo
        </Dialog>,
      );
      assert.strictEqual(wrapper.find(Paper).hasClass(className), true);
    });
  });

  describe('prop: maxWidth', () => {
    it('should use the right className', () => {
      const wrapper = shallow(
        <Dialog {...defaultProps} maxWidth="xs">
          foo
        </Dialog>,
      );
      assert.strictEqual(wrapper.find(Paper).hasClass(classes.paperWidthXs), true);
    });
  });

  describe('prop: fullWidth', () => {
    it('should set `fullWidth` class if specified', () => {
      const wrapper = shallow(
        <Dialog {...defaultProps} fullWidth>
          foo
        </Dialog>,
      );
      assert.strictEqual(wrapper.find(Paper).hasClass(classes.paperFullWidth), true);
    });

    it('should not set `fullWidth` class if not specified', () => {
      const wrapper = shallow(<Dialog {...defaultProps}>foo</Dialog>);
      assert.strictEqual(wrapper.find(Paper).hasClass(classes.paperFullWidth), false);
    });
  });

  describe('prop: fullScreen', () => {
    it('true should render fullScreen', () => {
      const wrapper = shallow(
        <Dialog {...defaultProps} fullScreen>
          foo
        </Dialog>,
      );
      assert.strictEqual(wrapper.find(Paper).hasClass(classes.paperFullScreen), true);
    });

    it('false should not render fullScreen', () => {
      const wrapper = shallow(
        <Dialog {...defaultProps} fullScreen={false}>
          foo
        </Dialog>,
      );
      assert.strictEqual(wrapper.find(Paper).hasClass(classes.paperFullScreen), false);
    });
  });

  describe('prop: PaperProps.className', () => {
    it('should merge the className', () => {
      const wrapper = mount(
        <Dialog open PaperProps={{ className: 'custom-paper-class' }}>
          foo
        </Dialog>,
      );

      assert.strictEqual(wrapper.find(Paper).hasClass(classes.paper), true);
      assert.strictEqual(wrapper.find(Paper).hasClass('custom-paper-class'), true);
    });
  });
});

describe('<Modal />', () => {
  let shallow;
  let mount;
  let classes;
  let savedBodyStyle;
  const ModalNaked = unwrap(Modal);

  before(() => {
    shallow = createShallow({ dive: true, disableLifecycleMethods: true });
    classes = getClasses(<Modal open={false} />);
    mount = createMount();
    savedBodyStyle = document.body.style;
  });

  beforeEach(() => {
    document.body.setAttribute('style', savedBodyStyle);
  });

  after(() => {
    mount.cleanUp();
  });

  it('should render null by default', () => {
    const wrapper = shallow(
      <Modal open={false}>
        <p>Hello World</p>
      </Modal>,
    );
    assert.strictEqual(wrapper.type(), null, 'should be null');
  });

  describe('prop: open', () => {
    it('should render the modal div inside the portal', () => {
      const wrapper = mount(
        <ModalNaked classes={classes} open data-my-prop="woofModal">
          <p>Hello World</p>
        </ModalNaked>,
      );
      assert.strictEqual(wrapper.childAt(0).name(), 'Portal');
      const modal = wrapper
        .childAt(0)
        .childAt(0)
        .childAt(0);
      assert.strictEqual(modal.type(), 'div');
      assert.strictEqual(modal.hasClass(classes.root), true);
    });
  });

  describe('backdrop', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Modal open id="modal">
          <div id="container">
            <h1 id="heading">Hello</h1>
          </div>
        </Modal>,
      );
    });

    it('should render a backdrop wrapped in a fade transition', () => {
      const transition = wrapper.childAt(0).childAt(0);
      assert.strictEqual(transition.type(), Backdrop);
      assert.strictEqual(transition.props().open, true);
    });

    it('should pass a transitionDuration prop to the transition component', () => {
      wrapper.setProps({ BackdropProps: { transitionDuration: 200 } });
      const transition = wrapper.childAt(0).childAt(0);
      assert.strictEqual(transition.props().transitionDuration, 200);
    });

    it('should attach a handler to the backdrop that fires onClose', () => {
      const onClose = spy();
      wrapper.setProps({ onClose });

      const handler = wrapper.instance().handleBackdropClick;
      const backdrop = wrapper.find(Backdrop);
      assert.strictEqual(backdrop.props().onClick, handler);

      handler({});
      assert.strictEqual(onClose.callCount, 1);
    });

    it('should let the user disable backdrop click triggering onClose', () => {
      const onClose = spy();
      wrapper.setProps({ onClose, disableBackdropClick: true });

      const handler = wrapper.instance().handleBackdropClick;

      handler({});
      assert.strictEqual(onClose.callCount, 0);
    });

    it('should call through to the user specified onBackdropClick callback', () => {
      const onBackdropClick = spy();
      wrapper.setProps({ onBackdropClick });

      const handler = wrapper.instance().handleBackdropClick;

      handler({});
      assert.strictEqual(onBackdropClick.callCount, 1);
    });

    it('should ignore the backdrop click if the event did not come from the backdrop', () => {
      const onBackdropClick = spy();
      wrapper.setProps({ onBackdropClick });

      const handler = wrapper.instance().handleBackdropClick;

      handler({
        target: {
          /* a dom node */
        },
        currentTarget: {
          /* another dom node */
        },
      });
      assert.strictEqual(onBackdropClick.callCount, 0);
    });
  });

  describe('render', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Modal open={false} id="modal">
          <div id="container">
            <h1 id="heading">Hello</h1>
          </div>
        </Modal>,
      );
    });

    it('should not render the content', () => {
      assert.strictEqual(
        document.getElementById('container'),
        null,
        'should not have the element in the DOM',
      );
      assert.strictEqual(
        document.getElementById('heading'),
        null,
        'should not have the element in the DOM',
      );
    });

    it('should render the content into the portal', () => {
      wrapper.setProps({ open: true });
      const portalLayer = wrapper
        .find(Portal)
        .instance()
        .getMountNode();
      const container = document.getElementById('container');
      const heading = document.getElementById('heading');

      if (!container || !heading) {
        throw new Error('missing element');
      }

      assert.strictEqual(
        container.tagName.toLowerCase(),
        'div',
        'should have the element in the DOM',
      );
      assert.strictEqual(heading.tagName.toLowerCase(), 'h1');
      assert.strictEqual(portalLayer.contains(container), true);
      assert.strictEqual(portalLayer.contains(heading), true);

      const container2 = document.getElementById('container');

      if (!container2) {
        throw new Error('missing container');
      }

      assert.strictEqual(
        container2.getAttribute('role'),
        'document',
        'should add the document role',
      );
      assert.strictEqual(container2.getAttribute('tabindex'), '-1');
    });
  });

  describe('backdrop 2', () => {
    it('should render a backdrop component into the portal before the modal content', () => {
      mount(
        <Modal open id="modal">
          <div id="container">
            <h1 id="heading">Hello</h1>
          </div>
        </Modal>,
      );

      const modal = document.getElementById('modal');
      const container = document.getElementById('container');

      if (!modal) {
        throw new Error('missing modal');
      }

      assert.strictEqual(modal.children.length, 2);
      assert.strictEqual(modal.children[0] != null, true);
      assert.strictEqual(modal.children[1], container);
    });
  });

  describe('hide backdrop', () => {
    it('should not render a backdrop component into the portal before the modal content', () => {
      mount(
        <Modal open hideBackdrop id="modal">
          <div id="container">
            <h1 id="heading">Hello</h1>
          </div>
        </Modal>,
      );
      const modal = document.getElementById('modal');
      const container = document.getElementById('container');

      if (!modal) {
        throw new Error('missing modal');
      }

      assert.strictEqual(modal.children.length, 1);
      assert.strictEqual(modal.children[0], container);
    });
  });

  describe('handleKeyDown()', () => {
    let wrapper;
    let instance;
    let onEscapeKeyDownSpy;
    let onCloseSpy;
    let topModalStub;
    let event;

    beforeEach(() => {
      onEscapeKeyDownSpy = spy();
      onCloseSpy = spy();
      topModalStub = stub();
      wrapper = shallow(
        <Modal open={false} onEscapeKeyDown={onEscapeKeyDownSpy} onClose={onCloseSpy} />,
      );
      instance = wrapper.instance();
    });

    it('should have handleKeyDown', () => {
      assert.notStrictEqual(instance.handleKeyDown, undefined);
      assert.strictEqual(typeof instance.handleKeyDown, 'function');
    });

    it('when not mounted should not call onEscapeKeyDown and onClose', () => {
      instance.handleKeyDown({});
      assert.strictEqual(onEscapeKeyDownSpy.callCount, 0);
      assert.strictEqual(onCloseSpy.callCount, 0);
    });

    it('when mounted and not TopModal should not call onEscapeKeyDown and onClose', () => {
      topModalStub.returns(false);
      wrapper.setProps({ manager: { isTopModal: topModalStub } });

      instance.handleKeyDown({
        key: 'Escape',
      });
      assert.strictEqual(topModalStub.callCount, 1);
      assert.strictEqual(onEscapeKeyDownSpy.callCount, 0);
      assert.strictEqual(onCloseSpy.callCount, 0);
    });

    it('when mounted, TopModal and event not esc should not call given functions', () => {
      topModalStub.returns(true);
      wrapper.setProps({ manager: { isTopModal: topModalStub } });
      event = { key: 'j' }; // Not 'esc'

      instance.handleKeyDown(event);
      assert.strictEqual(topModalStub.callCount, 0);
      assert.strictEqual(onEscapeKeyDownSpy.callCount, 0);
      assert.strictEqual(onCloseSpy.callCount, 0);
    });

    it('should call onEscapeKeyDown and onClose', () => {
      topModalStub.returns(true);
      wrapper.setProps({ manager: { isTopModal: topModalStub } });
      event = { key: 'Escape', stopPropagation: () => {} };

      instance.handleKeyDown(event);
      assert.strictEqual(topModalStub.callCount, 1);
      assert.strictEqual(onEscapeKeyDownSpy.callCount, 1);
      assert.strictEqual(onEscapeKeyDownSpy.calledWith(event), true);
      assert.strictEqual(onCloseSpy.callCount, 1);
      assert.strictEqual(onCloseSpy.calledWith(event), true);
    });

    it('when disableEscapeKeyDown should call only onClose', () => {
      topModalStub.returns(true);
      wrapper.setProps({ disableEscapeKeyDown: true, manager: { isTopModal: topModalStub } });
      event = { key: 'Escape', stopPropagation: () => {} };

      instance.handleKeyDown(event);
      assert.strictEqual(topModalStub.callCount, 1);
      assert.strictEqual(onEscapeKeyDownSpy.callCount, 1);
      assert.strictEqual(onEscapeKeyDownSpy.calledWith(event), true);
      assert.strictEqual(onCloseSpy.callCount, 0);
    });

    it('should not be call when defaultPrevented', () => {
      topModalStub.returns(true);
      wrapper.setProps({ disableEscapeKeyDown: true, manager: { isTopModal: topModalStub } });
      event = { key: 'Escape', defaultPrevented: true };

      instance.handleKeyDown(event);
      assert.strictEqual(topModalStub.callCount, 1);
      assert.strictEqual(onEscapeKeyDownSpy.callCount, 0);
      assert.strictEqual(onCloseSpy.callCount, 0);
    });
  });

  describe('prop: keepMounted', () => {
    it('should keep the children in the DOM', () => {
      const children = <p>Hello World</p>;
      const wrapper = shallow(
        <Modal keepMounted open={false}>
          <div>{children}</div>
        </Modal>,
      );
      assert.strictEqual(wrapper.contains(children), true);
    });

    it('should not keep the children in the DOM', () => {
      const children = <p>Hello World</p>;
      const wrapper = shallow(
        <Modal open={false}>
          <div>{children}</div>
        </Modal>,
      );
      assert.strictEqual(wrapper.contains(children), false);
    });
  });

  describe('prop: onExited', () => {
    it('should avoid concurrency issue by chaining internal with the public API', () => {
      const handleExited = spy();
      const wrapper = mount(
        <ModalNaked classes={{}} open>
          <Fade in onExited={handleExited}>
            <div />
          </Fade>
        </ModalNaked>,
      );
      wrapper.setProps({
        open: false,
      });
      wrapper
        .find('Transition')
        .at(1)
        .props()
        .onExited();
      assert.strictEqual(handleExited.callCount, 1);
      assert.strictEqual(wrapper.state().exited, true);
    });

    it('should not rely on the internal backdrop events', () => {
      const wrapper = shallow(
        <Modal open>
          <div />
        </Modal>,
      );
      assert.strictEqual(wrapper.state().exited, false);
      wrapper.setProps({
        open: false,
      });
      assert.strictEqual(wrapper.state().exited, true);
    });
  });

  describe('prop: onRendered', () => {
    it('should fire', () => {
      const handleRendered = spy();
      mount(
        <Modal open onRendered={handleRendered}>
          <div />
        </Modal>,
      );
      assert.strictEqual(handleRendered.callCount, 1);
    });
  });

  describe('two modal at the same time', () => {
    it('should open and close', () => {
      const TestCase = props => (
        <React.Fragment>
          <Modal open={props.open}>
            <div>Hello</div>
          </Modal>
          <Modal open={props.open}>
            <div>World</div>
          </Modal>
        </React.Fragment>
      );

      TestCase.propTypes = {
        open: PropTypes.bool,
      };

      const wrapper = mount(<TestCase open={false} />);
      assert.strictEqual(document.body.style.overflow, '');
      wrapper.setProps({ open: true });
      assert.strictEqual(document.body.style.overflow, 'hidden');
      wrapper.setProps({ open: false });
      assert.strictEqual(document.body.style.overflow, '');
    });

    it('should open and close with Transitions', done => {
      const TestCase = props => (
        <React.Fragment>
          <Modal open={props.open}>
            <Fade onEntered={props.onEntered} onExited={props.onExited} in={props.open}>
              <div>Hello</div>
            </Fade>
          </Modal>
          <Modal open={props.open}>
            <div>World</div>
          </Modal>
        </React.Fragment>
      );

      TestCase.propTypes = {
        onEntered: PropTypes.func,
        onExited: PropTypes.func,
        open: PropTypes.bool,
      };

      let wrapper;
      const onEntered = () => {
        assert.strictEqual(document.body.style.overflow, 'hidden');
        wrapper.setProps({ open: false });
      };

      const onExited = () => {
        assert.strictEqual(document.body.style.overflow, '');
        done();
      };

      wrapper = mount(<TestCase onEntered={onEntered} onExited={onExited} open={false} />);
      assert.strictEqual(document.body.style.overflow, '');
      wrapper.setProps({ open: true });
    });
  });

  it('should support open abort', () => {
    class TestCase extends React.Component {
      state = {
        open: true,
      };

      componentDidMount() {
        this.setState({
          open: false,
        });
      }

      render() {
        return (
          <Modal open={this.state.open}>
            <div>Hello</div>
          </Modal>
        );
      }
    }
    mount(<TestCase />);
  });

  describe('prop: closeAfterTransition', () => {
    it('when true it should close after Transition has finished', done => {
      const TestCase = props => (
        <Modal open={props.open} closeAfterTransition>
          <Fade
            onEntered={props.onEntered}
            onExiting={props.onExiting}
            onExited={props.onExited}
            in={props.open}
          >
            <div>Hello</div>
          </Fade>
        </Modal>
      );

      TestCase.propTypes = {
        onEntered: PropTypes.func,
        onExited: PropTypes.func,
        onExiting: PropTypes.func,
        open: PropTypes.bool,
      };

      let wrapper;
      const onEntered = () => {
        assert.strictEqual(document.body.style.overflow, 'hidden');
        wrapper.setProps({ open: false });
      };

      const onExited = () => {
        assert.strictEqual(document.body.style.overflow, '');
        done();
      };

      const onExiting = () => {
        assert.strictEqual(document.body.style.overflow, 'hidden');
      };

      wrapper = mount(
        <TestCase onEntered={onEntered} onExiting={onExiting} onExited={onExited} open={false} />,
      );
      assert.strictEqual(document.body.style.overflow, '');
      wrapper.setProps({ open: true });
    });

    it('when false it should close before Transition has finished', done => {
      const TestCase = props => (
        <Modal open={props.open} closeAfterTransition={false}>
          <Fade
            onEntered={props.onEntered}
            onExiting={props.onExiting}
            onExited={props.onExited}
            in={props.open}
          >
            <div>Hello</div>
          </Fade>
        </Modal>
      );

      TestCase.propTypes = {
        onEntered: PropTypes.func,
        onExited: PropTypes.func,
        onExiting: PropTypes.func,
        open: PropTypes.bool,
      };

      let wrapper;
      const onEntered = () => {
        assert.strictEqual(document.body.style.overflow, 'hidden');
        wrapper.setProps({ open: false });
      };

      const onExited = () => {
        assert.strictEqual(document.body.style.overflow, '');
        done();
      };

      const onExiting = () => {
        assert.strictEqual(document.body.style.overflow, '');
      };

      wrapper = mount(
        <TestCase onEntered={onEntered} onExiting={onExiting} onExited={onExited} open={false} />,
      );
      assert.strictEqual(document.body.style.overflow, '');
      wrapper.setProps({ open: true });
    });
  });

  describe('prop: container', () => {
    it('should be able to change the container', () => {
      class TestCase extends React.Component {
        state = {
          anchorEl: null,
        };

        componentDidMount() {
          this.setState(
            () => ({
              anchorEl: document.body,
            }),
            () => {
              this.setState(
                {
                  anchorEl: null,
                },
                () => {
                  this.setState({
                    anchorEl: document.body,
                  });
                },
              );
            },
          );
        }

        render() {
          const { anchorEl } = this.state;
          return (
            <Modal open={Boolean(anchorEl)} container={anchorEl} {...this.props}>
              <Fade in={Boolean(anchorEl)}>
                <div>Hello</div>
              </Fade>
            </Modal>
          );
        }
      }
      mount(<TestCase />);
    });
  });
});
