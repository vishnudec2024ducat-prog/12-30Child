import React from "react";

const Product = ({elm:{title,category,price,description,image}}) => {
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">
            {title}
          </strong>
          <h3 className="mb-0">{category}</h3>
          <div className="mb-1 text-body-secondary">$ {price}</div>
          <p className="card-text mb-auto overflow-hidden" style={{height:"17vh"}}>
            {description}
          </p>
         
        </div>
        <div className="col-md-4 ">
          <img
            src={image}
            className="bd-placeholder-img "
            height="250"
            width="200"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
