import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Panel.scss';

const Panel = ({ children, className, collapse, ...rest }) => (
  <div className={classnames(styles.panel, className, { [styles.collapse]: collapse })} {...rest} >
    {children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  collapse: PropTypes.bool
};

export default Panel;
