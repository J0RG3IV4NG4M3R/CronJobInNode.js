const cron = require("node-cron");
const {db, http, signs} = require("./util");

class Main {
    static async getHoroscope(){
        const todayHoroscope = [];
        for(const sign of signs){
            const {horoscope}  = (await http.get("/" + sign)).data;
            todayHoroscope.push({
                sign,
                horoscope
            });
        }

        const name = new Date().toDateString().split(" ").join("_");

        db.setItem(name, JSON.stringify(todayHoroscope));
    }
}

cron.schedule('30 * * * * *',() => {
    console.log("Ha pasado medio minuto desde que son las 1:35 pm Georgi");
}) 

cron.schedule('* 35/1 * * * *',() => {
    console.log("Ha pasado un minuto desde que son las 1:35 pm Georgi");
}) 

 cron.schedule('* * 2-3 * * *',() => {
    console.log("Ha pasado una hora Georgi");
}) 

