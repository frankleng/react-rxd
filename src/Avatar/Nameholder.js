/**
 * Created by frank on 6/21/16.
 */
import React, { PropTypes } from 'react';
import { styles } from './helper';

const Nameholder = (props) =>
  (<div className={styles.nameholder}>
    <div className="name">{props.name}</div>
    <div className="role">{props.role}</div>
  </div>);

Nameholder.propTypes = {
  name: PropTypes.node.isRequired,
  role: PropTypes.node
};

export default Nameholder;
