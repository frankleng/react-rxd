const React = require('react');

const FoundationSwitch = require('react-foundation-components/lib/switch');
const classnames = require('classnames');

const styles = require('./Switch.scss');

const propTypes = {
  className: React.PropTypes.string
};

const Switch = ({ className, ...rest }) => (
  <span className={classnames(styles.switch, className)}>
    <FoundationSwitch.Switch {...rest} />
  </span>
);

Switch.propTypes = propTypes;

export default Switch;
