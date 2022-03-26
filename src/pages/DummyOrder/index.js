import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Images,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from './../../component/Footer';

const DummyOrder = () => {
  return (
    <View style={styles.Home}>
      <View
        style={{
          top: '30%',
        }}>
        <Icon name="null" size={200} color="lightgrey" />
        <Text style={{color: 'lightgrey', fontSize: 50, textAlign: 'center'}}>
          NULL
        </Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    backgroundColor: 'lighgrey',
    flex: 1,
    alignItems: 'center',
  },
  Header: {
    backgroundColor: '#FFFF',
    width: '50%',
    height: 40,
    top: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      height: 4,
      widht: 0,
    },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  item: {
    backgroundColor: '#FFFF',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000000',
    shadowOffset: {
      height: 4,
      widht: 0,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  Button: {
    marginTop: 25,
    backgroundColor: '#3076af',
    color: '#FFFF',
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default DummyOrder;
