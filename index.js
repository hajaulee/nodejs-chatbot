var login = require("facebook-chat-api");
var http = require('http'); 
var answeredThreads = {};
var fs = require("fs"); 
process.env.TZ = 'Asia/Ho_Chi_Minh';
// Create simple echo bot
login({email: "leconghau.hit@gmail.com", password: "thaothao", forceLogin: "True"}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
        if(err) return console.error(err);
        console.log(message.threadID);
        if(!answeredThreads.hasOwnProperty(message.threadID)){
            //answeredThreads[message.threadID] = true;
            var date = new Date();
            //api.sendMessage(message.body + ": " + date.toString(), message.threadID);
            var options = {
              host: 'sandbox.api.simsimi.com',
              port: 80,
              path: '/request.p?key=3453346c-73af-4725-880f-93ca1c1ab082&lc=vn&ft=1.0&text=' + message.body.replace(/ /g, "%20")
            };
            
            http.get(options, function (http_res) {
                // initialize the container for our data
                var data = "";
            
                // this event fires many times, each time collecting another piece of the response
                http_res.on("data", function (chunk) {
                    // append this chunk to our growing `data` var
                    data += chunk;
                });
            
                // this event fires *one* time, after all the `data` events/chunks have been gathered
                http_res.on("end", function () {
                    // you can use res.send instead of console.log to output via express
                //console.log(data);
                api.sendMessage(JSON.parse(data).response, message.threadID);
                });
            });
            fs.appendFileSync("Log.txt",date.toString() +":" + message.threadID + " \t"+ message.senderName + "\n", "UTF-8",{'flags': 'a+'});   

        }
    });
});