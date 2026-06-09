import express from 'express';
import { supabase } from '../lib/supabase.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.use(requireAuth);

// Listar Categorias do Usuário
router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('user_id', req.user.id);

    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json(data);
});

export default router;