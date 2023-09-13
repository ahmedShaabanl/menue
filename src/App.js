import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Catigory from "./components/Catigory";
import CardList from "./components/CardList";
import { items } from "./Data";
import { useState } from "react";
function App() {
  const [itemsData, setItemsData] = useState(items);

  // get all catigory
const allCatigory= ['الكل' ,...new Set(items.map((i)=> i.category))]
  // filter by ctegory
  const filterCategory = (cat) => {
    if(cat === 'الكل'){
      setItemsData(items)
    }else{
    const newArr = items.filter((item)=> item.category === cat)
    setItemsData(newArr)
    }
  };

  // filter by search
  const filterSearch = (word) => {
    if(word !== ""){

    const newArr = items.filter((item)=> item.title === word)
    setItemsData(newArr)

    }
  };
  return (
    <div className="color-body font">
      <NavBar  filterSearch={filterSearch}/>
      <Container>
        <Header />
        <Catigory filterCategory={filterCategory} allCatigory={allCatigory} />
        <CardList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
