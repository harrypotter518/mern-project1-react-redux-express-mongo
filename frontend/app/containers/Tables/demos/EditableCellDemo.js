import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { CrudTable, Notification } from 'enl-components';
import styles from 'enl-components/Tables/tableStyle-jss';
import {
  fetchAction,
  addAction,
  removeAction,
  updateAction,
  editAction,
  saveAction,
  closeNotifAction,
  getDataAction
} from '../reducers/crudTbActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const anchorTable = [
  {
    name: 'id',
    label: 'Id',
    type: 'static',
    initialValue: '',
    hidden: true
  }, {
    name: 'country_name',
    label: 'Country Name',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  }, {
    name: 'country_currency',
    label: 'Currency',
    type: 'number',
    initialValue: 0,
    width: 'auto',
    hidden: false
  }, {
    name: 'date',
    label: 'Date Updated',
    type: 'date',
    initialValue: new Date(),
    width: 'auto',
    hidden: false
  }, {
    name: 'time',
    label: 'Time Updated',
    type: 'time',
    initialValue: new Date(),
    width: 'auto',
    hidden: false
  }, {
    name: 'available',
    label: 'Available',
    type: 'toggle',
    initialValue: true,
    width: '100',
    hidden: false
  }, {
    name: 'edited',
    label: '',
    type: 'static',
    initialValue: '',
    hidden: true
  }, {
    name: 'action',
    label: 'Action',
    type: 'static',
    initialValue: '',
    hidden: false
  },
];
const dataApi = [
  {
    id: 1,
    country_name: 'Russia',
    country_currency: '19.99',
    date: '4/3/2018',
    time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
    available: true,
    edited: false,
  }, {
    id: 2,
    country_name: 'France',
    country_currency: '99.99',
    date: '4/2/2018',
    time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
    available: true,
    edited: false,
  }, {
    id: 3,
    country_name: 'Germany',
    country_currency: '39.99',
    date: '4/1/2018',
    time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
    available: false,
    edited: false,
  }, {
    id: 4,
    country_name: 'Italy',
    country_currency: '29.99',
    date: '3/30/2018',
    time: 'Tue Apr 03 2018 00:00:00 GMT+0700 (WIB)',
    available: true,
    edited: false,
  }
];

function CrudTableDemo(props) {
  const { classes } = props;

  // Redux State
  const branch = 'crudTableDemo';
  const dataTable = useSelector(state => state.getIn([branch, 'dataTable']));
  const messageNotif = useSelector(state => state.getIn([branch, 'notifMsg']));
  const [state, setState] = useState({
    open:false
  })
  const [countryName, setCountryName] =  useCountryName('');
  // const data = use
  // Dispatcher
  const fetchData = useDispatch();
  const addEmptyRow = useDispatch();
  const removeRow = useDispatch();
  const updateRow = useDispatch();
  const editRow = useDispatch();
  const finishEditRow = useDispatch();
  const closeNotif = useDispatch();

  const openModal = () =>{
    setState({...state, open:true})
  }

  const handleClick = (data) =>{
    setState({...state, open:data.action})
  }

  const onChangeName = (e) => {
    setCountryName(e.target.value);
  }
  // useEffect(()=>{
  //   dispatch(getDataAction())
  // },[])

  // useEffect(()=>{

  // },[data])

  return (
    <div>
      <Notification close={() => closeNotif(closeNotifAction(branch))} message={messageNotif} />
      <div className={classes.rootTable}>
        <CrudTable
          dataInit={dataApi}
          anchor={anchorTable}
          title="Inventory Data"
          dataTable={dataTable}
          fetchData={(payload) => fetchData(fetchAction(payload, branch))}
          addEmptyRow={(payload) => {             
            openModal()
            addEmptyRow(addAction(payload, branch)) 
          }}
          removeRow={(payload) => removeRow(removeAction(payload, branch))}
          updateRow={(e, payload) => updateRow(updateAction(e, payload, branch))}
          editRow={(payload) => editRow(editAction(payload, branch))}
          finishEditRow={(payload) => finishEditRow(saveAction(payload, branch))}
          branch={branch}
        />
      </div>
      <Dialog
				open={state.open}
				onClose={()=>handleClick({action:false})}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Are you really revoke this user?'}</DialogTitle>
				<DialogContent>
          <input type="text" placeholer="name" name="name" onchange={onChangeName} value={countryName}></input>
          <input type="text" placeholer="currency" name="currency" value=""></input>
					<DialogContentText id="alert-dialog-description">You will lost this users data.</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClose={()=>handleClick({action:false})} color="primary">
						No
					</Button>
					<Button onClick={()=>handleClick({action:false})} color="primary" autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
    </div>
  );
}

CrudTableDemo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CrudTableDemo);
