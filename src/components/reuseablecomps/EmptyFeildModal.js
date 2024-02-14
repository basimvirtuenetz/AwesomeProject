import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../colors/colors';
import {Fonts} from '../../fonts/fonts';

const EmptyFeildModal = ({visible, close, backprs}) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={close}
      animationType="fade"
      transparent>
      <View style={styles.ModalView}>
        <View style={styles.ModalInner}>
          <Text style={styles.txt}>Fields Empty!</Text>
          <TouchableOpacity onPress={backprs} style={styles.btn}>
            <Text style={styles.btntxt}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EmptyFeildModal;

const styles = StyleSheet.create({
  ModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  ModalInner: {
    width: '80%',
    height: 150,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 30,
    elevation: 7,
  },
  txt: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    color: Colors.Dblue,
  },
  btntxt: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    color: Colors.white,
  },
  btn: {
    width: '50%',
    height: '30%',
    backgroundColor: Colors.Lblue,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
