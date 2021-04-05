import React from 'react';
import { assert } from 'chai';
import classNames from 'classnames';
import { createShallow, getClasses } from '@material-ui/core/test-utils';
import Switch from '@material-ui/core/Switch';
import SwitchBase from './internal/SwitchBase';

describe('<Switch />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ untilSelector: 'span' });
    classes = getClasses(<Switch />);
  });

  describe('styleSheet', () => {
    it('should have the classes required for SwitchBase', () => {
      assert.strictEqual(typeof classes.root, 'string');
      assert.strictEqual(typeof classes.checked, 'string');
      assert.strictEqual(typeof classes.disabled, 'string');
    });
  });

  describe('default Switch export', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Switch className="foo" />);
    });

    it('should render a span with the root and user classes', () => {
      assert.strictEqual(wrapper.name(), 'span');
      assert.strictEqual(wrapper.hasClass(classes.root), true);
      assert.strictEqual(wrapper.hasClass('foo'), true);
    });

    it('should render the bar as the 2nd child', () => {
      const bar = wrapper.childAt(1);
      assert.strictEqual(bar.name(), 'span');
      assert.strictEqual(bar.hasClass(classes.bar), true);
    });
  });
});
