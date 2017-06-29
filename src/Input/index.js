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
  refInput: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  value: React.PropTypes.any
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      currentValue: props.value
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!this.state.isFocused) this.setState({ currentValue: nextProps.value });
  }
  handleChange = (e) => {
    this.setState({ currentValue: e.target.value });
    if (this.props.onChange) this.props.onChange(e);
  };
  handleFocus = (e) => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) this.props.onFocus(e);
  };
  handleBlur = (e) => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) this.props.onBlur(e);
  };
  render() {
    const classNamesFromProps = helper.getInputClassnameFromProps(this.props);
    const type = this.props.type || 'text';
    return (<input
      className={classNamesFromProps}
      placeholder={this.props.placeholder}
      type={type}
      ref={this.props.refInput}
      {...getRestProps(this.props, propTypes)}
      onChange={this.handleChange}
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
      value={this.props.value || this.state.currentValue}
    />);
  }
}

Input.propTypes = propTypes;

export default Input;
