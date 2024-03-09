import { React, useEffect, useState } from "react";
import { SafeAreaView, View, Text, Button, FlatList, Switch } from "react-native";

const LifeCycleMount = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Counter is updated");
    }, [counter]);


    //Herhangi bir state'i takip etmeyen bir useEffect tanımladık.
    //Sadece component yüklenirken çalışır, bir daha çalışmaz. (ilk yüklenirken / initilization)
    //Herhangi bir component render edilirken / değiştiğinde de çalışmaz!
    useEffect(() => {
        console.log("Mounting...");
    }, []);

    const upCounter = () => {   
        setCounter(counter + 100);
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


export default LifeCycleMount;