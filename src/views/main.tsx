import { apiGet } from "@/api/get";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Home(){

    return (
        <View>
            <Text>Halló</Text>
        </View>
    );
}