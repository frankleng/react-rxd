/**
 * Created by frank on 6/21/16.
 */
import React, { PropTypes } from 'react';
import { getBackgroundClassnameFromProps } from './helper';

const Background = (props) =>
  <div className={getBackgroundClassnameFromProps(props)}>
    {props.overlay}
    {props.children}
  </div>;

Background.propTypes = {
  children: PropTypes.node.isRequired,
  overlay: PropTypes.node,
  className: PropTypes.string,
  fullScreen: PropTypes.bool
};

export default Background;
