import './App.css';
import Button from './button';
import Greetings from './greeting'

function App() {

  const greetings=["hello","goodmorning","goodevening","goodafternoon","goodnight"]
  const newGreetings=greetings.map(greeting=> `${greeting} user`)

  return (
    <>
      <Greetings greetings={newGreetings}/>
      <Button />
    </>
  );
}

export default App;
