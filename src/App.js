import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import ExpandableActivities from "./challenges/ExpandableActivities";
import FakeStoreApi from "./challenges/FakeStoreApi";
import RenderNestedObject from "./challenges/RenderNestedObject";
import RoboList from "./challenges/RoboList";
function App() {

  const nestedObject = {
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp: "an apple cultivar developed at the MAES Horticultural Research Center",
        Fiji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  }

  return <>
    <FakeStoreApi/>
    {/* <RenderNestedObject nestedObject={nestedObject}/> */}
    {/* <RoboList/> */}
    {/* <ExpandableActivities /> */}


  </>
}


export default App;