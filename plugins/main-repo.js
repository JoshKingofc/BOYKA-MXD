const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')
const {sleep} = require('../lib/functions')
const fs = require('fs')
const path = require('path')

cmd({
    pattern: "repo",
    alias: ["sc", "script", "repository"],
    desc: "Fetch information about a GitHub repository.",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/Joshuamambo1/BOYKA-XD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API with axios
        const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
        
        const repoData = response.data;

        // Format the repository information in new stylish format
        const formattedInfo = `
╭─〔 *‎🄱🅾︎🅈🅺🄰-🄼🆇🄳* 〕
│
├─ *📌 ʀᴇᴘᴏsɪᴛᴏʀʏ ɴᴀᴍᴇ:* ${repoData.name}
├─ *👑 ᴏᴡɴᴇʀ:* ‎🅼🄸🅳🄺🅸🄽🅶 🅃🅴🄲🅷 
├─ *⭐ sᴛᴀʀᴛs:* ${repoData.stargazers_count}
├─ *⑂ ғᴏʀᴋs:* ${repoData.forks_count}
├─ *📝 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* ${repoData.description || '‎ʙᴏʏᴋᴀ ᴍxᴅ ɪs ᴀ ᴄᴏᴏʟ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ.'}
│
├─ *🔗 ɢɪᴛʜᴜʙ ʟɪɴᴋ:*
│   ${repoData.html_url}
│
├─ *🌐 ᴊᴏɪɴ ᴄʜᴀɴɴᴇʟ:*
│   https://whatsapp.com/channel/0029VaraMtfFcowAKRdDdp1T
│
╰┈─➤*‎🄿🄾🅆🄴🅁🄴🄳 🅱︎🆈 🅉🅰︎🄽🅳🄸🅻🄴-🅼Ⓧ🅳*
`.trim();

        // Send an image with the formatted info as a caption
        await conn.sendMessage(from, {
            image: { url: `https://i.postimg.cc/mg6FYVTP/boykaxmdconnectedmenu.jpg` }, // Replace with your image URL
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363347365643318@newsletter',
                    newsletterName: '‎‎🅼🄸🅳🄺🅸🄽🅶 🅃🅴🄲🅷',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send audio voice message after sending repo info
        const audioPath = path.join(__dirname, 'https://files.catbox.moe/vpnqp7.mp3');
        
        if (fs.existsSync(audioPath)) {
            await conn.sendMessage(from, {
                audio: { url: audioPath },
                mimetype: 'audio/mp4',
                ptt: true
            }, { quoted: mek });
        } else {
            console.error("Audio file not found at path:", audioPath);
        }

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("❌ Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
