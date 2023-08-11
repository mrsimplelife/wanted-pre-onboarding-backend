import express from 'express';
import { createPost, deletePost, getPostById, getPosts, updatePost } from '../controllers/postController';

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: API for managing posts
 */

const postRoutes = express.Router();

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     description: Create a new post with title and content
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created a new post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: Invalid request data
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
postRoutes.post('/', createPost);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get a list of posts
 *     tags: [Posts]
 *     description: Retrieve a list of posts with pagination
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: page
 *         in: query
 *         required: false
 *         type: integer
 *         description: Page number for pagination
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 */
postRoutes.get('/', getPosts);

/**
 * @swagger
 * /posts/{postId}:
 *   get:
 *     summary: Get a post by ID
 *     tags: [Posts]
 *     description: Retrieve a post by its ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: postId
 *         in: path
 *         required: true
 *         type: integer
 *         description: ID of the post to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved the post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 */
postRoutes.get('/:postId', getPostById);

/**
 * @swagger
 * /posts/{postId}:
 *   put:
 *     summary: Update a post
 *     tags: [Posts]
 *     description: Update a post's content by its ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: postId
 *         in: path
 *         required: true
 *         type: integer
 *         description: ID of the post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated the post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: Invalid request data
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Unauthorized to update this post
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 */
postRoutes.put('/:postId', updatePost);

/**
 * @swagger
 * /posts/{postId}:
 *   delete:
 *     summary: Delete a post
 *     tags: [Posts]
 *     description: Delete a post by its ID
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: postId
 *         in: path
 *         required: true
 *         type: integer
 *         description: ID of the post to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the post
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Unauthorized to delete this post
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 */
postRoutes.delete('/:postId', deletePost);

export default postRoutes;

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         userId:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
