import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Images,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Footer}>
      <View style={{padding: 10}}>
        <TouchableOpacity
          style={styles.Menu}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="#3076af" />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: '#3076af',
            }}>
            Beranda
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10, paddingLeft: 20}}>
        <TouchableOpacity
          style={styles.Menu}
          onPress={() => navigation.navigate('DummyOrder')}>
          <Icon name="notebook" size={30} color="#3076af" />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: '#3076af',
            }}>
            Pesanan Saya
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10, paddingLeft: 20}}>
        <TouchableOpacity
          style={styles.Menu}
          onPress={() => navigation.navigate('DummyCancel')}>
          <Icon name="book-cancel" size={30} color="#3076af" />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: '#3076af',
            }}>
            Pembatalan
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10, paddingLeft: 20}}>
        <TouchableOpacity
          style={styles.Menu}
          onPress={() => navigation.navigate('Others')}>
          <Icon name="menu" size={30} color="#3076af" />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: '#3076af',
            }}>
            Lainnya
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Footer: {
    backgroundColor: '#FFFF',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000000',
    shadowOffset: {
      height: 0,
      widht: 0,
    },
    shadowOpacity: 1,
    elevation: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Menu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
