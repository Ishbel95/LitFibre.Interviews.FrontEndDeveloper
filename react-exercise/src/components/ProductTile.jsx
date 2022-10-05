import React from "react";
import "./ProductTile.css";

// destructered props object, props passed into jsx
// created tile flip for each instance of productTile

const ProductTile = ({
  productName,
  productPrice,
  productImageSrc,
  productDesc,
  productContainNuts,
}) => {
  return (
    <div className="productTileContainer">
      <div className="productTile">
        <div className="productTileFront">
          <h2 className="productHeader">{productName}</h2>
          <img
            src={productImageSrc}
            alt={`${productName} product`}
            className="productImage"
          />
          <p>{productPrice}</p>
        </div>
        <div className="productTileBack">
          <h2>Description:</h2>
          <p>{productDesc}</p>
          <p className="productMayContain">
            {productContainNuts && `May Contain Nuts`}
          </p>
          <p>{productPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
