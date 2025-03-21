
import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import ToDoList from './todo/ToDoList';

function Header(){
  return(
    <header>
      <h1>Aplikasi React</h1>
    </header>
  )
}
function Main(){
  return(
    <main>
      <h2>Selamat datang di Aplikasi React Alhamdana!</h2>
    </main>
  )
}
function Footer(){
  return(
    <footer>
      <p>&copy; 2025 Aplikasi React</p>
    </footer>
  )
}
function Example(){
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email,setEmail] = useState('');
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  return(
    <div>
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange}></input>
      <input type="number" placeholder="Umur" value={age} onChange={handleAgeChange}></input>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}></input>
      <p>{name} berumur {age} memiliki email {email}</p>
    </div>
  )
}
function App() {
  return (
    <div>
      <ToDoList />
      <Header />
      <Main />
      <Greeting name="John" />
      <Counter />
      <Example />
      <Footer />
    </div>
  );
}

export default App;
