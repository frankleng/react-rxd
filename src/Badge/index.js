/**
 * Created by frank on 9/26/16.
 */
const React = require('react');
const { PropTypes } = React;
const { getBadgeClassnameFromProps } = require('./helper');

const { getRestProps } = require('../utils');

const propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  withIcon: PropTypes.bool,
  withoutNumber: PropTypes.bool,
  children: PropTypes.node
};

const Badge = (props) => {
  const className = getBadgeClassnameFromProps(props);
  return (
    <span className={className} {...getRestProps(props, propTypes)}>
      {props.children}
    </span>
  );
};

Badge.propTypes = propTypes;

export default Badge;
