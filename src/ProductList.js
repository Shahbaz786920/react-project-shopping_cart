import './App.css';

function ProductList({ product, addToCart }){
    return(
        <div className='flex'>
           {
            product.map((productItem)=>{
              return(
                <div style={{ width:'33%'}}>
                <div className='product-item'>
                    <img src={productItem.url}alt="img"/>
                    <p>{productItem.name} | {productItem.description}</p>
                    <p> Rs. {productItem.price}/- </p>
                    <button onClick={()=>addToCart(productItem) }>Add To Cart</button>
                </div>
             </div> )
            })
           }
        </div>
    )
}

export default ProductList