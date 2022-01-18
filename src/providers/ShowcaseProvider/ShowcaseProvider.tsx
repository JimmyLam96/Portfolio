import React, { useContext, useState } from 'react';
import { createContext } from 'react';
import { TypeExpandStates } from './types';

const ShowcaseContext = createContext<value>({} as value);

export function useShowcase() {
  return useContext(ShowcaseContext);
}

export function ShowcaseProvider({ children }: { children?: any }) {
  const [expand, setExpand] = useState<string | null>(null);

  const values = {
    expand: expand,
    setExpand: (id: string | null) => setExpand(id),
  };

  return (
    <ShowcaseContext.Provider value={values}>
      {children}
    </ShowcaseContext.Provider>
  );
}

interface value {
  expand: string | null;
  setExpand: (id: string | null) => void;
}
