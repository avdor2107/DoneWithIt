import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, } from "react-native";
import GameComponent from './components/GameComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} 
      style={{fontWeight: 'bold', fontSize: 35}}>
      Rock, paper, scissors
      </Text>
      <GameComponent vrijednost={3}/>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 25,
  },
  
});
export default App;