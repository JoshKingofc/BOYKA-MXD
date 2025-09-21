const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "dev",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, pushName }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER;
        const ownerName = config.OWNER_NAME;

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        await conn.sendMessage(from, {
            image: { url: 'https://i.postimg.cc/3Jztb3Ft/boykamxdwepagwelo.jpg' },
            caption: `*╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׂ┄─ׂ┄─ׅ─ׂ┄─────᛭*
*│  ̇─̣─̇─̣〘‎🄱🅾︎🅈🅺🄰-🄼🆇🄳〙̣─̇─̣─̇*
*├┅┅┅┅┈┈┈┈┈┈┈┈┅┅┅┅┅┅◆*
*│❀ ωєℓϲοмє ιτѕ ‎ꓭѻץᛕค-мא∂*
*│● ϲяєατοя : ‎ꓭѻץᛕค-мא∂ τєϲн*
*│● яєαℓ иαмє : ‎𝕵𝖔𝖘𝖍𝖚𝖆 𝖒𝖆𝖒𝖇𝖔*
*│● ρυϐℓιϲ иαмє : ꓭѻץᛕค-мא∂*
*│● иυмϐєя : 263738365135*
*│● αgє : 17 γєαя*
*│● ϲιτγ : 𝕲𝖂𝕰𝕷𝕺 𝕸𝕶*
*│● ωнατѕαρρ ϐοτ ∂єνєℓορєя*
*╰┉┉┉┉┈┈┈┈┈┈┈┉┉┉┉┉┉᛫᛭*`,
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363347365643318@newsletter',
                    newsletterName: 'ᴍɪᴅᴋʙᴀɴ-ᴛᴇᴄʜ',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/tmibg1.mp3' },
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});