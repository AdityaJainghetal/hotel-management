 const dotenv = require("dotenv");
 const express = require("express");
 const app = express();
 const cors = require("cors");
 const bodyParser = require("body-parser");
 //cors Middleware
 app.use(cors());
 require('dotenv').config();
 dotenv.config();
// we are using body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// For Db connection
require("./src/utils/db");

//Routes
const adminRouter = require("./src/routes/adminRoutes.js");
const userRouter = require("./src/routes/userRoutes.js");
const villaRouter = require("./src/routes/villaRoutes.js");
const  bookingRoutes = require("./src/routes/BookingRoutes.js");



app.use("/uploads", express.static("uploads"));

app.use('/v1/admin', adminRouter);
app.use('/v1/user', userRouter);
app.use('/v1/villa', villaRouter);
app.use('/api/booking',bookingRoutes);



//server creating
app.listen(process.env.PORT, function () {
  console.log("Server is running on http://localhost:" + process.env.PORT);
});


