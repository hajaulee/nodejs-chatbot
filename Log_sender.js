function globalF(argument) {
    
    var login = require("facebook-chat-api");
    var http = require('http'); 
    var answeredThreads = {};
    var fs = require("fs"); 
    process.env.TZ = 'Asia/Ho_Chi_Minh';
    // Create simple echo bot
    function whenReceived(api, err, message) {
        // body...
        if(err){
            api.listen(function callback(err, message) {
                whenReceived(api, err, message);
            });
            return console.error("Ngu1" + err);
        } 
        
    }
    
    function loginAndwait() {
        // body...
        login({email: "chau.mi.3701", password: "quenmatroi1"}, function callback (err, api) {
            if(err) return -1;
            api.listen(function callback(err, message) {
                if (err){
                    globalF();
                    console.log("End::::", err);
                }else{
                    console.log(message.threadID + '/' + message.senderName + "/"  + message.reactions + message.pageID);
                    // api.setMessageReaction("\uD83D\uDE0D", message.messageID);
                    api.sendMessage("ngu: ", message.threadID);
                    // api.setMessageReaction()
                    if(!answeredThreads.hasOwnProperty(message.threadID)){
                        //answeredThreads[message.threadID] = true;
                        var date = new Date();
                        //api.sendMessage(message.body + ": " + date.toString(), message.threadID);
                        fs.appendFileSync("Log.txt",date.toString() +":" + message.threadID + "\t\t" + message.senderName + "\n", "UTF-8",{'flags': 'a+'});   
                    
                    }
                }
            });
        });
    }
    loginAndwait();
}
globalF();
