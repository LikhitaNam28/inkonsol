import React, { useState, useEffect } from "react";
import NewsletterList from "./NewsletterList";
import "./Filter.css";

const Filter = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  // Simulated fetch for years
  useEffect(() => {
    const fetchYears = async () => {
      const availableYears = ["2023", "2024"]; // Dynamic data can be fetched here
      setYears(availableYears);
    };
    fetchYears();
  }, []);

  return (
    <div className="filter-container">
      {/* Year Division */}
      <div className="year-division">
        <div className="year-buttons">
          {years.map((year) => (
            <div key={year} className="year-wrapper">
              <span
                className={`year-button ${selectedYear === year ? "active" : ""}`}
                onClick={() => setSelectedYear(selectedYear === year ? "" : year)}
              >
                {year}
              </span>
              {selectedYear === year && <div className="arrow"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Month Division */}
      {selectedYear && (
        <div className="month-division">
          <NewsletterList selectedYear={selectedYear} />
        </div>
      )}
    </div>
  );
};

export default Filter;
