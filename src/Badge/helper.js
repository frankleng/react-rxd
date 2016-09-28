/**
 * Created by frank on 7/28/16.
 */
const styles = require('./Badge.scss');
export { styles };

const classnames = require('classnames');

export function getBadgeClassnameFromProps(props) {
  const { primary, success, warning, danger, withoutNumber, withIcon } = props;
  return classnames({
    [styles.badge]: true,
    [props.className]: !!props.className,
    [styles.primaryBadge]: primary,
    [styles.successBadge]: success,
    [styles.warningBadge]: warning,
    [styles.dangerBadge]: danger,
    [styles.withoutNumber]: withoutNumber,
    [styles.withIcon]: withIcon
  });
}
