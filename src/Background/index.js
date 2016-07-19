/**
 * Created by frank on 6/21/16.
 */
const React = require('react');
const { getBackgroundClassnameFromProps } = require('./helper');

const Background = (props) =>
  <div className={getBackgroundClassnameFromProps(props)}>
    {props.overlay}
    {props.children}
  </div>;

Background.propTypes = {
  children: React.PropTypes.node.isRequired,
  overlay: React.PropTypes.node,
  className: React.PropTypes.string,
  fullScreen: React.PropTypes.bool
};

export default Background;
