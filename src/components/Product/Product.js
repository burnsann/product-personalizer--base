import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const price = useMemo(() => {
    const selectedSize = props.sizes.find((size) => size.name === currentSize);
    return props.basePrice + selectedSize.additionalPrice;
  }, [currentSize]);

  const handleAddToCart = event => {
    event.preventDefault();

    console.log('Summary:');
    console.log('Name: ', props.title);
    console.log('Price: ', price);
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm action={handleAddToCart} sizes={props.sizes} currentSize={currentSize} currentColor={currentColor} colors={props.colors} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor} />
      </div>
    </article>
  )
};

Product.propTypes = {
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Product;