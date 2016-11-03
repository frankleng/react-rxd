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
  isInvalid: React.PropTypes.bool,
  refInput: React.PropTypes.func
};

const Input = (props) => {
  const classNamesFromProps = helper.getInputClassnameFromProps(props);
  const type = props.type || 'text';
  return (<input
    className={classNamesFromProps}
    placeholder={props.placeholder}
    type={type}
    ref={props.refInput}
    {...getRestProps(props, propTypes)}
  />);
};

Input.propTypes = propTypes;

// Workaround to get a ref to a stateless component
// See the note under https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
export class StatefulInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<Input {...this.props} />);
  }
}
StatefulInput.propTypes = propTypes;

export default Input;
