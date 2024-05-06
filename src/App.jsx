import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { useState, useEffect } from "react";

function App() {

  let [value, setValue] = useState({
    initialInvestment: 100000,
    annualInvestment: 10000,
    expectedReturn: 100,
    duration: 4
  });

  function handleInputChange(inputIdentifier, newValue) {

    setValue(prevValue => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue,
      }
    })
  }


  return (
    <>
      <Header />
      <UserInput
        handleInputChange={handleInputChange}
        userInput={value}
      />
      <ResultTable input={value}
      />
    </>

  )
}

export default App
