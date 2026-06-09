import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importação das rotas
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';
import categoryRoutes from './routes/categories.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota de verificação (Health Check)
app.get('/health', (req, res) => {
    res.status(200).json({ status: "UP", message: "Backend operando corretamente." });
});

// Vinculação de Rotas
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});