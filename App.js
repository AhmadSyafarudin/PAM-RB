import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Button,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
  return (
    <View style={styles.searchContainer}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};

const Item = ({ nama, nomor }) => (
  <View style={styles.item}>
    <TouchableOpacity style={styles.contactlist}>
      <Icon name="account-circle-outline" size={70} color="#ffff" />
      <View
        style={{
          flexDirection: "column",
          marginHorizontal: 10,
          marginVertical: 15,
          width: "100%",
        }}
      >
        <Text style={{ color: "#ffff", fontSize: 17, fontWeight: "bold" }}>
          {nama}
        </Text>
        <View
          style={{
            backgroundColor: "#ffff",
            height: 3,
            width: "80%",
            marginBottom: 5,
            marginTop: 5,
          }}
        ></View>
        <Text style={{ color: "#ffff" }}>{nomor}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const List = ({ searchPhrase, setCLicked, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return (
        <Item
          nama={item.name}
          nomor={`${item.phoneNumbers ? item.phoneNumbers[0].number : ""}`}
        />
      );
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <Item
          nama={item.name}
          nomor={`${item.phoneNumbers ? item.phoneNumbers[0].number : ""}`}
        />
      );
    }
  };

  return (
    <SafeAreaView>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  // const renderItem = ({ item }) => (
  //   <Item
  //     nama={item.name}
  //     nomor={`${item.phoneNumbers ? item.phoneNumbers[0].number : ""}`}
  //   />
  // );

  return (
    <View style={styles.container}>
      <View
        style={{
          marginLeft: 10,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Icon name="menu" size={35} color="#ffff" />
        <Text style={{ fontSize: 25, marginLeft: 5, color: "#ffff" }}>
          Kontak
        </Text>
        {/* if ({!clicked})
        { */}
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
        {/* } */}
      </View>
      {/* else
      { */}
      <List
        searchPhrase={searchPhrase}
        data={contacts}
        setClicked={setClicked}
      />
      {/* } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#0d1117",
  },
  item: {
    backgroundColor: "#393f47",
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 10,
  },
  contactlist: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "60%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    // width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    // width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    // justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

