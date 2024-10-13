import { useState } from "react"
import axios from 'axios';
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = async () => {
      try {
          const response = await axios.post('http://localhost:3000/api/v1/signin', {
              email,
              password
          });

          // Handle successful response
          console.log('Sign-in successful:', response.data);
          // Example: Save token to local storage or handle authentication
          localStorage.setItem('token', response.data.token);
          window.location.href = '/dashboard'; // Redirect to dashboard or another page

      } catch (err) {
          // Handle errors
          setError('Invalid email or password');
          console.error('Sign-in error:', err.response ? err.response.data : err.message);
      }
  };

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} 
          onClick={handleSignin}/>//
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}