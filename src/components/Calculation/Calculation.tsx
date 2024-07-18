import React from "react";
import Heading from "../Heading";
import ClearAll from "../ClearAll";
import CalculatorFields from "../CalculatorFields";

interface CalculationProps {
  handleClearAll: (e: React.MouseEvent<HTMLAnchorElement>) => void;
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

const Calculation: React.FC<CalculationProps> = ({
  calculateMortgage,
  amount,
  years,
  interestRate,
  error,
  mortgageType,
  handleClearAll,
  handleAmountChange,
  handleYearsChange,
  handleInterestRateChange,
  handleMortgageTypeChange,
}) => {
  return (
    <div className="calculator-left-container">
      <div className="top-section">
        <Heading />
        <ClearAll handleClearAll={handleClearAll} />
      </div>

      <CalculatorFields
        handleAmountChange={handleAmountChange}
        handleYearsChange={handleYearsChange}
        handleInterestRateChange={handleInterestRateChange}
        handleMortgageTypeChange={handleMortgageTypeChange}
        calculateMortgage={calculateMortgage}
        amount={amount as number}
        years={years}
        interestRate={interestRate}
        error={error}
        mortgageType={mortgageType}
      />
    </div>
  );
};

export default Calculation;
