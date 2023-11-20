import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState } from "react";
import { useEffect } from "react";



function App() {

  const [items, setItems] = useState([]);
   
  const [cartItems, setCartIems] = useState([]);
  useEffect(() => {
    fetch('https://643d3da8f0ec48ce9056be5a.mockapi.io/Items').then((res) => {return res.json()}).then((json) => {setItems(json)});
   },[]);
   
  const[cartOpened, setCartOpened] = useState(false);

  return (
    <div className="wrapper clear">
      
    {cartOpened && <Drawer  onClose={()=> setCartOpened(false)}/>} 
    <Header onClickCart={()=> setCartOpened(true)}/>
    <div className="Baner mt-15 "><img className="mb-10" width={1080}  src="/img/ArtTradedesign.jpg" alt="Baner"/></div>
     <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
         <h1>All Design</h1>
         <div className="search-block d-flex">
           <img src="/img/Search.svg" alt="Search"/>
           <input placeholder="Search..."></input>
         </div>
      </div>
       <div className="d-flex justify-between flex-wrap">
      
    {items.map((obj) =>(
      <Card 
      title={obj.title} 
      price={obj.price} 
      imageUrl={obj.imageUrl}
      // onFavorite={()=> console.log('Добавили в закладки')}
      // onPlus={()=> console.log('Нажали плюс')}
      />
    ))}
                 
       </div>

     </div>

    </div>
  );
}

export default App;
