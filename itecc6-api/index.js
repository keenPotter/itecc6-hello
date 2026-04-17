
   const express = require('express') 
   const app = express() 
   const PORT = 3000 
 
   // Middleware to parse JSON request bodies 
   app.use(express.json()) 
 
   // Route 1: GET / - Welcome message 
   app.get('/', (req, res) => { 
      res.json({ 
         message: 'Hello from Express.js!', 
         timestamp: new Date().toISOString() 
      }) 
   }) 

let students = [ 
   { id: 1, name: 'Juan dela Cruz', course: 'BSIT' }, 
   { id: 2, name: 'Maria Santos', course: 'BSIT' }, 
];

// Route 2: GET /api/students - Returns a list of students 
app.get('/api/students', (req, res) => { 
   res.json({ data: students, count: students.length }) 
}) 

// Route 3: POST /api/students - Add a new student
app.post("/api/students", (req, res) => {
  const { name, course } = req.body;

  // validation
  if (!name || !course) {
    return res.status(400).json({ message: "Name and course are required" });
  }

  const newStudent = {
    id: students.length + 1,
    name: name,
    course: course
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// Start server 
app.listen(PORT, () => { 
   console.log(`Server running at http://localhost:${PORT}`) 
});