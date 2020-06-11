import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../helpers/api';
import './ProductDetailsPage.scss';

import Breadcrumbs from '../components/Breadcrumbs';
import GoBackButton from '../components/GoBackButton';
import ProductGallery from '../components/ProductGallery';
import ProductDescription from '../components/ProductDescription';
import ProductTechSpecs from '../components/ProductTechSpecs';
import ProductPrice from '../components/ProductPrice';
import ProductsСarousel from '../components/ProductsСarousel';
import AddProductBtn from '../components/AddProductBtn';
import FavoriteBtn from '../components/FavoriteBtn';
import ProductShortSpecs from '../components/ProductShortSpecs';

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

  return (
    product ? (
      <>
        <section className="section product-details">
          <Breadcrumbs />
          <GoBackButton />
          <h1 className="page__title">{productDetails.name}</h1>
          <div className="product-details__container">
            <div className="product-details__column">
              <div className="product-details__gallery gallery">
                <ProductGallery
                  images={productDetails.images}
                  title={productDetails.name}
                />
              </div>
            </div>
            <div className="product-details__column">
              <div className="product-details__flex-wrap">
                <div className="product-details__wrap">
                  <div className="product-details__prices product__prices">
                    <ProductPrice
                      price={product.price}
                      discount={product.discount}
                    />
                  </div>
                  <div className="product-details__buttons product__actions">
                    <AddProductBtn
                      product={product}
                    />
                    <FavoriteBtn
                      product={product}
                    />
                  </div>
                  <ProductShortSpecs {...productDetails} />
                </div>
                <span className="product-details__id">
                  {`ID: ${product.id}`}
                </span>
              </div>
            </div>
            <div className="product-details__column">
              <ProductDescription {...productDetails} />
            </div>
            <div className="product-details__column">
              <ProductTechSpecs {...productDetails} />
            </div>
          </div>
        </section>
        <section className="section сarousel">
          <ProductsСarousel products={products} title={'You may also like'} />
        </section>
      </>
    ) : null
  );
}

export default ProductDetailsPage;
