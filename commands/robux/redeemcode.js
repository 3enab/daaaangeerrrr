const { MessageEmbed, Collection } = require('discord.js');
const noblox = require('noblox.js');

module.exports = {
  name: 'redeemcode',
  aliases: ['redeem'],
  usages: ['redeem (code)'],
  examples: ['redeem boza'],
  cooldown: 5,
  args: true,
  dm: true,
  async execute(message, args, client) { 
    var code = args[0];
    const replys = client.replys;
    const embed = desc => new MessageEmbed()
    .setColor(client.color)
    .setDescription(desc);
    
    if(!code) return message.channel.send(embed(replys.entercode));
    
    const db = client.database.guildsData;
    const dbu = client.database.usersData;
    const data = await db.get(message.guild.id);
    const userData = await dbu.get(message.author.id);
    
    let get_code = data.system.giftsCode.filter(e => e.code == code)[0];
    
    if (!get_code) return message.channel.send(embed(replys.codeexp));
    
    console.log(get_code);
    if (get_code.usagedBy.includes(message.author.id)) return message.channel.send(embed(replys.already));
    
    let prize = get_code.gifted;
    
    for(let i = 0; i < prize; i++) {
      userData.profile.coins.push({
        server: message.guild.id
      });
    }
    
    if (get_code.limit <= 1 || !get_code.limit) {
      data.system.giftsCode = data.system.giftsCode.filter(e => e.code !== code);
    } else {
      data.system.giftsCode.forEach((c, i) => {
        if (c.code == code) {
          data.system.giftsCode[i].limit -= 1;
          data.system.giftsCode[i].usagedBy.push(message.author.id);
        }
      });
    }
    
    await dbu.update(message.author.id, { profile: userData.profile });
    await db.update(message.guild.id, { system: data.system });

    message.channel.send(embed(replys.robux_added.replace('{amount}', prize).replace('{balance}', userData.profile.coins.filter(e => e.server == message.guild.id).length || 0)));
  }
}