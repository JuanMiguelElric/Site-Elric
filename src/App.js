
import './App.css';
import Rota from './component/routpublic/Route.js';
import { AuthProvider } from './context/auth';


function App() {
  return (
    <AuthProvider>
      <Rota />

    </AuthProvider>

  );
}

export default App;
