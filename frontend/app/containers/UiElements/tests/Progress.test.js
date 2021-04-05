import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '@material-ui/core/test-utils';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

describe('<CircularProgress />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<CircularProgress />);
  });

  it('should render a div with the root class', () => {
    const wrapper = shallow(<CircularProgress />);
    assert.strictEqual(wrapper.name(), 'div');
  });

  it('should render with the primary color by default', () => {
    const wrapper = shallow(<CircularProgress />);
    assert.strictEqual(wrapper.hasClass(classes.colorPrimary), true);
  });

  it('should render with the primary color', () => {
    const wrapper = shallow(<CircularProgress color="primary" />);
    assert.strictEqual(wrapper.hasClass(classes.colorPrimary), true);
  });

  it('should render with the secondary color', () => {
    const wrapper = shallow(<CircularProgress color="secondary" />);
    assert.strictEqual(wrapper.hasClass(classes.colorSecondary), true);
  });

  it('should render with the user and root classes', () => {
    const wrapper = shallow(<CircularProgress className="woofCircularProgress" />);
    assert.strictEqual(wrapper.hasClass('woofCircularProgress'), true);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.props().role, 'progressbar');
  });

  it('should contain an SVG with the svg class, and a circle with the circle class', () => {
    const wrapper = shallow(<CircularProgress />);
    const svg = wrapper.childAt(0);
    assert.strictEqual(svg.name(), 'svg');
    assert.strictEqual(wrapper.hasClass(classes.indeterminate), true);
    assert.strictEqual(svg.childAt(0).name(), 'circle', 'should be a circle');
    assert.strictEqual(
      svg.childAt(0).hasClass(classes.circle),
      true,
      'should have the circle class',
    );
  });

  it('should render intermediate variant by default', () => {
    const wrapper = shallow(<CircularProgress />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    const svg = wrapper.childAt(0);
    assert.strictEqual(
      svg.childAt(0).hasClass(classes.circleIndeterminate),
      true,
      'should have the circleIndeterminate class',
    );
  });

  it('should render with a different size', () => {
    const wrapper = shallow(<CircularProgress size={60} />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.props().style.width, 60, 'should have width correctly set');
    assert.strictEqual(wrapper.props().style.height, 60, 'should have width correctly set');
    const svg = wrapper.childAt(0);
    assert.strictEqual(svg.name(), 'svg');
    assert.strictEqual(svg.childAt(0).name(), 'circle');
    assert.strictEqual(svg.childAt(0).props().cx, 44, 'should have cx correctly set');
    assert.strictEqual(svg.childAt(0).props().cy, 44, 'should have cx correctly set');
  });

  describe('prop: variant="static', () => {
    it('should set strokeDasharray of circle', () => {
      const wrapper = shallow(<CircularProgress variant="static" value={70} />);
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      const svg = wrapper.childAt(0);
      const style = svg.childAt(0).props().style;
      assert.strictEqual(style.strokeDasharray, '126.920', 'should have strokeDasharray set');
      assert.strictEqual(style.strokeDashoffset, '38.076px', 'should have strokeDashoffset set');
      assert.strictEqual(wrapper.props()['aria-valuenow'], 70);
    });
  });

  describe('prop: variant="determinate"', () => {
    it('should render with determinate classes', () => {
      const wrapper = shallow(<CircularProgress variant="determinate" />);
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      const svg = wrapper.childAt(0);
      assert.strictEqual(svg.name(), 'svg');
      assert.strictEqual(
        svg.hasClass(classes.svgIndeterminate),
        false,
        'should not have the svgIndeterminate class',
      );
    });

    it('should set strokeDasharray of circle', () => {
      const wrapper = shallow(<CircularProgress variant="determinate" value={70} />);
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      const svg = wrapper.childAt(0);
      const style = svg.childAt(0).props().style;
      assert.strictEqual(style.strokeDasharray, '126.920');
      assert.strictEqual(style.strokeDashoffset, '11.423px');
      assert.strictEqual(wrapper.props()['aria-valuenow'], 70);
    });
  });

  describe('prop: disableShrink ', () => {
    it('should default to false', () => {
      const wrapper = shallow(<CircularProgress variant="indeterminate" />);
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      const svg = wrapper.childAt(0);
      const circle = svg.childAt(0);
      assert.strictEqual(circle.name(), 'circle');
      assert.strictEqual(circle.hasClass(classes.circleDisableShrink), false);
    });

    it('should render without disableShrink class when set to false', () => {
      const wrapper = shallow(<CircularProgress variant="indeterminate" disableShrink={false} />);
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      const svg = wrapper.childAt(0);
      const circle = svg.childAt(0);
      assert.strictEqual(circle.name(), 'circle');
      assert.strictEqual(circle.hasClass(classes.circleDisableShrink), false);
    });

    it('should render with disableShrink class when set to true', () => {
      const wrapper = shallow(<CircularProgress variant="indeterminate" disableShrink />);
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      const svg = wrapper.childAt(0);
      const circle = svg.childAt(0);
      assert.strictEqual(circle.name(), 'circle');
      assert.strictEqual(circle.hasClass(classes.circleDisableShrink), true);
    });
  });
});

