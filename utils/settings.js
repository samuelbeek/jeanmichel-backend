module.exports.config = function() {
    var settings = require('../config.json');

    return {
        settings: function() {
            return settings;
        },
        get: function(name, options) {
            if (!options) {
                switch(process.env.NODE_ENV) {
                    case 'development':
                        return settings[name].development;
                    break;
                    case 'production':
                        return settings[name].production;
                    break;
                }
            } else {
                if (options.type) {
                    return settings[name][options.type];
                } else {
                    return settings[name];
                }
            }
        }
    }
}
