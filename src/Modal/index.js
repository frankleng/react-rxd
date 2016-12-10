const React = require('react');
const classnames = require('classnames');

const styles = require('./Modal.scss');
const closeIcon = require('./close-icon.svg');

class Modal extends React.Component {
  state = {
    show: false
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      if (nextProps.show) {
        document.body.classList.add(styles.disableScroll);
        this.setState({ show: nextProps.show });
      } else {
        this.setState({ hiding: true });

        window.setTimeout(() => {
          document.body.classList.remove(styles.disableScroll);
          this.setState({ hiding: false, show: false });
        }, 0.2 * 1000);
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.classList.remove(styles.disableScroll);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27)
      this.props.onCancel();
  };

  render() {
    const { onCancel, children, small, large } = this.props;

    const stopPropagation = (e) => e.stopPropagation();

    return (
      <div
        className={classnames(styles.modalOverlay, { [styles.show]: this.state.show, [styles.hiding]: this.state.hiding })}
        onClick={onCancel}
      >
        <div className={classnames(styles.modal, { [styles.small]: small, [styles.large]: large })} onClick={stopPropagation}>
          {children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired,
  small: React.PropTypes.bool,
  large: React.PropTypes.bool
};

export const Header = ({ children, onCancel }) => (
  <div className={styles.modalHeader}>
    <h3>{children}</h3>
    <button onClick={onCancel}><img src={closeIcon} role="presentation" /></button>
  </div>
);

Header.propTypes = {
  children: React.PropTypes.node.isRequired,
  onCancel: React.PropTypes.func.isRequired
};

export const Body = ({ children, className }) => (
  <div className={`${styles.modalBody}  ${className || ''}`}>
    {children}
  </div>
);

Body.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export const Footer = ({ children }) => (
  <div className={styles.modalFooter}>
    {children}
  </div>
);

Footer.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Modal;
