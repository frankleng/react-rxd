/**
 * Created by frank on 6/23/16.
 */
const styles = require('./Input.scss');
export { styles };

export const validationStates = {
  success: 'success',
  error: 'invalid'
};

export function getInputClassnameFromProps(props) {
  const classnames = [];
  if (props.disabled) classnames.push(styles.disabled);
  if (props.validationState === validationStates.success) classnames.push(styles.success);
  else if (props.validationState === validationStates.error) classnames.push(styles.error);
  if (props.className) classnames.push(props.className);

  return classnames.join(' ');
}
