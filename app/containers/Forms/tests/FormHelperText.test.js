import React from 'react';
import PropTypes from 'prop-types';
import { assert } from 'chai';
import { createMount, findOutermostIntrinsic, getClasses } from '@material-ui/core/test-utils';
import FormHelperText from '@material-ui/core//FormHelperText';
import FormControlContext from './FormControlContext';

describe('<FormHelperText />', () => {
  let mount;
  let classes;

  before(() => {
    mount = createMount();
    classes = getClasses(<FormHelperText />);
  });

  it('should render a <p />', () => {
    const wrapper = findOutermostIntrinsic(mount(<FormHelperText className="woofHelperText" />));
    assert.strictEqual(wrapper.name(), 'p');
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass('woofHelperText'), true);
  });

  describe('prop: component', () => {
    it('should render the prop component', () => {
      const wrapper = findOutermostIntrinsic(mount(<FormHelperText component="div" />));
      assert.strictEqual(wrapper.name(), 'div');
    });
  });

  describe('prop: error', () => {
    it('should have an error class', () => {
      const wrapper = findOutermostIntrinsic(mount(<FormHelperText error />));
      assert.strictEqual(wrapper.hasClass(classes.error), true);
    });
  });

  describe('with muiFormControl context', () => {
    let wrapper;

    beforeEach(() => {
      function Provider(props) {
        const { context, ...other } = props;

        return (
          <FormControlContext.Provider value={context}>
            <FormHelperText {...other}>Foo</FormHelperText>
          </FormControlContext.Provider>
        );
      }
      Provider.propTypes = {
        context: PropTypes.object.isRequired,
      };

      wrapper = mount(<Provider />);
    });

    describe('margin', () => {
      it('should be overridden by props', () => {
        assert.strictEqual(findOutermostIntrinsic(wrapper).hasClass(classes.marginDense), false);
        wrapper.setProps({ margin: 'dense' });
        assert.strictEqual(findOutermostIntrinsic(wrapper).hasClass(classes.marginDense), true);
      });
    });
  });
});
