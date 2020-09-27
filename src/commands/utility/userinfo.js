const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {    
    let user = message.mentions.members.first() || message.member;
    
    let embed = new Discord.MessageEmbed()
    .setTitle(user.user.username)
    .setDescription(`**ID:** ${user.id}
**Name:** ${user.user.username}
**Account Created At:** ${user.user.createdAt}
**Game:** ${user.user.presence.game || 'None'}
**Status:** ${user.user.presence.status.toUpperCase()}
**Full Name:** ${user.user.tag}`)
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
  aliases: ['uinfo','Userinfo'],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'userinfo',
  usage: '',
  description: 'Your account info'
}