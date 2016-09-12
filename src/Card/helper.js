/**
 * Created by frank on 7/27/16.
 */
/**
 * @param props
 * @returns {string}
 */
const classnames = require('classnames');
const styles = require('./Card.scss');

export function getCardClassnameFromProps(props) {
  const { primary, success, warning, danger } = props;
  return classnames({
    [styles.card]: true,
    [props.className]: !!props.className,
    primary,
    success,
    warning,
    danger
  });
}
