import React, { Component } from "react";
import { TouchableOpacity,StyleSheet, Text, View, TextInput, Button,  ActivityIndicator } from "react-native";

//note the captial letter
import ListItem from './src/components/Listitem/Listitem';
import Header from './src/components/Header';

export default class App extends Component {
  state = {
<<<<<<< HEAD
=======
    placeName: "",
>>>>>>> parent of ca62dbf... added default places
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={{ flex: 1 }}>

        <Header loading={this.state.loading} />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>


{/*         <Footer style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.icon}>⬅️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}> ➡️</Text>
          </TouchableOpacity>
        </Footer> */}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
