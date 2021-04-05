import { Record } from 'immutable';


const Init = new Record({
  key: null,
  date: null,
  time: null,
  avatar: null,
  name: null,
  subject: null,
  content: null,
  category: 'sent',
  stared: false,
});

export default Init;
