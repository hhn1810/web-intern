import AddedItem from './components/AddedItem'
import Item from './components/Item'
import jsonData from './shoes.json'

const loadData = JSON.parse(JSON.stringify(jsonData))
function App() {
  return (
    <div className="main-content">
      <Item products={loadData} />
      <AddedItem />
    </div>
  )
}

export default App
