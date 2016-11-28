import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Panel.scss';

const Panel = ({ children, className, ...rest }) => (
  <div className={classnames(styles.panel, className)} {...rest} >
    {children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Panel;
