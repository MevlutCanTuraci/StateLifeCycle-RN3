import { React, useEffect, useState } from "react";
import { SafeAreaView, View, Text, Button, FlatList, Switch } from "react-native";

const LifeCycleCleanUp = () => {
    const [helloFlag, setHelloFlag] = useState(true);

    const changeHelloFlag = () => {
        setHelloFlag(!helloFlag);
    }

    return (
        <View>

            <Button
                title="Change"
                onPress={changeHelloFlag}
            />


            {/*
                Component eğer tanımlıysa her zaman true döner. 
                Eğer, 'helloFlag' de true ise 'HelloComponent' ekranda göserilmesi için render edilir.
            */}
            {helloFlag && <HelloComponent />}

        </View>
    );

}

export default LifeCycleCleanUp;


const HelloComponent = () => {

    useEffect(() => {
        console.log("Merhaba Dünya! Component oluştu.");


        //Component kaldırılırken return içerisinde ki fonksiyon çalışır. 
        //Performans için önemlidir. 
        //Event ile bir yeri dinliyorsak, CleanUp fonksiyonu içerisinde dinlemeyi kesip, performans sağlayabiliriz.
        return () => {
            console.log("Güle Güle Dünya! Component temizlendi. CleanUp!.");
        }

    }, []);

    return (
        <View style={{ backgroundColor: 'aqua', padding: 10 }}>
            <Text>
                I'm Hello Component
            </Text>
        </View>

    );
}