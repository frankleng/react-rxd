const React = require('react');
const { getRestProps } = require('../utils');
const _ = require('lodash');

const styles = require('./Checkbox.scss');

const propTypes = {
  id: React.PropTypes.string,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  children: React.PropTypes.node
};

class Checkbox extends React.Component {
  state = {
    id: null
  }

  componentWillMount() {
    const id = this.props.id || _.uniqueId('checkbox-');
    this.setState({ id });
  }

  render() {
    const { checked, onChange, children } = this.props;

    return (
      <span className={styles.checkboxContainer}>
        <input checked={checked} onChange={onChange} id={this.state.id} type="checkbox" {...getRestProps(this.props, propTypes)} />
        <label htmlFor={this.state.id}>{children ? <span>{children}</span> : null}</label>
      </span>
    );
  }
}

Checkbox.propTypes = propTypes;

export default Checkbox;
