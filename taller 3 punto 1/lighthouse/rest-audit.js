'use strict';

const Audit = require('lighthouse').Audit;

const MAX_RESPONSE_TIME = 3000;

class RestAudit extends Audit {
    static get meta() {
        return {
            id: 'rest-audit',
            title: 'Rest audit',
            category: 'MyPerformance',
            name: 'rest-audit',
            description: 'Calling first endpoint with time response less than 3s',
            failureDescription: 'Calling first endpoint is taking more than 3s',
            helpText: 'Used to measure the response time',
            requiredArtifacts: ['TimeOfResponse']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeOfResponse;

        const belowThreshold = loadedTime <= MAX_RESPONSE_TIME;

        return {
            displayValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = RestAudit;