console.clear()
require('events').EventEmitter.defaultMaxListeners = 100000;
const express = require("express");
const app = express();
app.listen(() => console.log(`Slash`));
app.get("/", (req, res) => res.send(`<h1>System Slash</h1>`));
const Discord = require("discord.js")
const client= new Discord.Client({ intents:32767 })
client.config = require("./config.js")
client.slashCommands = new Discord.Collection()
client.cooldownGames = new Discord.Collection();
const { registerFont } = require("canvas");
registerFont("fonts/Cairo-Black.ttf",{ family : "matheros"})
registerFont("fonts/Cairo-Bold.ttf",{ family : "matheros"})
registerFont("fonts/Cairo-Regular.ttf",{ family : "matheros"})
registerFont("fonts/SansSerifBldFLF.otf",{ family : "matheros"})
registerFont("fonts/Roboto-Light.ttf",{ family : "matheros"})
require("./DataBase/connect.js")
let handlerFiles = ["events","slash"]
handlerFiles.forEach(p => {
    require(`./Handler/${p}`)(client);
});
process.on("unhandledRejection", (err) => {
  if(err.message.includes("The user aborted a request.") || err.message.includes("Unknown interaction")) return;
  console.log(err.stack)
}); 
process.on('warning', (warning) => {
  console.log(warning.stack);
});
client.login('config.token')
