import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <Switch
      // trackColor={{ false: "#767577", true: "#81b0ff" }}
      // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      // ios_backgroundColor="#3e3e3e"
      // onValueChange={toggleSwitch}
      // value={isEnabled}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
