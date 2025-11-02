import { Ionicons } from "@expo/vector-icons"; // camera icon
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Camera({ onImageTaken }) {
  const [image, setImage] = useState(null);

  const takePicture = async () => {
    console.log("📷 Opening camera...");

    // Ask for permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Camera permission is required!");
      return;
    }

    // Launch camera
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    console.log("📸 Camera result:", result);

    if (!result.canceled) {
      const img = result.assets[0];
      setImage(img.uri);
      onImageTaken && onImageTaken(img);
      console.log("✅ Picture taken:", img.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.uploadBox}>
        {image ? (
          <Image source={{ uri: image }} style={styles.preview} />
        ) : (
          <Ionicons name="camera-outline" size={48} color="#FF4822" />
        )}

        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Ionicons name="camera" size={18} color="#fff" />
          <Text style={styles.buttonText}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    marginBottom: 10,
  },
  uploadBox: {
    borderWidth: 1.5,
    borderColor: "#FFB699",
    borderStyle: "dashed",
    borderRadius: 12,
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF9F7",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF4822",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 6,
  },
  preview: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
});
