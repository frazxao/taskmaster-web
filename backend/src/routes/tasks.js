import express from 'express';
import { supabase } from '../lib/supabase.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Todas as rotas de tarefas exigem autenticação
router.use(requireAuth);

// Listar Tarefas do Usuário Autenticado
router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', req.user.id);

    if (error) {
        return res.status(400).json({
            error: error.message
        });
    }

    return res.status(200).json(data);
});

// Criar Nova Tarefa
router.post('/', async (req, res) => {
    const { title, description, category_id } = req.body;

    const { data, error } = await supabase
        .from('tasks')
        .insert([
            {
                title,
                description,
                category_id,
                user_id: req.user.id
            }
        ])
        .select();

    if (error) {
        return res.status(400).json({
            error: error.message
        });
    }

    return res.status(201).json(data[0]);
});

// Atualizar Tarefa
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    const {
        title,
        description,
        category_id,
        completed
    } = req.body;

    const { data, error } = await supabase
        .from('tasks')
        .update({
            title,
            description,
            category_id,
            completed
        })
        .eq('id', id)
        .eq('user_id', req.user.id)
        .select();

    if (error) {
        return res.status(400).json({
            error: error.message
        });
    }

    return res.status(200).json(data[0]);
});

// Excluir Tarefa
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id)
        .eq('user_id', req.user.id);

    if (error) {
        return res.status(400).json({
            error: error.message
        });
    }

    return res.status(200).json({
        message: 'Tarefa removida com sucesso'
    });
});

export default router;