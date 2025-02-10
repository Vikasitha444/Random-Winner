// components/SubmitForm.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext';

const SubmitForm = () => {
  const navigate = useNavigate();
  const { addSubmission } = useContext(FormContext);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubmission({
      ...formData,
      timestamp: new Date().toLocaleString()
    });
    setFormData({ name: '', whatsapp: '' });
    navigate('/submissions');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">නම</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">WhatsApp අංකය</label>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          යොමු කරන්න
        </button>
      </form>
    </div>
  );
};

// components/Submissions.js
import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const Submissions = () => {
  const { submissions } = useContext(FormContext);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Form Submissions</h2>
        <div className="grid grid-cols-3 gap-4 mb-4 font-bold">
          <div>Name</div>
          <div>WhatsApp</div>
          <div>Timestamp</div>
        </div>
        
        {submissions.map((submission, index) => (
          <div 
            key={index} 
            className="grid grid-cols-3 gap-4 py-2 border-t"
          >
            <div>{submission.name}</div>
            <div>{submission.whatsapp}</div>
            <div>{submission.timestamp}</div>
          </div>
        ))}

        {submissions.length === 0 && (
          <div className="text-gray-500 text-center py-4">
            No submissions yet
          </div>
        )}
      </div>
    </div>
  );
};