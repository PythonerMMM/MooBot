var moo = require("MooBot");
var bot = moo();
bot.ready(2, () => {
  bot.spawn("Spin2Team");
  bot.ally("MG").then(clan => {
    if (clan.owner == bot.id) {
      console.log("Clan MG not found! Creating new.");
      clan.on("notif", s => {
        if (s.name.match(/team/gi)) {
          s.accept();
          console.log(s.name + " is a teamer! I allowed them to join!");
        } else {
          s.reject();
          console.log(s.name + " is not a teamer!");
        }
      });
    }
  });
  setInterval(() => {
    bot.angle += 0.1; // Spinning!
  }, 40);
}).on("killed", () => {
  bot.spawn("Spin2Team");
  console.log("I'm killed... Respawning");
}).on("kill", s => {
  console.log("Yay! I killed " + s);
});