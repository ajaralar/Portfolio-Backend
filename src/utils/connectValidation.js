import { body } from 'express-validator'

export const connectValidation = [
    // First-name field must not be empty, and trim whitespace
    body('fname').trim().notEmpty().withMessage('First name is required.'),

    // Last-name field must not be empty, and trim whitespace
    body('lname').trim().notEmpty().withMessage('Last name is required.'),

    // Email field must be an email format, normalize it, and prevent emptiness
    body('email').trim().isEmail().withMessage('A valid email address is required.'),

    // Subject field must not be empty
    body('subject').notEmpty().withMessage('Subject is required.'),

    // Message field must be at least 10 characters long
    body('message').isLength({ min: 10 }).withMessage('Message must be at least 10 characters long.'),
];