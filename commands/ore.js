const e = require("express");
const getHoursFromSpreadSheet = require("./GoogleAPI");
module.exports = {
    name: 'ore',
    description: "this command show how many hours a given name has in a SpreadSheet",
    execute(message, args) {
        var k = 0;

        var nume = args[0];
        const arguments = Array.from(args);
        for (let i = 1; i < arguments.length; i++) {
            if (args[i] != "proiect") {
                nume = nume + " " + args[i];
            }
            else {
                k = i;
                break;
            }
        }
        if (nume == "Trifoita")
            message.author.send("Trifoita are asa de multe ore incat are nevoie de un site special, incearca: " + "\n" + "<https://bit.ly/3lNSrxz>");
        else {
            if (nume == "Octav")
                message.author.send("Octav are asa de multe ore incat are nevoie de un site special, incearca: " + "\n" + "<https://bit.ly/3lNSrxz>");
            else {
                var numeLowerCase = nume.toString().toLowerCase();
                numeLowerCase = numeLowerCase.replace(/-| /gi, "");

                var comanda = args[k];
                for (let i = k + 1; i < arguments.length; i++) {
                    if (args[i - 1] != "proiect")
                        comanda = comanda + " " + args[i];
                    else {
                        k = i;
                        break;
                    }
                }
                if (comanda === "proiect") {
                    var project = args[k];
                    for (let i = k + 1; i < arguments.length; i++) {
                        project = project + " " + args[i];
                    }
                    project = project.replace(/-| /gi, "").toLowerCase();

                }
                else {
                    project = "";
                }
                console.log(numeLowerCase);
                getHoursFromSpreadSheet.getHoursForGivenName(numeLowerCase, project).then(res => {
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
                            if (project == "")
                                message.channel.send(res[1] + " are: " + res[0] + " ore in total");
                            else
                                message.channel.send(res[1] + " are: " + res[0] + " ore la proiectul " + res[2]);
                        }
                    }
                });
            }
        }

    }
}