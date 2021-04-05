import React from 'react';
import { assert } from 'chai';
import { createMount, findOutermostIntrinsic, getClasses } from '@material-ui/core/test-utils';
import InputLabel from '@material-ui/core/InputLabel';

describe('<InputLabel />', () => {
  let mount;
  let classes;

  before(() => {
    mount = createMount();
    classes = getClasses(<InputLabel />);
  });

  after(() => {
    mount.cleanUp();
  });

  it('should render a FormLabel', () => {
    const wrapper = mount(<InputLabel>Foo</InputLabel>);
    assert.strictEqual(findOutermostIntrinsic(wrapper).type(), 'label');
    assert.strictEqual(wrapper.text(), 'Foo');
  });

  it('should have the root and animated classes by default', () => {
    const wrapper = mount(<InputLabel>Foo</InputLabel>);
    assert.strictEqual(findOutermostIntrinsic(wrapper).hasClass(classes.root), true);
    assert.strictEqual(findOutermostIntrinsic(wrapper).hasClass(classes.animated), true);
  });

  it('should not have the animated class when disabled', () => {
    const wrapper = mount(<InputLabel disableAnimation>Foo</InputLabel>);
    assert.strictEqual(wrapper.hasClass(classes.animated), false);
  });

  describe('prop: FormLabelClasses', () => {
    it('should be able to change the FormLabel style', () => {
      const wrapper = mount(<InputLabel FormLabelClasses={{ root: 'bar' }}>Foo</InputLabel>);
      assert.include(wrapper.find('FormLabel').props().classes.root, 'bar');
    });
  });
});
