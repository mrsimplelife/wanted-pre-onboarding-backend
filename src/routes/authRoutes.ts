import express from 'express';
import { login, signup } from '../controllers/authController';
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API for user authentication
 */
const authRoutes = express.Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: User signup
 *     tags: [Auth]
 *     description: Signup with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid email format or password too short
 *       500:
 *         description: Internal server error
 */
authRoutes.post('/signup', signup);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     description: Login with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid credentials
 *       401:
 *         description: Invalid email or password
 *       500:
 *         description: Internal server error
 */
authRoutes.post('/login', login);

export default authRoutes;
