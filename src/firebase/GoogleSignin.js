import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const GoogleLogin = async callback => {
  try {
    await GoogleSignin.hasPlayServices();
    const isSignediN = await GoogleSignin.isSignedIn();
    if (isSignediN) {
      await GoogleSignin.revokeAccess();
    }
    const {idToken, user} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const Username = user.name;
    const email = user.email;
    auth()
      .signInWithCredential(googleCredential)
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
  } catch (error) {
    console.log(error);
  }
};
