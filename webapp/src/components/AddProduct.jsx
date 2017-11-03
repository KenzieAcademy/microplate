import React from 'react';

const AddProduct = (props) => {
  return (
    <form onSubmit={(event) => props.addProduct(event)}>
      <div className="form-group">
        <input
          name="productname"
          className="form-control input-lg"
          type="text"
          placeholder="Enter a username"
          required
          value={props.productname}
          onChange={props.handleChange}
        />
      </div>
      <input
        type="submit"
        className="btn btn-primary btn-lg btn-block"
        value="Submit"
      />
    </form>
  )
}

export default AddProduct;
