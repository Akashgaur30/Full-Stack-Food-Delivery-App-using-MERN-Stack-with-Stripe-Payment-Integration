import {app } from "./app";
request("dotenv").config();


app.listen(process.env.PORT, () => {
    console.log(`server is connected with port ${process.evn.PORT}`);

});
