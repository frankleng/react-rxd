const React = require('react');
const { getRestProps } = require('../utils');
const classnames = require('classnames');

const styles = require('./Table.scss');

const propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

const Table = props => (
  <table className={classnames(styles.table, props.className)} {...getRestProps(props, propTypes)}>
    {props.children}
  </table>
);

Table.propTypes = propTypes;

export default Table;
