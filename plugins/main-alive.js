const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["status", "live"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🟢",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const totalCmds = commands.length;
        const uptime = () => {
            let sec = process.uptime();
            let h = Math.floor(sec / 3600);
            let m = Math.floor((sec % 3600) / 60);
            let s = Math.floor(sec % 60);
            return `${h}h ${m}m ${s}s`;
        };

        const status = `*╭────────────────━┈⍟*
‎*┋*🌐 *ℙ𝕝𝕒𝕥𝕗𝕠𝕣𝕞:* Termux
‎*┋*📦 *𝕄𝕠𝕕𝕖:* ${config.MODE || 'private'}
‎*┋*🧑‍💻 *𝕆𝕨𝕟𝕖𝕣:* ${config.OWNER_NAME || '𝚃𝙴𝙻𝙺𝙸𝙽𝙶_𝚃𝙴𝙲𝙷'}
‎*┋*🔹 *ℙ𝕣𝕖𝕗𝕚𝕩:* ${config.PREFIX || '.'}
‎*┋*📁 *ℂ𝕠𝕞𝕞𝕒𝕟𝕕𝕤:* ${totalCmds}
‎*┋*⏱ *ℝ𝕦𝕟𝕥𝕚𝕞𝕖:* ${uptime()}
‎*╰────────────────━┈⍟*`;

        await conn.sendMessage(from, { 
            text: status,
            contextInfo: {
                mentionedJid: [sender],   // ✅ FIXED
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
