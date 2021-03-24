import React from "react";
import { AddItemButton } from "./styles";

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark: false;
}

export const AddNewItem: React.FC<AddNewItemProps> = ({
  dark,
  onAdd,
  toggleButtonText,
}) => {
  const [showForm, setShowForm] = React.useState(false);
  if (showForm) {
  }
  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
