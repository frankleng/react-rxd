/**
 * Created by frank on 7/19/16.
 */
const React = require('react');
const helper = require('./helper');

const Card = (props) => (
  <div className={helper.getCardClassnameFromProps(props)}>
    {props.children}
  </div>);

Card.propTypes = {
  primary: React.PropTypes.bool,
  success: React.PropTypes.bool,
  warning: React.PropTypes.bool,
  danger: React.PropTypes.bool,
  children: React.PropTypes.node,
  className: React.PropTypes.string
};

module.exports = Card;