describe('<LinearProgress />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<LinearProgress />);
  });

  it('should render a div with the root class', () => {
    const wrapper = shallow(<LinearProgress />);
    assert.strictEqual(wrapper.name(), 'div');
    assert.strictEqual(wrapper.hasClass(classes.root), true);
  });

  it('should render with the user and root classes', () => {
    const wrapper = shallow(<LinearProgress className="woofLinearProgress" />);
    assert.strictEqual(wrapper.hasClass('woofLinearProgress'), true);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
  });

  it('should render indeterminate variant by default', () => {
    const wrapper = shallow(<LinearProgress />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass(classes.indeterminate), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.barColorPrimary), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.bar1Indeterminate), true);
    assert.strictEqual(wrapper.childAt(1).hasClass(classes.barColorPrimary), true);
    assert.strictEqual(wrapper.childAt(1).hasClass(classes.bar2Indeterminate), true);
  });

  it('should render for the primary color', () => {
    const wrapper = shallow(<LinearProgress color="primary" />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.barColorPrimary), true);
    assert.strictEqual(wrapper.childAt(1).hasClass(classes.barColorPrimary), true);
  });

  it('should render for the secondary color', () => {
    const wrapper = shallow(<LinearProgress color="secondary" />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.barColorSecondary), true);
    assert.strictEqual(wrapper.childAt(1).hasClass(classes.barColorSecondary), true);
  });

  it('should render with determinate classes for the primary color by default', () => {
    const wrapper = shallow(<LinearProgress value={1} variant="determinate" />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass(classes.determinate), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.barColorPrimary), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.bar1Determinate), true);
  });

  it('should render with determinate classes for the primary color', () => {
    const wrapper = shallow(<LinearProgress color="primary" value={1} variant="determinate" />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass(classes.determinate), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.barColorPrimary), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.bar1Determinate), true);
  });

  it('should render with determinate classes for the secondary color', () => {
    const wrapper = shallow(<LinearProgress color="secondary" value={1} variant="determinate" />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass(classes.determinate), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.barColorSecondary), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.bar1Determinate), true);
  });

  it('should set width of bar1 on determinate variant', () => {
    const wrapper = shallow(<LinearProgress variant="determinate" value={77} />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass(classes.determinate), true);
    assert.strictEqual(
      wrapper.childAt(0).props().style.transform,
      'scaleX(0.77)',
      'should have width set',
    );
    assert.strictEqual(wrapper.props()['aria-valuenow'], 77);
  });

  it('should render with buffer classes for the primary color by default', () => {
    const wrapper = shallow(<LinearProgress value={1} valueBuffer={1} variant="buffer" />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(
      wrapper.childAt(0).hasClass(classes.dashedColorPrimary),
      true,
      'should have the dashedColorPrimary class',
    );
    assert.strictEqual(
      wrapper.childAt(1).hasClass(classes.barColorPrimary),
      true,
      'should have the barColorPrimary class',
    );
    assert.strictEqual(
      wrapper.childAt(1).hasClass(classes.bar1Buffer),
      true,
      'should have the bar1Buffer class',
    );
    assert.strictEqual(
      wrapper.childAt(2).hasClass(classes.colorPrimary),
      true,
      'should have the colorPrimary class',
    );
    assert.strictEqual(
      wrapper.childAt(2).hasClass(classes.bar2Buffer),
      true,
      'should have the bar2Buffer class',
    );
  });

  it('should render with buffer classes for the primary color', () => {
    const wrapper = shallow(
      <LinearProgress value={1} valueBuffer={1} color="primary" variant="buffer" />,
    );
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.dashedColorPrimary), true);
    assert.strictEqual(wrapper.childAt(1).hasClass(classes.barColorPrimary), true);
    assert.strictEqual(wrapper.childAt(1).hasClass(classes.bar1Buffer), true);
    assert.strictEqual(wrapper.childAt(2).hasClass(classes.colorPrimary), true);
    assert.strictEqual(wrapper.childAt(2).hasClass(classes.bar2Buffer), true);
  });

  it('should render with buffer classes for the secondary color', () => {
    const wrapper = shallow(
      <LinearProgress value={1} valueBuffer={1} color="secondary" variant="buffer" />,
    );
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.dashedColorSecondary), true);
    assert.strictEqual(wrapper.childAt(1).hasClass(classes.barColorSecondary), true);
    assert.strictEqual(wrapper.childAt(1).hasClass(classes.bar1Buffer), true);
    assert.strictEqual(wrapper.childAt(2).hasClass(classes.colorSecondary), true);
    assert.strictEqual(wrapper.childAt(2).hasClass(classes.bar2Buffer), true);
  });

  it('should set width of bar1 and bar2 on buffer variant', () => {
    const wrapper = shallow(<LinearProgress variant="buffer" value={77} valueBuffer={85} />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(
      wrapper.childAt(1).props().style.transform,
      'scaleX(0.77)',
      'should have width set',
    );
    assert.strictEqual(
      wrapper.childAt(2).props().style.transform,
      'scaleX(0.85)',
      'should have width set',
    );
  });

  it('should render with query classes', () => {
    const wrapper = shallow(<LinearProgress variant="query" />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass(classes.query), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.barColorPrimary), true);
    assert.strictEqual(wrapper.childAt(0).hasClass(classes.bar1Indeterminate), true);
    assert.strictEqual(wrapper.childAt(1).hasClass(classes.barColorPrimary), true);
    assert.strictEqual(wrapper.childAt(1).hasClass(classes.bar2Indeterminate), true);
  });
});
