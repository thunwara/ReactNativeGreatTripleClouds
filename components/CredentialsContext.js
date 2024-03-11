import { CardAnimationContext } from '@react-navigation/stack';
import { createContext } from 'react';

//credentials context
export const CredentialContext = createContext({ storageCredentials: {}, setStoredCredentials: () => {} });
