const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const prefix = '%'


client.login(process.env.BOT_TOKEN);






client.on('message', message => {
    var prefix = "%";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc1') {
        if (!args[1]) {
    message.channel.send("**f!bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {c
            return;
        }
    });
	
	
	
client.login(process.env.BOT_TOKEN);






client.on('ready', () => {
   console.log(`----------------`);
      console.log(`skran`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`Legends Community The Best Server`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});

client.login(process.env.BOT_TOKEN);


client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('!bc help')){ // البريفكس والامر
    if(!message.author.id === '') return;
    message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });

client.login(process.env.BOT_TOKEN);




client.on("message", message => {
    var prefix = "%";
	
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
         ------------------------------
         %bc1 : برودكاست لجميع اعضاء السيرفر بايمبد
         %bc2 : برودكاست لجميع اعضاء السيرفر بدون ايمبد
         %bc3 : برودكاست للاعضاء  الاونلاين فقط
         ------------------------------
         
       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  

client.login(process.env.BOT_TOKEN);




client.on('message', message => {
    var prefix = "%";
	
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc2') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage(args)
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()   
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});

client.login(process.env.BOT_TOKEN);



client.on("message", message => {
    var prefix = "%";	

            if (message.content.startsWith(prefix + "bc3")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.login(process.env.BOT_TOKEN);



