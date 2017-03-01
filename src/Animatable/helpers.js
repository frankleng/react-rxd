/**
 * Created by frank on 2/24/17.
 */
const classnames = require('classnames');
const styles = require('./KeyframesAnimations.scss');

export function getClassnamesFromProps(props) {
  return classnames({
    [styles[props.keyframeClass]]: props.shouldAnimate,
    [props.className]: props.className
  });
}
