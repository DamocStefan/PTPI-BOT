const { Collection } = require("discord.js");
const { google } = require("googleapis");

async function getValuesFromSpreadSheet() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/drive",

  });



  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1Nybq0X9FW2XctCGwlMbRvToYSqYFgpdy0HY1QfHylGg";
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Foaie1",
  });
  return getRows.data.values;
}
<<<<<<< HEAD
var sortAlphabets = function (text) {
  return text.split('').sort().join('');
};

function getPercentageOfNameFromName(name1, name2) {
  var k = 0;
  if (name1.length < name2.length) {
    var aux = name1;
    name1 = name2;
    name2 = aux;
  }
  for (let i = 0; i < name1.length; i++)
    for (let j = i ; j < name2.length || name2.charAt(j); j++)
      if (name1.charAt(i) == name2.charAt(j)) {
        k++;
        break;
      }
  //console.log(name1 + " " + name2 + " au " + k + " litere comune");
  //console.log(k / name2.length);
  return k / name1.length;
}
function Nimicto0(valoare)
{
  if(isNaN(valoare)==1)
    return 0;
  return valoare
}
async function getHoursForGivenName(nume, project) {
  let values = await getValuesFromSpreadSheet();
  var k = 0;
  for (let i = 2; i < values.length; i++) {
    if (typeof(values[i][0])== "string" ) {
      console.log(values[i][0]);
      if (getPercentageOfNameFromName(nume, sortAlphabets(values[i][0].replace(/-| /gi, "").toLowerCase())) > 0.9) {
        if (project != "") {
          //console.log(values[0].length);
          for (let j = 2; j < values[0].length; j += 2) {
            if (getPercentageOfNameFromName(project, sortAlphabets(values[0][j].replace(/-| /gi, "").toLowerCase())) > 0.9) {
              if(parseInt(Nimicto0(values[i][j]))+parseInt(Nimicto0(values[i][j+1]))==0)
                return [0, values[i][0], values[0][j]];
              else 
                return [parseInt(Nimicto0(values[i][j]))+parseInt(Nimicto0(values[i][j+1])), values[i][0], values[0][j]];
            }
          }
          return [-2, "", ""];
=======
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
>>>>>>> parent of c0571a4 (<Versiunea 3 aproximari de numa>)
        }
<<<<<<< HEAD
        return [values[i][1] , values[i][0], ""];
      }
=======
      return values[i][projectNumber];
>>>>>>> 8d055d29df55ac88cdc7529f610362ad11afd14c
    }
  }
<<<<<<< HEAD
  return [-1, "", ""];
=======
  return "NU EXISTA NUMELE";
>>>>>>> parent of c0571a4 (<Versiunea 3 aproximari de numa>)
}
module.exports = { getHoursForGivenName };