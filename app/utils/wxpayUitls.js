const crypto = require('crypto');
const Xml2 = require('xml2js');
const queryString = require('querystring');

module.exports = {
    //把金额转为分
    getmoney: function (money) {
        return parseFloat(money) * 100;
    },
    // 随机字符串产生函数
    createNonceStr: function () {
        return Math.random()
            .toString(36)
            .substr(2, 15)
            .toUpperCase();
    },
    // 时间戳产生函数
    createTimeStamp: function () {
        return parseInt(new Date().getTime() / 1000) + '';
    },
    // 动态生成签名方法
    createSign: function (signParams, mch_id) {
        let keys = Object.keys(signParams);
        keys = keys.sort();
        let newArgs = {};
        keys.forEach(function (val, key) {
            if (signParams[val]) {
                newArgs[val] = signParams[val];
            }
        });
        let string = queryString.stringify(newArgs) + '&key=' + mch_id;
        // 生成签名
        return crypto.createHash('md5').update(queryString.unescape(string), 'utf8').digest("hex").toUpperCase();
    },
    // 根据对象生成xml
    createXML: function (params) {
        // let xml = `<xml>`;
        // Object.keys(params)
        //   .map(key => {
        //     xml += `<${key}>${params[ key ]}</${key}>`;
        //   });
        // xml += `</xml>`;
        // return xml;
        const builder = new Xml2.Builder();
        return builder.buildObject(params);
    },
    // 解析xml
    parserXML: function (xml) {
        const Parser = new Xml2.Parser({ explicitArray: false, ignoreAttrs: false });
        return new Promise((resolve, reject) => {
            Parser.parseString(xml, function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
    },
};