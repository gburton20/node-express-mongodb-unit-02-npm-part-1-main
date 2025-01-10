/*
    1. Import the express module, and prepare a ready-to-use variable for it
*/
const express = require('express');

/* Import the mtadata.js file which contains the mta data */
const mtadata = require('./mtadata');

const app = express(); // Call express on line 4, and assign the value the app label

// It's possible to write lines 4 and 9 in one line:
// const app = ('express')()

// Set the Port we want to use
const PORT = 3000;

// Set the application to begin listening / begin spinning the server
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });

// Collectively, the following block of code is called a request handler for a GET request to /1
// If the URL ends in “/”, return the entire parent object
app.get('/', (req, res) => {
    console.log("Client sent a request to /");
    res.status(200).json(mtadata);
});

// else if the URL ends in “/red”, return the ‘redLine’ property
app.get('/red', (req, res) => {
    console.log("Client sent a request to the red line resource!");
    res.status(200).json(mtadata.redLine);
});

// else if the URL ends in “/green”, return the ‘greenLine’ property
app.get('/green', (req, res) => {
    console.log("Client sent a request to the green line resource!");
    res.status(200).json(mtadata.greenLine);
});

// Bonus:

// If the URL ends in `"/1"`, you want to send back only the objects where `"1"` is in the `train` property
app.get('/1', (req, res) => {
    console.log("Client sent a request to the 1 resource!");
    const redLineStationsForTrain1 = mtadata.redLine
        .filter((redStationObj) => redStationObj.train.includes("1"));
    res.status(200).json(redLineStationsForTrain1);
});

// If the URL ends in `"/2"`, you want to send back only the objects where `"2"` is in the `train` property
app.get('/2', (req, res) => {
    console.log("Client sent a request to the 2 resource!");
    const redLineStationsForTrain2 = mtadata.redLine
        .filter((redStationObj) => redStationObj.train.includes("2"));
    res.status(200).json(redLineStationsForTrain2);
});

// If the URL ends in `"/3"`, you want to send back only the objects where `"3"` is in the `train` property
app.get('/3', (req, res) => {
    console.log("Client sent a request to the 3 resource!");
    const redLineStationsForTrain3 = mtadata.redLine
        .filter((redStationObj) => redStationObj.train.includes("3"));
    res.status(200).json(redLineStationsForTrain3);
});

// If the URL ends in `"/4"`, you want to send back only the objects where `"4"` is in the `train` property
app.get('/4', (req, res) => {
    console.log("Client sent a request to the 4 resource!");
    const greenLineStationsForTrain4 = mtadata.greenLine
        .filter((greenStationObj) => greenStationObj.train.includes("4"));
    res.status(200).json(greenLineStationsForTrain4);
});

// If the URL ends in `"/5"`, you want to send back only the objects where `"5"` is in the `train` property
app.get('/5', (req, res) => {
    console.log("Client sent a request to the 5 resource!");
    const greenLineStationsForTrain5 = mtadata.greenLine
        .filter((greenStationObj) => greenStationObj.train.includes("5"));
    res.status(200).json(greenLineStationsForTrain5);
});

// If the URL ends in `"/6"`, you want to send back only the objects where `"6"` is in the `train` property
app.get('/6', (req, res) => {
    console.log("Client sent a request to the 6 resource!");
    const greenLineStationsForTrain6 = mtadata.greenLine
        .filter((greenStationObj) => greenStationObj.train.includes("6"));
    res.status(200).json(greenLineStationsForTrain6);
});

// If the URL ends in "/local", you want to send back only the objects where "1" or "6" is in the train property
app.get('/local', (req, res) => {
    // console.log("Client sent a request to the local resource!");
    const lines = Object.keys(mtadata);
    // console.log(trainLineKeyArray)

    // My first attempt which returned undefined (didn't work)
    // const localTrainStations = mtadata.trainLineKeyArray
    //     .filter((stationObj) => stationObj.train.includes("1"))

    // Colin's solution:
    const localStations = [];
    lines.forEach((line) => {
        stations[line].forEach((station) => {
            if(station.train.includes("1") || station.train.includes("6")) {
                localStations.push(station)
            }
        })
    })

    res.status(200).json(localStations);
});

// If the URL ends in "/express", you want to send back only the objects where "2", "3", "4" or "5" is in the train property


// else return ‘The MTA is currently working to complete this application soon. Thank you for your patience’
app.get('*', (req, res) => {
    console.log("Client sent a request to the 404 resource!");
    res.status(404).send("The MTA is currently working to complete this application soon. Thank you for your patience.");
});