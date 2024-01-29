import auth from '@react-native-firebase/auth';

export const VerPhoneLogin = async number => {
  await auth().verifyPhoneNumber(number);
};

export const PhoneLogin = async number => {
  await auth().signInWithPhoneNumber(number);
};
