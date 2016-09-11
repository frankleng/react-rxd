/**
 * Created by frank on 9/10/16.
 */
const React = require('react');
const styles = require('./Bars.scss');
const range = require('lodash/range');

// 10x
const LoadingBars = range(0, 10).map(
  () => <div className={styles.loadingBar} key={Math.random()} />
);

const Bars = () =>
  <div>
    {LoadingBars}
  </div>;

export default Bars;
