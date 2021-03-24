import React from "react";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  text: string;
  index: number;
}

export const Column: React.FC<ColumnProps> = ({ text, children, index }) => {
  const { state } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle> {text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText={"+ Add another list"}
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
