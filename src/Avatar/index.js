/**
 * Created by frank on 6/21/16.
 */
const React = require('react');
const { getBaseClassName, getAvatarClassnameFromProps } = require('./helper');

const Avatar = (props) => {
  const baseClass = getBaseClassName(props.children);
  const className = getAvatarClassnameFromProps(props);
  return (
    <div className={`${baseClass} ${className}`}>
      {props.children}
    </div>
  );
};

Avatar.propTypes = {
  children: React.PropTypes.node,
  size: React.PropTypes.oneOf(['xsmall', 'medium', 'large', 'xlarge']),
  square: React.PropTypes.bool,
  className: React.PropTypes.string
};

export default Avatar;
