import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const footer = context => (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Text style={styles.icon}>⬅️</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.icon}>⭐️</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.icon}> ➡️</Text>
      </TouchableOpacity>
    </View>
  );
  const styles = StyleSheet.create({    
    icon: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center"
    },
    footer: {
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#8dc63f"
    }
  });

  export default footer;