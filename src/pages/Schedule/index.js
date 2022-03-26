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
import Footer from './../../component/Footer';

const Schedule = ({navigation, route}) => {
  return (
    <View style={styles.Home}>
      <View style={{top: 123}}>
        <Text style={{color: '#000'}}>{route.params.berangkat}</Text>
        <Text style={{color: '#000'}}>{route.params.tujuan}</Text>
        <Text style={{color: '#000'}}>{route.params.kelas}</Text>
        <Text style={{color: '#000'}}>{route.params.tanggal}</Text>
        <Text style={{color: '#000'}}>{route.params.waktu}</Text>
        <Text style={{color: '#000'}}>{route.params.jam}</Text>
        <Text style={{color: '#000'}}>{route.params.dewasa}</Text>
        <Text style={{color: '#000'}}>{route.params.anak}</Text>
        <Text style={{color: '#000'}}>{route.params.costDewasa}</Text>
      </View>
      <Footer />
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
