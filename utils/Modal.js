import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

const MyModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View>
        <Text>This is a modal!</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default MyModal;