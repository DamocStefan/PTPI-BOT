const e = require("express");
const getHoursFromSpreadSheet = require("./GoogleAPI");
const projectCommand = "proiect ";


module.exports = {
    name: 'ore',
    description: "this command show how many hours a given name has in a SpreadSheet",
    execute(message, args) {
        var k = 0;

        const argsToString = args.join(' ');

        const name = argsToString.split(projectCommand)[0];
        const project = argsToString.split(projectCommand)[1];//.toLowerCase();
        if(project!= undefined)
            project=project.toLowerCase();

        getHoursFromSpreadSheet.getHoursForGivenName(name, project).then(res => {
            switch (res[0]) {
                case -1: {
                    message.channel.send("Nu am gasit numele, introdu un nume valid");
                    break;
                }

                case -2: {
                    message.channel.send("Nu am gasit proiectul");
                    break;
                }
                default: {
                    if (project == "" || project== undefined)
                        message.channel.send(res[1] + " are: " + res[0] + " ore in total");
                    else
                        message.channel.send(res[1] + " are: " + res[0] + " ore la proiectul " + res[2]);
                }
            }
        });
    }
}
