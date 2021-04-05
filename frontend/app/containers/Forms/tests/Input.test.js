import React from 'react';
import { assert } from 'chai';
import { createShallow } from '@material-ui/core/test-utils';
import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';

describe('<Input />', () => {
  let shallow;

  before(() => {
    shallow = createShallow({ untilSelector: 'Input' });
  });

  it('should render a <div />', () => {
    const wrapper = shallow(<Input />);
    assert.strictEqual(wrapper.type(), InputBase);
  });
});
