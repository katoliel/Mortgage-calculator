import React from "react";

interface ResultsProps {
  interestOnlyResult: number | null;
  result: number | null;
  totalResult: number | null;
}

const Results: React.FC<ResultsProps> = ({
  interestOnlyResult,
  result,
  totalResult,
}) => {
  return (
    <div className="calculator-right-container">
      {interestOnlyResult === null && result === null && (
        <>
          <img src="../src/assets/illustration-empty.svg" alt="Empty illustration" />
          <h2 className="results"> Result shown here</h2>
          <p className="results-text center-text ">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </>
      )}

      {result !== null && (
        <div className="result">
          <h2 className="results">Your results</h2>
          <p className="results-text ">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
          <div className="results-box">
            <p className="results-text">Your monthly repayments</p>
            <p className="repayment-amount">£{result.toFixed(2)}</p>
            <hr />
            <p className="results-text">Total you'll repay over the term</p>
            <p className="total-result">
              £{totalResult && totalResult.toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {interestOnlyResult !== null && (
        <div className="result">
          <h2 className="results">Your results</h2>
          <p className="results-text">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
          <div className="results-box">
            <p className="results-text">Your monthly repayments</p>
            <p className="repayment-amount">£{interestOnlyResult.toFixed(2)}</p>
            <hr />
            <p className="results-text">Total you'll repay over the term</p>
            <p className="total-result">
              £{totalResult && totalResult.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
