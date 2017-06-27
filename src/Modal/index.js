const React = require('react');
const classnames = require('classnames');

const styles = require('./Modal.scss');

const stopPropagation = (e) => e.stopPropagation();

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      if (nextProps.show) {
        document.body.style.overflow = 'hidden';
        this.setState({ show: nextProps.show });
      } else {
        this.setState({ hiding: true });

        window.setTimeout(() => {
          document.body.style.overflow = '';
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
    const { onCancel, children, micro, small, medium, large, huge } = this.props;
    const sizeClassnames = {
      [styles.micro]: micro,
      [styles.small]: small,
      [styles.medium]: medium,
      [styles.large]: large,
      [styles.huge]: huge
    };
    return (
      <div
        className={classnames(styles.container, { [styles.show]: this.state.show, [styles.hiding]: this.state.hiding })}
        onClick={onCancel}
      >
        <div className={styles.modalInnerContainer}>
          <div className={styles.centeringContainer}>
            <div className={classnames(styles.modal, { ...sizeClassnames })} onClick={stopPropagation}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired,
  micro: React.PropTypes.bool,
  small: React.PropTypes.bool,
  medium: React.PropTypes.bool,
  large: React.PropTypes.bool,
  huge: React.PropTypes.bool
};

export const Header = ({ children, onCancel, className, ...rest }) => (
  <div className={`${styles.modalHeader}  ${className || ''}`} {...rest}>
    <h4>{children}</h4>
    {
      onCancel && <div className={styles.closeModal} onClick={onCancel}>&#10005;</div>
    }
  </div>
);

Header.propTypes = {
  children: React.PropTypes.node.isRequired,
  onCancel: React.PropTypes.func,
  className: React.PropTypes.string
};

export const Body = ({ children, className, ...rest }) => (
  <div className={`${styles.modalBody}  ${className || ''}`} {...rest}>
    {children}
  </div>
);

Body.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export const Footer = ({ children, className, ...rest }) => (
  <div className={`${styles.modalFooter}  ${className || ''}`} {...rest}>
    {children}
  </div>
);

Footer.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export const BlurBackdropContainer = ({ children, show }) => (
  <div className={classnames({ [styles.modalBackdrop]: show })}>
    {children}
  </div>
);

BlurBackdropContainer.propTypes = {
  children: React.PropTypes.node.isRequired,
  show: React.PropTypes.bool
};

export default Modal;
