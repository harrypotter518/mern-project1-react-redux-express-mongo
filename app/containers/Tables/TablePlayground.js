import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { PapperBlock } from 'enl-components';
import EnhancedTableHead from 'enl-components/Tables/tableParts/TableHeader';
import EnhancedTableToolbar from 'enl-components/Tables/tableParts/TableToolbar';
import styles from 'enl-components/Tables/tableStyle-jss';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return {
    id: counter,
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

function TablePlayground(props) {
  const [formState, setFormState] = useState({
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    columnData: [
      {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Dessert (100g serving)'
      }, {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories'
      }, {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)'
      }, {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)'
      }, {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)'
      },
    ],
    data: [
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Donut', 452, 25.0, 51, 4.9),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Honeycomb', 408, 3.2, 87, 6.5),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Jelly Bean', 375, 0.0, 94, 0.0),
      createData('KitKat', 518, 26.0, 65, 7.0),
      createData('Lollipop', 392, 0.2, 98, 0.0),
      createData('Marshmallow', 318, 0, 81, 2.0),
      createData('Nougat', 360, 19.0, 9, 37.0),
      createData('Oreo', 437, 18.0, 63, 4.0),
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
    page: 0,
    rowsPerPage: 5,
    defaultPerPage: 5,
    filterText: '',
    size: 'medium',
    bordered: false,
    stripped: true,
    hovered: false,
    toolbar: true,
    checkcell: false,
    pagination: true
  });

  const handleChangeRadio = (event, key) => {
    setFormState({
      ...formState,
      [key]: event.target.value,
    });
  };

  const handleChangeCheck = (event, key) => {
    setFormState({
      ...formState,
      [key]: event.target.checked
    });
  };

  const handleRequestSort = (event, property) => {
    const { orderBy, order, data } = formState;
    const orderByConst = property;
    let orderLet = 'desc';

    if (orderBy === property && order === 'desc') {
      orderLet = 'asc';
    }

    const dataConst = orderLet === 'desc'
      ? data.sort((a, b) => (b[orderByConst] < a[orderByConst] ? -1 : 1))
      : data.sort((a, b) => (a[orderByConst] < b[orderByConst] ? -1 : 1));

    setFormState({
      ...formState,
      data: dataConst,
      order: orderLet,
      orderBy: orderByConst
    });
  };

  const handleSelectAllClick = event => {
    const { data } = formState;
    if (event.target.checked) {
      setFormState({
        ...formState,
        selected: data.map(n => n.id)
      });
      return;
    }
    setFormState({
      ...formState,
      selected: []
    });
  };

  const handleClick = (event, id) => {
    const { checkcell } = formState;
    if (!checkcell) {
      return;
    }
    const { selected } = formState;
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
    setFormState({
      ...formState,
      selected: newSelected
    });
  };

  const handleChangePage = (event, page) => {
    setFormState({
      ...formState,
      page
    });
  };

  const handleChangeRowsPerPage = event => {
    setFormState({
      ...formState,
      rowsPerPage: event.target.value
    });
  };

  const thisIsSelected = id => formState.selected.indexOf(id) !== -1; // eslint-disable-line

  const handleUserInput = value => {
    // Show all item first
    const { data, defaultPerPage } = formState;
    if (value !== '') {
      setFormState({
        ...formState,
        rowsPerPage: data
      });
    } else {
      setFormState({
        ...formState,
        rowsPerPage: defaultPerPage
      });
    }

    // Show result base on keyword
    setFormState({
      ...formState,
      filterText: value.toLowerCase()
    });
  };

  const { classes, intl } = props;
  const {
    data,
    order,
    orderBy,
    selected,
    rowsPerPage,
    page,
    filterText,
    size,
    columnData,
    toolbar, pagination, checkcell,
    bordered, stripped, hovered,
  } = formState;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - (page * rowsPerPage));
  const renderCell = (dataArray, keyArray) => keyArray.map((itemCell, index) => (
    <TableCell align={itemCell.numeric ? 'right' : 'left'} key={index.toString()}>{dataArray[itemCell.id]}</TableCell>
  ));
  return (
    <PapperBlock
      title={intl.formatMessage(messages.playgroundTitle)}
      desc=""
      whiteBg
      icon="playlist_play"
    >
      <div>
        <Grid container className={classes.rootTable}>
          <Grid item xs={12}>
            <Grid container className={classes.settings}>
              <Grid item xs={6} sm={4}>
                <FormControl component="fieldset">
                  <FormLabel>Size</FormLabel>
                  <RadioGroup
                    name="size"
                    aria-label="size"
                    value={size}
                    onChange={(e) => handleChangeRadio(e, 'size')}
                  >
                    <FormControlLabel value="small" control={<Radio />} label="Small" />
                    <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="big" control={<Radio />} label="Big" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4}>
                <FormControl component="fieldset">
                  <FormLabel>Style</FormLabel>
                  <FormGroup role="radiogroup">
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={bordered}
                          onChange={(e) => handleChangeCheck(e, 'bordered')}
                          value="bordered"
                        />
                      )}
                      label="Bordered"
                    />
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={stripped}
                          onChange={(e) => handleChangeCheck(e, 'stripped')}
                          value="stripped"
                        />
                      )}
                      label="Stripped"
                    />
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={hovered}
                          onChange={(e) => handleChangeCheck(e, 'hovered')}
                          value="hovered"
                        />
                      )}
                      label="Hovered"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4}>
                <FormControl component="fieldset">
                  <FormLabel>Component</FormLabel>
                  <FormGroup role="radiogroup">
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={toolbar}
                          onChange={(e) => handleChangeCheck(e, 'toolbar')}
                          value="toolbar"
                        />
                      )}
                      label="Toolbar"
                    />
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={checkcell}
                          onChange={(e) => handleChangeCheck(e, 'checkcell')}
                          value="checkcell"
                        />
                      )}
                      label="Checkbox"
                    />
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={pagination}
                          onChange={(e) => handleChangeCheck(e, 'pagination')}
                          value="pagination"
                        />
                      )}
                      label="Pagination"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.rootTable}>
              {toolbar && (
                <EnhancedTableToolbar
                  numSelected={selected.length}
                  filterText={filterText}
                  onUserInput={(event) => handleUserInput(event)}
                  title="Table"
                  placeholder="Search"
                />
              )}
              <div className={classes.tableWrapper}>
                <Table className={
                  classNames(
                    classes.table,
                    hovered && classes.hover,
                    stripped && classes.stripped,
                    bordered && classes.bordered,
                    classes[size]
                  )}
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={(e) => handleSelectAllClick(e)}
                    onRequestSort={(e, p) => handleRequestSort(e, p)}
                    rowCount={data.length}
                    columnData={columnData}
                    checkcell={checkcell}
                  />
                  <TableBody>
                    {data.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map(n => {
                      const isSelected = thisIsSelected(n.id);
                      if (n.name.toLowerCase().indexOf(filterText) === -1) {
                        return false;
                      }
                      return (
                        <TableRow
                          onClick={(event) => handleClick(event, n.id)}
                          role="checkbox"
                          aria-checked={isSelected}
                          tabIndex={-1}
                          key={n.id}
                          selected={isSelected}
                        >
                          {checkcell && (
                            <TableCell padding="checkbox">
                              <Checkbox checked={isSelected} />
                            </TableCell>
                          )}
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
              {pagination && (
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
                  onChangePage={(e, p) => handleChangePage(e, p)}
                  onChangeRowsPerPage={(val) => handleChangeRowsPerPage(val)}
                />
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </PapperBlock>
  );
}

TablePlayground.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(TablePlayground));
