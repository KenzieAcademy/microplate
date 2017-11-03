import React from 'react';

const ProductList = (props) => {
  return (
    <div>
      {
        props.products.map((product) => {
          return (
            <h4
              key={product._id}
              className="well"
            >{product.name}
            </h4>
          )
        })
      }
    </div>
  )
};

export default ProductList;
