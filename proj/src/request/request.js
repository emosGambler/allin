const request = require('request-promise');

module.exports = () => {
    return {
        send: {
            get: (url) => {
                return request({
                    "method": "GET",
                    "uri": url,
                    "json": true,
                });
            }
        }
    };
}; 

