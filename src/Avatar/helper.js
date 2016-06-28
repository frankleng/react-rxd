import styles from './Avatar.scss';

export { styles };

/**
 * @param props
 * @returns {string}
 */
export function getAvatarClassnameFromProps(props) {
  const classNames = [];
  if (props.size) classNames.push(styles[props.size]);
  if (props.square) classNames.push(styles.square);
  if (props.className) classNames.push(props.className);

  return classNames.join(' ');
}

/**
 * @param children
 * @returns {string}
 */
export function getBaseClassName(children) {
  return Array.isArray(children) ? styles['avatar-block'] : styles.avatar;
}
