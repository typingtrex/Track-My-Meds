import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from './Buttons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.intro}>My Health</Text>
      <Text style={styles.description}>Patient Empowerment</Text>
      <StatusBar style="auto" />
      <View>
        <Button label="Prescription Name" />
        <Button label="Dosage" />
        <Button label="Frequency" />
        <Button label="Start Date" />
        <Button label="End Date" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    color: 'white',
    fontSize: 30,
  },
  description: {
    color: 'white',
    fontSize: 20,
    paddingTop: 3,
    paddingBottom: 16,
  },
});
