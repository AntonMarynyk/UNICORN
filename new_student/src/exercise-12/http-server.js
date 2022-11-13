const express = require("express");
const LibraryDao = require("./library-dao");

const dao = new LibraryDao('books-library.json');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/book/get", async (req, res) => {
    const {query} = req;
    const bookCode = query.code;

    //Code attribute not assigned (status 400)
    if (!bookCode) {
      return res.status(400).json({error: 'Invalid input: code parameter is missing.'});
    }

    const book = await dao.getBook(bookCode);

    //Book with the specified code does not exist (status 400)
    if (!book) {
      return res.status(400).json({error: `Book with code '${bookCode}' doesn't exist.`});
    }
  
    res.json(book);
  });

app.post("/book/create", async (req, res) => {
    const {body} = req;

    //No attribute code, name or author specified (status 400)
    if (!body.code || !body.name || !body.author) {
        return res.status(400).json({error: 'Invalid input: code parameter is missing.'});
    }

    const book = {
        code: body.code,
        name: body.name,
        author: body.author
    };

    try {
        await dao.createBook(book);
    } catch (e) {
        if(e.code == "DUPLICATE_CODE") {
            //The book already exists in the database - duplicate code (status 400)
            res.status(400);
        } else {
            //Unexpecter error (status 500)
            res.status(500);
        }
        return res.json({error: e.message});
    }

    res.json(book);
});

app.listen(3000, () => {
    console.log("Express server listening on port 3000.")
});