/**
 * Created by frank on 6/23/16.
 */
const styles = require('./Input.scss');
export { styles };

export function getInputClassnameFromProps(props) {
  const classnames = [styles.inputField];
  if (props.disabled) classnames.push(styles.disabled);
  if (props.isValid) classnames.push(styles.success);
  else if (props.isInvalid) classnames.push(styles.invalid);
  if (props.className) classnames.push(props.className);

  return classnames.join(' ');
}
