/**
 * Created by frank on 8/15/16.
 */
const styles = require('./Dropdown.scss');
export { styles };

const classnames = require('classnames');

export function getNavDropdownClassnameFromProps(props) {
  return classnames({
    [props.className]: !!props.className,
    primary,
    success,
    warning,
    danger,
    info,
    flat
  });
}
