import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>This is the details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: 100,
    alignItems: "center",
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
