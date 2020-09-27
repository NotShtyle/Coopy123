/**
 * Sends a dynamic bot invite link to the executor.
 * @module commands/invite
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  const msg = await client.embed.send(message, { desc: '[Click Here To Invite!](https://discordapp.com/api/oauth2/authorize?client_id=754759534223818882&scope=bot&permissions=27681)' }, true)
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: ['Invite'],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'invite',
  usage: '',
  description: 'Invite the bot.'
}
