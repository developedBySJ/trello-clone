import React from "react";
import { NewItemButtton, NewItemFormContainer, NewItemInput } from "./styles";

interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm: React.FC<NewItemFormProps> = ({ onAdd }) => {
  const [text, setText] = React.useState("");
  return (
    <div>
      <NewItemFormContainer>
        <NewItemInput value={text} onChange={(e) => setText(e.target.value)}>
          <NewItemButtton onClick={() => onAdd(text)}>Create</NewItemButtton>
        </NewItemInput>
      </NewItemFormContainer>
    </div>
  );
};
