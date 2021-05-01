const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.content === "rr") {
    if (!msg.guild) return;

    if (msg.member.voice.channel) {
      var connection = await msg.member.voice.channel.members.array();
      var numberOfPeople = connection.length;
      var randomNumber = Math.random();
      console.log(randomNumber);
      randomNumber = randomNumber * numberOfPeople;
      randomNumber = Math.ceil(randomNumber) - 1;
      var guildInfo = connection[randomNumber];
      guildInfo.voice.kick("Testing")
      .then(() => {
        msg.reply("A user was kicked");
      })
      .catch(err => {
        msg.reply("No user was kicked");
      });
    } else {
      msg.reply("You need to join a voice channel first");
    }
  }
});

client.login('Your clients login token');
