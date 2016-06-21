/**
 * Created by frank on 6/22/16.
 */
import styles from './styles.scss';

export { styles };

/**
 * @param props
 * @returns {string}
 */
export function getBackgroundClassnameFromProps(props) {
  const classNames = [];
  if (props.fullScreen) classNames.push(styles.fullScreen);

  return classNames.join(' ');
}
