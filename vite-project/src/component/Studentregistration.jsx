import React, { useState } from "react";

function StudentRegistration() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!student.name || !student.email || !student.course) {
      alert("Please fill all fields");
      return;
    }

    // Save submitted data
    setSubmittedData(student);

    alert(`Registered: ${student.name}`);
    console.log(student);

    // Clear form
    setStudent({
      name: "",
      email: "",
      course: "",
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
          style={{ padding: "8px", width: "200px" }}
        />
        <br /><br />

        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
          style={{ padding: "8px", width: "200px" }}
        />
        <br /><br />

        <label>Course:</label><br />
        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
          style={{ padding: "8px", width: "200px" }}
        />
        <br /><br />

        <button type="submit" style={{ padding: "10px 20px" }}>
          Register
        </button>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Registered Student</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
        </div>
      )}
    </div>
  );
}

export default StudentRegistration;