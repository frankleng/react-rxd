/**
 * Created by frank on 6/23/16.
 */
const styles = require('./Input.scss');
export { styles };

const _ = require('lodash');

export const validationStates = {
  success: 'success',
  invalid: 'invalid'
};

export function getValidationStates() {
  return _.values(validationStates);
}

export function getInputClassnameFromProps(props) {
  const classnames = [styles['input-field']];
  if (props.disabled) classnames.push(styles.disabled);
  if (props.validationState === validationStates.success) classnames.push(styles.success);
  else if (props.validationState === validationStates.invalid) classnames.push(styles.error);
  if (props.className) classnames.push(props.className);

  return classnames.join(' ');
}
