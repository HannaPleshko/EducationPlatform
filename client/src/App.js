import RoutesProvider from './routes/Routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token, login, logout } = useAuth();
  const isAuthenticated = !!token;

  const routes = RoutesProvider(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {routes}
    </AuthContext.Provider>
  );
}

export default App;
