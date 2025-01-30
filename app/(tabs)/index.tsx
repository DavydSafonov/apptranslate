import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, {useState} from 'react';
import {View , Text, TextInput, TouchableOpacity} from 'react-native';

export default function Translator() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
        style={styles.input}
        placeholder="Enter text to translate"
        value={text}
        onChangeText={setText}
        />
        <Text style={styles.output}></Text>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Translate</Text>
      </TouchableOpacity>
    </View>
  
  );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
    height: 40,
    margin: 12,
  },
  output: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
    height: 40,
    margin: 12,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});


