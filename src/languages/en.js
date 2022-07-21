const { done, error , style } = require('../config').emojis;

module.exports = {
  endbuy: {
    success: '**Purchase deleleted successfully**',
    error: '**There is no purchase to cancel it**'
  },
  redeemcode: {
    robux_added: '**The code has been used successfully, {amount} robux has been paid to your balance, your current balance is {balance}**',
    entercode: '**Please enter the code.**',
    codeexp: "**This code is invalid or expired!**",
    already: "**You already claimed this code!**"
  },
  public: {
    cooldowns: `${style}**🤗 - Please wait {timeLeft} seconds !**`,
    by: `Requested by {tag}`,
    nouser: `${style}**${error} | I can't find this user !**`,
    bot: `${style}**${error} | Please select a user not a robot !**`
  },
  help: {
    helps: {
      description: `Helps to know how to use commands.`,
      types: [`**Aliases:**`, `**Usages:**`, `**Examples:**`]
    },
    types: [`**Public:**`, `**Administrative:**`, `**Robux:**`],
    invalid: `${style}**${error} | I can't find this command !**`,
    more: `For more details about a certain command type:\n{prefix}help (command)`,
    list: `**List of commands**`,
    title: `**Command: {command}**`
  },
  ping: {
    helps: {
      description: `Test the robot response time.`,
    },
  },
  setprefix: {
    helps: {
      description: `Set your favorite prefix on the robot.`,
      aliases: [`prefix`]
    },
    done: `${style}**${done} | The prefix has been successfully changed !**`,
    reset: `${style}**${done} | The prefix reset successfully !**`
  },
  setlanguage: {
    helps: {
      description: `Set your preferred language on the robot.`,
      aliases: [`setlang`]
    },
    invalid: `${style}**${error} | This language is not currently supported !**\n${style}Supported languages:\n{languages}**`,
    done: `${style}**${done} | The language changed successfully !**`
  },
  profile: {
    helps: {
      description: `Shows users profiles.`,
    }
  },
  title: {
    helps: {
      description: `Set your favorite title for your profile.`
    }
  },
  rep: {
    helps: {
      description: `Give someone a Like Point. It can only be used once every 24 hours.`
    },
    yourself: `${style}**${error} | You can't give yourself a like point !**`,
    invalid: `${style}**${error} | You cannot do that. Try again in {time} !**`,
    done: `${style}**${done} | has been granted {user} a like point !**`
  },
  tax: {
    quantity: 'Quantity',
    robux: 'Robux',
    value: 'Value',
    price: 'Price',
    withtax: 'With tax'
  },
  buy: {
    helps: {
      description: `Recharge the balance of the robux.`,
      aliases: [`buy-robux`]
    },
    nan: `${style}**${error} | Please enter a valid value !**`,
    limit: `${style}**${error} | Minimum purchase of robux is: \`{limit}\`**`,
    already: `${style}**${error} | You have a previous purchase that you need to finish first !**`,
    transfer: `**Convert {price} to {owner}**\n\`\`\`\nc {id} {price}\n\`\`\`\n**You only have 2 minutes to convert !**`,
    twillclose: '**Ticket will closed after 10 secs**',
    done: `${style}**Operation completed successfully !, Your account balance {amount}R**`,
    timeout: `${style}**${error} | The time you are allowed to transfer has expired !**`,
    rsedrsala: '**Transferred `{amount}R` into your account**\n**Shows account balance:**\n`#balance`\n**To transfer robux:**\n`#transfer`\n**Commands Helpful:**\n`#help`'
  },
  setcookies: {
    helps: {
      description: `To set cookies for your roblox account.`,
      aliases: [`setcookie`]
    },
    already: `${style}**${error} | This cookie is already set !**`,
    done: `${style}**${done} | Cookies set successfully !**`,
    invalid: `${style}**${error} | Please select a valid cookie !**`
  },
  setgroup: {
    helps: {
      description: `To set group for your roblox account.`,
    },
    nocookies: `${style}**${error} | Please set the cookies first !**`,
    already: `${style}**${error}** | This group is already selected !**`,
    noowner: `${style}**${error} | Please select a group owned by your roblox account !**`,
    done: `${style}**${done} | The group has been successfully identified !**`,
    invalid: `${style}**${error} | Please select a valid group id to use !**`
  },
  stock: {
    helps: {
      description: `Displays the robux inventory in the group.`
    },
    nocookies: `${style}**${error} | Please set the cookies first !**`,
    nogroup: `${style}**${error} | Please select a group first !**`,
    done: `**Your stock of robux in the group: \`{funds}\`**`
  },
  setowner: {
    helps: {
      description: `Determines the recipient of the robux winnings.`,
      aliases: [`setrecipient`]
    },
    already: `${style}**${error} | This user is already selected !**`,
    done: `${style}**${done} | Profits have been successfully transferred to {user} !**`
  },
  setprice: {
    helps: {
      description: `Determines the price of one robux.`
    },
    invalid: `${style}**${error} | Please select a valid value for the price !**`,
    already: `${style}**${error} | This price is predetermined !**`,
    done: `${style}**${done} | The price of the robux has been determined successfully !**`
  },
  setdiscount: {
    helps: {
      description: `Specifies the percentage reduction value.`
    },
    invalid: `${style}**${error} | Please enter a valid discount rate !**`,
    already: `${style}**${error} | This percentage is predetermined !**`,
    done: `${style}**${done} | The discount value has been set successfully !**`
  },
  setlimit: {
     helps: {
       description: `Determines the minimum amount to buy robux.`
     },
     invalid: `${style}**${error} | Please enter a minimum valid value !**`,
     already: `${style}**${error} | This limit is already set !**`,
     done: `${style}**${done} | Minimum purchase has been set successfully !**`
   },
   setproofschannel: {
     helps: {
       description: `Selects the channel for the conversion proofs.`,
       aliases: [`setproofchannel`]
     },
     invalid: `${style}**${error} | Please select a valid channel !**`,
     already: `${style}**${error} | This channel is already selected !**`,
     done: `${style}**${done} | Conversion proofs channel selected successfully !**`
   },
   setthankschannel: {
     helps: {
       description: `Selects the channel for the thanks`,
       aliases: [`setthankchannel`]
     },
     invalid: `${style}**${error} | Please select a valid channel !**`,
     already: `${style}**${error} | This channel is already selected !**`,
     done: `${style}**${done} | Conversion thanks channel selected successfully !**`
   },
   setboostschannel: {
     helps: {
       description: `Selects the channel for the boosts.`,
       aliases: [`setboostchannel`]
     },
     invalid: `${style}**${error} | Please select a valid channel !**`,
     already: `${style}**${error} | This channel is already selected !**`,
     done: `${style}**${done} | Conversion boosts channel selected successfully !**`
   },
   setclientsrole: {
     helps: {
       description: `Determines the role of customers.`,
       aliases: [`setclientrole`]
     },
     invalid: `${style}**${error} | Please select a valid role !**`,
     already: `${style}**${error} | This role is already set !**`,
     done: `${style}**${done} | Customer role selected successfully !**`
   },
   setboostsrole: {
     helps: {
       description: `Determines the role of boosters.`,
       aliases: [`setboostrole`]
     },
     invalid: `${style}**${error} | Please select a valid role !**`,
     already: `${style}**${error} | This role is already set !**`,
     done: `${style}**${done} | Boosters role selected successfully !**`
   },
   give: {
     helps: {
       description: `To give someone a certain number of robux.`
     },
     noamount: `${style}**${error} | Please select the number of robux after the user !**`,
     invalid: `${style}**${error} | Please enter a valid robux number !**`,
     done: `${style}**${done} | The robux has been transferred successfully, the current {user} account balance is: \`{robux}\` !**`
   },
  balance: {
    helps: {
      description: `To check your robux balance.`
    },
    done: `**Your robux balance is: \`{coins}\` !**`,
    noserver: `${style}**${error} | Select your robux server first !**`
  },
   transfer: {
     helps: {
       description: `To convert your robux balance into actual roblox balance.`
     },
     notfound: `${style}**${error} | I can't find this account in roblox !**`,
     lock: `${style}**${error} | Sorry, the transfer is currently closed !**`,
     notingroup: `${style}**${error} | Sorry, I can't transfer the robux to your account, it seems you're not in the group !**\n${style}** Group link: {link}**`,
     noweeks: `${style}**${error} | Sorry, I can't transfer the robux to your account, you must have been in the group for more than two weeks !**`,
     done: `${style}**${done} | Your balance has been successfully transferred, your current balance is: \`{robux}\` !**`,
     thanksMessage: `${style}**Please type your thanks here: {channel}**`,
     proofsMessage: `${style}**Bought by: {user} !**`,
     noserver: `${style}**${error} | Select your robux server first !**`,
     notenough: `${style}**${error} | Your balance is not enough to complete this process !**`,
     nohave: `${style}**${error} | Sorry, this amount of robux is not available right now !**`
   },
   setserver: {
     helps: {
       description: `To select a robux withdrawal server.`
     },
     done: `${style}**${done} | The server has been selected successfully !**`,
     invalid: `${style}**${error} | I can't find this server !**`
   }
}