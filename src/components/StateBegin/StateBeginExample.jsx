import { React, useState } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";

const StateBegin = () => {

  const [counter, setCounter] = useState(0);

  const addCount = () => {
    setCounter(counter + 1);
  }

  const downCount = () => {
    setCounter(counter - 1);
  }

  return (
    <SafeAreaView>
      
      
      <Text style={{fontSize: 30}}>
        Count : {counter}
      </Text>

      <Button 
        title="Update Count"
        onPress={addCount}
      />

      <Button 
        title="Down Count"
        onPress={downCount}
      />
      
    </SafeAreaView>
  );

}


export default StateBegin;