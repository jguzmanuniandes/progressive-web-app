'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeOfResponse extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.firstCall')
            .then(fc => {
                if (!fc) {

                    throw new Error('Unable to find response time metrics in page');
                }
                return fc;
            });
    }
}

module.exports = TimeOfResponse;