import React from 'react';
import { assert } from 'chai';
import { spy, useFakeTimers } from 'sinon';
import {
  createShallow,
  getClasses,
  createMount,
  unwrap
} from '@material-ui/core/test-utils';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'

const tilesData = [
  {
    img: 'https://res.cloudinary.com/walden-global-services/image/upload/v1544584530/dandelion/1.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://res.cloudinary.com/walden-global-services/image/upload/v1544584530/dandelion/2.jpg',
    title: 'Tasty burger',
    author: 'director90',
  },
];

describe('<GridList />', () => {
  let shallow;

  before(() => {
    shallow = createShallow({ dive: true });
  });

  it('should render a ul', () => {
    const wrapper = shallow(
      <GridList>
        <br />
      </GridList>,
    );
    assert.strictEqual(wrapper.name(), 'ul');
  });

  it('should accept a component property', () => {
    const wrapper = shallow(
      <GridList component="li">
        <br />
      </GridList>,
    );
    assert.strictEqual(wrapper.name(), 'li');
  });

  it('should render children and change cellHeight', () => {
    const cellHeight = 250;
    const wrapper = shallow(
      <GridList cellHeight={cellHeight}>
        {tilesData.map(tile => (
          <span
            key={tile.img}
            className="grid-tile"
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
          >
            <img src={tile.img} alt="foo" />
          </span>
        ))}
      </GridList>,
    );

    assert.strictEqual(wrapper.find('.grid-tile').length, 2, 'should contain the children');
    assert.strictEqual(
      wrapper
        .children()
        .at(0)
        .props().style.height,
      cellHeight + 4,
      'should have height to 254',
    );
  });

  it('renders children by default', () => {
    const wrapper = shallow(
      <GridList>
        {tilesData.map(tile => (
          <span
            key={tile.img}
            className="grid-tile"
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
          >
            <img src={tile.img} alt="foo" />
          </span>
        ))}
        {false && <span>this is a null child</span>}
      </GridList>,
    );

    assert.strictEqual(wrapper.find('.grid-tile').length, 2, 'should contain the children');
  });

  it('renders children and change cols', () => {
    const wrapper = shallow(
      <GridList cols={4}>
        {tilesData.map(tile => (
          <span
            key={tile.img}
            className="grid-tile"
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
          >
            <img src={tile.img} alt="foo" />
          </span>
        ))}
      </GridList>,
    );

    assert.strictEqual(wrapper.find('.grid-tile').length, 2, 'should contain the children');
    assert.strictEqual(
      wrapper
        .children()
        .at(0)
        .props().style.width,
      '25%',
      'should have 25% of width',
    );
  });

  it('renders children and change spacing', () => {
    const spacing = 10;
    const wrapper = shallow(
      <GridList spacing={spacing}>
        {tilesData.map(tile => (
          <span
            key={tile.img}
            className="grid-tile"
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
          >
            <img src={tile.img} alt="foo" />
          </span>
        ))}
      </GridList>,
    );

    assert.strictEqual(wrapper.find('.grid-tile').length, 2, 'should contain the children');
    assert.strictEqual(
      wrapper
        .children()
        .at(0)
        .props().style.padding,
      spacing / 2,
      'should have 5 of padding',
    );
  });

  it('should render children and overwrite style', () => {
    const style = { backgroundColor: 'red' };
    const wrapper = shallow(
      <GridList style={style}>
        {tilesData.map(tile => (
          <span
            key={tile.img}
            className="grid-tile"
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
          >
            <img src={tile.img} alt="foo" />
          </span>
        ))}
      </GridList>,
    );

    assert.strictEqual(wrapper.find('.grid-tile').length, 2, 'should contain the children');
    assert.strictEqual(wrapper.props().style.backgroundColor, style.backgroundColor);
  });

  describe('prop: cellHeight', () => {
    it('should accept auto as a property', () => {
      const wrapper = shallow(
        <GridList cellHeight="auto">
          <br />
        </GridList>,
      );

      assert.strictEqual(
        wrapper
          .children()
          .at(0)
          .props().style.height,
        'auto',
      );
    });
  });
});

