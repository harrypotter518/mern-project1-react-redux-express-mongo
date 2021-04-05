import React from 'react';
import { assert } from 'chai';
import { getClasses, createShallow, createMount } from '@material-ui/core/test-utils';
import Radio from '@material-ui/core/Radio';
import RadioButtonCheckedIcon from './internal/svg-icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from './internal/svg-icons/RadioButtonUnchecked';
import SwitchBase from './internal/SwitchBase';

describe('<Radio />', () => {
  let shallow;
  let classes;
  let mount;

  before(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<Radio />);
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  describe('styleSheet', () => {
    it('should have the classes required for SwitchBase', () => {
      assert.strictEqual(typeof classes.root, 'string');
      assert.strictEqual(typeof classes.checked, 'string');
      assert.strictEqual(typeof classes.disabled, 'string');
    });
  });
});
