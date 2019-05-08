# ![LOGO](logo.png) Gateway **flow**ground Connector

## Description

A generated **flow**ground connector for the Gateway API (version 1.9).

Generated from: https://api.apis.guru/v2/specs/tyk.com/1.9/swagger.json<br/>
Generated at: 2019-05-07T17:44:35+03:00

## API Description



## Authorization

This API does not require authorization.

## Actions

### Gets a list of *API Definition* objects that are currently live on the gateway

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret

### Create an *API Definition* object

### Deletes an *API Definition* object, if it exists

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `apiID` - _required_ - API ID

### Gets an *API Definition* object, if it exists

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `apiID` - _required_ - API ID

### Updates an *API Definition* object, if it exists

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `apiID` - _required_ - API ID

### Gets the health check values for an API if it is being recorded

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `api_id` - _required_ - API ID to query

### Gets a list of *key* IDs (will only work with non-hashed installations)

#### Input Parameters
* `api_id` - _required_ - Back-end to target
* `x-tyk-authorization` - _required_ - tyk gateway shared secret

### Create a new *API token* with the *session object* defined in the body

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `suppress_reset` - _optional_ - Adding the `suppress_reset` parameter and setting it to `1`, will cause Tyk to not reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when ADDing a key. Adding the `suppress_reset` flag to the URL parameters will avoid this behaviour.

### Remove this *API token* from the gateway, this will completely destroy the token and metadata associated with the token and instantly stop access from being granted

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `keyId` - _required_ - Access Token
* `api_id` - _required_ - Back-end to target

### Add a pre-specified *API token* with the *session object* defined in the body, this operatin creates a custom token that dsoes not use the gateway naming convention for tokens

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `keyId` - _required_ - Access Token

### Update an *API token* with the *session object* defined in the body, this operatin overwrites the existing object

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `keyId` - _required_ - Access Token
* `suppress_reset` - _optional_ - Adding the `suppress_reset` parameter and setting it to `1`, will cause Tyk to not reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when ADDing a key. Adding the `suppress_reset` flag to the URL parameters will avoid this behaviour.
* `api_id` - _required_ - Back-end to target

### The final request from an authorising party for a redirect URI during the Tyk OAuth flow

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret

### Create a new OAuth client

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret

### Get a list of OAuth clients bound to this back end

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `apiId` - _required_ - API ID that owns this client (back end)

### Delete the OAuth client

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `apiId` - _required_ - API ID that owns this client (back end)
* `clientId` - _required_ - OAuth Client ID to delete

### Invalidate a refresh token

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret
* `keyId` - _required_ - Access Token
* `apiID` - _required_ - API ID

### Will reload the targetted gateway

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret

### Will reload the cluster via the targeted gateway

#### Input Parameters
* `x-tyk-authorization` - _required_ - tyk gateway shared secret

## License

**flow**ground :- Telekom iPaaS / tyk-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
