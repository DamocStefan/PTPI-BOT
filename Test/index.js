const express = require("express");
const { google } = require("googleapis");

const app = express();
app.get("/", async (req, res) => {
  console.log("aici incepe get");

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/drive",

    });


console.log("a fost creat auth");
console.log(auth);


const client = await auth.getClient();
console.log(client);
console.log("tried to get client");

const googleSheets = google.sheets({ version: "v4", auth: client });
console.log("get googlesheets");
  const spreadsheetId = "14EO_D-0m6CxQlSYEF7hkWAgHmtTF8ZIw_030I4PMN0A";
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });
  console.log("tried to get spreadsheet");
  console.log("metaData: " + metaData);
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1",
  });
  res.send(getRows);
});



app.listen(1337 , (req , res) => console.log("running on 1337"));