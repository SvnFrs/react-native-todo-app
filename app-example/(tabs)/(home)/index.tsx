import React from 'react';
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>This is the home</Text>
      <Link href={"/details/1"} asChild>
        <Pressable style={styles.button}>
            <Text style={styles.text}>
            View first details
            </Text>
        </Pressable>
      </Link>
      <Link href={{
        pathname: '/details/[id]',
        params: {id: 'btw'}
      }} asChild>
        <Pressable style={styles.button}>
            <Text style={styles.text}>
            View second details
            </Text>
        </Pressable>
      </Link>
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
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  link: {
    color: "blue",
    fontWeight: "bold",
  },

  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
