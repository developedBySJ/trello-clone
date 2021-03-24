import React from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./styles";

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem: React.FC<AddNewItemProps> = ({
  dark,
  onAdd,
  toggleButtonText,
}) => {
  const [showForm, setShowForm] = React.useState(false);
  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
