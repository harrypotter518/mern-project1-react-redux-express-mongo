/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { reducer as form } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from 'utils/history';

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import contact from 'enl-containers/SampleApps/Contact/reducers/contactReducer';
import contactFullstack from 'enl-containers/SampleFullstackApps/Contact/reducers/contactReducer';
import email from 'enl-containers/SampleApps/Email/reducers/emailReducer';
import emailFullstack from 'enl-containers/SampleFullstackApps/Email/reducers/emailReducer';
import todo from 'enl-containers/SampleApps/Todo/reducers/todoReducer';
import todoFullstack from 'enl-containers/SampleFullstackApps/Todo/reducers/todoReducer';
import crudTable from 'enl-containers/Tables/reducers/crudTbReducer';
import timeline from 'enl-containers/Pages/Timeline/reducers/timelineReducer';
import chat from 'enl-containers/Pages/Chat/reducers/chatReducers';
import ecommerce from 'enl-containers/Pages/Ecommerce/reducers/ecommerceReducers';
import treeTable from 'enl-containers/Tables/reducers/treeTbReducers';

// Global Reducers
import authReducer from './modules/authReducer';
import uiReducer from './modules/uiReducer';
import initval from './modules/initFormReducer';

/**
 * Branching reducers to use one reducer for many components
 */

function branchReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { branch } = action;
    const isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form,
    ui: uiReducer,
    initval,
    contact,
    contactFullstack,
    email,
    emailFullstack,
    todo,
    todoFullstack,
    authReducer,
    timeline,
    chat,
    ecommerce,
    crudTableDemo: branchReducer(crudTable, 'crudTableDemo'),
    treeTableArrow: branchReducer(treeTable, 'treeTableArrow'),
    treeTablePM: branchReducer(treeTable, 'treeTablePM'),
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
