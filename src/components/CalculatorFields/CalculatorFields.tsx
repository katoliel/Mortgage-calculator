import React from "react";
import "./calculatorfields.css";
import "../Results/results.css";

interface CalculatorFieldsProps {
  handleAmountChange: (e: any) => void;
  handleYearsChange: (e: any) => void;
  handleInterestRateChange: (e: any) => void;
  handleMortgageTypeChange: (e: any) => void;
  calculateMortgage: (e: any) => void;
  amount: number | undefined;
  years: any;
  interestRate: any;
  error: string;
  mortgageType: any;
}

const CalculatorFields: React.FC<CalculatorFieldsProps> = ({
  handleAmountChange,
  handleYearsChange,
  handleInterestRateChange,
  handleMortgageTypeChange,
  calculateMortgage,
  amount,
  years,
  interestRate,
  error,
  mortgageType,
}) => {
  return (
    <div>
      <div className="input-group">
        <div className="mortgage-amount">
          <label>Mortgage Amount</label>
          <div className="input-with-currency">
            <div className="field-sign">£</div>
            <input
              name="Amount"
              type="number"
              onChange={handleAmountChange}
              className="text-input"
              min="0"
              value={amount}
            />
          </div>
        </div>
        <div className="mortgage-row">
          <div className="mortgage-fields">
            <label>Mortgage Term</label>
            <div className="input-other">
              <input
                name="Years"
                type="number"
                min="1"
                max="40"
                onChange={handleYearsChange}
                className="text-input"
                value={years}
              />
              <div className="field-sign">years</div>
            </div>
          </div>

          <div className="mortgage-fields">
            <label>Interest Rate</label>
            <div className="input-other">
              <input
                name="Interest Rate"
                type="number"
                onChange={handleInterestRateChange}
                className="text-input"
                step="0.01"
                min="0"
                max="100"
                value={interestRate}
              />
              <div className="field-sign">%</div>
            </div>
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <div>
          <label>Mortgage type</label>
          <div className="radio-fields">
            <input
              name="Repayment"
              type="radio"
              value="Repayment"
              className="custom-radio"
              checked={mortgageType === "Repayment"}
              onChange={handleMortgageTypeChange}
            />
            <label className="radio-text">Repayment</label>
          </div>

          <div className="radio-fields">
            <input
              name="Interest Only"
              type="radio"
              value="Interest Only"
              className="custom-radio"
              checked={mortgageType === "Interest Only"}
              onChange={handleMortgageTypeChange}
            />
            <label className="radio-text"> Interest Only</label>
          </div>
        </div>
      </div>
      <button onClick={calculateMortgage}>
        <img
          src="../src/assets/icon-calculator.svg"
          className="icon"
          alt="calculator icon"
          width="10%"
          height="10%"
        />
        Calculate Repayments
      </button>
    </div>
  );
};

export default CalculatorFields;
