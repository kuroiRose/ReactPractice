import './App.css'
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';

const data = [
  { id:1, item: "eggs", quantity: 12, completed: true },
  { id:2, item: "milk", quantity: 1, completed: true },
  { id:3, item: "chicken", quantity: 4, completed: false },
  { id:4, item: "carrots", quantity: 6, completed: false },
  { id:5, item: "potato", quantity: 15, completed: true },
  { id:6, item: "cucumber", quantity: 6, completed: false },
  { id:7, item: "onions", quantity: 10, completed: true },
  { id:8, item: "curd", quantity: 2, completed: true },
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div>
      <h1>Property List</h1>
      <PropertyList properties={properties}/>
      <h1>Shopping List</h1>
      <ShoppingList items={data}/>
    </div>
  )
}

export default App
