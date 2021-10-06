const { google } = require("googleapis");

async function getValuesFromSpreadSheet() {
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
async function getHoursForGivenName(nume, project) {
  let values = await getValuesFromSpreadSheet();
  var projectNumber=1;
  var k=0;
  for (let i = 2; i < values.length; i++) {
    if (nume === values[i][0]) {
      if(values != 1){
          for( let j = 0 ; j < 50; j++){
            if(project == values[0][j])
              {
                projectNumber = j;
                console.log(values[i][j]);
                break;
              }
          }
        }
      return values[i][projectNumber];
    }
  }
  return "NU EXISTA NUMELE";
}
module.exports = { getHoursForGivenName };