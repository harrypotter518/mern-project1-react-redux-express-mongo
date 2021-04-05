import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '@material-ui/core/test-utils';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

describe('<Card />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<Card />);
  });

  it('should render Paper with the root class', () => {
    const wrapper = shallow(<Card />);
    assert.strictEqual(wrapper.type(), Paper);
    assert.strictEqual(wrapper.props().elevation, 1);
  });

  it('should have the root and custom class', () => {
    const wrapper = shallow(<Card className="card" />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass('card'), true);
  });

  it('should render Paper with 8dp', () => {
    const wrapper = shallow(<Card raised />);
    assert.strictEqual(wrapper.props().elevation, 8);
  });

  it('should spread custom props on the root node', () => {
    const wrapper = shallow(<Card data-my-prop="woofCard" />);
    assert.strictEqual(wrapper.props()['data-my-prop'], 'woofCard');
  });
});

describe('<CardContent />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ untilSelector: 'CardContent' });
    classes = getClasses(<CardContent />);
  });

  it('should render a div with the root class', () => {
    const wrapper = shallow(<CardContent />);
    assert.strictEqual(wrapper.name(), 'div');
    assert.strictEqual(wrapper.hasClass(classes.root), true);
  });
});
  
describe('<CardHeader />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ untilSelector: 'div' });
    classes = getClasses(<CardHeader />);
  });

  it('should render CardContent', () => {
    const wrapper = shallow(<CardHeader />);
    assert.strictEqual(wrapper.name(), 'div');
  });

  it('should have the root class', () => {
    const wrapper = shallow(<CardHeader />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
  });

  describe('with custom styles', () => {
    let wrapper;
    let extraClasses;

    beforeEach(() => {
      extraClasses = { title: 'foo', subheader: 'bar' };
      wrapper = shallow(
        <CardHeader
          title="Title"
          subheader="Subheader"
          classes={{ title: extraClasses.title, subheader: extraClasses.subheader }}
        />,
      ).childAt(0);
    });

    it('should render with the title class', () => {
      const title = wrapper.childAt(0);
      assert.strictEqual(title.hasClass(extraClasses.title), true);
    });

    it('should render with the subheader class', () => {
      const subheader = wrapper.childAt(1);
      assert.strictEqual(subheader.hasClass(extraClasses.subheader), true);
    });
  });

  describe('without an avatar', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CardHeader title="Title" subheader="Subheader" />).childAt(0);
    });

    it('should render the title as headline text', () => {
      const title = wrapper.childAt(0);
      assert.strictEqual(title.type(), Typography);
      assert.strictEqual(title.props().variant, 'headline');
    });

    it('should render the subheader as body1 secondary text', () => {
      const subheader = wrapper.childAt(1);
      assert.strictEqual(subheader.type(), Typography);
      assert.strictEqual(subheader.props().variant, 'body1');
      assert.strictEqual(subheader.props().color, 'textSecondary');
    });

    it('should not render the subheader if none is given', () => {
      const title = wrapper.childAt(0);
      assert.strictEqual(title.type(), Typography);
      assert.strictEqual(wrapper.length, 1);
    });
  });

  describe('with an avatar', () => {
    let wrapper;
    let avatar;

    beforeEach(() => {
      avatar = <span />;
      wrapper = shallow(<CardHeader avatar={avatar} title="Title" subheader="Subhead" />);
    });

    it('should render the avatar inside the first child', () => {
      const container = wrapper.childAt(0);

      assert.strictEqual(container.name(), 'div');
      assert.strictEqual(container.hasClass(classes.avatar), true);
      assert.strictEqual(container.childAt(0).equals(avatar), true);
    });

    it('should render the title text inside the second child', () => {
      const container = wrapper.childAt(1);
      assert.strictEqual(
        container.hasClass(classes.content),
        true,
        'should have the content class',
      );
      const title = container.childAt(0);
      assert.strictEqual(title.type(), Typography);
      assert.strictEqual(title.props().variant, 'body2');
    });

    it('should render the subheader as body2 secondary text inside the second child', () => {
      const container = wrapper.childAt(1);
      assert.strictEqual(
        container.hasClass(classes.content),
        true,
        'should have the content class',
      );
      const subheader = container.childAt(1);
      assert.strictEqual(subheader.type(), Typography);
      assert.strictEqual(subheader.props().variant, 'body2');
      assert.strictEqual(subheader.props().color, 'textSecondary');
    });
  });
});

describe('<CardActions />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<CardActions />);
  });

  it('should render a div with the root and custom class', () => {
    const wrapper = shallow(<CardActions className="cardActions" />);
    assert.strictEqual(wrapper.name(), 'div');
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass('cardActions'), true);
  });

  it('should pass the action class to children', () => {
    const child3 = false;
    const wrapper = shallow(
      <CardActions>
        <div id="child1" />
        <div id="child2" />
        {child3 && <div id="child3" />}
      </CardActions>,
    );

    assert.strictEqual(wrapper.find('#child1').hasClass(classes.action), true);
    assert.strictEqual(wrapper.find('#child2').hasClass(classes.action), true);
  });

  it('should not pass the action class to children', () => {
    const wrapper = shallow(
      <CardActions>
        <div id="child1" />
        <div id="child2" />
      </CardActions>,
    );

    assert.strictEqual(wrapper.find('#child1').hasClass(classes.action), false);
    assert.strictEqual(wrapper.find('#child2').hasClass(classes.action), false);
  });
});
