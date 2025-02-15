//import { Image, StyleSheet, Platform } from 'react-native';
//import { HelloWave } from '@/components/HelloWave';
//import ParallaxScrollView from '@/components/ParallaxScrollView';
//import { ThemedText } from '@/components/ThemedText';
//import { ThemedView } from '@/components/ThemedView';
import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";

export default function Translator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Translator</Text>

        <TextInput
        style={styles.input}
        placeholder="Enter text to translate"
        value={text}
        onChangeText={setText}
        />
      
      
      <TouchableOpacity style={styles.button}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Translate</Text>}
      </TouchableOpacity>

      {translatedText !== "" && (
        <View style={styles.outputContainer}>
          <Text style={styles.outputText}>{translatedText}</Text>
        </View>
      )}
    </View>
  
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  outputContainer: {
    marginTop: 10,
    backgroundColor: "#E5E5EA",
    padding: 15,
    borderRadius: 10,
    width: "100%",
  },
  outputText: {
    fontSize: 16,
  },
});


