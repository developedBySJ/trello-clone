import { nanoid } from "nanoid";
import React from "react";

interface Task {
  id: string;
  text: string;
}
interface List {
  id: string;
  text: string;
  tasks: Task[];
}
interface AppState {
  lists: List[];
}

type Action =
  | {
      type: "ADD_LIST";
      payload: { text: string };
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; listId: string };
    };

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c0", text: "Learn Docker" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c0", text: "Begin yo use static typing" }],
    },
  ],
};

export const AppStateContext = React.createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), text: action.payload.text, tasks: [] },
        ],
      };
    }
    case "ADD_TASK": {
      const newList: List[] = state.lists.map((list) => {
        if (list.id === action.payload.listId) {
          list.tasks.push({
            id: nanoid(),
            text: action.payload.text,
          });
        }
        return list;
      });
      return {
        ...state,
        lists: newList,
      };
    }

    default: {
      return state;
    }
  }
};

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return React.useContext(AppStateContext);
};
