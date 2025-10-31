import React from 'react';
import './ApplyTitle.css';

const ApplyTitle = (props) => {
  return (
    <h2 className="apply-title">
      {props.text}
    </h2>
  );
};

export default ApplyTitle;
