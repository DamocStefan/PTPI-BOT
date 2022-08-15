const e = require("express");
const getHoursFromSpreadSheet = require("./GoogleAPI");
module.exports = {
    name: 'top',
    description: "this is a ping command!",
    execute(message, args) {
        getHoursFromSpreadSheet.getTopHours(parseInt(args[0])).then(res=>{
            console.log(1);
            var k= 1;
            for(let i=0;i<res.length;i++){
                message.channel.send("locul "+ k +" "+ res[i][0]+" are "+ res[i][1]);
                k++;}
        });
    }
}