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
<<<<<<< HEAD
        if (nume == "Trifoita")
            message.author.send("Trifoita are asa de multe ore incat are nevoie de un site special, incearca: " + "\n" + "<https://bit.ly/3lNSrxz>");
        else {
            if (nume == "Octav")
                message.author.send("Octav are asa de multe ore incat are nevoie de un site special, incearca: " + "\n" + "<https://bit.ly/3lNSrxz>");
            else {
                var numeLowerCase = nume.toString().toLowerCase();
                numeLowerCase = numeLowerCase.replace(/-| /gi, "");
                var sortAlphabets = function (text) {
                    return text.split('').sort().join('');
=======
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
        
        project=project.replace(/-| /gi, "").toLowerCase()

        }
        else 
        {
            project=1;
        }
<<<<<<< HEAD
        
        getHoursFromSpreadSheet.getHoursForGivenName(sortAlphabets(numeLowerCase), sortAlphabets(project) ).then(res => {
            console.log(res);
            switch (res[0])
            {
                case -1:{
                    message.author.send("Nu am gasit numele, introdu un nume valid");
                    break;
>>>>>>> 8d055d29df55ac88cdc7529f610362ad11afd14c
                }
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
                    //console.log(project);

                    project = project.replace(/-| /gi, "").toLowerCase();

                }
                else {
                    project = "";
                }

                getHoursFromSpreadSheet.getHoursForGivenName(sortAlphabets(numeLowerCase), sortAlphabets(project)).then(res => {
                    switch (res[0]) {
                        case -1: {
                            message.channel.send("Nu am gasit numele, introdu un nume valid");
                            break;
                        }

<<<<<<< HEAD
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
=======
        });
=======
            getHoursFromSpreadSheet.getHoursForGivenName(nume, project).then(res => {
                if(project === 1)
                    message.author.send(nume + " are: " + res + " ore in total");
                else
                    message.author.send(nume + " are: " + res + " ore la proiectul: "+ project);
            });
>>>>>>> parent of c0571a4 (<Versiunea 3 aproximari de numa>)
>>>>>>> 8d055d29df55ac88cdc7529f610362ad11afd14c

    }
}