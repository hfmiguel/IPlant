import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core';


export function LogoutModal() {

  const navigation = useNavigation();

  function clearAllData() {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => alert('success'));
    navigation.navigate('UserIdentification');
  }

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>Sair</Text>
      </View>
      <View style={styles.modalBody}>
        <Text style={styles.modalText}>Tem certeza que deseja sair?</Text>
      </View>
      <View style={styles.modalFooter}>
        <TouchableOpacity style={styles.modalButton} >
          <Text style={styles.modalButtonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton} onPress={clearAllData}>
          <Text style={styles.modalButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffadad7e',
    width: '100%',
    height: '100%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  modalBody: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalButton: {
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: 10,
    marginRight: 10,

  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',

  },
});