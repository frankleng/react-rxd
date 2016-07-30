/**
 * Created by frank on 6/22/16.
 */
const styles = require('./Background.scss');
export { styles };

/**
 * @param props
 * @returns {string}
 */
export function getBackgroundClassnameFromProps(props) {
  const classNames = [];
  if (props.fullScreen) classNames.push(styles.fullScreen);
  if (props.scaleToRelative) classNames.push(styles.scaleToRelative);
  if (props.noRepeat) classNames.push(styles.noRepeat);

  return classNames.join(' ');
}

export function getBackgroundImageStyle(props) {
  var bgImageStyle = `url("${props.imagePath}")`;
  if (props.darken)
    bgImageStyle = `linear-gradient(rgba(0, 0, 0, ${props.darken}), rgba(0, 0, 0, ${props.darken})), ${bgImageStyle}`;
  return bgImageStyle;
}
