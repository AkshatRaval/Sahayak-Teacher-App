import { Audio } from "expo-av";
import * as DocumentPicker from "expo-document-picker";
import { Upload } from "lucide-react-native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UploadInput({ onFileSelected }) {
    const [fileInfo, setFileInfo] = useState(null);
    const [sound, setSound] = useState(null);

    const pickFile = async () => {
        console.log("📁 pickFile() started...");

        try {
            const res = await DocumentPicker.getDocumentAsync({
                copyToCacheDirectory: true,
            });

            console.log("📤 DocumentPicker response:", res);

            // 🧠 new API check:
            const file = res?.assets?.[0];
            if (!file || res.canceled) {
                console.warn("⚠️ No file selected or user cancelled.");
                return;
            }

            const { uri, name, mimeType } = file;
            const info = { uri, name, mimeType };
            console.log("✅ File details:", info);

            // --- your same preview/audio logic below ---
            if ((mimeType || "").startsWith("image/")) {
                console.log("🖼️ Selected image");
            } else if ((mimeType || "").startsWith("audio/")) {
                console.log("🎵 Selected audio");
                if (sound) { await sound.unloadAsync(); setSound(null); }
                const { sound: s } = await Audio.Sound.createAsync({ uri });
                setSound(s);
            } else {
                console.log("📄 Other file type");
            }

            setFileInfo(info);
            onFileSelected && onFileSelected(info);
            console.log("✅ Done!");
        } catch (err) {
            console.error("🚨 pickFile error:", err);
        }
    };


    const renderPreview = () => {
        if (!fileInfo) return null;
        const { uri, name, mimeType } = fileInfo;

        if ((mimeType || "").startsWith("image/")) {
            return <Image source={{ uri }} style={styles.imagePreview} />;
        }
        if ((mimeType || "").startsWith("audio/")) {
            return (
                <View style={styles.card}>
                    <Text style={styles.filename}>{name}</Text>
                    <TouchableOpacity style={styles.smallBtn} onPress={() => sound?.replayAsync?.()}>
                        <Text style={{ color: "#fff" }}>Play</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        // pdf/docx/other
        return (
            <View style={styles.card}>
                <Text style={styles.filename}>{name}</Text>
                <Text style={styles.muted}>{mimeType || "file"}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.uploadBox}>
                <Upload size={42} color="#FF4822" />
                <TouchableOpacity style={styles.button} onPress={pickFile}>
                    <Upload size={18} color="#fff" />
                    <Text style={styles.buttonText}>Choose File</Text>
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
