/**
 * A small sanity ping pong check to see if the bot is responding.
 * @module commands/ping
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  const msg = await client.embed.send(message, { desc: '[Click Here To Join!](https://discord.gg/Ay8A9vz)' }, true)
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: ['s','Support'],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'support',
  usage: '',
  description: 'If you need assistance with the bot.'
}
