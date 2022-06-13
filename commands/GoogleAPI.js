
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
var sortAlphabets = function (text) {
  return text.split('').sort().join('');
};

function isBlank(str) {
  return !(typeof(str[0])== "undefined");
}

function getPercentageOfNameFromName(name1, name2) {
  var k=0;
  var ff= new Array(26).fill(0);
  for(let i=0;i<name2.length;i++)
    ff[name2[i].charCodeAt(0)-"a".charCodeAt(0)]++;
  for(let i=0;i<name1.length;i++)
    ff[name1[i].charCodeAt(0)-"a".charCodeAt(0)]--;
  for(let i=0;i<27 && k<2 ;i++)
    if(ff[i]!=0)
      k++;
  return k<2;
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
      if (isBlank(values[i][0]))
      if (getPercentageOfNameFromName(nume.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/-| /gi, ""), values[i][0].normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/-| /gi, "") )) {
        if (project != "") {
          for (let j = 2; j < values[0].length; j += 2) {
            console.log(getPercentageOfNameFromName(project, values[0][j].normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/-| /gi, "")));
            if (getPercentageOfNameFromName(project, values[0][j].normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/-| /gi, ""))) {
              if(Nimicto0(parseInt(values[i][j]))+Nimicto0(parseFloat(values[i][j+1]))==0){
                console.log(values[i][0] + "are "+ values[0][j])
                return [0, values[i][0], values[0][j]];
              }
              else 
                return [Nimicto0(parseInt(values[i][j]))+Nimicto0(parseFloat(values[i][j+1])), values[i][0], values[0][j]];
            }
          }
          return [-2, "", ""];
        }
        return [values[i][1] , values[i][0], ""];
      }
    }
  }
  return [-1, "", ""];
}
async function getTopHours(number)
{
  let values = await getValuesFromSpreadSheet();
  values.sort(function(a, b) {
    return Nimicto0(parseFloat(b[1])) - Nimicto0(parseFloat(a[1]));
  })
  var k=0;
  let arr=new Array(number);
  for(let i=1;i<=number;i++)
    {
      if((values[i][0]=="" ||values[i][0]== undefined || typeof values[i][0]== undefined))
        number++;
      console.log(values[i][0] + " " + values[i][1]);
      arr[k]=new Array(2);
      arr[k][0]=values[i][0];
      arr[k][1]=values[i][1];
      k++;
    }
    return arr;
}
module.exports = { getTopHours, getHoursForGivenName  };