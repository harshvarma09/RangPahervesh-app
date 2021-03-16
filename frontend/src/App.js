import React from 'react';
import data from './data';
function App() {
  return (
        <div className="grid-container">
            <header className="row">
              
                    <div>
                    <a className="brand" href="/">RangPaherevesh</a>
                    </div>
              
                    <div>
                     <a href="/cart">Cart</a>
                    <a href="/signIn">SignIn</a>
                    </div>
            </header>
            
            <main>
            
                <div className='row center'>
                    {
                        data.products.map((product) => (  
                                
                            <div key={product._id} className="card">
                                <a href={`/product/${product._id}`}>
                                <img 
                                    className="medium" 
                                    src={product.imgage} 
                                    alt={product.name}>
                                </img>
                                </a>
                                <div className="card-body">
                                    <a href={`/product/${product._id}`}>
                                    <h2>{product.name}</h2>
                                    </a>
                            
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                </div>
                            
                               <div className="price">${product.Price}</div>
                                </div>
                                </div>
    
                        ))}
                    
                   
                
                </div>
            </main>
            <footer className="row center">All rights reserved.</footer>
        </div>
          
  );
}

export default App;
