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

const Item = ({
  id,
  berangkat,
  tujuan,
  kelas,
  tanggal,
  waktu,
  dewasa,
  anak,
  hargaDewasa,
  hargaAnak,
  hargaTotal,
}) => {
  return (
    <View style={styles.item}>
      <Text
        style={{
          color: '#3076af',
          fontSize: 25,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          textAlign: 'center',
          marginBottom: 25,
        }}>
        Kapalzy
      </Text>
      <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
        Kuota Tersedia (1000)
      </Text>
      <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
        Rincian Tiket
      </Text>
      <View
        style={{
          backgroundColor: '#eff4f4',
          padding: 20,
          marginTop: 3,
          marginBottom: 3,
        }}>
        <View
          style={{flexDirection: 'row', justifyContent: 'center', bottom: 5}}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              right: 10,
              fontWeight: 'bold',
            }}>
            {berangkat}
          </Text>
          <Icon name="arrow-right" size={20} color="#000" />
          <Text
            style={{color: '#000', fontSize: 20, left: 10, fontWeight: 'bold'}}>
            {tujuan}
          </Text>
        </View>
        <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
          Jadwal Masuk Pelabuhan
        </Text>
        <Text style={{color: '#000', fontSize: 16}}>{tanggal}</Text>
        <Text style={{color: '#000', fontSize: 16}}>{waktu} WIB</Text>
        <View style={{top: 10}}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
            Layanan
          </Text>
          <Text style={{color: '#000', fontSize: 16}}>{kelas}</Text>
        </View>
        <View style={{backgroundColor: 'lightgrey', height: 3, top: 10}}></View>
        <View style={{top: 10, flexDirection: 'row'}}>
          <Text style={{color: '#000', fontSize: 16}}>Dewasa x{dewasa}</Text>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              width: '70%',
              textAlign: 'right',
            }}>
            {hargaDewasa}
          </Text>
        </View>
        <View style={{top: 10, flexDirection: 'row'}}>
          <Text style={{color: '#000', fontSize: 16}}>Anak-anak x{anak}</Text>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              width: '63%',
              textAlign: 'right',
            }}>
            {hargaAnak}
          </Text>
        </View>
      </View>
      <View style={{top: 10, flexDirection: 'row'}}>
        <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
          Harga Total
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            width: '65%',
            textAlign: 'right',
            fontWeight: 'bold',
          }}>
          {hargaTotal}
        </Text>
      </View>
    </View>
  );
};

const Cancel = ({navigation, route}) => {
  const renderItem = ({item}) => (
    <Item
      id={item.id}
      berangkat={item.berangkat}
      tujuan={item.tujuan}
      kelas={item.kelas}
      tanggal={item.tanggal}
      waktu={item.waktu}
      dewasa={item.dewasa}
      anak={item.anak}
      hargaDewasa={item.hargaDewasa}
      hargaAnak={item.hargaAnak}
      hargaTotal={item.hargaTotal}
    />
  );

  return (
    <View style={styles.Home}>
      <View style={styles.Header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFFF'}}>
          Tiket yang Dibatalkan
        </Text>
      </View>
      <SafeAreaView style={{height: '90%'}}>
        <FlatList
          data={route.params.DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{width: 400}}
        />
        {/* <Text style={{color: '#000'}}>{route.params.DATA[1].berangkat}</Text> */}
      </SafeAreaView>
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
    backgroundColor: '#3076af',
    width: '100%',
    height: 40,
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

export default Cancel;
