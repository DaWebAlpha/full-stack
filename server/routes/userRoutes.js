import { contactForm, renderContactForm } from "../controller/userController.js";
import express from "express";


const router = express.Router();

router.get('/contact', renderContactForm);
router.post('/contact',contactForm);

export default router;



