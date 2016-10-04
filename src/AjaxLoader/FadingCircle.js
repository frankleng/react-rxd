/**
 * Created by frank on 9/10/16.
 */
const React = require('react');
const styles = require('./FadingCircle.scss');
const range = require('lodash/range');

// 12x
const Circles = range(0, 12).map(
  () => <div className={styles.circle} key={Math.random()} />
);

const Circle = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={`${styles.fadingCircle} ${className || ''}`} {...rest}>
      {Circles}
    </div>
  );
};

Circle.propTypes = {
  className: React.PropTypes.string
};

export default Circle;
