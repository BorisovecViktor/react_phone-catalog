import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../helpers/api';
import Breadcrumbs from '../components/Breadcrumbs';
import GoBackButton from '../components/GoBackButton';
import ProductDescription from '../components/ProductDescription';
import ProductsСarousel from '../components/ProductsСarousel';

import './ProductDetailsPage.scss';

type Props = {
  products: Product[];
}

const ProductDetailsPage: React.FC<Props> = ({ products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [productDetails, setProductDetails] = useState<ProductDetails>({} as ProductDetails);

  useEffect(() => {
    if (products.length) {
      const currentProduct = products.find(product => (product.id === productId))
      setProduct(currentProduct);
    }
  }, [products, productId]);

  useEffect(() => {
    getDetails(productId)
      .then(details => {
        setProductDetails(details)
      })
  }, [productId])
  console.log(product);

  return (
    <>
      <section className="section details">
        <Breadcrumbs products={products} />
        <GoBackButton />
        <h1 className="details__header">{productDetails.name}</h1>
        <div className="details__group-wrapper">
          {/* <Gallery
            images={productDetails.images} /> */}
          {/* <Card product={product} productDetails={productDetails}/> */}
          <ProductDescription {...productDetails} />
          {/* <TechSpecs product={product} productDetails={productDetails} /> */}
        </div>
      </section>
      <section className="section сarousel">
        <ProductsСarousel products={products} title={'You may also like'} />
      </section>
    </>
  );
}

export default ProductDetailsPage;

