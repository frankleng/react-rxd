/**
 * Created by frank on 6/21/16.
 */
import React, { PropTypes } from 'react';
import { getBaseClassName, getAvatarClassnameFromProps } from './helper';

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
  children: PropTypes.node,
  size: PropTypes.oneOf(['xsmall', 'medium', 'large', 'xlarge']),
  square: PropTypes.bool,
  className: PropTypes.string
};

export default Avatar;
