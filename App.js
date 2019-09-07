
//code from vid 26
import React, { Component } from "react";
import { TouchableOpacity,StyleSheet, Text, View, TextInput, Button,  ActivityIndicator } from "react-native";

//note the captial letter
import ListItem from './src/components/Listitem/Listitem';

//add header from prev app
import Header from './src/components/Header';
import Footer from './src/components/Footer';

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  //handler for the add button
  placeSubmitHandler = () => {
    //if empty string return
    if (this.state.placeName.trim() === "") {
      return;
    }
    
    /**
     * get the old state
     * i.e return the array of places name and what the use entered
     */
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
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
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
