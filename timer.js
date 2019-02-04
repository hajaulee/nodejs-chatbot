var login = require("facebook-chat-api");
var http = require('http'); 
var answeredThreads = {};
var fs = require("fs"); 
var date = new Date();
var sms = "Hello";
process.env.TZ = 'Asia/Ho_Chi_Minh';
// Create simple echo bot

function get_http_content(shost, spath){


}
function sendHello(){
    date = new Date();
    var giophut = date.getHours() * 100 + date.getMinutes();
    switch(giophut){
        case 600:
            sms = "Dậy thôi bé, đến giờ đi học rồi.";
            break;
        case 800:
        case 1230:
        case 2030:
            sms = "Uống thuốc chưa đó, không được quên đâu nha.";
            break;
        case 1830:
            var options = {
                    host: "12a1.wc.lt", 
                    port: 80,
                    path: "/chat/bot.php?msg=xsmb"
                };
            http.get(options, function (http_res) {
                    var data = "";
                    http_res.on("data", function (chunk) {data += chunk;});
                    http_res.on("end", function () {
                        console.log(data);
                        sms = JSON.parse(data).messages[0].text;
                        console.log("SMS: " + sms);
                    });
                });
            break;
        case 2009:
            sms = "8 giờ 09 phút rồi kìa. Đi tắm chưa?";
            break;
        case 2200:
            sms = "Đến giờ đi ngủ rồi, chúc bé ngủ ngon.";
            break;
        default:
            console.log("Pass at " + date.toString());
            fs.appendFileSync("RunningLog.txt","Pass at " + date.toString()+ "\n","UTF-8" ,{'flags':'a+'})
            return 0;
    }
    login({email: "YuoKongHu", password: "hahahaha."}, function callback (err, api) {
        if(err) return console.error(err);
        api.sendMessage(sms, 100005675357730);
    });
    console.log("Fuck running!");
}

setInterval(sendHello, 60000);