import dummy from 'enl-api/dummy/dummyContents';
import firebase from '../../../../firebase/firebase';

const uploadImg = (file, callback) => {
  if (file === null || file === undefined) {
    callback(dummy.user.avatar);
    return;
  }
  const storageRef = firebase.storage().ref();
  const metadata = { contentType: 'image/jpeg' };
  const uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
  uploadTask.on('state_changed',
    (snapshot) => {
      switch (snapshot.state) {
        case 'paused': // or 'paused'
          console.log('Upload is paused');
          break;
        case 'running': // or 'running'
          console.log('Upload is running');
          break;
        default:
          console.log('Upload is ', snapshot.state);
          break;
      }
    }, (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          console.error('User doesn\'t have permission to access the object');
          break;

        case 'storage/canceled':
          console.error('User canceled the upload');
          break;

        case 'storage/unknown':
          console.error('Unknown error occurred, inspect error.serverResponse');
          break;

        default:
          console.log('error.code : ', error.code);
          break;
      }
    }, () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        console.log('File available at', downloadURL);
        callback(downloadURL);
      });
    });
};

export default uploadImg;
