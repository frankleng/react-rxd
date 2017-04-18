/**
 * Import directly from react-foundation-components
 */
const assign = require('lodash/assign');
const React = require('react');
const PropTypes = React.PropTypes;
const Grid = require('react-foundation-components/lib/grid-flex');
const { getRowClassnameFromProps } = require('./helper');

const Column = Grid.Column;
const Row = Grid.Row;

Column.propTypes = assign({

  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  xlarge: PropTypes.number,
  xxlarge: PropTypes.number,

  smallUp: PropTypes.number,
  mediumUp: PropTypes.number,
  largeUp: PropTypes.number,
  xlargeUp: PropTypes.number,
  xxlargeUp: PropTypes.number,

  smallOrder: PropTypes.number,
  mediumOrder: PropTypes.number,
  largeOrder: PropTypes.number,
  xlargeOrder: PropTypes.number,
  xxlargeOrder: PropTypes.number,

  smallOffset: PropTypes.number,
  mediumOffset: PropTypes.number,
  largeOffset: PropTypes.number,
  xlargeOffset: PropTypes.number,
  xxlargeOffset: PropTypes.number,

  shrink: PropTypes.bool,
  expand: PropTypes.string

}, Grid.Column.propTypes);
Row.propTypes = assign({

  expanded: PropTypes.bool,
  unstack: PropTypes.string,

  horizontalAlignment: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'spaced']),
  verticalAlignment: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),

  collapse: PropTypes.bool, // remove padding

  smallCollapse: PropTypes.oneOf(['collapse', 'uncollapse']),
  mediumCollapse: PropTypes.oneOf(['collapse', 'uncollapse']),
  largeCollapse: PropTypes.oneOf(['collapse', 'uncollapse']),
  xlargeCollapse: PropTypes.oneOf(['collapse', 'uncollapse']),
  xxlargeCollapse: PropTypes.oneOf(['collapse', 'uncollapse'])

}, Grid.Column.propTypes);

const RealstaxRow = (props) => {
  const { fullWidth, className, noGutter, ...rest } = props;
  return (
    <Row
      className={getRowClassnameFromProps({ fullWidth, className, noGutter })}
      {...rest}
    />
  );
};

RealstaxRow.propTypes = {
  fullWidth: PropTypes.bool,
  noGutter: PropTypes.bool,
  className: PropTypes.string
};

module.exports = {
  Row: RealstaxRow,
  Column
};
