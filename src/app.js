const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

//Public static path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

// Routing
app.get("/", (req, res) => {
    // res.send("Home");
    res.render('index');
});

app.get("/about", (req, res) => {
    // res.send("About");
    res.render('about');
});

app.get("/weather", (req, res) => {
    // res.send("Weather");
    res.render('weather');
});

app.get("*", (req, res) => {
    // res.send("404 error");
    res.render('error',{
        errormsg:'Oops! page not found, click here to go back to home',
    });
});

app.listen(port, () => {
    console.log(`Running in port ${port}`);
})