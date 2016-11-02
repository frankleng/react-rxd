import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Panel.scss';

const Panel = ({ children, className }) => (
  <div className={classnames(styles.panel, className)}>
    {children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Panel;
