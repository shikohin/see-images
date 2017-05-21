import request from 'request';
import Constants from './Constants';

class Requests
{
    send(url='', qs={}, callback) {
        request({ url: url, qs : qs, }, (err, res, body) => {
            callback(err, res, body)
        });
    }

    sendQuery(q) {
        let apiKey = Constants._API_KEY_;
        let apiUrl = Constants._API_URL_;

        this.send(apiUrl, {key: apiKey}, (err, res, body) => {
            console.log(err,res,body);
        });

        return '';
    }
}

export default new Requests;