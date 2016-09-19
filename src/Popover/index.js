/**
 * Created by frank on 9/13/16.
 */
const React = require('react');

const { getPopoverClassnameFromProps } = require('./helper');

const Popover = (props) => {
  const { size, position, className, children, ...rest } = props;
  return (
    <div className={getPopoverClassnameFromProps({ size, position, className })} {...rest}>
      {children}
    </div>
  );
};

Popover.propTypes = {
  position: React.PropTypes.oneOf([
    'topleft', 'top', 'topright',
    'lefttop', 'left', 'leftbottom',
    'righttop', 'right', 'rightbottom',
    'bottomleft', 'bottomright'
  ]).isRequired,
  size: React.PropTypes.oneOf(['medium', 'large', 'xlarge']),
  children: React.PropTypes.node,
  className: React.PropTypes.string
};

export default Popover;
