const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();

app.use(express.static(publicPath));        // tells express to use static files from public folder

app.listen(port, () => {
    console.log(`Server started at port ${port}.`);
});

