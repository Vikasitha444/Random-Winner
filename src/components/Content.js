// context/FormContext.js
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState([]);

  const addSubmission = (submission) => {
    setSubmissions([...submissions, submission]);
  };

  return (
    <FormContext.Provider value={{ submissions, addSubmission }}>
      {children}
    </FormContext.Provider>
  );
};