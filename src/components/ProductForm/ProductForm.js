import Button from "../Button/Button"
import styles from "./ProductForm.module.scss"
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from "../OptionSize/OptionSize";


const ProductForm = ({sizes, currentSize, currentColor, action, colors, setCurrentSize, setCurrentColor}) => {

  return (
    <form onSubmit={action}>
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <Button className={styles.button}>{/* Czy przekazanie handleAddToCart jest ok? */}
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

export default ProductForm;