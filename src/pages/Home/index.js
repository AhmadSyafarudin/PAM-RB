import * as React from 'react';
import {
  View,
  ScrollView,
  Text,
  Images,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Data from '../../component/FormData';
import Calendar from '../../component/Calendar';
import Schedule from '../Schedule';

const Home = () => {
  return (
    <View style={styles.Home}>
      <Header />
      <Form />
      <Footer />
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.Header}>
      <Icon style={styles.Account} name="account" size={45} color="white" />
      <Icon style={styles.Menu} name="menu" size={45} color="white" />
      <Text style={styles.HeaderText}> Hiling.id </Text>
    </View>
  );
};

const Form = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Form}>
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        }}>
        Lokasi Keberangkatan
      </Text>
      <Data
        name="aircraft-take-off"
        size={30}
        color="#97D179"
        placeholder="Masukkan Lokasi Keberangkatan"
      />

      <Text
        style={{
          color: 'black',
          fontSize: 18,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          marginTop: 30,
        }}>
        Lokasi Tujuan
      </Text>
      <Data
        name="aircraft-landing"
        size={30}
        color="#97D179"
        placeholder="Masukkan Lokasi Tujuan"
      />

      <Text
        style={{
          color: 'black',
          fontSize: 18,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          marginTop: 30,
        }}>
        Tanggal Keberangkatan
      </Text>
      <Calendar />

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Schedule')}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
          Cari
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.Footer}>
      <Text style={{color: '#8A8686'}}>
        Copyright Ahmad Syafarudin-119140044
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    backgroundColor: '#C8FF82',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    position: 'absolute',
    backgroundColor: '#079904',
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    height: 418,
    width: '100%',
    top: 0,
  },
  HeaderText: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontFamily: 'roboto',
    fontSize: 36,
    marginTop: 46,
    textAlign: 'center',
  },
  Form: {
    position: 'absolute',
    backgroundColor: '#FFFF',
    borderRadius: 25,
    width: '85%',
    height: '65%',
    padding: 43,
    shadowColor: '#000000',
    shadowOffset: {
      height: 4,
      widht: 0,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  Footer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    Left: 0,
    bottom: 0,
  },
  Account: {
    position: 'absolute',
    right: 0,
  },
  Menu: {
    position: 'absolute',
    left: 0,
  },
  Button: {
    marginTop: 40,
    backgroundColor: '#FF7D05',
    color: '#FFFF',
    height: 50,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
