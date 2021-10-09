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
            if (args[i] != "te") {
                nume = nume + " " + args[i];
            }
            else {
                k = i;
                break;
            }
        }
        var numeLowerCase = nume.toString().toLowerCase();
        numeLowerCase = numeLowerCase.replace(/-| /gi, "");
        var sortAlphabets = function (text) {
            return text.split('').sort().join('');
        };
        //console.log(numeLowerCase);
        var comanda = args[k];
        for (let i = k + 1; i < arguments.length; i++) {
            if (args[i - 1] != "ore")
                comanda = comanda + " " + args[i];
            else {
                k = i;
                break;
            }
        }
        if (comanda === "te rog frumos ore") {
            var project = args[k];
            for (let i = k + 1; i < arguments.length; i++) {
                project = project + " " + args[i];
            }
        }
        else {
            project = 1;
        }
        getHoursFromSpreadSheet.getHoursForGivenName(sortAlphabets(numeLowerCase), project).then(res => {
            //console.log(res);
            switch (res[0])
            {
                case -1:{
                    message.author.send("Nu am gasit numele, introdu un nume valid");
                    break;
                }

                case -2:{
                    message.author.send("Nu am gasit proiectul");
                    break;
                }
    
                default:{
                    if(project==1)
                        message.author.send(res[1] + " are: " + res[0] + " ore in total");
                    else
                        message.author.send(res[1] + " are: " + res[0] + " ore la proiectul " + project);
                }

            }
            // if (res === -1)
            //     message.author.send("Nu am gasit numele, introdu un nume valid");
            // else
            //     if (res == -3)
            //         message.author.send("Nu am gasit proiectul");
            //     else
            //         if (project === 1)
            //             message.author.send(nume + " are: " + res + " ore in total");
            //         else
            //             message.author.send(nume + " are: " + res + " ore la proiectul " + project);

        });

    }
}
