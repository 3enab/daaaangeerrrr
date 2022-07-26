const { MessageEmbed, Collection } = require("discord.js");
const { prefix, language, owners } = require("../src/config");
const cooldowns = new Collection();

module.exports = (client) => ({
  name: "message",
  once: false,
  async execute(message) {
    if (message.author.bot) return;

    const guilds = client.database.guildsData;
    const users = client.database.usersData;
    const guildsData = message.guild
      ? await guilds.get(message.guild.id)
      : { prefix, language: language.substr(0, 2), blacklisted: false };
    const usersData = await users.get(message.author.id);

    let prefixServer = guildsData.prefix || prefix;
    let langServer = guildsData.language || language.substr(0, 2);
    let blacklistedServer = guildsData.blacklisted || false;
    let blacklistedUser = usersData.blacklisted || false;
    client.prefix = prefixServer;
    client.lang = langServer;

    if (blacklistedServer && !owners.includes(message.author.id)) return;
    if (blacklistedUser) return;

    if (message.content.replace(/\!/g, "").startsWith(`<@${client.user.id}>`)) {
      let embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setTitle(`> **${client.user.username} Information**`)
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setColor(client.color)
        .setDescription(
          `> **Public Prefix: ${prefix}**\n> **Private Prefix: ${client.prefix}**`
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        );
      return message.lineReplyNoMention({ embed: embed });
    }
    if (
      !message.content.startsWith(client.prefix) &&
      message.content.split(" ")[0].substr(1).toLowerCase() != "help"
    )
      return;

    const args = message.content
      .slice(prefix.length)
      .replace(/\٠/g, "0")
      .replace(/\١/g, "1")
      .replace(/\٢/g, "2")
      .replace(/\٣/g, "3")
      .replace(/\٤/g, "4")
      .replace(/\٥/g, "5")
      .replace(/\٦/g, "6")
      .replace(/\٧/g, "7")
      .replace(/\٨/g, "8")
      .replace(/\٩/g, "9")
      .split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command =
      client.commands.get(commandName) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );
    if (!command) return;

    client.replys = require("../src/languages/" + langServer.toLowerCase());
    if (command.owners && !owners.includes(message.author.id)) return;
    if (!command.dm && message.channel.type == "dm") return;
    if (
      message.guild &&
      ["balance", "transfer", "setserver"].includes(command.name.toLowerCase())
    )
      return;
    if (!command.owners) {
      if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Collection());
      }
      let now = Date.now();
      let timestamps = cooldowns.get(command.name);
      let cooldownAmount = (command.cooldown || 3) * 1000;
      if (timestamps.has(message.author.id)) {
        let expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        if (now < expirationTime) {
          let timeLeft = (expirationTime - now) / 1000;
          if (!cooldowns.has(message.author.id)) {
            cooldowns.set(message.author.id, true);
            return message
              .lineReplyNoMention(
                client.replys.public.cooldowns.replace(
                  /\{timeLeft}/g,
                  `${timeLeft.toFixed(1)}`
                )
              )
              .then((msg) => {
                msg.delete({ timeout: 2500 });
                message.delete({ timeout: 2500 });
              });
          } else return;
        }
      }
      timestamps.set(message.author.id, now);
      setTimeout(() => {
        timestamps.delete(message.author.id);
        cooldowns.delete(message.author.id);
      }, cooldownAmount);
    }
    if (command.admin && !message.member.hasPermission(command.permissions))
      return;
    if (command.args && !args.length) {
      args[0] = command.name;
      client.publicReplys = client.replys.public;
      client.replysAll = client.replys;
      client.replys = client.replys["help"];
      try {
        client.commands.get("help").execute(message, args, client);
      } catch (err) {
        console.error(err);
      }
      return;
    }
    try {
      client.publicReplys = client.replys.public;
      client.replysAll = client.replys;
      client.replys = client.replys[command.name];
      command.execute(message, args, client);
    } catch (err) {
      return console.error(err);
    }
  },
});
