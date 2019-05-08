/**
 * Auto-generated action file for "Gateway" API.
 *
 * Generated at: 2019-05-07T14:44:35.715Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / tyk-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/tyk/keys/{keyId}'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "x-tyk-authorization",
    "keyId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "x_tyk_authorization": "x-tyk-authorization",
    "keyId": "keyId",
    "access_rights": "access_rights",
    "allowance": "allowance",
    "apply_policy_id": "apply_policy_id",
    "hash_type": "hash_type",
    "password": "password",
    "basic_auth_data": "basic_auth_data",
    "expires": "expires",
    "hmac_enabled": "hmac_enabled",
    "hmac_string": "hmac_string",
    "is_inactive": "is_inactive",
    "secret": "secret",
    "jwt_data": "jwt_data",
    "meta_data": "meta_data",
    "trigger_limits": "trigger_limits",
    "monitor": "monitor",
    "oauth_client_id": "oauth_client_id",
    "org_id": "org_id",
    "per": "per",
    "quota_max": "quota_max",
    "quota_remaining": "quota_remaining",
    "quota_renewal_rate": "quota_renewal_rate",
    "quota_renews": "quota_renews",
    "rate": "rate",
    "tags": "tags",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/tyk/keys/{keyId}',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}