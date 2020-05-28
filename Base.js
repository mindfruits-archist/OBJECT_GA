
/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************ManagementAPI************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

class Base{
  constructor(config){
    this.clientID = config.clientID || "318651980223-u79baf4om96ohtfsgstldrnq9hq0meua.apps.googleusercontent.com"
    this.clientSecret = config.clientSecret || "I-M2gjyjmGIh4gzpWanR9Z59"
    this.scopes = config.scopes || "https://www.googleapis.com/auth/drive"
    this.authUrl = config.authUrl || "'https://accounts.google.com/o/oauth2/auth'"
    this.tokenUrl = config.tokenUrl || "'https://accounts.google.com/o/oauth2/token'"
  }
  
  authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/analytics.edit https://www.googleapis.com/auth/analytics.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/analytics/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
}
