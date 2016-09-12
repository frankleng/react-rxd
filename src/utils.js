/**
 * Created by frank on 7/29/16.
 */
const omit = require('lodash/omit');

export function getRestProps(props, propTypes) {
  return omit(props, Object.keys(propTypes));
}
