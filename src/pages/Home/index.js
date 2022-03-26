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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
// import Axios from 'axios';

// import Data from '../../component/FormData';
// import Calendar from '../../component/Calendar';
// import Schedule from '../Schedule';
// import Data from './../../component/FormData';
import Footer from './../../component/Footer';

const Home = () => {
  return (
    <View style={styles.Home}>
      {/* <Header /> */}
      <Form />
      <Footer />
    </View>
  );
};

// const Header = () => {
//   return (
//     <View style={styles.Header}>
//       <Icon style={styles.Account} name="account" size={45} color="white" />
//       <Icon style={styles.Menu} name="menu" size={45} color="white" />
//       <Text style={styles.HeaderText}> Hiling.id </Text>
//     </View>
//   );
// };

const Form = () => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };
  const getDateTime = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]} ${tempDate[4]}`
      : '';
  };
  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };
  const getTime = () => {
    let tempDate = date.toString().split(' ');
    return date !== '' ? `${tempDate[4]}` : '';
  };
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [berangkat, setBerangkat] = useState(null);
  const [tujuan, setTujuan] = useState(null);
  const [kelas, setKelas] = useState(null);
  const [items, setItems] = useState([
    {label: 'Regular', value: 'Regular'},
    {label: 'Express', value: 'Express'},
  ]);
  const [pelabuhan, setPelabuhan] = useState([
    {label: 'Bakauheni', value: 'Bakauheni'},
    {label: 'Merak', value: 'Merak'},
  ]);

  const [dewasa, setDewasa] = useState(0);
  const [anak, setAnak] = useState(0);

  const navigation = useNavigation();

  const onPress = () => {
    let nextDay = getDate();
    let nextTime = 0;

    const getJam1 = () => {
      let tempDate = getTime().split(':');
      let jam = `${tempDate[0]}` + ':' + `${tempDate[1]}`;
      return jam;
    };

    const getJam2 = () => {
      let tempDate = getTime().split(':');
      let jam = `${tempDate[0]}`;

      const regex = /^0/;
      // return regex.test(jam);

      if (regex.test(jam)) {
        let plus = jam.split('0');
        if (plus[1] == '') {
          plus = 1;
          nextTime = plus;
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
        plus = parseInt(plus[1]) + 1;
        nextTime = plus;
        if (plus > 9) {
          return joinTime(plus.toString());
        } else {
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
      } else {
        let plus = parseInt(jam) + 1;
        nextTime = plus;
        if (plus > 23) {
          nextDay = moment(date).add(1, 'day');
          let getDate = nextDay.toString().split(' ');
          if (nextDay !== '') {
            nextDay = `${getDate[0]} ${getDate[1]} ${getDate[2]} ${getDate[3]}`;
          }
          plus = 0;
          nextTime = plus;
          jam = '0' + plus.toString();
          return joinTime(jam);
        }

        return joinTime(plus.toString());
      }
    };

    const getJam3 = () => {
      let tempDate = getTime().split(':');
      let jam = `${tempDate[0]}`;
      const regex = /^0/;
      // return regex.test(jam);
      if (regex.test(jam)) {
        let plus = jam.split('0');
        if (plus[1] == '') {
          plus = nextTime + 1;
          nextTime = plus;
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
        plus = nextTime + 1;
        nextTime = plus;
        if (plus > 9) {
          return joinTime(plus.toString());
        } else {
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
      } else {
        // let plus = parseInt(jam) + 2;
        let plus = nextTime + 1;
        nextTime = plus;
        if (plus > 23) {
          nextDay = moment(date).add(1, 'day');
          let getDate = nextDay.toString().split(' ');
          if (nextDay !== '') {
            nextDay = `${getDate[0]} ${getDate[1]} ${getDate[2]} ${getDate[3]}`;
          }
          plus = nextTime - 23;
          nextTime = plus;
          jam = '0' + plus.toString();
          return joinTime(jam);
        } else if (plus.toString().length < 2) {
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
        return joinTime(plus.toString());
      }
    };

    const getJam4 = () => {
      let tempDate = getTime().split(':');
      let jam = `${tempDate[0]}`;
      const regex = /^0/;
      // return regex.test(jam);
      if (regex.test(jam)) {
        let plus = jam.split('0');
        if (plus[1] == '') {
          plus = nextTime + 1;
          nextTime = plus;
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
        plus = nextTime + 1;
        nextTime = plus;
        if (plus > 9) {
          return joinTime(plus.toString());
        } else {
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
      } else {
        // let plus = parseInt(jam) + 2;
        let plus = nextTime + 1;
        nextTime = plus;
        if (plus > 23) {
          nextDay = moment(date).add(1, 'day');
          let getDate = nextDay.toString().split(' ');
          if (nextDay !== '') {
            nextDay = `${getDate[0]} ${getDate[1]} ${getDate[2]} ${getDate[3]}`;
          }
          plus = nextTime - 23;
          nextTime = plus;
          jam = '0' + plus.toString();
          return joinTime(jam);
        } else if (plus.toString().length < 2) {
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
        return joinTime(plus.toString());
      }
    };

    const getJam5 = () => {
      let tempDate = getTime().split(':');
      let jam = `${tempDate[0]}`;
      const regex = /^0/;
      // return regex.test(jam);
      if (regex.test(jam)) {
        let plus = jam.split('0');
        if (plus[1] == '') {
          plus = nextTime + 1;
          nextTime = plus;
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
        plus = nextTime + 1;
        nextTime = plus;
        if (plus > 9) {
          return joinTime(plus.toString());
        } else {
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
      } else {
        // let plus = parseInt(jam) + 2;
        let plus = nextTime + 1;
        nextTime = plus;
        if (plus > 23) {
          nextDay = moment(date).add(1, 'day');
          let getDate = nextDay.toString().split(' ');
          if (nextDay !== '') {
            nextDay = `${getDate[0]} ${getDate[1]} ${getDate[2]} ${getDate[3]}`;
          }
          plus = nextTime - 23;
          nextTime = plus;
          jam = '0' + plus.toString();
          return joinTime(jam);
        } else if (plus.toString().length < 2) {
          jam = '0' + plus.toString();
          return joinTime(jam);
        }
        return joinTime(plus.toString());
      }
    };

    const joinTime = jam => {
      let tempDate = getTime().split(':');
      let waktu = jam + ':' + `${tempDate[1]}`;
      return waktu;
    };

    const costDewasa = dewasa * 65000;
    const costAnak = anak * 30000;
    const costTotal = costDewasa + costAnak;

    const data1 = {
      berangkat,
      tujuan,
      kelas,
      waktu: getJam1(),
      tanggal: getDate(),
      dewasa,
      anak,
      costDewasa: 'Rp ' + costDewasa.toString(),
    };
    const data2 = {
      berangkat,
      tujuan,
      kelas,
      waktu: getJam2(),
      tanggal: nextDay,
      dewasa,
      anak,
    };
    const data3 = {
      berangkat,
      tujuan,
      kelas,
      waktu: getJam3(),
      tanggal: nextDay,
      dewasa,
      anak,
    };
    const data4 = {
      berangkat,
      tujuan,
      kelas,
      waktu: getJam4(),
      tanggal: nextDay,
      dewasa,
      anak,
    };
    const data5 = {
      berangkat,
      tujuan,
      kelas,
      waktu: getJam5(),
      tanggal: nextDay,
      dewasa,
      anak,
    };
    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4);
    console.log(data5);

    return navigation.navigate('Schedule', {
      berangkat: berangkat,
      tujuan: tujuan,
      kelas: kelas,
      waktu: getJam1(),
      jam: getJam2(),
      tanggal: getDate(),
      dewasa: dewasa,
      anak: anak,
      costDewasa: costDewasa,
    });
  };

  return (
    <View style={styles.Form}>
      <Text
        style={{
          color: '#3076af',
          fontSize: 30,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          textAlign: 'center',
          marginBottom: 25,
        }}>
        Kapalzy
      </Text>

      <KeyboardAwareScrollView>
        <View id="berangkat">
          <Text
            style={{
              color: '#a9a9a9',
              fontSize: 16,
              fontFamily: 'Roboto',
            }}>
            Pelabuhan Awal
          </Text>
          <View style={styles.Data}>
            <Icon name="ferry" size={30} color="#3076af" />

            <DropDownPicker
              open={open1}
              value={berangkat}
              items={pelabuhan}
              setOpen={setOpen1}
              setValue={setBerangkat}
              setItems={setPelabuhan}
              placeholder="Pilih Pelabuhan Awal"
              style={{
                width: 250,
                marginLeft: 10,
                borderColor: '#cbcfcf',
                backgroundColor: '#eff4f4',
              }}
              listMode="MODAL"
              dropDownContainerStyle={{
                width: 250,
                marginLeft: 10,
                borderColor: '#cbcfcf',
                backgroundColor: '#eff4f4',
              }}
              selectedItemLabelStyle={{
                fontWeight: 'bold',
                color: '#FFFF',
              }}
              selectedItemContainerStyle={{
                backgroundColor: '#3076af',
              }}
              modalTitle="Pilih Pelabuhan Awal"
              modalTitleStyle={{
                fontWeight: 'bold',
              }}
              listItemLabelStyle={{
                color: '#000',
                fontSize: 20,
              }}
            />
          </View>
        </View>

        <View id="tujuan" style={{marginTop: 10}}>
          <Text
            style={{
              color: '#a9a9a9',
              fontSize: 16,
              fontFamily: 'Roboto',
            }}>
            Pelabuhan Tujuan
          </Text>
          <View style={styles.Data}>
            <Icon name="ferry" size={30} color="#3076af" />

            <DropDownPicker
              open={open2}
              value={tujuan}
              items={pelabuhan}
              setOpen={setOpen2}
              setValue={setTujuan}
              setItems={setPelabuhan}
              placeholder="Pilih Pelabuhan Tujuan"
              style={{
                width: 250,
                marginLeft: 10,
                borderColor: '#cbcfcf',
                backgroundColor: '#eff4f4',
              }}
              dropDownContainerStyle={{
                width: 250,
                marginLeft: 10,
                borderColor: '#cbcfcf',
                backgroundColor: '#eff4f4',
              }}
              listMode="MODAL"
              selectedItemLabelStyle={{
                fontWeight: 'bold',
                color: '#FFFF',
              }}
              selectedItemContainerStyle={{
                backgroundColor: '#3076af',
              }}
              modalTitle="Pilih Pelabuhan Tujuan"
              modalTitleStyle={{
                fontWeight: 'bold',
              }}
              listItemLabelStyle={{
                color: '#000',
                fontSize: 20,
              }}
            />
          </View>
        </View>

        <View id="kelas" style={{marginTop: 10}}>
          <Text
            style={{
              color: '#a9a9a9',
              fontSize: 16,
              fontFamily: 'Roboto',
            }}>
            Kelas Layanan
          </Text>
          <View style={styles.Data}>
            <Icon name="chair-rolling" size={30} color="#3076af" />

            <DropDownPicker
              open={open3}
              value={kelas}
              items={items}
              setOpen={setOpen3}
              setValue={setKelas}
              setItems={setItems}
              placeholder="Pilih Kelas Layanan"
              style={{
                width: 250,
                marginLeft: 10,
                borderColor: '#cbcfcf',
                backgroundColor: '#eff4f4',
              }}
              dropDownContainerStyle={{
                width: 250,
                marginLeft: 10,
                borderColor: '#cbcfcf',
                backgroundColor: '#eff4f4',
              }}
              listMode="MODAL"
              selectedItemLabelStyle={{
                fontWeight: 'bold',
                color: '#FFFF',
              }}
              selectedItemContainerStyle={{
                backgroundColor: '#3076af',
              }}
              modalTitle="Pilih Kelas Layanan"
              modalTitleStyle={{
                fontWeight: 'bold',
              }}
              listItemLabelStyle={{
                color: '#000',
                fontSize: 20,
              }}
            />
          </View>
        </View>

        <View id="tanggal" style={{marginTop: 10}}>
          <Text
            style={{
              color: '#a9a9a9',
              fontSize: 16,
              fontFamily: 'Roboto',
            }}>
            Tanggal Keberangkatan
          </Text>
          {/* <Calendar /> */}
          <View style={styles.Data}>
            <Icon name="calendar-clock" size={30} color="#3076af" />
            <TouchableOpacity
              onPress={showDatePicker}
              style={{
                backgroundColor: '#eff4f4',
                padding: 7,
                borderRadius: 10,
                width: '85%',
                height: 50,
                justifyContent: 'center',
                marginLeft: 10,
                borderColor: '#cbcfcf',
                borderWidth: 1,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  marginLeft: 10,
                }}>
                {getDateTime()}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>

        <View id="penumpang" style={{marginTop: 10}}>
          <Text
            style={{
              color: '#a9a9a9',
              fontSize: 16,
              fontFamily: 'Roboto',
            }}>
            Jumlah Penumpang
          </Text>
          {/* <Calendar /> */}
          <View style={styles.Data}>
            <Text
              style={{
                color: '#FFFF',
                backgroundColor: '#3076af',
                padding: 7,
                fontSize: 16,
                fontWeight: 'bold',
                width: '35%',
                height: 40,
                borderRadius: 10,
                textAlign: 'center',
                paddingTop: 9,
              }}>
              Dewasa
            </Text>
            <View
              style={{
                height: 40,
                marginLeft: 10,
                backgroundColor: '#eff4f4',
                marginLeft: 10,
                borderRadius: 10,
                width: '60%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#cbcfcf',
                borderWidth: 1,
              }}>
              <TextInput
                style={{
                  width: '70%',
                  padding: 7,
                  textAlign: 'right',
                  fontSize: 14,
                  color: '#000',
                }}
                placeholder="0"
                placeholderTextColor="#000"
                onChangeText={setDewasa}
              />
              <Text
                style={{
                  color: '#000',
                  width: '40%',
                  padding: 7,
                  fontSize: 14,
                }}>
                Orang
              </Text>
            </View>
          </View>
          <View style={styles.Data}>
            <Text
              style={{
                color: '#FFFF',
                backgroundColor: '#3076af',
                padding: 7,
                fontSize: 16,
                fontWeight: 'bold',
                width: '35%',
                height: 40,
                borderRadius: 10,
                textAlign: 'center',
                paddingTop: 9,
              }}>
              Anak-anak
            </Text>
            <View
              style={{
                height: 40,
                marginLeft: 10,
                backgroundColor: '#eff4f4',
                marginLeft: 10,
                borderRadius: 10,
                width: '60%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#cbcfcf',
              }}>
              <TextInput
                style={{
                  width: '70%',
                  padding: 7,
                  textAlign: 'right',
                  fontSize: 14,
                  color: '#000',
                }}
                placeholder="0"
                placeholderTextColor="#000"
                onChangeText={setAnak}
              />
              <Text
                style={{
                  color: '#000',
                  width: '40%',
                  padding: 7,
                  fontSize: 14,
                }}>
                Orang
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.Button} onPress={onPress}>
          <Icon name="calendar-search" size={30} color="#FFFF" />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: 'white',
              marginLeft: 10,
            }}>
            Buat Tiket
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
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
    borderRadius: 2,
    width: '85%',
    height: '87%',
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      height: 4,
      widht: 0,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    top: 20,
  },
  Account: {
    position: 'absolute',
    right: 0,
  },
  Button: {
    marginTop: 25,
    backgroundColor: '#FF7D05',
    color: '#FFFF',
    height: 50,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Data: {
    flexDirection: 'row',
    padding: 7,
    marginTop: 10,
    height: 50,
    alignItems: 'center',
  },
});

export default Home;
