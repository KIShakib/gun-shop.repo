import './App.css';
import AllGuns from './Components/AllGuns/AllGuns';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [cartDetails, setCartDetails] = useState({});
  useEffect(()=>{
    const fromLs = localStorage.getItem("products");
    if(fromLs){
      setCartDetails(JSON.parse(fromLs));
    }
  },[])

  return (
    <div className="App">

      <Navbar
        cartCount={cartCount} subTotal={subTotal} setSearchFieldValue={setSearchFieldValue} cartDetails={cartDetails}>
      </Navbar>

      <AllGuns
        setCartCount={setCartCount} cartCount={cartCount} subTotal={subTotal} setSubTotal={setSubTotal} searchFieldValue={searchFieldValue} cartDetails={cartDetails} setCartDetails={setCartDetails}> 
      </AllGuns>
      
    </div>
  );
}

export default App;
