import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { CrudTable, Notification } from 'enl-components';
import styles from 'enl-components/Tables/tableStyle-jss';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import {
  fetchAction,
  addAction,
  removeAction,
  updateAction,
  editAction,
  saveAction,
  closeNotifAction,
  addDataAction,
  getDataAction
} from '../reducers/crudTbActions4';
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
    name: 'name',
    label: 'Supplier Name',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  },{
    name: 'email',
    label: 'Email',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  },{
    name: 'phone',
    label: 'Phone Number',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  },{
    name: 'address',
    label: 'Address',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  },{
    name: 'country',
    label: 'Country',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  },{
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  }
];
const dataApi = [
    {
      id:"1",
      name: 'Rubber',
      email: 'asd',
      phone: '23',
      address: 'we',
      country: 'russia',
      companyName: 'TBM'          
    }, 
];

function CrudTableDemo(props) {
  const { classes } = props;
  // Redux State
  const branch = 'FourthcrudTableDemo';
  const dataTable = useSelector(state => state.getIn([branch, 'dataTable']));
  const messageNotif = useSelector(state => state.getIn([branch, 'notifMsg']));

  const [state, setState] = useState({
    open:false,    
    id:'',
    name : '',
    email:'',
    phone:'',
    address:'',
    country:'',
    companyName:''
  });

  // Dispatcher
  const fetchData = useDispatch();
  const addEmptyRow = useDispatch();
  const removeRow = useDispatch();
  const updateRow = useDispatch();
  const editRow = useDispatch();
  const finishEditRow = useDispatch();
  const closeNotif = useDispatch();
  const newdata = useDispatch();
  const getdata = useDispatch();

  const openModal = () =>{
    setState({...state, open:true})
  }

  const handleClose = (data) =>{
    setState({...state, open:data.action})    
  }

  const handleClick = (data) =>{  
    setState({...state, id:""})  
    setState({...state, open:data.action})      
    newdata(addDataAction(state));
    getDataAction(getdata);
  }

  const onChangeName = (e) => {
    setState({...state, name: e.target.value});
  }
  const onChangeEmail = (e) => {
    setState({...state, email: e.target.value});
  }
  const onChangePhone = (e) => {
    setState({...state, phone: e.target.value});
  }
  const onChangeAddress = (e) => {
    setState({...state, address: e.target.value});
  }
  const onChangeCountry = (e) => {
    setState({...state, country: e.target.value});
  }
  const onChangeCompanyName = (e) => {
    setState({...state, companyName: e.target.value});
  }
 

  useEffect(()=>{
    getDataAction(getdata);
  },[state.open])  

  return (
    <div>
      <Notification close={() => closeNotif(closeNotifAction(branch))} message={messageNotif} />
      <div className={classes.rootTable}>
        <CrudTable
          dataInit={dataApi}
          anchor={anchorTable}
          title="Suppliers"
          dataTable={dataTable}
          fetchData={(payload) => fetchData(fetchAction(payload, branch))}
          addEmptyRow={(payload) => {             
            openModal()
            addEmptyRow(addAction(payload, branch)) 
          }}
          removeRow={(payload) => { console.log(payload); removeRow(removeAction(payload, branch)) }}
          updateRow={(e, payload) => { updateRow(updateAction(e, payload, branch)) }}
          editRow={(payload) => { editRow(editAction(payload, branch)) }}
          finishEditRow={(payload) => { finishEditRow(saveAction(payload, branch)) }}
          branch={branch}
        />
      </div>
      
      <Dialog
				open={state.open}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Add Supplier'}</DialogTitle>
				<DialogContent> 
          <Grid
              item
              md={12}
              className={classes.demo}
            >
            <Input
              placeholder="Supplier Name"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              style={{ marginTop:'10px', width:'30vw' }}
              value={state.name} 
              onChange={onChangeName}
            />
          </Grid>
          <Grid
              item
              md={12}
              className={classes.demo}
            >
            <Input
              placeholder="Supplier Email"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              style={{ marginTop:'10px', width:'30vw' }}
              value={state.email} 
              onChange={onChangeEmail}
            />
          </Grid>
          
          <Grid
              item
              md={12}
              className={classes.demo}
            >
            <Input
              placeholder="Phone Number"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              style={{ marginTop:'10px', width:'30vw' }}              
              value={state.phone} 
              onChange={onChangePhone}
            />
          </Grid>
          <Grid
              item
              md={12}
              className={classes.demo}
            >
            <Input
              placeholder="Address"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              style={{ marginTop:'10px', width:'30vw' }}
              value={state.address}
              onChange={onChangeAddress}
            />
          </Grid>

          <Grid
              item
              md={12}
              className={classes.demo}
            >
            <Input
              placeholder="Country"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              style={{ marginTop:'10px', width:'30vw' }}
              value={state.country} 
              onChange={onChangeCountry}
            />
          </Grid>

          <Grid
              item
              md={12}
              className={classes.demo}
            >
            <Input
              placeholder="Company Name"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              style={{ marginTop:'10px', width:'30vw' }}
              value={state.companyName} 
              onChange={onChangeCompanyName}
            />
          </Grid>

				</DialogContent>
				<DialogActions>
          <Button onClick={()=>handleClick({action:false})} variant="contained" color="primary" autoFocus>
						Save
					</Button>
					<Button onClick={()=>handleClose({action:false})} color="primary">
						Cancel
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
