/**
 * Created by frank on 9/15/16.
 */
const styles = require('./Row.scss');
export { styles };

export function getRowClassnameFromProps(props) {
  const className = [];
  if (props.fullWidth) className.push(styles.fullWidth);
  if (props.noGutter) className.push(styles.noGutter);
  if (props.className) className.push(props.className);
  return className.join(' ');
}
