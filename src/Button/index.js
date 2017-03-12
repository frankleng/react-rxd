/**
 * Created by frank on 6/21/16.
 */
const React = require('react');
const { getButtonClassnameFromProps } = require('./helper');
const { getRestProps } = require('../utils');

const propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  fullWidth: React.PropTypes.bool,
  success: React.PropTypes.bool,
  warning: React.PropTypes.bool,
  info: React.PropTypes.bool,
  danger: React.PropTypes.bool,
  flat: React.PropTypes.bool,
  plain: React.PropTypes.bool,
  children: React.PropTypes.node
};

const Button = (props) => {
  const classNamesFromProps = getButtonClassnameFromProps(props);
  return (
    <button className={classNamesFromProps} disabled={props.disabled} {...getRestProps(props, propTypes)}>
      {props.children}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
