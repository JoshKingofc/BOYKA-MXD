const config = require('../config');
const { cmd } = require('../command');
const fetch = require("node-fetch");
const { ytsearch } = require('@dark-yasiya/yt-dl.js'); 

// 🎬 YouTube Video Downloader (song) 
cmd({
    pattern: "song4",
    alias: ["video2", "ytv2"],
    react: "🎬",
    desc: "Download YouTube video",
    category: "downloader",
    use: ".song <query/url>",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("🎬 Please provide video name/URL");
        
        await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });
        
        const yt = await ytsearch(q);
        if (!yt?.results?.length) {
            await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
            return reply("No results found");
        }
        
        const vid = yt.results[0];
        const apiKey = config.API_KEY || "58b3609c238b2b6bb6";
        const api = `https://api.nexoracle.com/downloader/yt-video2?apikey=${apiKey}&url=${encodeURIComponent(vid.url)}`;
        
        const res = await fetch(api);
        const json = await res.json();
        
        if (!json?.status || !json.result?.url) {
            await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
            return reply("Download failed");
        }
        
        const caption = `
╭─〔*𝙱𝙾𝚈𝚇𝙰-𝚇𝙳 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁*〕
├─▸ *📌 ᴛɪᴛʟᴇ:* ${vid.title}
├─▸ *⏳ ᴅᴜʀᴀᴛɪᴏɴ:* ${vid.timestamp}
├─▸ *👀 ᴠɪᴇᴡs:* ${vid.views}
├─▸ *👤 ᴀᴜᴛʜᴏʀ:* ${vid.author.name}
╰──➤ *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙱𝙾𝚈𝙺𝙰-𝙼𝚇𝙳*`;

        await conn.sendMessage(from, {
            video: { url: json.result.url },
            caption: caption
        }, { quoted: mek });
        
        await conn.sendMessage(from, { react: { text: '✅', key: m.key } });
        
    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
        reply("Error occurred");
    }
});

// 🎥 YouTube Video Downloader 
cmd({ 
    pattern: "video", 
    alias: ["song", "ytv"], 
    react: "🎥", 
    desc: "Download YouTube video (DavidCyrilTech API)", 
    category: "main", 
    use: ".video <query/url>", 
    filename: __filename 
}, async (conn, mek, m, { from, q, reply }) => { 
    try { 
        if (!q) return await reply("𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝚞𝚛𝚕 𝚕𝚒𝚗𝚔 𝚘𝚛 𝚜𝚘𝚗𝚐 𝚗𝚊𝚖𝚎.");
        
        const yt = await ytsearch(q);
        if (!yt.results.length) return reply("No results found!");
        
        const yts = yt.results[0];
        // 🔑 Fixed API (DavidCyrilTech)
        const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (!data.status || !data.result?.url) {
            return reply("𝙽𝚍𝚊𝚝𝚊𝚍𝚣𝚊 𝚔𝚞𝚠𝚊𝚗𝚊 𝚢𝚘𝚞𝚛 𝚛𝚎𝚚𝚞𝚎𝚜𝚝𝚎𝚍 𝚟𝚒𝚍𝚎𝚘. 𝚄𝚐𝚘𝚍𝚣𝚘𝚔𝚘𝚛𝚘𝚍𝚣𝚊 𝚊𝚐𝚊𝚒𝚗 𝚕𝚊𝚝𝚎𝚛.");
        }
        
        const ytmsg = 
`‎*_ʏᴛ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ_*
‎*╭━━━━━━━━━━━━━━━━━━๏*
‎*┇*๏ *ᴛɪᴛʟᴇ:* ${yts.title}
‎*┇*๏ *ᴅᴜʀᴀᴛɪᴏɴ:* ${yts.timestamp}
‎*┇*๏ *ᴠɪᴇᴡs:* ${yts.views}
‎*┇*๏ *ᴀᴜᴛʜᴏʀ:* ${yts.author.name}
‎*╰━━━━━━━━━━━━━━━━━━๏*
‎*╭────────────────━┈⍟*
‎┋ *_𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙼𝙸𝙳𝙺𝙱𝙰𝙽-𝙼𝚇𝙳_* 
‎*╰────────────────━┈⍟*`;

        // Send details
        await conn.sendMessage(from, { image: { url: yts.thumbnail }, caption: ytmsg }, { quoted: mek });
        
        // Send video
        await conn.sendMessage(from, { video: { url: data.result.url }, mimetype: "video/mp4" }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});