import { CardAnimationContext } from '@react-navigation/stack';
import { createContext } from 'react';

// Credential context
export const CredentialsContext = createContext({ storedCredentials: {}, setStoredCredentials: () => {} });