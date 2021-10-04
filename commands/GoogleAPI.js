const { google } = require("googleapis");

async function getValuesFromSpreadSheet()
{
    const auth = new google.auth.GoogleAuth({
        keyFile: "C:\\Users\\stefa\\OneDrive\\Desktop\\DiscordBot\\credentials.json",
        scopes: "https://www.googleapis.com/auth/drive",

    });



const client = await auth.getClient();

const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "14EO_D-0m6CxQlSYEF7hkWAgHmtTF8ZIw_030I4PMN0A";
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1",
  });
  return getRows.data.values;
}
async function getHoursForGivenName(nume) {
  let values = await getValuesFromSpreadSheet();
  for( let i=2;i<values.length; i++ ){
    if(nume === values[i][0]){
      console.log(values[i][0]);
      return values[i][1];
    }
  }
  return "NU EXISTA NUMELE";
}
module.exports = {getHoursForGivenName};