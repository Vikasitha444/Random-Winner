import React, { useState } from 'react';

const SubmitForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', whatsapp: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      timestamp: new Date().toLocaleString()
    });
    setFormData({ name: '', whatsapp: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">නම</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">WhatsApp අංකය</label>
          <input
            type="text"
            value={formData.whatsapp}
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
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

const FormSubmissions = ({ submissions }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
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
  );
};

const Navigation = ({ currentPage, onNavigate }) => (
  <div className="bg-white shadow mb-8">
    <div className="max-w-4xl mx-auto px-4 py-4 flex gap-4">
      <button 
        onClick={() => onNavigate('form')}
        className={`${currentPage === 'form' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:text-blue-700`}
      >
        Submit Form
      </button>
      <button 
        onClick={() => onNavigate('submissions')}
        className={`${currentPage === 'submissions' ? 'text-blue-700 font-bold' : 'text-blue-500'} hover:text-blue-700`}
      >
        View Submissions
      </button>
    </div>
  </div>
);

const App = () => {
  const [submissions, setSubmissions] = useState([]);
  const [currentPage, setCurrentPage] = useState('form');

  const handleSubmit = (newSubmission) => {
    setSubmissions([...submissions, newSubmission]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation 
          currentPage={currentPage} 
          onNavigate={setCurrentPage}
        />
        
        {currentPage === 'form' ? (
          <SubmitForm onSubmit={handleSubmit} />
        ) : (
          <FormSubmissions submissions={submissions} />
        )}
      </div>
    </div>
  );
};

export default App;