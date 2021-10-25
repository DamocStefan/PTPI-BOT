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
                }

                case -2:{
                    message.author.send("Nu am gasit proiectul");
                    break;
                }
    
                default:{
                    if(project==1)
                        message.author.send(res[1] + " are: " + res[0] + " ore in total");
                    else
                        message.author.send(res[1] + " are: " + res[0] + " ore la proiectul " + res[2]);
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
=======
            getHoursFromSpreadSheet.getHoursForGivenName(nume, project).then(res => {
                if(project === 1)
                    message.author.send(nume + " are: " + res + " ore in total");
                else
                    message.author.send(nume + " are: " + res + " ore la proiectul: "+ project);
            });
>>>>>>> parent of c0571a4 (<Versiunea 3 aproximari de numa>)

    }
}