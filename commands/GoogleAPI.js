const { google } = require("googleapis");
const { sasportal } = require("googleapis/build/src/apis/sasportal");

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
var sortAlphabets = function (text) {
  return text.split('').sort().join('');
};

function getPercentageOfNameFromName(name1, name2) {
  var k = 0;
  if (name1.length > name2.length) {
    var aux = name1;
    name1 = name2;
    name2 = aux;
  }
  for (let i = 0; i < name1.length; i++)
    for (let j = k - 1; j < name2.length; j++)
      if (name1.charAt(i) == name2.charAt(j)) {
        k++;
        break;
      }
  console.log(name1 + " " + name2 + " au " + k + " litere comune");
  console.log(k / name2.length);
  return k / name2.length;
}
function Nimicto0(valoare)
{
  if(valoare=="")
    return 0;
  return valoare
}
async function getHoursForGivenName(nume, project) {
  let values = await getValuesFromSpreadSheet();
  var k = 0
  for (let i = 2; i < values.length; i++) {
    if (values[i][0] != undefined) {
      console.log(values[i][0]);
      if (getPercentageOfNameFromName(nume, sortAlphabets(values[i][0].replace(/-| /gi, "").toLowerCase())) > 0.9) {
        if (project != 1) {
          for (let j = 2; j < values[i].length; j += 2) {
            if (project == values[0][j]) {
              return [parseInt(Nimicto0(values[i][j]))+parseInt(Nimicto0(values[i][j+1])), values[i][0]];
            }
          }
          return [-2, ""];
        }
        return [values[i][1],values[i][0]];
      }
    }
  }
  return [-1, ""];
}
module.exports = { getHoursForGivenName };