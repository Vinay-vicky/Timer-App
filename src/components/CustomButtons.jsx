import PropTypes from 'prop-types';

export const MyButton = ({ children, onClick, disabled, id }) => {
  return (
    <button
      className="btn btn-primary my-button"
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {children}

      <style>{`
        .my-button {
          font-size: 28pt;
          font-weight: 300;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          padding: 0;
          transition: 0.15s ease-in-out;
          background-color: #0d6efd;
          border: none;
        }

        .my-button:hover {
          border-radius: 20px;
          filter: brightness(1.2);
          background-color: #0d6efd;
        }

        @media (max-width: 768px) {
          .my-button {
            width: 60px;
            height: 60px;
            font-size: 20pt;
          }
        }

        @media (max-width: 480px) {
          .my-button {
            width: 50px;
            height: 50px;
            font-size: 18pt;
          }
        }
      `}</style>
    </button>
  );
};

// ✅ Add PropTypes validation
MyButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string
};

// ✅ Optional default props
MyButton.defaultProps = {
  onClick: () => {},
  disabled: false,
  id: ''
};