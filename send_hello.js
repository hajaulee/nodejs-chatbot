var login = require("facebook-chat-api");
var http = require('http'); 
var answeredThreads = {};
var fs = require("fs"); 
process.env.TZ = 'Asia/Ho_Chi_Minh';
var hang = 100004441292893
var traicho = 1055126671237224
var chungcho = 1055126671237224
var hajauchatbot = 1872329979694561
var trung = 100007333392629
var hau = 100005675357730
var tongthanhthu = 100007312037679
// Create simple echo bot
var tinnhan = 'ngu';
var nguoinhan = hajauchatbot;
login({email: "chau.mi.3701", password: "quenmatroi1"}, function callback (err, api) {
    if(err) return console.error(err);
    function spam(api) {
        console.log('Bắt đầu');
        var date = new Date();
        var s = JSON.parse('{"messages":[{"attachment":{"type":"template","payload":{"template_type":"button","text":"Y\u00eau V\u00e0 Y\u00eau - ERIK ST.319","buttons":[{"type":"web_url","url":"http:\/\/mp3.zing.vn\/bai-hat\/Yeu-Va-Yeu-ERIK-ST-319\/ZW7UI8DC.html","title":"M\u1edf tr\u00ean Zing mp3"},{"type":"web_url","url":"https:\/\/drive.google.com\/a\/my.smccd.edu\/uc?id=1CFasfR1oi-HkIOaUgU1ON7R0akKKI0w0&export=download","title":"T\u1ea3i v\u1ec1 (320 kbps)"}]}}}]}');
        // api.sendMessage("C9io:" + date.getHours() + ":" + date.getMinutes(), hau);
        api.sendMessage({attachment: s.messages[0].attachment, body: ""}, hau);
        console.info("Xong");
    }
    spam(api);
    setInterval(function() {spam(api)}, 60000);
});