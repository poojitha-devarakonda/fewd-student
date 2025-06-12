// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   const [message, setMessage] = useState("Click the button!");
//   const handleClick = () => {
//     setMessage("Button clicked!");
//   };
//   return (
//     <div>
//       <p>{message}</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }
// export default App;

// <input
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//               />
//               <></>
//               <br></br>
//               <label>Pwd: </label>
//               <input
//                   type="password"
//                   name="password"
//                   valuimport './App.css';
// import React, { useState } from 'react';
//      function App() {
//       const [email, setEmail] = useState("");
//       const [password, setPassword] = useState("");
  
//       function onSubmit(event) {
//           event.preventDefault();
//           console.log("Email value: " + email);
//           console.log("Password value: " + password);
//       }
//       return (
//           <form onSubmit={onSubmit}>
//             <label>Email: </label>
//               e={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//               />
//               <></>
//               <br></br>
//               <input type="submit" value="Submit" />
//           </form>
//       );
//   }

// export default App;

// import React, { useState, useEffect } from 'react';

// function DF() {
//   return (
//     <>
//       <DynamicInput />
//     </>
//   );
// }
// function DynamicInput() {
//   const [formData, setFormData] = useState({});
//   const [formConfig, setFormConfig] = useState([]);

//   useEffect(() => {
//     const config = [
//       { name: 'name', label: 'Name', type: 'text', required: true },
//       { name: 'email', label: 'Email', type: 'email', required: true },
//       { name: 'message', label: 'message', type: 'message', required: true }

//     ];
//     setFormConfig(config);

//     const initialFormData = {};
//     config.forEach((field) => {
//       initialFormData[field.name] = '';
//     });
//     setFormData(initialFormData);
//   }, []);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form Data:', formData);
//   };

//   return (
//     <>
//       <Form
//         onSubmit={handleSubmit}
//         formData={formData}
//         handleInputChange={handleInputChange}
//         formConfig={formConfig}
//       />
//     </>
//   );
// }

// function Form({ onSubmit, formData, handleInputChange, formConfig }) {
//   return (
//     <form onSubmit={onSubmit}>
//       {formConfig.map(({ name, type, label, required }) => (
//         <div key={name}>
//           <label>{label}</label>
//           <input
//             type={type}
//             name={name}
//             value={formData[name] || ''}
//             required={required}
//             onChange={handleInputChange}
//           />
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default DF;




import React from "react";

// HOC to calculate sum and average
const withMarksCalculation = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const students = [
      { name: "Alice", marks: [80, 90, 85] },
      { name: "Bob", marks: [70, 75, 78] },
      { name: "Charlie", marks: [88, 89, 90] },
      { name: "David", marks: [60, 65, 70] },
      { name: "Eva", marks: [95, 92, 96] },
    ];

    // Add sum and average to each student
    const updatedStudents = students.map((student) => {
      const sum = student.marks.reduce((a, b) => a + b, 0);
      const average = (sum / student.marks.length).toFixed(2);
      return { ...student, sum, average };
    });

    return <WrappedComponent students={updatedStudents} {...props} />;
  };
};

// Base Component
const StudentMarks = ({ students }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Marks - Sum & Average</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Sum</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <tr key={idx}>
              <td>{student.name}</td>
              {student.marks.map((mark, i) => (
                <td key={i}>{mark}</td>
              ))}
              <td>{student.sum}</td>
              <td>{student.average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Enhanced Component
const EnhancedStudentMarks = withMarksCalculation(StudentMarks);

function App() {
  return <EnhancedStudentMarks />;
}

export default App;