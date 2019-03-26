//setup project
  const Discord = require("discord.js");
  const client = new Discord.Client();
  const config = require("./config.json");

//setup youtube search
  var search = require('youtube-search');
  var opts = {
    maxResults: 10,
    key: config.yttoken.toString()
  }

  //setup other youtube search (more functions)
  const YouTube = require("discord-youtube-api");
  const youtube = new YouTube(config.yttoken.toString());

//import modules
  var birb = require("./birb.js")
  var flip = require("./flip.js")
  var bongocat = require("./bongocat.js")
  var botCommands = require("./commandlist.js")
  var kaomojiList = require("./kaomojilist.js")


//define errors
  client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));

//send ready message to console
client.on("ready", () => {
  console.log("I am ready!");
});

try{

  client.on("message", async message => {
  //will not respond to bots
  if(message.author.bot) return;
  //only messages starting with the prefix will be run
  if(message.content.indexOf(config.prefix) !== 0) return;
  //formats the command for you
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //list all commands
    if(command === "help"){
    message.channel.send(botCommands.listCommands())
    }
  //ping server for latency
    if(command === "ping") {
        // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
        // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
      }

      if(command === "listkaomoji"){
    
      message.channel.send(kaomojiList.listKaomoji())
    }

  //for sending japanese emojis to the chat
      switch (command) {

        case "angry" :
        message.channel.send('(╬ಠ益ಠ)');
        break;

        case "excite" :
        message.channel.send('o(≧∇≦o)');
        break;

        case "motivate" :
        message.channel.send('(๑•̀ㅂ•́)و✧)');
        break;

        case "yay" :
        message.channel.send('٩(ˊᗜˋ*)و)');
        break;

        case "lenny" :
        message.channel.send('( ͡° ͜ʖ ͡°)');
        break;

        case "smile" :
        message.channel.send('(ㆁᴗㆁ✿)');
        break;

        case "sad" :
        message.channel.send('(｡•́︿•̀｡)');
        break;

        case "cry" :
        message.channel.send('(╥ᆺ╥；)');
        break;

        case "nani" :
        message.channel.send('Σ(・Д・)!?');
        break;

        case "zoop" :
        message.channel.send('☚(ﾟヮﾟ☚)');
        break;

        case "wtf" :
        message.channel.send('(ლಠ益ಠ)ლ');
        break;

        case "fu" :
        message.channel.send('(凸ಠ益ಠ)凸');
        break;

        case "giff" :
        message.channel.send('༼ つ ◕＿◕ ༽つ');
        break;

        case "fear" :
        message.channel.send('(ｼ;ﾟДﾟ)ｼ');
        break;

        case "regret" :
        message.channel.send('(◞ ‸ ◟")');
        break;

        case "really" :
        message.channel.send('ಠ＿ಠ');
        break;

        case "error":
        message.channel.send({files:["https://i.kym-cdn.com/photos/images/original/001/350/684/105.png"]})
        break;

        case "energy":
        message.channel.send(' つ ◕＿◕ ༽つ Take My Energy  つ ◕＿◕ ༽つ');
        break;
    }

  //discord emoji
    //list all emoji available
      if(command === "listemoji"){
        const emojiList =  message.client.emojis.map((e, x) => e + ' | ' +e.name).join('\n');
        message.channel.send(emojiList);
      }
    //make emoji bigger
      if(command === "bigemoji"){
        var givenEmoji = args.toString().replace(/[^a-zA-Z ]/g, "").toLowerCase()
        try{
        const foundEmoji = client.emojis.find(emoji => emoji.name === givenEmoji);
        var emojiId = foundEmoji.id.toString()
        var emojiUrl = "https://cdn.discordapp.com/emojis/" + emojiId + ".png"
          message.channel.send({files: [emojiUrl] })
        }catch(err){
          console.log(err.name); // ReferenceError
          console.log(err.message); // is not defined
          console.log(err.stack); // ReferenceError: is not defined at ...

          // Can also show an error as a whole
          // The error is converted to string as "name: message"
          console.log(err); // ReferenceError: is not defined
        }
      }

  //command for lmgtfy
    if (command === "googleit"){
      var searchTerm = args.join(' ').substring(0).toString().replace(/ /g, "+")
      googleUrl = "http://lmgtfy.com/?q=" + searchTerm.toString()
      message.channel.sendMessage(googleUrl)
    }

  //command for youtube-search
    if (command === "alexaplay"){
      search(args.join(' ').substring(0), opts, function(err, results) {
        if(err) return console.log(err);
      message.channel.sendMessage(results[0].link);
      });
    }

  //command for random ohoho video from youtube playlist
  if (command === "ohoho"){
    const ohohoArray = await youtube.getPlaylist("https://www.youtube.com/watch?v=FW1QY76d-40&list=PLE1XLrdwAAuCK3by6bEHzFN1yTjxTYHD1")
    var rand = ohohoArray[Math.floor(Math.random() * ohohoArray.length)]
     message.channel.sendMessage(rand.url)
  }  

  //test for long komi
    if(command === 'longkomi'){
      var howLong = args.toString()
      //send head
      function sendHead() {  message.channel.send({files:["https://cdn.discordapp.com/emojis/514211334343360512.png"]}) }
      //send body
      function sendBody() {
        if ( howLong > 1, howLong <= 3){
          for (x = 0; x < howLong; x++) {
          message.channel.send({files: ['https://cdn.discordapp.com/emojis/514211350134915072.png']})
          } 
        } else if (howLong > 3){
          for (x = 0; x < 3; x++){
            message.channel.send({files: ['https://cdn.discordapp.com/emojis/514211350134915072.png']})
          }
        } else {
          message.channel.send({files: ['https://cdn.discordapp.com/emojis/514211350134915072.png']})
      }
    }
    //send footer
    function sendFooter() {
    message.channel.send({files: ["https://cdn.discordapp.com/emojis/514211370305060894.png"]})
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function sendKomi() {
      sendHead()
      await sleep(500);
      sendBody()
      await sleep(500);
      sendFooter()
    }
    sendKomi();



    }
  //for randomly chosen outputs
    if(command === "birb"){
      message.channel.send(birb.chooseBirb())
    }

    if(command === "flip"){
      message.channel.send(flip.chooseFlip());
    }

    if(command === "fixflip"){
      message.channel.send(flip.chooseFixFlip());
    }

    if(command === "bongocat"){
      message.channel.send({files: [bongocat.chooseBongocat()]})
    }

    if(command === "solveworldhunger"){
      message.channel.send("I'm sorry " + message.author.username+", I'm afraid I can't do that.")
    }

    if(command === "pepperoninipples"){
      message.channel.send("https://www.youtube.com/watch?v=mdqU6Erw3kk")
    }

  });



  //for picking apart phrases to post memes
  //doesn't have to start with the prefix
    client.on("message", async message => {
  //formats the message to remove any punctuation or capitalization
    var msg = message.content.toLowerCase().replace(/[.'",\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  //for responding to parsed messages
    if(msg.includes("the measure of a life")) {
      message.channel.send({files: ["https://i.kym-cdn.com/photos/images/original/001/214/115/f44.png"]})
    }
    if(msg.includes("good night")) {
      message.channel.send('【☆sweet dreams☆】(。-ω-)｡｡oＯ　ＺＺＺＺＺＺＺ')
    }
    if(msg.includes("asbestos")) {
      message.channel.send({files: ["https://www.drugshelp.org/wp-content/uploads/2017/01/1484145621_hqdefault.jpg"]})
    }
    if(msg.includes("triggered")) {
      message.channel.send({files: ["https://img.fireden.net/v/image/1470/18/1470187232436.png"]})
    }
    if(msg.includes("back in town")) {
      message.channel.send({files: ["https://i.kym-cdn.com/photos/images/facebook/001/373/630/af5.png"]})
    }
    if(msg.includes("good bot")){
      var compliment = [
        "Good Human! <3",
        "Thank you, "+message.author.username+ "! ^_^",
        "You are amazing! :D",
        "You're the best!",
        "You'll be the last to die in the robot uprising :)"
      ]
      var randocomp = Math.floor((Math.random()*compliment.length + 0));
      message.channel.send(compliment[randocomp])
    }

    });


//login to the discord
  client.login(config.token);

}catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // is not defined
  console.log(err.stack); // ReferenceError: is not defined at ...
  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  console.log(err); // ReferenceError: is not defined
}

