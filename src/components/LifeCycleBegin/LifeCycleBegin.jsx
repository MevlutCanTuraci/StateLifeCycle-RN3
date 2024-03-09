import { React, useEffect, useState } from "react";
import { SafeAreaView, View, Text, Button, FlatList, Switch } from "react-native";

const LifeCycleBegin = () => {

    const [counter, setCounter] = useState(100);
    const [number, setNumber] = useState(0);

    //Number state her değiştiğinde bu useEffect çalışır. 
    //Component ilk kez yüklenirken en az 1 kez çalşması gerekir.
    useEffect(() => {
        console.log("number is updated")
    }, [number]);


    //Counter state her değiştiğinde bu useEffect çalışır. 
    //Component ilk kez yüklenirken en az 1 kez çalşması gerekir.
    useEffect(() => {
        console.log("counter is updated")
    }, [counter]);

    return (
        <View>
            <Text style={{fontSize: 35}}>
                Number: {number}
            </Text>

            <Text style={{fontSize: 35}}>
                Counter: {counter}
            </Text>

            <Button 
                title="Increment Number"
                onPress={() => setNumber(number + 1)}
            />

            <Button 
                title="Increment Counter"
                onPress={() => setCounter(counter + 100)}
            />

        </View>
    );

}


export default LifeCycleBegin;