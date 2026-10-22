import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Middleware to read JSON data from request body
app.use(express.json())

// Path of books.json
const filePath = path.join(__dirname, 'data', 'books.json')

// Read books data
const bookData = JSON.parse(
    fs.readFileSync(filePath, 'utf8')
)


// ========================================
// GET - Get All Books
// ========================================

app.get('/api/v1/books', (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            data: {
                books: bookData
            }
        })

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Internal server error'
        })
    }
})


// ========================================
// GET - Get Book By ID
// ========================================

app.get('/api/v1/books/:id', (req, res) => {
    try {
        const id = req.params.id

        const book = bookData.find(
            (book) => book.id === id
        )

        if (!book) {
            return res.status(404).json({
                status: 'fail',
                message: 'Book not found'
            })
        }

        res.status(200).json({
            status: 'success',
            data: {
                book: book
            }
        })

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Internal server error'
        })
    }
})


// ========================================
// POST - Create New Book
// ========================================

app.post('/api/v1/books', (req, res) => {
    try {
        const newBook = req.body

        bookData.push(newBook)

        // Save data to books.json
        fs.writeFileSync(
            filePath,
            JSON.stringify(bookData, null, 2)
        )

        res.status(201).json({
            status: 'success',
            data: {
                book: newBook
            }
        })

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Internal server error'
        })
    }
})


// ========================================
// PATCH - Update Book
// ========================================

app.patch('/api/v1/books/:id', (req, res) => {
    try {
        const id = req.params.id

        const bookIndex = bookData.findIndex(
            (book) => book.id === id
        )

        // If book doesn't exist
        if (bookIndex === -1) {
            return res.status(404).json({
                status: 'fail',
                message: 'Book not found'
            })
        }

        // Update book
        bookData[bookIndex] = {
            ...bookData[bookIndex],
            ...req.body
        }

        // Save updated data
        fs.writeFileSync(
            filePath,
            JSON.stringify(bookData, null, 2)
        )

        res.status(200).json({
            status: 'success',
            data: {
                book: bookData[bookIndex]
            }
        })

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Internal server error'
        })
    }
})


// ========================================
// DELETE - Delete Book
// ========================================

app.delete('/api/v1/books/:id', (req, res) => {
    try {
        const id = req.params.id

        const bookIndex = bookData.findIndex(
            (book) => book.id === id
        )

        // If book doesn't exist
        if (bookIndex === -1) {
            return res.status(404).json({
                status: 'fail',
                message: 'Book not found'
            })
        }

        // Delete book
        const deletedBook = bookData.splice(bookIndex, 1)

        // Save updated data
        fs.writeFileSync(
            filePath,
            JSON.stringify(bookData, null, 2)
        )

        res.status(200).json({
            status: 'success',
            message: 'Book deleted successfully',
            data: {
                book: deletedBook[0]
            }
        })

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Internal server error'
        })
    }
})


// ========================================
// Start Server
// ========================================

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000')
})