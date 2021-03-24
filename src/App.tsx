import React from "react";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import { Card } from "./Card";
import { Column } from "./Column";
import { AppContainer } from "./styles";

const App = () => {
  const { state } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => {
        return <Column text={list.text} key={list.id} index={i} />;
      })}

      <AddNewItem toggleButtonText="+ Add Another List" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
