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
    name: 'countryName',
    label: 'Country Name',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false
  }, {
    name: 'countryCurrency',
    label: 'Currency',
    type: 'string',
    initialValue: 0,
    width: 'auto',
    hidden: false
   }
];
const dataApi = [
    {
      id:"1",
      countryName: 'Russia',
      countryCurrency: 'rub'
    
    }, 
];

function CrudTableDemo(props) {
  const { classes } = props;

  // Redux State
  const branch = 'crudTableDemo';
  const dataTable = useSelector(state => state.getIn([branch, 'dataTable']));
  const messageNotif = useSelector(state => state.getIn([branch, 'notifMsg']));

  const [state, setState] = useState({
    open:false,    
    id:'',
    countryName : '',
    countryCurrency : ''
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
    setState({...state, countryName: e.target.value});
  }
  const onChangeCurrency = (e) => {
    setState({...state, countryCurrency: e.target.value});
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
          title="Countries"
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
				<DialogTitle id="alert-dialog-title">{'Add country'}</DialogTitle>
				<DialogContent> 
          <Grid
            item
            md={12}
            className={classes.demo}
          >
             <Input
              placeholder="Country Name"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              style={{ marginTop:'10px', width:'30vw' }}
              value={state.countryName} 
              onChange={onChangeName}
            />
          </Grid>
          <Grid
            item
            md={12}
            className={classes.demo}
          >
             <Input
              placeholder="Country Currency"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              style={{ marginTop:'10px', width:'30vw' }}
              value={state.countryCurrency} 
              onChange={onChangeCurrency}
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
