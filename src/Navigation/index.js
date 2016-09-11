/**
 * Created by frank on 8/10/16.
 */
const React = require('react');
const TopBar = require('react-foundation-components/lib/navigation/top-bar');
const Menu = require('react-foundation-components/lib/menu');

const Navigation = (props) => <TopBar stack="medium">
  <TopBarTitle>
    <Menu>
      <HideForScreenSize screenSize="large" componentClass={MenuItem}>
        <MenuIcon dark onClick={this.handleToggle} />
      </HideForScreenSize>
      <MenuItem text>Site Title</MenuItem>
    </Menu>
  </TopBarTitle>
  <ShowForScreenSize
    screenSize="large"
    componentClass={TopBarContent}
  >
    {props.leftItems &&
      <TopBarItem position="left">
        {props.leftItems}
      </TopBarItem>
    }
    {props.rightItems &&
      <TopBarItem position="right">
        {props.rightItems}
      </TopBarItem>
    }
  </ShowForScreenSize>
</TopBar>;

Navigation.propTypes = {
  logoPath: React.PropTypes.string,
  leftItems: React.PropTypes.node,
  rightItems: React.PropTypes.node
};

module.exports = Navigation;
