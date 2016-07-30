/**
 * Created by frank on 6/21/16.
 */
const React = require('react');
const { getBackgroundClassnameFromProps, getBackgroundImageStyle } = require('./helper');

const Background = (props) =>
  <div
    className={getBackgroundClassnameFromProps(props)}
    style={{
      backgroundImage: getBackgroundImageStyle(props)
    }}
  />;

Background.propTypes = {
  className: React.PropTypes.string,
  fullScreen: React.PropTypes.bool,
  imagePath: React.PropTypes.string.isRequired,
  noRepeat: React.PropTypes.bool,
  scaleToRelative: React.PropTypes.bool,
  darken: React.PropTypes.number  // percentage of black opacity
};

export default Background;
