import Botty from "./Botty";

import Uptime from "./Uptime";
import AutoReact from "./AutoReact";
import Honeypot from "./Honeypot";
import ForumReader from "./ForumReader";
import KeyFinder from "./KeyFinder";
import Techblog from "./Techblog";
import ChannelAccess from "./ChannelAccess";
import VersionChecker from "./VersionChecker";
import Info from "./Info";
import Logger from "./Logger";
import { fileBackedObject } from "./FileBackedObject";
import { SharedSettings } from "./SharedSettings";
import { PersonalSettings } from "./PersonalSettings";

// Load and initialise settings
const sharedSettings = fileBackedObject<SharedSettings>("settings/shared_settings.json");
const personalSettings = fileBackedObject<PersonalSettings>("settings/personal_settings.json");
const bot = new Botty(personalSettings);

// Load extensions
const logger = new Logger(bot.client, sharedSettings);
const uptime = new Uptime(bot.client, sharedSettings, personalSettings, "data/uptime_data.json");
const keyFinder = new KeyFinder(bot.client, sharedSettings, "data/riot_keys.json");
const forum = new ForumReader(bot.client, sharedSettings, personalSettings, "data/forum_data.json", keyFinder);
//const honeypot = new Honeypot(bot.client, sharedSettings, personalSettings);
const autoReact = new AutoReact(bot.client, sharedSettings, "data/thinking_data.json");
const techblog = new Techblog(bot.client, sharedSettings, "data/techblog_data.json");
//const channelAccess = new ChannelAccess(bot.client, sharedSettings);
const info = new Info(bot.client, sharedSettings, "data/info_data.json");
const versionChecker = new VersionChecker(bot.client, sharedSettings, "data/version_data.json");

// start bot
bot.start();
