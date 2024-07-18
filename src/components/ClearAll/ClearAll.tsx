import React from "react";

interface ClearAllProps {
  handleClearAll: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ClearAll: React.FC<ClearAllProps> = ({ handleClearAll }) => {
  return (
    <div>
      {" "}
      <p className="clear-link">
        <a href="#" onClick={handleClearAll}>
          Clear all
        </a>
      </p>
    </div>
  );
};

export default ClearAll;
