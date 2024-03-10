// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [dept, setDept] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/students', { name, id, dept });
      fetchStudents();
      setName('');
      setId('');
      setDept('');
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" placeholder="Department" value={dept} onChange={(e) => setDept(e.target.value)} />
        <button type="submit">Add Student</button>
      </form>
      <h2>All Students</h2>
      <h6>Sudeep 2200030000 CSE-H</h6>
      <h6>Pradeep 2200030001 CSE-H</h6>
      <h6>Navadeep 2200040000 ECE</h6>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} - {student.id} - {student.dept}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
