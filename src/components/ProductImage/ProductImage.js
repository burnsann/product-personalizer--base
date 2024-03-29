import styles from './ProductImage.module.scss'

const ProductImage = ({currentColor, title, name}) => {

  return (
    <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
  )
}

export default ProductImage;