describe('<GridListTileBar />', () => {
  let shallow;

  before(() => {
    shallow = createShallow({ dive: true });
  });

  const tileData = {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  };

  describe('prop: title', () => {
    it('should renders title', () => {
      const wrapper = shallow(<GridListTileBar title={tileData.title} />);

      assert.strictEqual(
        wrapper.children('div').text(),
        tileData.title,
        'should contain the title',
      );
    });
  });
});

describe('<GridListTile />', () => {
  let shallow;
  let mount;
  let classes;
  const GridListTileNaked = unwrap(GridListTile);

  before(() => {
    shallow = createShallow({ dive: true });
    mount = createMount();
    classes = getClasses(<GridListTile />);
  });

  after(() => {
    mount.cleanUp();
  });

  const tileData = {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  };

  it('should render a li', () => {
    const children = <img src={tileData.img} alt="foo" />;
    const wrapper = shallow(<GridListTile>{children}</GridListTile>);
    assert.strictEqual(wrapper.name(), 'li');
  });

  it('should render a ul', () => {
    const children = <img src={tileData.img} alt="foo" />;
    const wrapper = shallow(<GridListTile component="li">{children}</GridListTile>);
    assert.strictEqual(wrapper.name(), 'li');
  });

  describe('prop: children', () => {
    it('should render children by default', () => {
      const children = <img src={tileData.img} alt="foo" />;
      const wrapper = shallow(<GridListTile>{children}</GridListTile>);

      assert.strictEqual(wrapper.containsMatchingElement(children), true);
    });

    it('should not change non image child', () => {
      const children = <div />;
      const wrapper = shallow(<GridListTile>{children}</GridListTile>);
      assert.strictEqual(wrapper.containsMatchingElement(children), true);
    });
  });

  describe('prop: className', () => {
    it('should renders className', () => {
      const children = <img src={tileData.img} alt="foo" />;
      const wrapper = shallow(<GridListTile className="foo">{children}</GridListTile>);

      assert.strictEqual(wrapper.hasClass('foo'), true);
    });
  });

  describe('mount', () => {
    let instance;
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <GridListTileNaked
          classes={{ imgFullWidth: 'imgFullWidth foo', imgFullHeight: 'imgFullHeight' }}
        >
          <img alt="test" />
          {null}
        </GridListTileNaked>,
      );
      instance = wrapper.instance();
    });

    it('should fit the height', () => {
      instance.imgElement = {
        complete: true,
        width: 16,
        height: 9,
        parentNode: { offsetWidth: 4, offsetHeight: 3 },
        classList: { remove: spy(), add: spy() },
        removeEventListener: () => {},
      };

      instance.ensureImageCover();
      assert.strictEqual(instance.imgElement.classList.remove.callCount, 1);
      assert.strictEqual(instance.imgElement.classList.remove.args[0][0], 'imgFullWidth');
      assert.strictEqual(instance.imgElement.classList.add.callCount, 1);
      assert.strictEqual(instance.imgElement.classList.add.args[0][0], 'imgFullHeight');
    });

    it('should fit the width', () => {
      instance.imgElement = {
        complete: true,
        width: 4,
        height: 3,
        parentNode: { offsetWidth: 16, offsetHeight: 9 },
        classList: { remove: spy(), add: spy() },
        removeEventListener: () => {},
      };

      instance.ensureImageCover();
      assert.strictEqual(instance.imgElement.classList.remove.callCount, 1);
      assert.strictEqual(instance.imgElement.classList.remove.args[0][0], 'imgFullHeight');
      assert.strictEqual(instance.imgElement.classList.add.callCount, 1);
      assert.strictEqual(instance.imgElement.classList.add.args[0][0], 'imgFullWidth');
    });
  });

  describe('resize', () => {
    let clock;

    before(() => {
      clock = useFakeTimers();
    });

    after(() => {
      clock.restore();
    });

    it('should handle the resize event', () => {
      const wrapper = shallow(<GridListTile />);
      const instance = wrapper.instance();
      instance.imgElement = {
        complete: true,
        width: 4,
        height: 3,
        parentNode: { offsetWidth: 16, offsetHeight: 9 },
        classList: { remove: spy(), add: spy() },
        removeEventListener: () => {},
      };
      wrapper
        .find('EventListener')
        .at(0)
        .simulate('resize');
      assert.strictEqual(instance.imgElement.classList.remove.callCount, 0);
      clock.tick(166);
      assert.strictEqual(instance.imgElement.classList.remove.callCount, 1);
      assert.strictEqual(instance.imgElement.classList.remove.args[0][0], classes.imgFullHeight);
      assert.strictEqual(instance.imgElement.classList.add.callCount, 1);
      assert.strictEqual(instance.imgElement.classList.add.args[0][0], classes.imgFullWidth);
    });
  });
});

