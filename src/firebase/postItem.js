import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const PostItem = async (title, price, descr) => {
  const user = auth().currentUser;
  await firestore().collection('users').doc(user.uid).collection('posts').add({
    title,
    price,
    descr,
  });
};
