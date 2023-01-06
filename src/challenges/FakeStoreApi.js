import { useState } from "react";
import { useEffect } from "react";

function FakeStoreApi() {

  const [product, setProduct] = useState("");
  const [indexes, setIndexes] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [isPrevious, setIsPrevious] = useState(false);
  const [isPreviousCount , setIsPreviousCount] = useState(0)

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        getProduct(data)       
      })
  }

  const getRandomNumber = () =>{
    let random = Math.floor(Math.random()*products.length);
    while(indexes.includes(random)){
      random = Math.floor(Math.random()*products.length);
    }
    return random;
  }

  const getProduct = (products, type) =>{
    if(type === "previous"){
       let currentIndex = indexes.indexOf(currentNumber);
       if(currentIndex === 0){
             return;
       }
       setProduct(products[indexes[currentIndex - 1]]);
       setCurrentNumber(indexes[currentIndex - 1]);
       setIsPrevious(true);
       setIsPreviousCount(isPreviousCount => isPreviousCount + 1);
      return;
    }
    let randomNumber = getRandomNumber();      
    indexes.push(randomNumber)
    setProduct(products[randomNumber]);
    setCurrentNumber(randomNumber);
  }

  const loadNextProduct = () => {
    if(indexes.length === products.length && !isPrevious ){
    return;
    }
    if(isPrevious){
      let currentIndex = indexes.indexOf(currentNumber);
       setProduct(products[indexes[currentIndex + 1]]);
       setCurrentNumber(indexes[currentIndex + 1]);
       setIsPreviousCount(isPreviousCount => isPreviousCount - 1);
       if(isPreviousCount === 1){
        setIsPrevious(false)
       }
       return;
    }
    getProduct(products);
  }
  const loadPreviousProduct = () => {
    getProduct(products, "previous");
  }


  useEffect(() => {
    getProducts()
  }, [])

  return <>

    {product ? <div className="products-container">
      <div className="product">
        <img src={product.image} alt="" />
        <h3>{product && product.title}</h3>
        <p>{product && product.description}</p>
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={loadPreviousProduct} className="btn btn-primary me-5 p-3">Previous</button>
        <button onClick={loadNextProduct} className="btn btn-success p-3">Next</button>

      </div>
    </div> : <h1>Loading ....</h1>}


  </>

}


export default FakeStoreApi;