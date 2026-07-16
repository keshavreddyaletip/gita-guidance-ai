import { createContext, useContext, useState } from "react";

const GitaContext = createContext();

export function GitaProvider({ children }) {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedVerse, setSelectedVerse] = useState(null);

  return (
    <GitaContext.Provider
      value={{
        selectedChapter,
        setSelectedChapter,
        selectedVerse,
        setSelectedVerse,
      }}
    >
      {children}
    </GitaContext.Provider>
  );
}

export function useGita() {
  return useContext(GitaContext);
}