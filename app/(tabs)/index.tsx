import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "@env";

export default function Translator() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState(""); 
  const [loading, setLoading] = useState(false);


  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY, 
    dangerouslyAllowBrowser: true, 
  });

  const translateText = async () => {
    if (!text.trim()) return; 

    setLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a translator that translates text into Russian." },
          { role: "user", content: `Translate the following text to Russian: "${text}"` },
        ],
      });

      setTranslatedText(response.choices[0].message.content);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Translation error");
    }
    setLoading(false);
  };


  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <View style={styles.translationContainer}>
        <Text style={styles.translationText}></Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter text to translate"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.button} onPress={translateText} disabled={loading}>         
          <Text style={styles.buttonText}>Send</Text>
          <Ionicons name="arrow-forward-outline" size={20} color="white" /> 
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebfffe",
    justifyContent: "space-between",
  },
  translationContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  translationText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#707878",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "blue",
    backgroundColor: "#cefffd",
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#ebfffe",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5
  },
});
