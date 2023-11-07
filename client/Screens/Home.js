import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

const HomeScreen = () => {
  const [state, setState] = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Text>{JSON.stringify(state,null,4)}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
