import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLogin = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("response")
      console.log("response")
      console.log("response")
      console.log(response);
      console.log(response.access_token);
      try {
        // Send the access token to your Django backend
        const result = await axios.post('http://localhost:8000/users/api/v1/google/login/', {
          access_token: response.access_token
        });
        
        // Store the Django token in localStorage
        localStorage.setItem('token', result.data.token);
        
        // You can add redirect logic here
        console.log('Login successful:', result.data);
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onError: (error) => console.error('Login Failed:', error)
  });

  return (
    <button onClick={() => login()}>
      Sign in with Google
    </button>
  );
};

export default GoogleLogin; 