import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
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

  const [newItem, setNewItem] = useState('');

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = {
      id,
      checked: false,
      item
    }
    const listItems = [
      ...items, 
      newItem
    ]
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newItem){
      addItem(newItem)
      setNewItem('');
      console.log("Submitted")
    }
    else{
      return;
    }
  }
  


  return (
    <div className="App">

    <Header 
        title = "Groceries"
    />
    <AddItem 
        handleSubmit={handleSubmit}
        newItem = {newItem}
        setNewItem = {setNewItem}
    />
    <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
    />
    <Footer 
        items = {items}
    />
    </div>
  );
}

export default App;
