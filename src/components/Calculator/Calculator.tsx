import React, { useState } from "react";
import "./calculator.css";
import "../../App.css";
import "../Heading/heading.css";
import Results from "../Results/Results";
import Calculation from "../Calculation/Calculation";

interface CalculatorProps {}

const Calculator: React.FC<CalculatorProps> = () => {
  const [amount, setAmount] = useState<number | string>();
  const [years, setYears] = useState<any>("");
  const [interestRate, setInterestRate] = useState<any>("");
  const [result, setResult] = useState<number | null>(null);
  const [interestOnlyResult, setInterestOnlyResult] = useState<number | null>(
    null
  );
  const [error, setError] = useState<string>("");
  const [mortgageType, setMortgageType] = useState<any>(null);
  const [totalResult, setTotalResult] = useState<number | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
    setError("");
  };

  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueYears = parseInt(e.target.value);
    if (valueYears < 1) {
      setError("The minimum amount of years is 1");
    } else if (valueYears > 40) {
      setError("The maximum amount of years is 40");
    } else {
      setError("");
      setYears(valueYears);
    }
  };

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const interestRateValue = parseFloat(e.target.value);
    if (interestRateValue < 0.01) {
      setError("The minimum interest rate is 0.01");
    } else if (interestRateValue > 100) {
      setError("The maximum interest rate is 100");
    } else {
      setError("");
      setInterestRate(interestRateValue);
    }
  };

  const calculateTotalRepaymentMortgage = (
    amount: number,
    years: number,
    interestRate: number
  ): number => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = years * 12;
    const numerator =
      amount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyPayment = numerator / denominator;
    return monthlyPayment * numberOfPayments;
  };

  const calculateTotalInterestOnlyMortgage = (
    amount: number,
    years: number,
    interestRate: number
  ): number => {
    const yearlyInterest = (interestRate / 100) * amount;
    const totalInterestPayments = yearlyInterest * years;
    return totalInterestPayments + amount;
  };

  const calculateMortgage = () => {
    if (!amount || !years || !interestRate || !mortgageType) {
      setError("All fields must be filled out, including mortgage type.");
    } else {
      setError("");

      if (mortgageType === "Repayment") {
        if (typeof amount === "number") {
          const totalRepayment = calculateTotalRepaymentMortgage(
            amount,
            years,
            interestRate
          );
          setTotalResult(totalRepayment);
          setResult(totalRepayment / (years * 12)); // Monthly repayment
          setInterestOnlyResult(null);
        }
      } else if (mortgageType === "Interest Only") {
        const totalInterestOnly = calculateTotalInterestOnlyMortgage(
          amount as number,
          years,
          interestRate
        );
        setTotalResult(totalInterestOnly);
        setInterestOnlyResult(totalInterestOnly / (years * 12)); // Monthly interest only payment
        setResult(null);
      }
    }
  };

  const handleClearAll = (e: any) => {
    e.preventDefault();
    setAmount("");
    setYears("");
    setInterestRate("");
    setResult(null);
    setTotalResult(null);
    setInterestOnlyResult(null);
    setMortgageType(null);
    setError("");
  };

  const handleMortgageTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMortgageType(e.target.value);
    setError("");
  };

  return (
    <div className="calculator-container">
      <div className="wrapper">
        <Calculation
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
          handleClearAll={handleClearAll}
        />
        <Results
          interestOnlyResult={interestOnlyResult}
          result={result}
          totalResult={totalResult}
        />
      </div>
    </div>
  );
};

export default Calculator;
