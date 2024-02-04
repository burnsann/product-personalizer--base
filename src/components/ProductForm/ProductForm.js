import clsx from 'clsx';
import Button from "../Button/Button"
import styles from "./ProductForm.module.scss"


const ProductForm = ({sizes, currentSize, currentColor, action, colors, setCurrentSize, prepareColorClassName, setCurrentColor}) => {
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map(size => <li key={size.name}><button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={() => setCurrentSize(size.name)}>{size.name}</button></li>)}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map(color => 
          <li key={color}>
            <button type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={() => setCurrentColor(color)} /></li>)}
        </ul>
      </div>
      <Button className={styles.button} onClick={action}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

export default ProductForm;