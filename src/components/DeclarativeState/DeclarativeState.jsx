import { React, useEffect, useState } from "react";
import { SafeAreaView, View, Text, Button, FlatList, Switch } from "react-native";

const DeclarativeState = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Counter is updated");
    }, [counter]);

    const upCounter = () => {
        console.log('1. State value: ' + counter); // Çıktı: 0 (aynı değere sahip olur)
        setCounter(counter + 100);
        console.log('2. State value: ' + counter); // Çıktı: 0 (aynı değere sahip olur)

        //Çıktının 0 olma nedeni şöyledir; değeri değiştir emiri verilmez ve veri değişmez.
        //Yeni değeri artık bu, bu değeri güncelle gibi istekte bulunulur. 
        //useEffect'e giderek ilgli değişikliği yapar ve componenti render eder. 
    }

    return (
        <View>
            
            <Text style={{fontSize: 25}}>
                Counter: {counter}
            </Text>

            <Button 
                title="Increment Counter"
                onPress={upCounter}
            />

        </View>
    );

}


export default DeclarativeState;