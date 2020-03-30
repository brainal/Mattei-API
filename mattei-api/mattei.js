const cheerio = require('cheerio');
const request = require('request');  
const fs      = require('fs');

class Mattei {
    static suggerimentoAutoFellatio() {
        const spiegazioneAutoFellatio = 'Ruota il coccige in maniera tale da metterlo in parallelo al malleolo. ';
        return spiegazioneAutoFellatio;
    }
    static spammaInConsole(messaggio = 'Mattei è selvaggio') {
        while (true) {
            console.log(messaggio);
        }
    }
    static isSelvaggio() {
        return true;
    }
    static async request(url) {
        return new Promise((res, rej) => {
            request.get(url, (err, req, body) => {
                if (err) {
                    rej("\n\nMattei non è in grado di fare un request a questa pagina... \nMa che cazzo dico! Mattei sa fare tutto sei tu che hai sbagliato! Coglione!\n\n");
                } else {
                    const $ = cheerio.load(body);
                    res($.html());
                }
            });
        });
    }
    static scriviPaginaInFile(pagina, nome_file) {
        fs.writeFile(nome_file, pagina, (err) => {
            if (err) {
                throw "Ma almeno un file sai cosa è?";
            }
        });
    }
}

module.exports = Mattei