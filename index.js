const express = require('express');

//express app
const app = express();
const bodyParser = require('body-parser');

//register view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.render('pages/index')
});

app.get('/about', (req, res) => {
    res.render('pages/about')
});

app.post('/createRoom', (req, res) => {
    res.status(200).json({
        message: "Post request successful"
    });
});

app.post('/bookRoom', (req, res) => {
    res.status(200).json({
        message: "Book request successful"
    });
});

app.get('/rooms', (req, res) => {
    res.status(200).json({
        RoomName: "Elite",
        BookedStatus: "Booked",
        CustomerName: "Joe",
        Date: "10/03/2024",
    });
});

app.get('/customers', (req, res) => {
    res.status(200).json({
        CustomerName: "Joe",
        RoomName: "Elite",
        Date: "10/03/2024",
    });
});

app.get('/customers/:customer', (req, res) => {
    res.status(200).json({
        BookingId: 1,
        customerName: 'Joe',
        RoomName: "Pearl",
        Date: "13/03/2024",
    });
});

