
const { google } = require("googleapis");
const accuracy = 2;

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
  // returns a matrix with every data from the sheet
  return getRows.data.values;
}
var sortAlphabets = function (text) {
  return text.split('').sort().join('');
};

function isNotBlank(str) {
  return !(typeof(str[0])== "undefined");
}

function getPercentageOfNameFromName(name1, name2) {
  var k=0;
  // creates a frequency array for every letter from one of the names then does the same thing but in reverse for the other name. You can change the accuracy required
  var ff= new Array(26).fill(0);
  for(let i=0;i<name2.length;i++)
    ff[name2[i].charCodeAt(0)-"a".charCodeAt(0)]++;
  for(let i=0;i<name1.length;i++)
    ff[name1[i].charCodeAt(0)-"a".charCodeAt(0)]--;
  for(let i=0;i<27 && k<accuracy ;i++)
    if(ff[i]!=0)
      k++;
  return k<accuracy;
}
function Nimicto0(valoare)
{
  if(isNaN(valoare)==1 || typeof valoare ==undefined)
    return 0;
  return valoare
}

async function getHoursForGivenName(nume, project) {
  
  let values = await getValuesFromSpreadSheet();
  var k = 0;
  for (let i = 2; i < values.length; i++) {
    if (typeof(values[i][0])== "string" ) {
      if (isNotBlank(values[i][0]))
      //checks if the names form the sheet and the one from discord do not differ more than "accuracy" 
      if (getPercentageOfNameFromName(nume.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/-| /gi, ""), values[i][0].normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/-| /gi, "") )) {
        if (project != undefined&& project!= "") {
          //if the command send a project aswell then tries to find the name of the project 
          for (let j = 2; j < values[0].length; j += 2) {
            if (getPercentageOfNameFromName(project, values[0][j].normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/-| /gi, ""))) {
              // checks if they have any hours at that project  
              if(Nimicto0(parseFloat(values[i][j]))+Nimicto0(parseFloat(values[i][j+1]))==0){
                // res=[0, name form sheet, and project name from sheet]
                return [0, values[i][0], values[0][j]];
              }
              else 
                // adds the hours from both collumns 
                // res=[how many hours they have, name form sheet, and project name from sheet]
                return [Nimicto0(parseFloat(values[i][j]))+Nimicto0(parseFloat(values[i][j+1])), values[i][0], values[0][j]];
            }
          }
          // -2 is the code for "project not found"
          return [-2, "", ""];
        }
        return [values[i][1] , values[i][0], ""];
      }
    }
  }
  //-1 is the code for "name not found"
  return [-1, "", ""];
}
async function getTopHours(number)
{
  let values = await getValuesFromSpreadSheet();
  values=values.slice(0, values.length-2);
  values.sort(function(a, b) {
    return parseFloat(b[1]) - parseFloat(a[1]);
  })

  return  values.slice(2,number+2);
}
module.exports = { getTopHours, getHoursForGivenName  };