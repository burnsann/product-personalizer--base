import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({colors, currentColor, setCurrentColor}) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
    <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map(color => 
          <li key={color}>
            <button type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={() => setCurrentColor(color)} /></li>)}
        </ul>
      </div>
  )
}

OptionColor.propTypes = {
  currentColor: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired
};

export default OptionColor;