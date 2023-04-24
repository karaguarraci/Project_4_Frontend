const Errors = ({ showError, errorMessage }) => {
  return (
    <div>
      {showError && (
        <div className="container p-5 serror">
          <div
            className="alert alert-danger alert-dismissible fade show signuperror"
            role="alert"
          >
            <strong>
              {errorMessage.map((message) => (
                <p key={message[0]}>
                  {message[0]} - {message[1][0]}
                </p>
              ))}
            </strong>
            <button
              type="button"
              className="close sclosebutton"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowError(false)}
            >
              <span aria-hidden="True">&times;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Errors;
