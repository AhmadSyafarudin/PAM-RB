import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {GetDate} from './../pages/Schedule/index';

const Calendar = () => {
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

  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  };

  return (
    <View style={styles.Data}>
      <Icon name="calendar" size={30} color="#97D179" />
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={{color: 'black', fontSize: 14, marginLeft: 10}}>
          {getDate()}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Data: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#000',
    padding: 7,
    marginTop: 20,
    height: 50,
    alignItems: 'center',
  },
});

export default Calendar;
