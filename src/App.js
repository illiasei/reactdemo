import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogin from './components/GoogleLogin';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId="450324167322-059cpuku1m1or2n5t3n5pg0g2kooffqa.apps.googleusercontent.com">
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My App</h1>
          <GoogleLogin />
        </header>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App; 