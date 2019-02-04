var login = require("facebook-chat-api");
process.env.TZ = 'Asia/Ho_Chi_Minh';

login({email: "chau.mi.3701", password: "quenmatroi1"}, function callback (err, api) {
    if(err) return console.error(err);
        api.sendMessage("Hello", 'HaJaULee');
        console.info("Xong");
});