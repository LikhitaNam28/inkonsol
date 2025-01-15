import React, { useState, useEffect } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./NewsletterList.css";

const NewsletterList = ({ selectedYear, onMonthSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null); // Tracks the selected month

  const newsletters = {
    "2024": ["january.pdf", "february.pdf", "march.pdf", "april.pdf"],
    "2023": [
      "february.pdf",
      "march.pdf",
      "april.pdf",
      "may.pdf",
      "june.pdf",
      "july.pdf",
      "august.pdf",
      "september.pdf",
      "october.pdf",
      "november.pdf",
      "december.pdf"
    ],
  };

  const defaultLayout = defaultLayoutPlugin();
  const currentNewsletters = newsletters[selectedYear] || [];

  const handleFileSelection = (file) => {
    setSelectedFile(`${process.env.PUBLIC_URL}/newsletters/${selectedYear}/${file}`);
    setSelectedMonth(file); // Update the selected month
    if (onMonthSelect) {
      onMonthSelect(); // Notify parent when a file is selected
    }
  };

  // Reset the selected month and file when the year changes
  useEffect(() => {
    setSelectedMonth(null);
    setSelectedFile(null);
  }, [selectedYear]);

  const renderRow = (row) => {
    return row.map((file, index) => (
      <li key={index} className="newsletter-item">
        <span
          className={`newsletter-button ${
            selectedMonth === file ? "selected" : ""
          }`}
          onClick={() => handleFileSelection(file)}
        >
          {file.replace(".pdf", "").slice(0, 3).toUpperCase()}
        </span>
      </li>
    ));
  };

  return (
    <div className="newsletter-container">
      {/* Render the current year's newsletters */}
      <div className="newsletter-row">
        <ul className="newsletter-list">{renderRow(currentNewsletters)}</ul>
      </div>
      {selectedFile && (
        <div className="pdf-viewer-container">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <div className="pdf-viewer">
              <Viewer fileUrl={selectedFile} plugins={[defaultLayout]} />
            </div>
          </Worker>
        </div>
      )}
    </div>
  );
};

export default NewsletterList;
