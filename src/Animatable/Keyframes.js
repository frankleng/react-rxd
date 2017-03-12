/**
 * Created by frank on 7/29/16.
 */
const React = require('react');
const { getClassnamesFromProps } = require('./helpers');

const AnimatableKeyframes = (props) => (
  <div className={getClassnamesFromProps(props)}>
    {props.children}
  </div>
);

AnimatableKeyframes.propTypes = {
  shouldAnimate: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  keyframeClass: React.PropTypes.oneOf([
    'shake',
    'bounceIn',
    'fadeInUp',
    'fadeInDown',
    'fadeOutUp',
    'slideInUp',
    'bounceInUp',
    'flipInY',
    'fadeIn'
  ]).isRequired
};

export default AnimatableKeyframes;
