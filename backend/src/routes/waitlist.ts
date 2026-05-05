import { Router, Request, Response } from 'express';
import { supabase } from '../lib/supabase';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { firstName, lastName, email, school } = req.body;

  if (!firstName || typeof firstName !== 'string' || !firstName.trim()) {
    res.status(400).json({ error: 'First name is required.' });
    return;
  }

  if (!lastName || typeof lastName !== 'string' || !lastName.trim()) {
    res.status(400).json({ error: 'Last name is required.' });
    return;
  }

  if (!email || typeof email !== 'string') {
    res.status(400).json({ error: 'Email is required.' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: 'Invalid email address.' });
    return;
  }

  const { error } = await supabase.from('waitlist').insert([
    {
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.toLowerCase().trim(),
      school: school?.trim() || null,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    if (error.code === '23505') {
      res.status(409).json({ error: 'This email is already on the waitlist.' });
      return;
    }
    console.error('Supabase error:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
    return;
  }

  res.status(201).json({ message: 'Successfully joined the waitlist!' });
});

export default router;
