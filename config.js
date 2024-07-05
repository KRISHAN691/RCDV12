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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RBTENyZ2N5TFhNNVFXNXFyY0luTU4vR0UrckF4UU5Pa0I2VGl0cG1YQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblNRTzVNQkViYWtDakR2dVJ4ek5CZi9lLzNRNHdYcVNkVlZma0tUZmJUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RnFVUk5aajBFZUxkK2VPVk00bnIvUVpVaXNIQ0Z6NnNuaEtFWmtQeFhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQMVdzM01RS2RxZkluRU1oQnBLMmVPSFB2ak1ycjlUWWN3UG5WQ3NJdWgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdQeFJKU3RvTTN6M3JVUndPbmtFZjF6UkVZanhwUFA3VlI5cnBJWGZISDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQvKzd1eGh1OTdVdXVQb29aVGFxZm1mZDJpMTh1RW9HWEQwcTBvUEU3blE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFpZWNWOEFTWUtHUFNZQkZIcFZiL1BWT1JjeDBqRXcvbzdyM3dPdWVWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTE4N2hybmNqZGl2OURsOGtOY1Fkbk1pK25nWS94ZnRuSEZHWUJNVGJrcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZvM1RrR21Wd1lKdloybjAvc3llVW1ydm4vd3c1ZnBRWjRXdTkyVVlHb0s2dUxYTHdwSmVZMVRIVTE5MkQ1STZoMGRvZGx0Wk5tQS9LWFdFYlhXQWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJ0UUpYNDhtSmR0bnNWdW1BVWo0Q1J0MW50YjhjR01XRlBsWEkzdnIwZ2pFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2NDREVmxYN1N5aWc1R0J3M2R0cHhBIiwicGhvbmVJZCI6ImIyM2ZkY2Y2LWM1NDctNDRiYi1hODM0LWZhOTVlNWFiNGRmYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDNitaREV1ZlNab0hYVHU5MlFObDJtOEJWeDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3BTTER1NllJaGkvNnAvdW1ORFVDT2tHcElBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik0yOFc3QUtIIiwibWUiOnsiaWQiOiI5NDc2NDIyNDE4Nzo2MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLcmlTSEFOeFNsIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcWMrZFlDRVBqZ25yUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2bnI1eHFqeVlIUUxaTWh0Yk94d2dJZmVWNFNBYmlqNmVUQjdOa0kzQXdNPSIsImFjY291bnRTaWduYXR1cmUiOiJhSXBXSXFkckh5WEVkTml1R3ZEc0ZmNWVqNU9oY3hCWkJ1T0ppUDhVSDVUY1NLSk9KK1UwdzdFT2JzWlFaTHlZdXhIaW82LzdxVHRxVCtIK3JmdkhBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQUMwTk9aMmx1Zm1IS2NOd0pSK1Vwc2hDTnBsejFxSWUrVFpwMlZReTZqdkM2NGxYcVpvZTRPTk8zOXk3OCs2WEFRWFpNbHRqV3VGQ001NG82M3c4Z1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDIyNDE4Nzo2MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiNTYrY2FvOG1CMEMyVEliV3pzY0lDSDNsZUVnRzRvK25rd2V6WkNOd01EIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTY4NTgxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5TcyJ9"
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
