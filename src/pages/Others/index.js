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

const Others = () => {
  return (
    <View style={styles.Home}>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          backgroundColor: '#FFFF',
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#000',
          }}>
          <Icon name="database-search" size={100} color="orange" />
          <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>
            Cek Pemesanan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#000',
          }}>
          <Icon name="account" size={100} color="darkgreen" />
          <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>
            Detail Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          backgroundColor: '#FFFF',
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#000',
          }}>
          <Icon name="phone-in-talk" size={100} color="red" />
          <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>
            Hubungi Kami
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#000',
          }}>
          <Icon name="history" size={100} color="brown" />
          <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>
            Riwayat Pesanan
          </Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
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

export default Others;
