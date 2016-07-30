/**
 * Created by frank on 6/21/16.
 */
const React = require('react');
const { getInputClassnameFromProps, getValidationStates } = require('./helper');
const { getRestProps } = require('../utils');

const propTypes = {
  placeholder: React.PropTypes.string,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  validationState: React.PropTypes.oneOf(getValidationStates())
};

const Input = (props) => {
  const classNamesFromProps = getInputClassnameFromProps(props);
  return (<input
    className={classNamesFromProps}
    type="text"
    placeholder={props.placeholder}
    {...getRestProps(props, propTypes)}
  />);
};

Input.propTypes = propTypes;

export default Input;
