import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Images,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const ScheduleData = () => {
  return (
    <View style={styles.Form}>
      <Text
        style={{
          color: 'black',
          fontSize: 13,
          fontFamily: 'Roboto',
        }}>
        (Lokasi Keberangkatan) - (Lokasi Tujuan)
      </Text>
      <View style={{flexDirection: 'row', top: 40}}>
        <Icon name="plane" size={40} color="#97D179" />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            top: 20,
            left: 10,
          }}>
          Air Asia
        </Text>
        <Text
          style={{
            color: 'red',
            fontSize: 13,
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            top: 20,
            left: 30,
          }}>
          Tanggal Keberangkatan
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Form: {
    backgroundColor: '#FFFF',
    borderRadius: 25,
    marginTop: 10,
    width: '85%',
    height: '25%',
    padding: 43,
    shadowColor: '#000000',
    shadowOffset: {
      height: 4,
      widht: 0,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
});

export default ScheduleData;
