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
import ScheduleData from './../../component/ScheduleData';

const Schedule = () => {
  return (
    <View style={styles.Home}>
      <Header />
      <View style={{top: 123}}>
        <ScheduleData />
        <ScheduleData />
        <ScheduleData />
      </View>
      <Footer />
    </View>
  );
};

const Header = props => {
  return (
    <View style={styles.Header}>
      <Icon style={styles.Account} name="account" size={45} color="white" />
      <Icon style={styles.Menu} name="menu" size={45} color="white" />
      <Text style={styles.HeaderText}> Hiling.id </Text>
      <Text style={styles.HeaderTextSearch}> Hasil Pencarian Penerbangan </Text>
      <Text style={styles.HeaderTextSearch}> (Tanggal Penerbangan) </Text>
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
    height: 200,
    width: '100%',
    top: 0,
  },
  HeaderText: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontFamily: 'roboto',
    fontSize: 36,
    textAlign: 'center',
  },
  HeaderTextSearch: {
    color: '#FFFF',
    fontFamily: 'roboto',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
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

export default Schedule;
