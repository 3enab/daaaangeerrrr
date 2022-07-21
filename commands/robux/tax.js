const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'tax',
  description: 'Calculate tax',
  args: true,
  usage: '<amount>',
  cooldown: 5,
  dm: true,
  async execute(message, args, client) {
    const db = client.database.guildsData;
    const data = await db.get(message.guild.id);
    const replys = client.replys;
    
    message.channel.send(
      new MessageEmbed()
      .setColor(client.color)
      .setTitle('RobuxTax')
      .setDescription(`- ${replys.quantity} (\`${args[0]}\`)\n- ${replys.value} (\`1 ${replys.robux} = ${data.system.price * args[0]}\`)`)
      .addField(`${replys.price + ' ' + replys.robux}`, `\`${data.system.price * args[0]}\``)
      .addField(`${replys.price + ' ' + replys.robux + ' ' + replys.withtax}`, `\`${Math.floor((data.system.price * args[0]) / 19 * 20 + 1)}\``)
    );
  },
}