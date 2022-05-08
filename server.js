const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection successfully");
})

const DaystRouter = require('./routes/Dayst');
const LecturerRouter = require("./routes/Lecturer");
const LocationRouter = require("./routes/Location");
const StudentRouter = require('./routes/Student');
const SubjectRouter = require('./routes/Subject');

app.use('/Dayst', DaystRouter);
app.use("/Lecturer", LecturerRouter);
app.use("/Location", LocationRouter);
app.use('/Student', StudentRouter);
app.use('/Subject', SubjectRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});