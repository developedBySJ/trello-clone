import React from "react";
import { Card } from "./Card";
import { Column } from "./Column";
import { AppContainer } from "./styles";

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="TO Do 1" />
      </Column>
      <Column text="To Do">
        <Card text="TO Do 1" />
      </Column>
      <Column text="To Do">
        <Card text="TO Do 1" />
      </Column>
    </AppContainer>
  );
};

export default App;
