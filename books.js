const express = require ('express');
const router = express.Router();
const books = require("../books");


// Books
router.get('/', (req, res) =>{
    res.json(books);
});

router.get ('/:bookId', (req, res) => {
    // res.send(req.params.booksId)
    const found = books.some(books => books.bookId === parseInt(req.params.bookId));

    if (found) {
        res.json(books.filter(books => books.bookId === parseInt(req.params.bookId)))

    } else {
        res.status(400).json ({ msg: `No book with the Id of ${ req.params.booksId}`})
    }
    
});

//delete books
router.delete ('/:bookId', (req, res) => {
    // res.send(req.params.booksId)
    const found = books.some(books => books.bookId === parseInt(req.params.bookId));

    if (found) {
        res.json({
            msg: 'Book deleted',
            books:books.filter(books => books.bookId === parseInt(req.params.bookId))
        })

    } else {
        res.status(400).json ({ msg: `No book with the Id of ${ req.params.bookId}`})
    }
    
});


module.exports = router;