import { React, useState } from "react";
import { SafeAreaView, View, Text, Button, FlatList, Switch } from "react-native";

var data = [
    {
        "id": 1,
        "name": "cafe.exe",
        "isFavorite": true
    },
    {
        "id": 2,
        "name": "cafeKafe",
        "isFavorite": false
    },
    {
        "id": 3,
        "name": "BubGL",
        "isFavorite": false
    },
    {
        "id": 4,
        "name": "malakte.ca",
        "isFavorite": true
    },
    {
        "id": 5,
        "name": "do(drink)",
        "isFavorite": true
    },
    {
        "id": 6,
        "name": "esc",
        "isFavorite": false
    }
]

const StateEx1 = () => {

    const [cafeList, setCafeList] = useState(data);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

    const renderCafe = ({ item }) => {

        return <View>
            <Text style={{ fontSize: 25 }}>{item.name}</Text>
        </View>

    }

    const onFavoritesChange = (isFavoriteSelected) => { 
        setShowOnlyFavorites(isFavoriteSelected);

        isFavoriteSelected ? 
        setCafeList(cafeList.filter(cafe => cafe.isFavorite))
        :
        setCafeList(data);

    }


    return (
        <View style={{margin: 10}}>

            <View style={{margin: 19}}>
                <Text>
                    Show only favorites
                </Text>
                <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange} />
            </View>

            <FlatList
                data={cafeList}
                renderItem={renderCafe}

            />

        </View>
    );

}


export default StateEx1;