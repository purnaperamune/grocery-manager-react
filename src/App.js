import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Pizza"
    },
    {
      id: 2,
      checked: false,
      item: "Milk"
    },
    {
      id: 3,
      checked: true,
      item: "Grapes"
    }
  ])

  


  return (
    <div className="App">

    <Header 
        title = "Groceries"
    />
    <Content 
        items = {items}
    />
    <Footer 
        items = {items}
    />
    </div>
  );
}

export default App;
