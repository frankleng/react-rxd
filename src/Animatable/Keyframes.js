/**
 * Created by frank on 7/29/16.
 */
const React = require('react');
const styles = require('./KeyframesAnimations.scss');
const classnames = require('classnames');

const AnimatableKeyframes = (props) => (
  <div
    className={classnames({
      [styles[props.keyframeClass]]: props.shouldAnimate
    })}
  >
    {props.children}
  </div>
);

AnimatableKeyframes.propTypes = {
  shouldAnimate: React.PropTypes.bool.isRequired,
  keyframeClass: React.PropTypes.oneOf(['shake']),
  children: React.PropTypes.node.isRequired
};

export default AnimatableKeyframes;
