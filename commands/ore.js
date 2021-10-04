const getHours = require("./GoogleAPI");
module.exports = {
    name: 'ore',
    description: "asta e comanda pt a vedea cate ore are cineva",
    execute(message, args) {
        var nume = args[0];
        const arguments = Array.from(args);
        console.log(arguments.length);
        for (let i = 1; i < arguments.length ; i++) {
            nume = nume + " " + args[i];
        }
        console.log(nume);
        getHours.getHoursForGivenName(nume).then(res =>{
            message.channel.send(res);
        });
    }
}