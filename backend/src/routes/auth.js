import express from 'express';
import { supabase } from '../lib/supabase.js';

const router = express.Router();

// Registro de Usuário
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) return res.status(400).json({ error: error.message });
    return res.status(201).json({ message: 'Usuário registrado com sucesso!', data });
});

// Login de Usuário
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ message: 'Login realizado com sucesso!', data });
});

export default router;