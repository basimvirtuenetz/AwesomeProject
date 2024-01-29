import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const newUser = async (Username, email, password) => {
  const userId = auth().currentUser;
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async user => {
      if (user.user.uid) {
        const data = await firestore()
          .collection('users')
          .doc(user.user.uid)
          .get();
        if (data.exists) {
          console.log('exists');
        } else {
          firestore().collection('users').doc(user.user.uid).set({
            Username,
            email,
            user: user.user.uid,
          });
          callback({
            Username,
            email,
            user: user.user.uid,
          });
          console.log('added');
        }
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const LogOut = () => {
  auth()
    .signOut()
    .then(() => {
      console.log('Signed Out');
    });
};

export const LoginUser = async (email, password) => {
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('loged in!');
    })
    .catch(error => {
      console.log(error);
    });
};
