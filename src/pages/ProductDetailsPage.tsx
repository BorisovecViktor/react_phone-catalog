import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.scss';

import * as store from '../store';
import { useDispatch, useSelector } from 'react-redux';

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
import Spinner from '../components/Spinner';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector(store.getProducts)
  const productsDetails = useSelector(store.getproductsDetails)
  const loading = useSelector(store.getIsLoading);

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (products.length) {
      const currentProduct = products.find(product => (product.id === productId))
      setProduct(currentProduct);
    }
  }, [products, productId]);

  useEffect(() => {
    dispatch(store.loadProductsDetails(productId));
  }, [dispatch]);

  return (
    <>
      {loading
        ?
        <Spinner />
        :
        product &&
        <>
          <section className="section product-details">
            <Breadcrumbs />
            <GoBackButton />
            <h1 className="page__title">{productsDetails.name}</h1>
            <div className="product-details__container">
              <div className="product-details__column">
                <div className="product-details__gallery gallery">
                  <ProductGallery
                    images={productsDetails.images}
                    title={productsDetails.name}
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
                    <ProductShortSpecs {...productsDetails} />
                  </div>
                  <span className="product-details__id">
                    {`ID: ${product.id}`}
                  </span>
                </div>
              </div>
              <div className="product-details__column">
                <ProductDescription {...productsDetails} />
              </div>
              <div className="product-details__column">
                <ProductTechSpecs {...productsDetails} />
              </div>
            </div>
          </section>
          <section className="section сarousel">
            <ProductsСarousel products={products} title={'You may also like'} />
          </section>
        </>
      }
    </>
  );
}

export default ProductDetailsPage;
