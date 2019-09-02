import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const header = (props) => (
    <View style={styles.header}>
      <Text>App Header</Text>
      
    </View>
  );  

  const styles = StyleSheet.create({
    header: {
      paddingTop: 40,
      paddingBottom: 10,
      backgroundColor: "#8dc63f"
    }
  });

  export default header;

  