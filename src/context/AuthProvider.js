
import useFirebase from '../hooks/useFirebase';
import { createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
}
