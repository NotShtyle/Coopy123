/**
 * Provides useful information.
 * @module commands/help
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args, thumbnail) => {
  client.embed.send(message, {
    thumbnail: "https://i.ibb.co/7tFyZzj/e28d995aadb50018b3f580ba7700ae77.png",
    color: 9338560,
    code: true,
    desc: `The bot was created by **${client.users.cache.get(client.config.ownerID).tag}**, if you have any questions or would like to suggest new features or report bugs, please send them a direct message. All commands start with \`${client.config.prefix}\`.`,
    fields: [{
      name: 'invite',
      value: 'A way to invite this bot to your own guild.'
    },
    {
      name: 'channel',
      value: 'The channel where other server bumps will be posted.'
    },
    {
      name: 'desc',
      value: 'Set the description of your advertisement.'
    },
    {
      name: 'preview',
      value: 'Preview your advertisement.'
    },
    {
      name: 'bump',
      value: 'Bump your ad to all the other guilds.'
    },
    {
      name: 'help',
      value: 'Brings this up.'
    },
    {
      name: 'upvote',
      value: 'Vote for the discord bot to gain more members'
    },
    {
      name: 'support',
      value: 'Visit our support server!'
    },
    {
      name: 'serverinfo',
      value: 'All about your server.'
    },
    {
      name: 'userinfo',
      value: 'All about you!'
    },
    ]
  })
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: ['h','Help'],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'help',
  usage: '',
  description: 'A pretty helpful command.'
}
