import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const UpdateInfo = async Username => {
  const user = auth().currentUser;
  await firestore().collection('users').doc(user.uid).update({
    Username: Username,
  });
};
