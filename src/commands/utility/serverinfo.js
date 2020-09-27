const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let embed = new Discord.MessageEmbed()
    .setTitle(message.guild.name)
    .setDescription(`
**ID:** ${message.guild.id}
**Members:** ${message.guild.memberCount}
**Region:** ${message.guild.region}
**Name:** ${message.guild.name}
**Created At:** ${message.guild.createdAt}
**MFA Level:** ${message.guild.mfaLevel}
**Verification Level:** ${message.guild.verificationLevel}
**Owner ID:** ${message.guild.ownerID}
**Name Acronym:** ${message.guild.nameAcronym}
`)
    .setThumbnail('https://i.ibb.co/7tFyZzj/e28d995aadb50018b3f580ba7700ae77.png')
    .setColor('#8e7ec0');
    
    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: ['sinfo','Serverinfo','info'],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'serverinfo',
  usage: '',
  description: 'Your servers info'
}