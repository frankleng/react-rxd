const React = require('react');
const classnames = require('classnames');
const { getRestProps } = require('../utils');

const styles = require('./Status.scss');

const propTypes = {
  children: React.PropTypes.string.isRequired,
  value: React.PropTypes.oneOf(['default', 'success', 'warning', 'info', 'danger'])
};

const Status = props => {
  const { children, value } = props;

  return (
    <span
      className={classnames(styles.status, {
        [styles.success]: value === 'success',
        [styles.warning]: value === 'warning',
        [styles.info]: value === 'info',
        [styles.danger]: value === 'danger'
      })}

      {...getRestProps(props, propTypes)}
    >
      {children}
    </span>
  );
};

Status.propTypes = propTypes;

export default Status;
