/**
 * Auto-generated action file for "Gateway" API.
 *
 * Generated at: 2019-05-07T14:44:35.711Z
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
 * Endpoint Path: '/tyk/apis/'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "api_id": "api_id",
    "auth_header_name": "auth_header_name",
    "use_cookie": "use_cookie",
    "use_param": "use_param",
    "auth": "auth",
    "key": "key",
    "location": "location",
    "definition": "definition",
    "enable_jwt": "enable_jwt",
    "enable_signature_checking": "enable_signature_checking",
    "hmac_allowed_clock_skew": "hmac_allowed_clock_skew",
    "id": "id",
    "jwt_identity_base_field": "jwt_identity_base_field",
    "jwt_policy_field_name": "jwt_policy_field_name",
    "jwt_signing_method": "jwt_signing_method",
    "jwt_source": "jwt_source",
    "name": "name",
    "oauth_on_keychange_url": "oauth_on_keychange_url",
    "shared_secret": "shared_secret",
    "notifications": "notifications",
    "allowed_access_types": "allowed_access_types",
    "allowed_authorize_types": "allowed_authorize_types",
    "auth_login_redirect": "auth_login_redirect",
    "oauth_meta": "oauth_meta",
    "org_id": "org_id",
    "slug": "slug",
    "allow_credentials": "allow_credentials",
    "allowed_headers": "allowed_headers",
    "allowed_methods": "allowed_methods",
    "allowed_origins": "allowed_origins",
    "debug": "debug",
    "enable": "enable",
    "exposed_headers": "exposed_headers",
    "max_age": "max_age",
    "options_passthrough": "options_passthrough",
    "CORS": "CORS",
    "active": "active",
    "allowed_ips": "allowed_ips",
    "cache_all_safe_requests": "cache_all_safe_requests",
    "cache_timeout": "cache_timeout",
    "enable_cache": "enable_cache",
    "enable_upstream_cache_control": "enable_upstream_cache_control",
    "cache_options": "cache_options",
    "check_list": "check_list",
    "expire_utime_after": "expire_utime_after",
    "recheck_wait": "recheck_wait",
    "data_path": "data_path",
    "endpoint_returns_list": "endpoint_returns_list",
    "parent_data_path": "parent_data_path",
    "port_data_path": "port_data_path",
    "query_endpoint": "query_endpoint",
    "use_discovery_service": "use_discovery_service",
    "use_nested_query": "use_nested_query",
    "use_target_list": "use_target_list",
    "service_discovery": "service_discovery",
    "config": "config",
    "post": "post",
    "pre": "pre",
    "response": "response",
    "custom_middleware": "custom_middleware",
    "do_not_track": "do_not_track",
    "domain": "domain",
    "dont_set_quota_on_create": "dont_set_quota_on_create",
    "enable_batch_request_support": "enable_batch_request_support",
    "enable_ip_whitelisting": "enable_ip_whitelisting",
    "event_handlers": "event_handlers",
    "expire_analytics_after": "expire_analytics_after",
    "check_host_against_uptime_tests": "check_host_against_uptime_tests",
    "enable_load_balancing": "enable_load_balancing",
    "listen_path": "listen_path",
    "preserve_host_header": "preserve_host_header",
    "strip_listen_path": "strip_listen_path",
    "target_list": "target_list",
    "target_url": "target_url",
    "proxy": "proxy",
    "response_processors": "response_processors",
    "session_lifetime": "session_lifetime",
    "tags": "tags",
    "uptime_tests": "uptime_tests",
    "use_basic_auth": "use_basic_auth",
    "use_keyless": "use_keyless",
    "use_oauth2": "use_oauth2",
    "not_versioned": "not_versioned",
    "versions": "versions",
    "version_data": "version_data",
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
        pathName: '/tyk/apis/',
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