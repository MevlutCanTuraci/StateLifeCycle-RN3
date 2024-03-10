import { React, useState } from "react";
import { SafeAreaView } from "react-native";
import StateBegin from "./components/StateBegin/StateBeginExample";
import StateEx1 from "./components/StateEx1";
import LifeCycleBegin from "./components/LifeCycleBegin";
import DeclarativeState from "./components/DeclarativeState";
import LifeCycleMount from "./components/Mount";
import LifeCycleCleanUp from "./components/CleanUpLifeCycle";

const App = () => {


  return (
    <SafeAreaView>
      
      {/* <StateBegin /> */}

      {/* <StateEx1 /> */}

      {/* <LifeCycleBegin /> */}

      {/* <DeclarativeState /> */}

      {/* <LifeCycleMount /> */}

      <LifeCycleCleanUp />
      
    </SafeAreaView>
  );

}


export default App;