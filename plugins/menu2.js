/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu2",
    react: "👾",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `*╭─────────────────❒⁠⁠⁠⁠*

*⇆ ʜɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*

*┕─────────────────❒*

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
   *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴋᴇʀᴍ-ᴍᴅ-ᴠ1 ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋɢ ᴛᴇᴄʜ👨🏻‍💻*


*╭───────────────❒⁠⁠⁠⁠*
*│* *_https://github.com/Kgtech-cmr/KERM-MD-V1_*
*┕───────────────❒*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs❂*
*┕───────────────❒*
*╭──────────●●►*
${menu.download}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅs❂*
*┕───────────────❒*
*╭──────────●●►*
${menu.main}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs❂*
*┕───────────────❒*

*╭──────────●●►*
${menu.group}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs❂*
*┕───────────────❒*

*╭──────────●●►*
${menu.owner}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅs❂*
*┕───────────────❒*

*╭──────────●●►*
${menu.convert}
*╰──────────●●►*

*╭─────────────────❒⁠⁠⁠⁠*
*│* *❂sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs❂*
*┕─────────────────❒*

*╭──────────●●►*
${menu.search}
*╰──────────●●►*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɢ ᴛᴇᴄʜ🇨🇲*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
