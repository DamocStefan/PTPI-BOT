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
var sortAlphabets = function (text) {
  return text.split('').sort().join('');
};
var Latinise={};Latinise.latin_map={
"Ă":"a",
"ă":"a",
"Ș":"s",
"ș":"s",
"Ț":"t",
"ț":"t",
"Â":"a",
"â":"a",
" ": ""};
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
  var n=Math.max(name1.length,name2.length);
  for(let i=0;i<n && k<2 ;i++)
    if(ff[i]!=0)
      k++;
  //console.log(ff);
  return k<2;
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
  let name = "";
  String.prototype.latinise=function(){return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||a})};
  for (let i = 2; i < values.length; i++) {
    if (typeof(values[i][0])== "string" ) {
      //console.log(values[i][0]);
      if (isBlank(values[i][0]))
      if (getPercentageOfNameFromName(nume, values[i][0].latinise().toLowerCase().replace(/-| /gi, "")) ) {
        if (project != "") {
          for (let j = 2; j < values[0].length; j += 2) {
            //console.log(values[0][j]);
            if (getPercentageOfNameFromName(project, values[0][j].latinise().replace(/-| /gi, "").toLowerCase())) {
              if(Nimicto0(parseInt(values[i][j]))+Nimicto0(parseInt(values[i][j+1]))==0){
                console.log(values[i][0] + "are "+ values[0][j])
                return [0, values[i][0], values[0][j]];
              }
              else 
                return [Nimicto0(parseInt(values[i][j]))+Nimicto0(parseInt(values[i][j+1])), values[i][0], values[0][j]];
            }
          }
          return [-2, "", ""];
        }
        return [Nimicto0(values[i][1]) , values[i][0], ""];
      }
    }
  }
  return [-1, "", ""];
}
module.exports = { getHoursForGivenName };