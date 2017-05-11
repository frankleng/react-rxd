/**
 * Created by frank on 5/11/17.
 */
const React = require('react');
const styles = require('./VerticalCenter.scss');

const VerticalCenter = ({ children }) =>
  <div className={styles.container}>
    <div className={styles.content}>
      {children}
    </div>
  </div>;

VerticalCenter.propTypes = {
  children: React.PropTypes.node.isRequired
};

module.exports = VerticalCenter;
