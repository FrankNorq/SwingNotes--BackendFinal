/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: Manage user notes
 */

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Get all notes for the current user
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'

 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - text
 *             properties:
 *               title:
 *                 type: string
 *                 example: Min titel
 *               text:
 *                 type: string
 *                 example: Detta är innehållet
 *     responses:
 *       201:
 *         description: Note created successfully
 *       400:
 *         description: Missing fields
 */

/**
 * @swagger
 * /api/notes/{id}:
 *   put:
 *     summary: Update a note by ID
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the note
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - text
 *             properties:
 *               title:
 *                 type: string
 *                 example: Uppdaterad titel
 *               text:
 *                 type: string
 *                 example: Uppdaterat innehåll
 *     responses:
 *       200:
 *         description: Note updated
 *       404:
 *         description: Note not found

 *   delete:
 *     summary: Delete a note by ID
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the note
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Note deleted
 *       404:
 *         description: Note not found
 */

/**
 * @swagger
 * /api/notes/search:
 *   get:
 *     summary: Search notes by title
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Title to search for
 *     responses:
 *       200:
 *         description: Notes matching the search query
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 *       400:
 *         description: Query parameter is missing
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Note:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         text:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         modifiedAt:
 *           type: string
 *           format: date-time
 *         user_id:
 *           type: integer
 */
