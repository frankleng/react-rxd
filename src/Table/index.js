const React = require('react');
const Table = require('react-foundation-components/lib/table').default;
const { getRestProps } = require('../utils');
const classnames = require('classnames');

const styles = require('./Table.scss');

const propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

const RxdTable = props => (
  <Table className={classnames(styles.table, props.className)} {...getRestProps(props, propTypes)}>
    {props.children}
  </Table>
);

RxdTable.propTypes = propTypes;

export default RxdTable;
