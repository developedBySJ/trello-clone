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

interface AppStateContextProps {
  state: AppState;
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

export const AppStateProvider: React.FC = ({ children }) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return React.useContext(AppStateContext);
};
