import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const header = ({ loading }) => (
    <View style={styles.header}>
      <Text style={styles.title}>App Header</Text>
      {loading ? <ActivityIndicator color="blue" /> : null}
    </View>
  );

  const styles = StyleSheet.create({
    header: {
      paddingTop: 40,
      paddingBottom: 10,
      backgroundColor: "#8dc63f"
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
  });

  export default header;

  