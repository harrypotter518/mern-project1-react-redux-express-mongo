import React from 'react';
import { assert } from 'chai';
import { createMount, getClasses, findOutermostIntrinsic } from '@material-ui/core/test-utils';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

describe('<InputAdornment />', () => {
  let mount;
  let classes;

  before(() => {
    mount = createMount();
    classes = getClasses(<InputAdornment position="start">foo</InputAdornment>);
  });

  after(() => {
    mount.cleanUp();
  });

  it('should render a div', () => {
    const wrapper = mount(<InputAdornment position="start">foo</InputAdornment>);
    const adornment = findOutermostIntrinsic(wrapper);
    assert.strictEqual(adornment.name(), 'div');
  });

  it('should render given component', () => {
    const wrapper = mount(
      <InputAdornment component="span" position="start">
        foo
      </InputAdornment>,
    );
    const adornment = findOutermostIntrinsic(wrapper);
    assert.strictEqual(adornment.name(), 'span');
  });

  it('should wrap text children in a Typography', () => {
    const wrapper = mount(<InputAdornment position="start">foo</InputAdornment>);
    const adornment = findOutermostIntrinsic(wrapper);
    assert.strictEqual(adornment.childAt(0).type(), Typography);
  });

  it('should have the root and start class when position is start', () => {
    const wrapper = mount(<InputAdornment position="start">foo</InputAdornment>);
    const adornment = findOutermostIntrinsic(wrapper);
    assert.strictEqual(adornment.hasClass(classes.root), true);
    assert.strictEqual(adornment.hasClass(classes.positionStart), true);
  });

  it('should have the root and end class when position is end', () => {
    const wrapper = mount(<InputAdornment position="end">foo</InputAdornment>);
    const adornment = findOutermostIntrinsic(wrapper);
    assert.strictEqual(adornment.hasClass(classes.root), true);
    assert.strictEqual(adornment.hasClass(classes.positionEnd), true);
  });

  describe('prop: variant', () => {
    it('should have the filled root and class when variant is filled', () => {
      const wrapper = mount(
        <InputAdornment variant="filled" position="start">
          foo
        </InputAdornment>,
      );
      const adornment = findOutermostIntrinsic(wrapper);
      assert.strictEqual(adornment.hasClass(classes.root), true);
      assert.strictEqual(adornment.hasClass(classes.positionStart), true);
      assert.strictEqual(adornment.hasClass(classes.filled), true);
    });
  });

  it('should have the disabled pointer events class when disabledPointerEvents true', () => {
    const wrapper = mount(
      <InputAdornment disablePointerEvents position="start">
        foo
      </InputAdornment>,
    );
    const adornment = findOutermostIntrinsic(wrapper);
    assert.strictEqual(adornment.hasClass(classes.disablePointerEvents), true);
  });

  it('should not wrap text children in a Typography when disableTypography true', () => {
    const wrapper = mount(
      <InputAdornment disableTypography position="start">
        foo
      </InputAdornment>,
    );
    const adornment = findOutermostIntrinsic(wrapper);
    assert.strictEqual(adornment.text(), 'foo');
  });

  it('should render children', () => {
    const wrapper = mount(
      <InputAdornment position="start">
        <div>foo</div>
      </InputAdornment>,
    );
    const adornment = findOutermostIntrinsic(wrapper);
    assert.strictEqual(adornment.childAt(0).name(), 'div');
  });
});
