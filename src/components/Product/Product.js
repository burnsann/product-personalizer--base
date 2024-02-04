import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {// Poniżej elementy listy jak kolory czy rozmiary powinny być stworzone za pomocą .map; dobrze też wydzielić do osobnych komponentów opcje zmiany rozmiaru i koloru

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
    const selectedSize = props.sizes.find((size) => size.name === currentSize);
    return props.basePrice + selectedSize.additionalPrice;
  };

  const handleAddToCart = event => {
    event.preventDefault();

    console.log('Summary:');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      {/* <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div> */}
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm action={handleAddToCart} sizes={props.sizes} currentSize={currentSize} currentColor={currentColor} colors={props.colors} setCurrentSize={setCurrentSize} prepareColorClassName={prepareColorClassName} setCurrentColor={setCurrentColor} />
      </div>
    </article>
  )
};

Product.propTypes = {
    title: PropTypes.string,
    basePrice: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Product;