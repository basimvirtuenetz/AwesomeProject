import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const DelAcc = () => {
  const user = auth().currentUser;
  user
    .delete()
    .then(async () => {
      await firestore().collection('users').doc(user.uid).delete();
      console.log('deleted');
    })
    .catch(error => {
      console.log(error);
    });
};
