import { autoCatchFn } from '../lib/autoCatchFn.js';
import { User } from '../models/userModel.js';

export const renderContactForm = autoCatchFn(async (req, res) => {
    res.json({ message: 'Contact endpoint ready', error: null });
});



export const contactForm = autoCatchFn(async (req, res) => {
  const { firstName, lastName, email, message } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "None of the fields must be empty" });
  }

  try {
    await User.create({ firstName, lastName, email, message });
    return res.status(200).json({ success: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    let message = 'Registration failed.';

    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      message = messages.join('<br>');
    }
    res.status(400).json({ error: message });
  }
});
