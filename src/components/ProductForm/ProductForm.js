import Button from "../Button/Button"
import styles from "./ProductForm.module.scss"
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from "../OptionSize/OptionSize";
import PropTypes from 'prop-types';


const ProductForm = ({sizes, currentSize, currentColor, action, colors, setCurrentSize, setCurrentColor}) => {

  return (
    <form onSubmit={action}>
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired
};

export default ProductForm;