import logo from './logo.svg';
import './App.css';
import Message from './Message';
import StudentRegistrationForm from './StudentRegistrationForm';

function App() {
  return (
    <div className='App'>
      <StudentRegistrationForm />
      <Message message1='hello react 1' message2='message 123' />
      <Message message1='hello react 12' message2='message 1234' />
      <Message message1='hello react 12' message2='message 12345' />
    </div>
  );
}

export default App;

