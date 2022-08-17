module.exports = {
    name: 'help',
    description: "this is sent a message with the commands you can use",
    execute(message, args){
        message.channel.send("Bot Commands:"+ "\n" + "-ore [Nume Prenume complet] proiect [proiect]    :ore la proiect " + "\n" + "-ore [Nume Prenume complet]                                    :ore in total" + "\n"+"-top [numar]");
    }
}
