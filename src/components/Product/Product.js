import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {// Poniżej elementy listy jak kolory czy rozmiary powinny być stworzone za pomocą .map; dobrze też wydzielić do osobnych komponentów opcje zmiany rozmiaru i koloru

  const [currentColor, setCurrenColor] = useState(props.colors[0]);
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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}><button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={() => setCurrentSize(size.name)}>{size.name}</button></li>)}
              {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li> */}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => 
              <li key={color}>
                <button type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={() => setCurrenColor(color)} /></li>)}
              {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
            </ul>
          </div>
          <Button className={styles.button} onClick={handleAddToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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