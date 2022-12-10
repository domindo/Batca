import React, {useContext, createContext} from 'react';

const CountContext = createContext();

const CountProviderContext = CountContext.Provider;

export {CountContext, CountProviderContext};
