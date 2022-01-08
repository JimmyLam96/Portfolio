import React, { useContext, useState } from 'react';
import { createContext } from 'react';
import { TypeExpandStates } from './types';

const ShowcaseContext = createContext<value>({} as value);

export function useShowcase() {
  return useContext(ShowcaseContext);
}

export function ShowcaseProvider({ children }: { children?: any }) {
  const [expand, setExpand] = useState<TypeExpandStates>(-1);

  const values = {
    expand: expand,
    setExpand: (id: TypeExpandStates) => setExpand(id),
  };

  return (
    <ShowcaseContext.Provider value={values}>
      {children}
    </ShowcaseContext.Provider>
  );
}

interface value {
  expand: number;
  setExpand: (id: TypeExpandStates) => void;
}
