import React, { useReducer, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import EnhancedTableHead from './tableParts/TableHeader';
import EnhancedTableToolbar from './tableParts/TableToolbar';
import styles from './tableStyle-jss';

/* ESLint error https://github.com/yannickcr/eslint-plugin-react/issues/885 */
function AdvTable(props) {
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'SET_ORDER':
        return { ...state, order: payload };
      case 'SET_ORDERBY':
        return { ...state, orderBy: payload };
      case 'SET_SELECTED':
        return { ...state, selected: payload };
      case 'SET_DATA':
        return { ...state, data: payload };
      case 'SET_PAGE':
        return { ...state, page: payload };
      case 'SET_ROWSPERPAGE':
        return { ...state, rowsPerpage: payload };
      case 'SET_FILTERTEXT':
        return { ...state, filterText: payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, props);

  const {
    orderBy, order, data,
    selected, defaultPerPage,
    columnData, rowsPerPage,
    page, filterText
  } = state;

  const { classes } = props;
  useEffect(() => {
    dispatch({ type: 'SET_DATA', payload: data.sort((a, b) => (a.calories < b.calories ? -1 : 1)) });
  }, []);

  const handleRequestSort = useCallback((event, property) => {
    const orderByAlias = property;
    let orderLet = 'desc';
    if (orderBy === property && order === 'desc') {
      orderLet = 'asc';
    }

    const dataAlias = orderLet === 'desc'
      ? data.sort((a, b) => (b[orderByAlias] < a[orderByAlias] ? -1 : 1))
      : data.sort((a, b) => (a[orderByAlias] < b[orderByAlias] ? -1 : 1));

    dispatch({ type: 'SET_DATA', payload: dataAlias });
    dispatch({ type: 'SET_ORDER', payload: orderLet });
    dispatch({ type: 'SET_ORDERBY', payload: orderByAlias });
  }, [orderBy, order, data]);

  const handleSelectAllClick = useCallback((event, checked) => {
    if (checked) {
      dispatch({ type: 'SET_SELECTED', payload: data.map(n => n.id) });
    }
    dispatch({ type: 'SET_SELECTED', payload: [] });
  }, [data]);

  const handleClick = useCallback((event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    dispatch({ type: 'SET_SELECTED', payload: newSelected });
  }, [selected]);

  const handleChangePage = useCallback((event, selectedPage) => {
    dispatch({ type: 'SET_PAGE', payload: selectedPage });
  }, []);

  const handleChangeRowsPerPage = useCallback(event => {
    dispatch({ type: 'SET_ROWSPERPAGE', payload: event.target.value });
  }, []);

  // eslint-disable-next-line
  const isSelected = id => selected.indexOf(id) !== -1;

  const handleUserInput = useCallback((value) => {
    // Show all item first
    if (value !== '') {
      dispatch({ type: 'SET_ROWSPERPAGE', payload: data.length });
    } else {
      dispatch({ type: 'SET_ROWSPERPAGE', payload: defaultPerPage });
    }
    dispatch({ type: 'SET_FILTERTEXT', payload: value.toLowerCase() });
  }, [data, defaultPerPage]);

  const checkcell = true;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - (page * rowsPerPage));
  const renderCell = (dataArray, keyArray) => keyArray.map((itemCell, index) => (
    <TableCell align={itemCell.numeric ? 'right' : 'left'} key={index.toString()}>{dataArray[itemCell.id]}</TableCell>
  ));
  return (
    <div className={classes.rootTable}>
      <EnhancedTableToolbar
        numSelected={selected.length}
        filterText={filterText}
        onUserInput={handleUserInput}
        title="Nutrition"
        placeholder="Search Nutrition"
      />
      <div className={classes.tableWrapper}>
        <Table className={classNames(classes.table, classes.stripped, classes.hover)}>
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            columnData={columnData}
            checkcell={checkcell}
          />
          <TableBody>
            {data.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map(n => {
              const flagSelected = isSelected(n.id);
              if (n.name.toLowerCase().indexOf(filterText) === -1) {
                return false;
              }
              return (
                <TableRow
                  onClick={event => handleClick(event, n.id)}
                  role="checkbox"
                  aria-checked={flagSelected}
                  tabIndex={-1}
                  key={n.id}
                  selected={flagSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={flagSelected} />
                  </TableCell>
                  {renderCell(n, columnData)}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

AdvTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvTable);
