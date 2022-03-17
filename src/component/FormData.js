import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Data = props => {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.Data}>
      <Icon name={props.name} size={props.size} color={props.color} />
      <TextInput
        style={{color: 'black', height: 40, paddingLeft: 10}}
        placeholder={props.placeholder}
        placeholderTextColor="#B6B5B5"
        onChangeText={onChangeText}
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

export default Data;
