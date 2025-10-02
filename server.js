const express = require('express');
const app = express();
// Use port 3000 or the environment variable (common in production/PM2)
const PORT = process.env.PORT || 3000; 

// Middleware to parse incoming JSON payloads
app.use(express.json());

// --- API Endpoints ---

// GET /api/status: Health check endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API! Visit /api/status for status info.');
});
app.get('/api/status', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Node.js API is running!',
    port: PORT,
    environment: process.env.NODE_ENV || 'development'
  });
});

// GET /api/data/:id: Sample endpoint to fetch data
app.get('/api/data/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        id: id,
        item: `Data item ${id}`,
        source: 'In-memory placeholder data'
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`[API] Server listening on port ${PORT}`);
  console.log(`open http://localhost:${PORT}/api/status to check the status`);
  console.log(`open http://localhost:${PORT}/ to check the page`);
  
});
