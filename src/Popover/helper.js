/**
 * Created by frank on 9/13/16.
 */
const styles = require('./Popover.scss');

export function getPopoverClassnameFromProps(props) {
  const className = [styles.popover];
  if (props.position) className.push(styles[props.position]);
  if (props.size) className.push(styles[props.size]);
  if (props.className) className.push(props.className);
  return className.join(' ');
}
