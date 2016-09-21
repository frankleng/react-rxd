const React = require('react');

const styles = require('./Table.scss');

const Table = ({ children }) => (
  <table className={styles.table}>
    {children}
  </table>
);

Table.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Table;
