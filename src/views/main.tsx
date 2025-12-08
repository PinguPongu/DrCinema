import { apiGet } from "@/api/get";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Home(){
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.authenticate.token);
    const movies = apiGet('/movies', token);
    
    

    return (
        <View>
            <Text>Halló</Text>
        </View>
    );
}