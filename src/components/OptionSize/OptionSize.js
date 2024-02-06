import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = ({sizes, setCurrentSize, currentSize}) => {
  return (
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map(size => <li key={size.name}><button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={() => setCurrentSize(size.name)}>{size.name}</button></li>)}
        </ul>
      </div>
  )
}

export default OptionSize;