/**
 * Created by frank on 6/21/16.
 */
const React = require('react');
const helper = require('./helper');
const { getRestProps } = require('../utils');

const propTypes = {
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  isValid: React.PropTypes.bool,
  isInValid: React.PropTypes.bool
};

const Input = (props) => {
  const classNamesFromProps = helper.getInputClassnameFromProps(props);
  const type = props.type || 'text';
  return (<input
    className={classNamesFromProps}
    placeholder={props.placeholder}
    type={type}
    {...getRestProps(props, propTypes)}
  />);
};

Input.propTypes = propTypes;

export default Input;
