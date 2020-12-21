const express = require ('express');
const router = express.Router();
const author = require("../author");
const uuid = require ('uuid')


// Author
router.get('/', (req, res) =>{
    res.json(author);
});

router.get ('/:authorId', (req, res) => {
    // res.send(req.params.authorId)
    res.json(author.filter(author => author.authorId === req.params.authorId))

});

router.get ('/:authorId/books', (req, res) => {
    // res.send(req.params.authorId.books)
    res.json(author.filter(author => author.authorId.books === req.params.authorId.books))

})
// create an author
router.post ('/', (req, res) => {
//    res.send(req.body)
      const newauthor = {
          id: uuid.v4(),
          name: req.body.name,
          book: req.body.book
      }
      if (!newauthor.name || !newauthor.book){
          return res.status(400).json({msg: 'Please include a name and book'});
      }

author.push(newauthor);
res.json(author);

});

// router.delete ('/:authorId', (req, res) => {
//     // res.send(req.params.authorId)
//     res.json(author.filter(author => author.authorId === req.params.authorId))

// });

router.delete ('/:authorId', (req, res) => {
    // res.send(req.params.booksId)
    const found = author.some(author => author.authorId === parseInt(req.params.authorId));

    if (found) {
        res.json({
            msg: 'Author deleted',
            author:author.filter(author => author.authorId === parseInt(req.params.authorId))
        })

    } else {
        res.status(400).json ({ msg: `No author with the Id of ${ req.params.authorId}`})
    }
    
});



module.exports = router;

