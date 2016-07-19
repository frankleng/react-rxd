/**
 * Created by frank on 7/19/16.
 */
const React = require('react');
const style = require('./Card.scss');
const classnames = require('classnames');

const Card = (props) => (
  <div className={classnames(style.card, ...props)}>
    {props.children}
  </div>);

Card.propTypes = {
  primary: React.PropTypes.bool,
  success: React.PropTypes.bool,
  warning: React.PropTypes.bool,
  danger: React.PropTypes.bool,
  children: React.PropTypes.node
};

module.exports = Card;
