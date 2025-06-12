import React, { useState, useEffect } from 'react';

function DF() {
  return (
    <>
      <DynamicInput />
    </>
  );
}

function DynamicInput() {
  const [formData, setFormData] = useState({});
  const [formConfig, setFormConfig] = useState([]);

  useEffect(() => {
    const config = [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'message', label: 'message', type: 'message', required: true }

    ];
    setFormConfig(config);

    const initialFormData = {};
    config.forEach((field) => {
      initialFormData[field.name] = '';
    });
    setFormData(initialFormData);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
        formConfig={formConfig}
      />
    </>
  );
}

function Form({ onSubmit, formData, handleInputChange, formConfig }) {
  return (
    <form onSubmit={onSubmit}>
      {formConfig.map(({ name, type, label, required }) => (
        <div key={name}>
          <label>{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name] || ''}
            required={required}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DF;