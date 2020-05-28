
/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************ManagementAPI************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

class ManagementAPI extends Base{
  constructor(){
  }

  // Make sure the client is loaded and sign-in is complete before calling this method.
  accountSummariesList() {
    return gapi.client.analytics.management.accountSummaries.list({})
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
/*accountUserLinks******************************************************************************************/
/************************************************************************************************************************/
  // Make sure the client is loaded and sign-in is complete before calling this method.
  accountUserLinksDelete() {
    return gapi.client.analytics.management.accountUserLinks.delete({})
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  accountUserLinksInsert(obj) {
    return gapi.client.analytics.management.accountUserLinks.insert(obj)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  accountUserLinksUpdate(obj) {
    return gapi.client.analytics.management.accountUserLinks.update(obj)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  accountUserLinksList() {
    return gapi.client.analytics.management.accountUserLinks.list()
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*accounts******************************************************************************************/
/************************************************************************************************************************/
// Make sure the client is loaded and sign-in is complete before calling this method.
function accountsList() {
  return gapi.client.analytics.management.accounts.list({})
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*accountUserLinks******************************************************************************************/
/************************************************************************************************************************/
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/

}
