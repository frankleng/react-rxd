/**
 * Created by frank on 6/21/16.
 */
import React, { PropTypes } from 'react';
import * as helper from './helper';

const Input = (props) => {
  const classNamesFromProps = helper.getInputClassnameFromProps(props);
  return (<input className={`text-field ${classNamesFromProps}`} type="text" placeholder={props.placeholder} />);
};

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  validationState: PropTypes.oneOf(helper.validationStates)
};

export default Input;
