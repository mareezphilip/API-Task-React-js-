import productsData from "../products-data";
import Card from "./Card";
import './productlist.css'
import { useEffect, useId  , useState} from "react";
function ProductsList (){


    const [products , setProducts] = useState([]);
    useEffect( () =>{
        fetch('https://fakestoreapi.com/products').then((response)=> response.json())
        .then((data)=>setProducts(data))
        console.log("done")
    },[]);

    

    
    
    const allproducts = products.map((product)=>{
       
        return(
          /**   <div>
                {product.price > 100 && <Card product={product} key={product.id}/> }
            </div> */

        product.price > 100 ?  <Card product={product} key={product.id}/> : null
            
            
        )
    })
    return (
        <div class="product-list">
            <div class="row">
              {allproducts} 
            </div>
 
        </div>
        
       
    )
}
export default ProductsList;