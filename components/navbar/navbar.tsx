import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { styles } from "./navbar-styles";


type SearchBarProps = {
    value: string;
    onChangeText: (text: string) => void;
} & Omit<TextInputProps, "value" | "onChangeText">;

export default function Navbar({value, onChangeText} : SearchBarProps) {
    return (
        <View style={styles.topContainer}>
            <View style={styles.container}>
                <Ionicons name="search" size={20} style={styles.icon}/>
                <TextInput style={styles.input} placeholder="Search here..." onChangeText={onChangeText} value={value}/>
            </View>
        </View>
    );
}