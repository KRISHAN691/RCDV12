//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lGb21ISzB5VmxMdEJtbmFKYTZ2OXNRcE9idmpUN1BuWm9sSm84Y3gxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmVJbG9oWnA5Y1BVLzFpZ0doMVhOb0h6QmZFSm5Db3d1V3UvaitqV1BtND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SEtIalA3eVRwdWVYcWszUUQ2a3pqMUhQNzdzb0FCcTY5eTkvdGRlU2tNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUzhMM3BIdWpVaUdCVmxwZzhNNFovTEttQVNwOGVHV3RzdkQwTWxnZm5vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQTzBhN0MzK3lvZHhXTU05Q2NlOTZlWlBCckdaNWQxcnZwci9iKzAyMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ISGJzNlozR1dSdWJFOTFKME5oanQ0a3RoTmFKREJLMkxHb3hJeTZTeVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJ6a08yR000TUp0REZDbjRnRi9wRXFjQUU5WG9PZFhWUGtDQ0ROS0hHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREZhTXJKblppV2ZoOHM4TGdMNlo3YnFLRVF5QmRFYWh5Y0lEbTdTSjczbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik04Q3h4WWtNdGxVSTYyTlVxb2FiZ1p2N0tMakpac2crVG1yV0tXbUt3MGJ3WUZ1QmZmcVhTTkJ4M3VGWTFLeWwyY0lMeW53TUFZOWptcUE1OTJML0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IkpsN0g4aU9lTU5iSUZTb2hhQVc4Vk5RNHc0c3MwTGVxT3NBbHRsR3VtVGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVzTkVWdDUyUm95NG5iamRMYTRPT3ciLCJwaG9uZUlkIjoiODcwNmI0YzAtY2RkYS00NDFkLTk4NjYtYzVjMWJlZGExMjIxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVWMFZFMUx6OVZDazJ0YnpjWW1yTFR1MTBncz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1R09oT3pXT1FyU25HR0dBRlpzZnFDY1VlS1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOTcyWE1YOUIiLCJtZSI6eyJpZCI6Ijk0NzY0MjI0MTg3OjU5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktyaVNIQU54U2wifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ltYytkWUNFTlhQbnJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZucjV4cWp5WUhRTFpNaHRiT3h3Z0lmZVY0U0FiaWo2ZVRCN05rSTNBd009IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxFajM5QUJwM3VGZlhDekFGak0ydmFUWnNqbGNSM0tCRmJCM3l2anhJOWpub214MVh6UENKVnFyZ2p4UHh4Ymx1SHBZUlVDcWdNVDlsMUp6NVAvMUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmL25EeFo3dzRza05TVHkxa0Y2SVgyOXB5MWtLWk5Cc1FHd3RiQ0hnVjZBZEVCMkJ4cHlXblhGeWF1QzZuUk5iRzNCeHhhZWQ0NGlRZXFpN3hhUlpBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY0MjI0MTg3OjU5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI1NitjYW84bUIwQzJUSWJXenNjSUNIM2xlRWdHNG8rbmt3ZXpaQ053TUQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxNjYzNzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTlNzIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝙆𝙍𝙄𝙎𝙃𝘼𝙉 𝙈𝘿",
  ownername: process.env.OWNER_NAME || "ＫＲＩＳＨＡＮ",
  errorChat: process.env.ERROR_CHAT || "94764224187",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
