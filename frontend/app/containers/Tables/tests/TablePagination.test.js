import React from 'react';
import { assert } from 'chai';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

describe('<TablePagination />', () => {
  const noop = () => {};
  let shallow;
  let mount;

  before(() => {
    shallow = createShallow({ dive: true });
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  it('should render a TableCell', () => {
    const wrapper = shallow(
      <TablePagination
        count={1}
        page={0}
        onChangePage={noop}
        onChangeRowsPerPage={noop}
        rowsPerPage={5}
      />,
    );
    assert.strictEqual(wrapper.type(), TableCell);
  });

  it('should spread custom props on the root node', () => {
    const wrapper = shallow(
      <TablePagination
        count={1}
        page={0}
        onChangePage={noop}
        onChangeRowsPerPage={noop}
        rowsPerPage={5}
        data-my-prop="woofTablePagination"
      />,
    );
    assert.strictEqual(
      wrapper.props()['data-my-prop'],
      'woofTablePagination',
      'custom prop should be woofTablePagination',
    );
  });

  describe('prop: component', () => {
    it('should render a TableCell by default', () => {
      const wrapper = shallow(
        <TablePagination
          count={1}
          page={0}
          onChangePage={noop}
          onChangeRowsPerPage={noop}
          rowsPerPage={5}
        />,
      );
      assert.strictEqual(wrapper.type(), TableCell);
      assert.notStrictEqual(wrapper.props().colSpan, undefined);
    });

    it('should be able to use outside of the table', () => {
      const wrapper = shallow(
        <TablePagination
          component="div"
          count={1}
          page={0}
          onChangePage={noop}
          onChangeRowsPerPage={noop}
          rowsPerPage={5}
        />,
      );
      assert.strictEqual(wrapper.name(), 'div');
      assert.strictEqual(wrapper.props().colSpan, undefined);
    });
  });
});
