/**
 * Created by frank on 7/29/16.
 */
const React = require('react');
const styles = require('./KeyframesAnimations.scss');
const classnames = require('classnames');

const AnimatableKeyframes = (props) => (
  <div
    className={classnames({
      [styles[props.keyframeClass]]: props.shouldAnimate,
      [props.className]: props.className
    })}
  >
    {props.children}
  </div>
);

AnimatableKeyframes.shouldComponentUpdate = () => true;

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
    'bounceInUp'
  ]).isRequired
};

export default AnimatableKeyframes;
