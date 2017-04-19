const React = require('react');
const ReactDOM = require('react-dom');
const classnames = require('classnames');
const styles = require('./Modal.scss');
const _ = require('lodash');

const stopPropagation = (e) => e.stopPropagation();

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.appRootId = props.appRootId || 'app';
    this.modalPortalId = props.modalPortalId || 'afterApp';
    this.wrapperNode = null;
    this.modalId = null;
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('DOMContentLoaded', this.init);
    this.init();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.props.show) {
      if (nextProps.show) {
        this.wrapperNode.classList.add(styles.modalOpened);
        this.renderIntoDOM(nextProps);
      } else {
        this.renderIntoDOM(nextProps);
        window.setTimeout(() => {
          this.wrapperNode.classList.remove(styles.modalOpened);
          document.getElementById(this.modalId).innerHTML = '';
        }, 0.2 * 1000);
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('DOMContentLoaded', this.init);
    if (this.wrapperNode) this.wrapperNode.classList.remove(styles.modalOpened);
    if (this.modalPortalNode) this.modalPortalNode.removeChild(document.getElementById(this.modalId));
    delete this.wrapperNode;
    delete this.modalNode;
    delete this.modalPortalNode;
  }

  init = () => {
    this.modalId = _.uniqueId('modal_');
    this.wrapperNode = document.getElementById(this.appRootId);
    this.modalPortalNode = document.getElementById(this.modalPortalId);
    if (this.modalPortalNode) {
      this.modalNode = document.createElement('div');
      this.modalNode.id = this.modalId;
      this.modalPortalNode.appendChild(this.modalNode);
    }
  };

  handleKeyDown = e => {
    if (e.keyCode === 27)
      this.props.onCancel();
  };

  renderIntoDOM = (props) => {
    const { onCancel, children, small, medium, large, noBackdrop, show } = props;
    ReactDOM.render(
      <div
        className={classnames(styles.container, { [styles.show]: show, [styles.hiding]: !show })}
        onClick={onCancel}
      >
        {!noBackdrop && <div className={styles.modalBackdrop} />}
        <div className={classnames(styles.modal, { [styles.small]: small, [styles.medium]: medium, [styles.large]: large })} onClick={stopPropagation}>
          {children}
        </div>
      </div>,
      document.getElementById(this.modalId)
    );
  };

  render() {
    return null;
  }
}

Modal.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired,
  small: React.PropTypes.bool,
  medium: React.PropTypes.bool,
  large: React.PropTypes.bool,
  noBackdrop: React.PropTypes.bool,
  appRootId: React.PropTypes.string,
  modalPortalId: React.PropTypes.string,
  show: React.PropTypes.bool
};

export const Header = ({ children, onCancel }) => (
  <div className={styles.modalHeader}>
    <h4>{children}</h4>
    <div className={styles.closeModal} onClick={onCancel}>&#10005;</div>
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
