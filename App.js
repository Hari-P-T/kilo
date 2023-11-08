import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [kilometers, setKilometers] = useState('');
  const [miles, setMiles] = useState('');

  const convertKilometersToMiles = () => {
    if (kilometers) {
      const kilometersValue = parseFloat(kilometers);
      const milesValue = kilometersValue * 0.621371; // Conversion factor
      setMiles(milesValue.toFixed(2)); // Rounded to 2 decimal places
    } else {
      setMiles('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Kilometers to Miles Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Kilometers"
        keyboardType="numeric"
        value={kilometers}
        onChangeText={(text) => setKilometers(text)}
      />
      <Button title="Convert" onPress={convertKilometersToMiles} />
      {miles !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Miles: {miles}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