describe('<Grid />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<Grid />);
  });

  it('should render', () => {
    const wrapper = shallow(<Grid className="woofGrid" />);
    assert.strictEqual(wrapper.name(), 'div');
    assert.strictEqual(wrapper.hasClass('woofGrid'), true);
  });

  describe('prop: container', () => {
    it('should apply the container class', () => {
      const wrapper = shallow(<Grid container />);
      assert.strictEqual(wrapper.hasClass(classes.container), true);
    });
  });

  describe('prop: item', () => {
    it('should apply the item class', () => {
      const wrapper = shallow(<Grid item />);
      assert.strictEqual(wrapper.hasClass(classes.item), true);
    });
  });

  describe('prop: component', () => {
    it('should change the component', () => {
      const wrapper = shallow(<Grid component="span" />);
      assert.strictEqual(wrapper.name(), 'span');
    });
  });

  describe('prop: xs', () => {
    it('should apply the flex-grow class', () => {
      const wrapper = shallow(<Grid item xs />);
      assert.strictEqual(wrapper.hasClass(classes['grid-xs-true']), true);
    });

    it('should apply the flex size class', () => {
      const wrapper = shallow(<Grid item xs={3} />);
      assert.strictEqual(wrapper.hasClass(classes['grid-xs-3']), true);
    });

    it('should apply the flex auto class', () => {
      const wrapper = shallow(<Grid item xs="auto" />);
      assert.strictEqual(wrapper.hasClass(classes['grid-xs-auto']), true);
    });
  });

  describe('prop: spacing', () => {
    it('should have a spacing', () => {
      const wrapper = shallow(<Grid container spacing={8} />);
      assert.strictEqual(wrapper.hasClass(classes['spacing-xs-8']), true);
    });
  });

  describe('prop: alignItems', () => {
    it('should apply the align-item class', () => {
      const wrapper = shallow(<Grid alignItems="center" container />);
      assert.strictEqual(wrapper.hasClass(classes['align-items-xs-center']), true);
    });
  });

  describe('prop: alignContent', () => {
    it('should apply the align-content class', () => {
      const wrapper = shallow(<Grid alignContent="center" container />);
      assert.strictEqual(wrapper.hasClass(classes['align-content-xs-center']), true);
    });
  });

  describe('prop: justify', () => {
    it('should apply the justify class', () => {
      const wrapper = shallow(<Grid justify="space-evenly" container />);
      assert.strictEqual(wrapper.hasClass(classes['justify-xs-space-evenly']), true);
    });
  });

  describe('prop: other', () => {
    it('should spread the other properties to the root element', () => {
      const handleClick = () => {};
      const wrapper = shallow(<Grid component="span" onClick={handleClick} />);
      assert.strictEqual(wrapper.props().onClick, handleClick);
    });
  });
});
