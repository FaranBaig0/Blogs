const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db'); 
require('dotenv').config();
const cors = require('cors');
 
const app = express();
app.use(express.json());
app.use(cors());
// --- REGISTER ROUTE ---
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        await db.query(sql, [username, email, hashedPassword]);

        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- LOGIN ROUTE ---
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const user = rows[0];

        
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json({ message: "Login successful!", userId: user.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(process.env.PORT, () => console.log(`Server on ${process.env.PORT}`));