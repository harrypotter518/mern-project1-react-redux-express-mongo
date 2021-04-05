import { createSelector } from 'reselect';

export function getEmail(state) {
  return state;
}

export function getEmailList(state) {
  return getEmail(state).get('inbox');
}

export function getEmailCategory(state) {
  return getEmail(state).get('currentPage');
}

// =====================================
//  MEMOIZED SELECTORS
// -------------------------------------

export const getVisibleMail = createSelector(
  getEmailCategory,
  getEmailList,
  (category, emailList) => {
    switch (category) {
      case 'inbox':
        return emailList.filter(item => item.get('category') !== 'sent' && item.get('category') !== 'spam');
      case 'stared':
        return emailList.filter(item => item.get('stared'));
      case 'sent':
        return emailList.filter(item => item.get('category') === 'sent');
      case 'spam':
        return emailList.filter(item => item.get('category') === 'spam');
      case 'updates':
        return emailList.filter(item => item.get('category') === 'updates');
      case 'social':
        return emailList.filter(item => item.get('category') === 'social');
      case 'forums':
        return emailList.filter(item => item.get('category') === 'forums');
      case 'promos':
        return emailList.filter(item => item.get('category') === 'promos');
      default:
        return emailList;
    }
  }
);
