/**
 * Created by frank on 5/8/17.
 */
const React = require('react');
const loadAnimation = typeof window !== 'undefined' ?
  require('bodymovin/build/player/bodymovin_light').loadAnimation : () => {}; // eslint-disable-line

class ReactBodymovin extends React.Component {
  componentDidMount() {
    const options = Object.assign({}, this.props.options);
    options.wrapper = this.wrapper;
    options.renderer = 'svg';
    this.animation = loadAnimation(options);
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillUnmount() {
    this.animation.destroy();
  }
  storeWrapper = (el) => {
    this.wrapper = el;
  };
  render() {
    return <div className="react-bodymovin-container" ref={this.storeWrapper} />;
  }
}

ReactBodymovin.propTypes = {
  options: React.PropTypes.object // see https://github.com/bodymovin/bodymovin
};

module.exports = ReactBodymovin;
