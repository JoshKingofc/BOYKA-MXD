const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path');
const os = require("os")
const fs = require('fs');
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
pattern: "menu2",
alias: ["allmenu","fullmenu"],
use: '.menu2',
desc: "Show all bot commands",
category: "menu",
react: "📜",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
let totalCommands = Object.keys(commands).length;
let dec = `*╭────⬡ ${config.BOT_NAME} ⬡────⭓* 
*├▢ 🤖 𝙾𝚆𝙽𝙴𝚁:* ${config.OWNER_NAME}
*├▢ 📜 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂:* ${totalCommands}
*├▢ ⏱️ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴:* ${runtime(process.uptime())}
*├▢ 📡 𝙱𝙰𝙸𝙻𝙴𝚈𝚂:* Multi Device
*├▢ ☁️ 𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼:* Termux
*├▢ 📦 𝙿𝚁𝙴𝙵𝙸𝚇:* ${config.PREFIX}
*├▢ ⚙️ 𝙼𝙾𝙳𝙴:* ${config.MODE}
*├▢ 🏷️ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽:* 1.0.0 Bᴇᴛᴀ
*╰─────────────────⭓*

*╭────⬡ 𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ facebook*
*├▢ mediafire*
*├▢ tiktok*
*├▢ twitter*
*├▢ insta*
*├▢ apk*
*├▢ img*
*├▢ tt2*
*├▢ pins*
*├▢ apk2*
*├▢ fb2*
*├▢ pinterest*
*├▢ spotify*
*├▢ play*
*├▢ play2*
*├▢ audio*
*├▢ video*
*├▢ video2*
*├▢ ytmp3*
*├▢ ytmp4*
*├▢ song*
*├▢ darama*
*├▢ gdrive*
*├▢ ssweb*
*├▢ tiks*
*╰────────────────*

*╭────⬡ 𝔾𝕣𝕠𝕦𝕡 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ grouplink*
*├▢ kickall*
*├▢ kickall2*
*├▢ kickall3*
*├▢ add*
*├▢ remove*
*├▢ kick*
*├▢ promote*
*├▢ demote*
*├▢ dismiss*
*├▢ revoke*
*├▢ setgoodbye*
*├▢ setwelcome*
*├▢ delete*
*├▢ getpic*
*├▢ ginfo*
*├▢ disappear on*
*├▢ disappear off*
*├▢ disappear 7D,24H*
*├▢ allreq*
*├▢ updategname*
*├▢ updategdesc*
*├▢ joinrequests*
*├▢ senddm*
*├▢ nikal*
*├▢ mute*
*├▢ unmute*
*├▢ lockgc*
*├▢ unlockgc*
*├▢ invite*
*├▢ tag*
*├▢ hidetag*
*├▢ tagall*
*├▢ tagadmins*
*╰────────────────*

*╭────⬡ 𝕊𝔼𝕋𝕋𝕀ℕ𝔾𝕊 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ .prefix new prefix*  
*├▢ .botname name*   
*├▢ .ownername name*
*├▢ .botimage reply to image*
*├▢ .mode [public/private]* 
*├▢ .autoreact [on/off]* 
*├▢ .autoreply [on/off]*
*├▢ .autosticker [on/off]*
*├▢ .autotyping [on/off]*   
*├▢ .autostatusview [on/off]*  
*├▢ .autostatusreact [on/off]* 
*├▢ .autostatusreply [on/off]*  
*├▢ .autorecoding [on/off]* 
*├▢ .alwaysonline [on/off]*
*├▢ .welcome [on/off]*   
*├▢ .goodbye [on/off]*   
*├▢ .antilink [on/off]* 
*├▢ .antilinkkick [on/off]*  
*├▢ .deletelink [on/off]*
*├▢ .antibad [on/off]*   
*├▢ .antibot [on/off]* 
*├▢ .read-message [on/off]*  
*├▢ .mention-reply [on/off]*  
*├▢ .admin-action [on/off]* 
*├▢ .creact [on/off]*
*├▢ .cemojis [❤️,🧡,💛]* 
*╰────────────────*

*╭────⬡ 𝔸𝕌𝔻𝕀𝕆 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ .bass*
*├▢ .slow* 
*├▢ .fast*
*├▢ .reverse*
*├▢ .baby* 
*├▢ .demon*
*├▢ .earrape*  
*├▢ .nightcore*
*├▢ .robot* 
*├▢ .chipmunk* 
*├▢ .radio* 
*├▢ .blown* 
*├▢ .tupai*   
*├▢ .fat* 
*├▢ .smooth*
*├▢ .deep*
*╰────────────────*

*╭────⬡ ℝ𝔼ℂ𝕋𝕀𝕆ℕ𝕊 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ bully @tag*
*├▢ cuddle @tag*
*├▢ cry @tag*
*├▢ hug @tag*
*├▢ awoo @tag*
*├▢ kiss @tag*
*├▢ lick @tag*
*├▢ pat @tag*
*├▢ smug @tag*
*├▢ bonk @tag*
*├▢ yeet @tag*
*├▢ blush @tag*
*├▢ smile @tag*
*├▢ wave @tag*
*├▢ highfive @tag*
*├▢ handhold @tag*
*├▢ nom @tag*
*├▢ bite @tag*
*├▢ glomp @tag*
*├▢ slap @tag*
*├▢ kill @tag*
*├▢ happy @tag*
*├▢ wink @tag*
*├▢ poke @tag*
*├▢ dance @tag*
*├▢ cringe @tag*
*╰────────────────*

*╭────⬡ 𝕃𝕆𝔾𝕆 𝕄𝔸𝕂𝔼ℝ ⬡────*
*├▢ neonlight*
*├▢ blackpink*
*├▢ dragonball*
*├▢ 3dcomic*
*├▢ america*
*├▢ naruto*
*├▢ sadgirl*
*├▢ clouds*
*├▢ futuristic*
*├▢ 3dpaper*
*├▢ eraser*
*├▢ sunset*
*├▢ leaf*
*├▢ galaxy*
*├▢ sans*
*├▢ boom*
*├▢ hacker*
*├▢ devilwings*
*├▢ nigeria*
*├▢ bulb*
*├▢ angelwings*
*├▢ zodiac*
*├▢ luxury*
*├▢ paint*
*├▢ frozen*
*├▢ castle*
*├▢ tatoo*
*├▢ valorant*
*├▢ bear*
*├▢ typography*
*├▢ birthday*
*╰────────────────*

*╭────⬡ 𝕆𝕎ℕ𝔼ℝ 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ owner*
*├▢ menu*
*├▢ menu2*
*├▢ vv*
*├▢ listcmd*
*├▢ allmenu*
*├▢ repo*
*├▢ block*
*├▢ unblock*
*├▢ fullpp*
*├▢ setpp*
*├▢ restart*
*├▢ shutdown*
*├▢ updatecmd*
*├▢ alive*
*├▢ ping*
*├▢ gjid*
*├▢ jid*
*╰────────────────*

*╭────⬡ 𝔽𝕌ℕ 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ shapar*
*├▢ rate*
*├▢ insult*
*├▢ hack*
*├▢ ship*
*├▢ character*
*├▢ pickup*
*├▢ joke*
*├▢ hrt*
*├▢ hpy*
*├▢ syd*
*├▢ anger*
*├▢ shy*
*├▢ kiss*
*├▢ mon*
*├▢ cunfuzed*
*├▢ setpp*
*├▢ hand*
*├▢ nikal*
*├▢ hold*
*├▢ hug*
*├▢ nikal*
*├▢ hifi*
*├▢ poke*
*╰────────────────*

*╭────⬡ ℂ𝕆ℕ𝕍𝔼ℝ𝕋 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ sticker*
*├▢ sticker2*
*├▢ emojimix*
*├▢ fancy*
*├▢ take*
*├▢ tomp3*
*├▢ tts*
*├▢ trt*
*├▢ base64*
*├▢ unbase64*
*├▢ binary*
*├▢ dbinary*
*├▢ tinyurl*
*├▢ urldecode*
*├▢ urlencode*
*├▢ url*
*├▢ repeat*
*├▢ ask*
*├▢ readmore*
*╰────────────────*

*╭────⬡ 𝔸𝕀 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ ai*
*├▢ gpt3*
*├▢ gpt2*
*├▢ gptmini*
*├▢ gpt*
*├▢ meta*
*├▢ blackbox*
*├▢ luma*
*├▢ dj*
*├▢ immu*
*├▢ askimad*
*├▢ gpt4*
*├▢ bing*
*├▢ imagine*
*├▢ imagine2*
*├▢ copilot*
*╰────────────────*

*╭────⬡ 𝕄𝔸𝕀ℕ 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ ping*
*├▢ ping2*
*├▢ speed*
*├▢ live*
*├▢ alive*
*├▢ runtime*
*├▢ uptime*
*├▢ repo*
*├▢ owner*
*├▢ menu*
*├▢ menu2*
*├▢ restart*
*╰────────────────*

*╭────⬡ 𝔸𝕟𝕚𝕞𝕖 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ fack*
*├▢ truth*
*├▢ dare*
*├▢ dog*
*├▢ awoo*
*├▢ garl*
*├▢ waifu*
*├▢ neko*
*├▢ megnumin*
*├▢ neko*
*├▢ maid*
*├▢ loli*
*├▢ animegirl*
*├▢ animegirl1*
*├▢ animegirl2*
*├▢ animegirl3*
*├▢ animegirl4*
*├▢ animegirl5*
*├▢ anime1*
*├▢ anime2*
*├▢ anime3*
*├▢ anime4*
*├▢ anime5*
*├▢ animenews*
*├▢ foxgirl*
*├▢ naruto*
*╰────────────────*

*╭────⬡ 𝕆𝕋ℍ𝔼ℝ 𝕄𝔼ℕ𝕌 ⬡────*
*├▢ timenow*
*├▢ date*
*├▢ count*
*├▢ calculate*
*├▢ countx*
*├▢ flip*
*├▢ coinflip*
*├▢ rcolor*
*├▢ roll*
*├▢ fact*
*├▢ cpp*
*├▢ rw*
*├▢ pair*
*├▢ pair2*
*├▢ pair3*
*├▢ fancy*
*├▢ logo*
*├▢ define*
*├▢ news*
*├▢ movie*
*├▢ weather*
*├▢ srepo*
*├▢ insult*
*├▢ save*
*├▢ wikipedia*
*├▢ gpass*
*├▢ githubstalk*
*├▢ yts*
*├▢ ytv*
*╰────────────────*

${config.DESCRIPTION}`;

await conn.sendMessage(from, { 
    image: { url: config.MENU_IMAGE_URL || 'https://i.postimg.cc/mg6FYVTP/boykaxmdconnectedmenu.jpg' }, 
    caption: dec, 
    contextInfo: { 
        mentionedJid: [m.sender], 
        forwardingScore: 999, 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: { 
            newsletterJid: '‎120363347365643318@newsletter', 
            newsletterName: config.BOT_NAME, 
            serverMessageId: 143 
        } 
    } 
}, { quoted: mek });

} catch (e) { 
    console.log(e); 
    reply(`Error: ${e}`); 
} 
});
