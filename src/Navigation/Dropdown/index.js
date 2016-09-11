/**
 * Created by frank on 8/15/16.
 */
const React = require('react');
const styles = require('./Dropdown.scss');
const clickOutside = require('react-click-outside');

class NavDropDown extends React.Component {
  static propTypes = {
    dropRight: React.PropTypes.bool,
    style: React.PropTypes.string,
    className: React.PropTypes.string,
    buttonContent: React.PropTypes.node.isRequired,
    list: React.PropTypes.arrayOf(React.PropTypes.node).isRequired
  };

  state = {
    isOpened: false
  };

  // called by the click outside HOC
  handleClickOutside() {
    this.setState({ isOpened: false });
  }

  handleClick() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const { buttonContent, list, dropRight } = this.props;
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={this.handleClick}>{buttonContent}</button>
        <div className={`${styles.dropdownContent} ${dropRight ? styles.dropRight : null}`}>
         {list.map(item => item)}
        </div>
      </div>
    );
  }
}

module.exports = clickOutside(NavDropDown);
