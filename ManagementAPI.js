
/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************ManagementAPI************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/

class ManagementAPI extends Base{
  constructor(){
  }

/*request******************************************************************************************/
/************************************************************************************************************************/
  request(cb, obj, type, method) {
    //Logger.log(`{\n'accountId': '123456',\n'resource': {\n'permissions': {\n'local': [\n'EDIT',\n'MANAGE_USERS'\n]\n},\n'userRef': {\n'email': 'liz@gmail.com'\n}}`)
    if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
    if(!obj) throw"Le 2d paramètre 'obj' est obligatoire")
    else if(!type) throw"Le 3e paramètre 'type' est obligatoire (insert,delete,get,upd...)")
    else if(!method) throw"Le 4e et dernier paramètre 'method' est obligatoire (parmi les 20 méthodes de la class 'gapi.client.analytics.managment')")
    if(["delete","get","insert","list","patch","update"].indexOf(type) != -1){
      return gapi.client.analytics.management[method]][type](obj)
          .then(cb, function(err) { console.error("Execute error", err); });
    }
  }
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*accountSummaries******************************************************************************************/
/************************************************************************************************************************/
  accountSummariesList(cb) {
    if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
    return gapi.client.analytics.management.accountSummaries.list()
        .then(cb, function(err) { console.error("Execute error", err); });
  }
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*accountUserLinks******************************************************************************************/
/************************************************************************************************************************/
  requestAccountUserLinks(cb, obj, type) {
    Logger.log(`{\n'accountId': '123456',\n'resource': {\n'permissions': {\n'local': [\n'EDIT',\n'MANAGE_USERS'\n]\n},\n'userRef': {\n'email': 'liz@gmail.com'\n}}`)
    if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
    if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
    if(["delete","get","insert","list","patch","update"].indexOf(type) != -1){
      return gapi.client.analytics.management.accountUserLinks[type](obj)
          .then(cb, function(err) { console.error("Execute error", err); });
    }
  }
  accountUserLinksDelete(cb, obj) {
    if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
    if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
    return gapi.client.analytics.management.accountUserLinks.delete(obj)
        .then(cb, function(err) { console.error("Execute error", err); });
  }
  accountUserLinksInsert(cb, obj) {
    if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
    if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
    return gapi.client.analytics.management.accountUserLinks.insert(obj)
        .then(cb, function(err) { console.error("Execute error", err); });
  }
  accountUserLinksUpdate(cb, obj) {
    if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
    if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
    return gapi.client.analytics.management.accountUserLinks.update(obj)
        .then(cb, function(err) { console.error("Execute error", err); });
  }
  accountUserLinksList(cb) {
    if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
    return gapi.client.analytics.management.accountUserLinks.list()
        .then(cb, function(err) { console.error("Execute error", err); });
  }
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*accounts******************************************************************************************/
/************************************************************************************************************************/
accountsList(cb) {
  if(!cb)cb = printAccounts
  return gapi.client.analytics.management.accounts.list()
      .then(cb, function(err) { console.error("Execute error", err); });
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*googleAdsLinks******************************************************************************************/
/************************************************************************************************************************/
requestAdWordsLink(cb, obj, type) {
  Logger.log(`{\n'accountId': '123456',\n'webPropertyId': 'UA-123456-1',\n'resource': {\n'adWordsAccounts': [ { 'customerId': '123-456-7890'} ],\n'name': 'Google Ads Link'\n}}`)
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
  if(["delete","get","insert","list","patch","update"].indexOf(type) != -1){
    var request = gapi.client.analytics.management.webPropertyAdWordsLinks[type](obj);
    request.execute(cb)
  }
}
deleteAdWordsLink(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
  var request = gapi.client.analytics.management.webPropertyAdWordsLinks.delete(obj);
  request.execute(cb);
}
getAdWordsLink(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
  var request = gapi.client.analytics.management.webPropertyAdWordsLinks.get(obj);
  request.execute(cb);
}
insertAdWordsLink(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
  var request = gapi.client.analytics.management.webPropertyAdWordsLinks.insert(obj);
  request.execute(cb);
}
patchAdWordsLink(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
  var request = gapi.client.analytics.management.webPropertyAdWordsLinks.patch(obj);
  request.execute(cb);
}
updateAdWordsLink(cb) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
  var request = gapi.client.analytics.management.webPropertyAdWordsLinks.update(obj);
  request.execute(cb);
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*CustomDataSources******************************************************************************************/
/************************************************************************************************************************/
listCustomDataSources(cb, obj) {
  Logger.log(`{'accountId': '123456',\n'webPropertyId': 'UA-123456-1'}`)
  if(!cb)cb = this.printCustomDataSources
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire")
  var request = gapi.client.analytics.management.customDataSources.list(obj);
  request.execute(cb);
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*CustomDimensions******************************************************************************************/
/************************************************************************************************************************/
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*CustomMetrics******************************************************************************************/
/************************************************************************************************************************/
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Experiments******************************************************************************************/
function requestExperiement(cb, obj, type){
  Logger.log(`{'accountId': '123456',\n'webPropertyId': 'UA-123456-1',\n'profileId': '7654321',\n'experimentId': '122333444455555',\n'resource': {\n'name': 'Landing Page Test',\n'status': 'DRAFT',\n'variations': [\n{\n'name': 'VariationA',\n'url': 'index.html'\n},\n{\n'name': 'VariationB',\n'url': 'indexB.html'\n}\n]\n}}`)
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  if(["delete","get","insert","list","patch","update"].indexOf(type) != -1 ) {
    var request = gapi.client.analytics.management.experiments[type](obj);
    request.execute(cb);
  }throw "le 3e paramètre est obligatoire, string, il indique que requete est faite sur l'objet"
}
function deleteExperiement(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.experiments.delete(obj);
  request.execute(cb);
}
function getExperiement(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.experiments.get(obj);
  request.execute(cb);
}
function insertExperiment(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.experiments.insert(obj);
  request.execute(cb);
}
function listExperiements(cb, obj) {
  if(!cb)cb = this.printExperiments
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.experiments.list(obj);
  request.execute(cb);
}
function patchExperiment(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.experiments.patch(obj);
  request.execute(cb);
}
function updateExperiment(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.experiments.update(obj);
  request.execute(cb);
}
/************************************************************************************************************************/
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Filters******************************************************************************************/
/************************************************************************************************************************/
function requestFilter(cb, obj, type) {
  Logger.log(`{\n'accountId': '123456',\n'resource': {\n'name': 'My Domain Filter',\n'type': 'EXCLUDE',\n'excludeDetails': {\n'field': 'GEO_DOMAIN',\n'matchType': 'EQUAL',\n'expressionValue': 'example.com',\n'caseSensitive': false\n}\n}}`)
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  if(["delete","get","insert","list","patch","update"].indexOf(type) != -1 ) {
    var request = gapi.client.analytics.management.filters[type](obj);
    request.execute(cb);
  }
}
function deleteFilter(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.filters.delete(obj);
  request.execute(cb);
}
function getFilter(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.filters.get(obj);
  request.execute(cb);
}
function insertFilter(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.filters.insert(obj);
  request.execute(cb);
}
function listFilters(cb, obj) {
  if(!cb)cb = printFilters
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.filters.list(obj);
  request.execute(cb);
}
function patchFilter(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.filters.patch(obj);
  request.execute(cb);
}
function updateFilter(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.filters.update(obj);
  request.execute(cb);
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Goals******************************************************************************************/
/************************************************************************************************************************/
function requestGoal(cb, obj ,type) {
  Logger.log(`{\n'accountId': '123456',\n'webPropertyId': 'UA-123456-1',\n'profileId': '7654321',\n'resource': {\n'id': '7',\n'active': false,\n'name': 'My Goal',\n'type': 'VISIT_TIME_ON_SITE',\n'visitTimeOnSiteDetails': {\n'comparisonType': 'GREATER_THAN',\n'comparisonValue': 300\n}\n}}`)
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  if(["get","insert","list","patch","update"].indexOf(type) != -1 ) {
    var request = gapi.client.analytics.management.goals[type](obj);
    request.execute(cb);
  }
}
function getGoal(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.goals.get(obj);
  request.execute(cb);
}
function insertGoal(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.goals.insert(obj);
  request.execute(cb);
}
function listGoals(cb, obj) {
  if(!cb)cb = printGoals
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.goals.list(obj);
  request.execute(printGoals);
}
function patchGoal(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.goals.patch(obj);
  request.execute(cb);
}
function updateGoal(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.goals.update(obj);
  request.execute(cb);
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Client Id******************************************************************************************/
/************************************************************************************************************************/
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*ProfileFilterLinks******************************************************************************************/
/************************************************************************************************************************/
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Profile User Links******************************************************************************************/
/************************************************************************************************************************/
function requestProfileUserLink(cb, obj, type) {
  Logger.log(`{\n'accountId': '123456',\n'webPropertyId': 'UA-123456-1',\n'profileId': '7654321',\n'resource': {\n'permissions': {\n'local': [\n'EDIT',\n'MANAGE_USERS'\n]\n},\n'userRef': {\n'email': 'liz@gmail.com'\n}\n}\n}`)
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  if(["delete","insert","list","update"].indexOf(type) != -1 ) {
    var request = gapi.client.analytics.management.profileUserLinks[type](obj);
    request.execute(cb);
  }
}
function deleteProfileUserLink(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.profileUserLinks.delete(obj);
  request.execute(cb);
}
function insertProfileUserLink(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.profileUserLinks.insert(obj);
  request.execute(cb);
}
function listProfileUserLinks(cb, obj) {
  if(!cb)cb = printProfileUserLinks
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.profileUserLinks.list(obj);
  request.execute(cb);
}
function updateProfileUserLink() {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.profileUserLinks.update(obj);
  request.execute(cb);
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*customDataSources******************************************************************************************/
/************************************************************************************************************************/
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*remarketingAudiences******************************************************************************************/
/************************************************************************************************************************/
function requestRemarketingAudience(cb, obj, type) {
  Logger.log(`{\n'accountId': accountId,\n'webPropertyId': propertyId,\n'resource': {\n'name': 'State Based Audience',\n'linkedViews': [viewId],\n'linkedAdAccounts': [{\n'type': 'ADWORDS_LINKS',\n'linkedAccountId': linkedAccountId\n}],\n'audienceType': 'STATE_BASED',\n'stateBasedAudienceDefinition': {\n'includeConditions': {\n'daysToLookBack': 30,\n'segment': 'users::condition::ga:browser==Chrome',\n'membershipDurationDays': 30,\n'isSmartList': False\n},\n'excludeConditions': {\n'exclusionDuration': 'PERMANENT',\n'segment': 'sessions::condition::ga:city==London'\n}\n}\n}\n}`)
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  if(["delete","get","insert","list","patch","update"].indexOf(type) != -1 ) {
    let request = gapi.client.analytics.management.remarketingAudience[type](obj);
    request.execute(cb);
  }
}
function deleteRemarketingAudience(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  let request = gapi.client.analytics.management.remarketingAudience.delete(obj);
  request.execute(cb);
}
function getRemarketingAudience(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  let request = gapi.client.analytics.management.remarketingAudience.get(obj);
  request.execute(cb);
}
function insertRemarketingAudience(cb, obj) {
  if(!cb)cb = this.insertSIMPLEAudience
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  let request = gapi.client.analytics.management.remarketingAudience.insert(obj);
  request.execute(cb);
}
function listRemarketingAudiences(cb, obj) {
  if(!cb)cb = this.printResults
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  let request = gapi.client.analytics.management.remarketingAudience.list(obj).then(cb);
}
function patchRemarketingAudience(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  let request = gapi.client.analytics.management.remarketingAudience.patch(obj);
  request.execute(cb);
}
function updateRemarketingAudience(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  let request = gapi.client.analytics.management.remarketingAudience.update(obj);
  request.execute(cb);
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Segments******************************************************************************************/
/************************************************************************************************************************/
function listSegments(cb) {
  if(!cb)cb = this.printSegments
  var request = gapi.client.analytics.management.segments.list();
  request.execute(cb);
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Unsampled Reports******************************************************************************************/
/************************************************************************************************************************/
function requestUnsampledReport(cb, obj, type) {
  Logger.log(`{\n'accountId': '123456',\n'webPropertyId': 'UA-123456-1',\n'profileId': '7654321',\n'resource': {\n'title': 'A test Report',\n'start-date': '2013-01-01',\n'end-date': '2013-01-31',\n'metrics': 'ga:pageviews,ga:bounces',\n'dimensions': 'ga:browser',\n'filters': 'ga:bounces>=100',\n'segment': 'gaid::-1'\n}\n}`)
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  if(["delete","get","insert","list"].indexOf(type) != -1 ) {
    var request = gapi.client.analytics.management.unsampledReports[type](obj);
    request.execute(cb);
  }
}
function deleteUnsampledReport(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.unsampledReports.delete(obj);
  request.execute(cb);
  //return this.requestUnsampledReport(cb, obj, "delete")
}
function getUnsampledReport(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.unsampledReports.get(obj);
  request.execute(cb);
  //return this.requestUnsampledReport(cb, obj, "get")
}
function insertUnsampledReport(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.unsampledReports.insert(obj);
  request.execute(cb);
  //return this.requestUnsampledReport(cb, obj, "insert")
}
function listUnsampledReport(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.unsampledReports.insert(obj);
  request.execute(cb);
  //return this.requestUnsampledReport(cb, obj, "list")
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Uploads******************************************************************************************/
/************************************************************************************************************************/
function deleteUploads(cb, obj) {
  Logger.log(`{\n'accountId': '123456',\n'webPropertyId': 'UA-123456-1',\n'customDataSourceId': 'ABCDEFG123abcDEF123',\n'resource': {\n'customDataImportUids': ['AAABBBCCCDDD111222',\n'xLh4wXtzQT6uxe-_OWelog']\n}\n}`)
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.uploads.deleteUploadData(obj);
  request.execute(cb);
}
function getUpload(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.uploads.get(obj);
  request.execute(cb);
}
function listUploads(cb, obj) {
  if(!cb)cb = this.printUploads
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.uploads.list(obj);
  request.execute(cb);
}
function uploadData(cb, obj, fileData) {
  Logger.log(`{\n'path': 'upload/analytics/v3/management/accounts/`+obj.accountId+`/webproperties/`+obj.webPropertyId+`/customDataSources/`+obj.customDataSourceId+`/uploads',\n'method': 'POST',\n'params': {'uploadType': 'multipart'},\n'headers': {\n'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'\n},\n'body': multipartRequestBody\n}`)
  const boundary = '-------314159265358979323846';
  const delimiter = "\r\n--" + boundary + "\r\n";
  const close_delim = "\r\n--" + boundary + "--";

  var contentType = 'application/octet-stream'

  var reader = new FileReader();
  reader.readAsBinaryString(fileData);
  reader.onload = function(e) {
    var contentType = 'application/octet-stream';
    var metadata = {
      'title': fileData.name,
      'mimeType': contentType
    };

    var base64Data = btoa(reader.result);
    var multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter +
        'Content-Type: ' + contentType + '\r\n' +
        'Content-Transfer-Encoding: base64\r\n' +
        '\r\n' +
        base64Data +
        close_delim;

    var request = gapi.client.request(obj);
    request.execute(cb);
  }
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Views ******************************************************************************************/
/************************************************************************************************************************/
function requestView(cb, obj, type) {
  Logger.log(`{\n'accountId': '123456',\n'webPropertyId': 'UA-123456-1',\n'resource': {\n'name': 'eCommerce View (Profile)',\n'eCommerceTracking': true\n}\n}`)
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  if(["delete","get","insert","list","patch","update"].indexOf(type) != -1 ) {
    var request = gapi.client.analytics.management.profiles[type](obj);
    request.execute(cb);
  }
}
function deleteView(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.profiles.delete(obj);
  request.execute(cb);
}
function getView(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.profiles.get(obj);
  request.execute(cb);
}
function insertView(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.profiles.insert(obj);
  request.execute(cb);
}
function listView(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.profiles.list(obj);
  request.execute(cb);
}
function patchView(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.profiles.patch(obj);
  request.execute(cb);
}
function updateView(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.profiles.update(obj);
  request.execute(cb);
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Web Properties******************************************************************************************/
/************************************************************************************************************************/
function requestProperty(cb, obj, type) {
  Logger.log(`{\n'accountId': '123456',\n'resource': {\n'websiteUrl': 'http://www.examplepetstore.com',\n'name': 'Example Store'\n}\n}`)
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  if(["get","insert","list","patch","update"].indexOf(type) != -1 ) {
    var request = gapi.client.analytics.management.webproperties[type](obj);
    request.execute(cb);
  }
}
function getProperty(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.webproperties.get(obj);
  request.execute(cb);
}
function insertProperty(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.webproperties.insert(obj);
  request.execute(cb);
}
function listProperty(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.webproperties.list(obj);
  request.execute(cb);
}
function patchProperty(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.webproperties.patch(obj);
  request.execute(cb);
}
function updateProperty(cb, obj) {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.webproperties.update(obj);
  request.execute(cb);
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*Webproperty User Links******************************************************************************************/
/************************************************************************************************************************/
function requestPropertyUserLink(cb, obj, type) {
  Logger.log(`{\n'accountId': '123456',\n'webPropertyId': 'UA-123456-1',\n'resource': {\n'permissions': {\n'local': [\n'EDIT',\n'MANAGE_USERS'\n]\n},\n'userRef': {\n'email': 'liz@gmail.com'\n}\n}\n}`)
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  if(["delete","insert","list","update"].indexOf(type) != -1 ) {
    var request = gapi.client.analytics.management.webpropertyUserLinks[type](obj);
    request.execute(cb);
  }
}
function deletePropertyUserLink() {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.webpropertyUserLinks.delete(obj);
  request.execute(cb);
}
function insertPropertyUserLink() {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.webpropertyUserLinks.insert(obj);
  request.execute(cb);
}
function listPropertyUserLink() {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.webpropertyUserLinks.list(obj);
  request.execute(cb);
}
function updatePropertyUserLink() {
  if(!cb)cb = function (response) {Logger.log("Vous n'avez pas entré de callback")}
  if(typeof obj != "undefined") throw"Le 2d paramètre 'obj' est obligatoire."
  var request = gapi.client.analytics.management.webpropertyUserLinks.update(obj);
  request.execute(cb);
}
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/*printViews******************************************************************************************/
/************************************************************************************************************************/
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/



/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/
/*printViews******************************************************************************************/
/************************************************************************************************************************/
function printAccounts(results) {
  if (results && !results.error) {
    var accounts = results.items;
    for (var i = 0, account; account = accounts[i]; i++) {
      console.log('Account Id: ' + account.id);
      console.log('Account Kind: ' + account.kind);
      console.log('Account Name: ' + account.name);
      console.log('Account Created: ' + account.created);
      console.log('Account Updated: ' + account.updated);
    }
  }
}
/***/
function printViews(results) {
  if (results && !results.error) {
    var adWordsLinks = results.items;
    for (var i = 0, link; link = adWordsLinks[i]; i++) {

      console.log('Link Id: ' + link.id);
      console.log('Link Kind: ' + link.kind);
      console.log('Link Name: ' + link.name);

      // Get the property reference from the entity.
      var property = link.entity.webPropertyRef;
      console.log('Property Id: ' + property.id);
      console.log('Property Kind: ' + property.kind);
      console.log('Property Name: ' + property.name);
      console.log('Property Account id: ' + property.accountId);

      // Get the Google Ads accounts.
      var adWordsAccounts = link.adWordsAccounts;
      for (var j = 0, account; account = adWordsAccounts[j]; j++) {
        console.log('Account Id: ' + account.customerId);
        console.log('Account Kind: ' + account.kind);
        console.log('Auto Tagging Enabled: ' + account.autoTaggingEnabled);
      }
    }
  }
}
/***/
function printCustomDataSources(results) {
  if (results && !results.error) {
    var datasets = results.items;
    for (var i = 0, dataset; dataset = datasets[i]; i++) {
      console.log('Account Id: ' + dataset.accountId);
      console.log('Property Id: ' + dataset.webPropertyId);
      console.log('Dataset Id: ' + dataset.id);
      console.log('Dataset Kind: ' + dataset.kind);
      console.log('Dataset Name: ' + dataset.name);
      console.log('Dataset Description: ' + dataset.description);
      console.log('Dataset uploadType: ' + dataset.uploadType);

      // Iterate through the linked views (profiles).
      var profiles = dataset.profilesLinked;
      if (profiles) {
        for (var j = 0, profile; profile = profiles[j]; j++) {
          console.log('Linked view (profile) Id: ' + profile);
        }
      }
    }
  }
}
/***/
function printExperiments(results) {
  if (results && !results.error) {
    var experiments = results.items;
    for (var i = 0, experiment; experiment = experiments[i]; i++) {
      console.log('Experiment Id: ' + experiment.id);
      console.log('Experiment Kind: ' + experiment.kind);
      console.log('Experiment Name: ' + experiment.name);

      // Iterate through the variations.
      var variations = experiment.variations;
      if (variations) {
        for (var j = 0, variation; variation = variations[j]; j++) {
          console.log('Variation Name: ' + variation.name);
          console.log('Variation Status: ' + variation.status);
          console.log('Variation URL: ' + variation.url);
          console.log('Variation Won: ' + variation.won);
        }
      }
    }
  }
}
/***/
function printGoals(results) {
  if (results && !results.error) {
    var goals = results.items;
    for (var i = 0, goal; goal = goals[i]; i++) {
      console.log('Account Id: ' + goal.accountId);
      console.log('Property Id: ' + goal.webPropertyId);
      console.log('Internal Property Id: ' + goal.internalWebPropertyId);
      console.log('View (Profile) Id: ' + goal.profileId);

      console.log('Goal Id: ' + goal.id);
      console.log('Goal Name: ' + goal.name);
      console.log('Goal Value: ' + goal.value);
      console.log('Goal Active: ' + goal.active);
      console.log('Goal Type: ' + goal.type);

      console.log('Created: ' + goal.created);
      console.log('Updated: ' + goal.updated);

      // Print the goal details depending on the type of goal.
      if (goal.urlDestinationDetails) {
        printDestinationDetails(goal.urlDestinationDetails);
      } else if (goal.visitTimeOnSiteDetails) {
        printComparisonDetails(goal.visitTimeOnSiteDetails);
      } else if (goal.visitNumPagesDetails) {
        printComparisonDetails(goal.visitNumPagesDetails);
      } else if (goal.eventDetails) {
        printEventDetails(goal.eventDetails);
      }
    }
  }
}


function printDestinationDetails(details) {
  console.log('Goal URL: ' + details.url);
  console.log('Case Sensitive: ' + details.caseSensitive);
  console.log('Match Type: ' + details.matchType);
  console.log('First Step Required: ' + details.firstStepRequired);

  // Iterate through the steps.
  var steps = details.steps;
  if (steps) {
    for (var i = 0, step; step = steps[i]; i++) {
      console.log('Step Number: ' + step.number);
      console.log('Step Name: ' + step.name);
      console.log('Step URL: ' + step.url);
    }
  } else {
    console.log('No Steps Configured.');
  }
}

function printComparisonDetails(details) {
  console.log('Comparison Type: ' + details.comparisonType);
  console.log('Comparison Value: ' + details.comparisonValue);
}

function printEventDetails(details) {
  var conditions = details.eventContitions;
  if (conditions) {
    for (var i = 0, condition; condition = conditions[i]; i++) {
      console.log('Condition Type: ' + condition.type);
      if (condition.type == 'VALUE') {
        console.log('Comparison Type: ' + condition.comparisonType);
        console.log('Comparison Value: ' + condition.comparisonValue);
      } else {
        console.log('Match Type: ' + condition.matchType);
        console.log('Expression: ' + condition.expression);
      }
    }
  }
}
/***/
function printProfileUserLinks(results) {
  if (results && !results.error) {
    var profileLinks = results.items;
    for (var i = 0, profileUserLink; profileUserLink = profileLinks[i]; i++) {
      var entity = profileUserLink.entity;
      var profileRef = entity.profileRef;
      var userRef = profileUserLink.userRef;
      var permissions = profileUserLink.permissions;

      console.log('Profile User Link Id: ' + profileUserLink.id);
      console.log('Profile User Link Kind: ' + profileUserLink.kind);
      console.log('User Email: ' + userRef.email);
      console.log('Permissions effective: ' + permissions.effective);
      console.log('Permissions local: ' + permissions.local);
      console.log('Profile Id: ' + profileRef.id);
      console.log('Profile Kind: ' + profileRef.kind);
      console.log('Profile Name: ' + profileRef.name);
    }
  }
}
/***/
function insertSIMPLEAudience(accountId, propertyId) {
  let request = gapi.client.analytics.management.remarketingAudience.insert(
    {
      'accountId': accountId,
      'webPropertyId': propertyId,
      'resource': {
        'name': 'Simple Audience',
        'linkedViews': [viewId],
        'linkedAdAccounts': [{
            'type': 'ADWORDS_LINKS',
            'linkedAccountId': linkedAccountId
        }],
        'audienceType': 'SIMPLE',
        'audienceDefinition': {
          'includeConditions': {
            'isSmartList': False,
            'daysToLookBack': 7,
            'membershipDurationDays': 30,
            'segment': 'users::condition::ga:browser==Chrome'
          }
        }
      }
    });
  request.execute(function (response) { // Handle the response. });
}
function printResults(results) {
  if (results && !results.error) {
    let audiences = results.items;
    for (let i = 0, audience; audience = audiences[i]; i++) {
      console.log('Audience Id ' + audience.id);
      console.log('Audience name ' + audience.name);
    }
    for (let j = 0, view; audience.linkedViews[j]; j++) {
      console.log('linkedView ' + view);
    }

    // Get the linked accounts.
    let linkedAccounts = audience.linkedAdAccounts;
    for (let j = 0, link; link = linkedAccounts[i]; i++) {
      console.log('Link type ' + link.type);
      console.log('Link linkedAccountId ' + link.linkedAccountId);
    }

    // Get the audience type.
    let audienceType = audience.type;
    console.log('Audience type ' + audienceType);

    // Get the audience definition.
    if (audienceType == 'SIMPLE') {
      let definition = audience.audienceDefinition;

      // Get the include conditions.
      let condition = definition.includeConditions;
      console.log('Condition daysToLookBack ' + condition.daysToLookBack);
      console.log('Condition membershipDurationDays ' +
        condition.membershipDurationDays);
      console.log('Condition segment ' + condition.segment);
    } else if (audienceType == 'STATE_BASED') {
      let definition = audience.stateBasedAudienceDefinition;

      // Get the include conditions.
      let condition = definition.includeConditions;
      console.log('Condition daysToLookBack ' +
        condition.daysToLookBack);
      console.log('Condition membershipDurationDays ' + condition.membershipDurationDays);
      console.log('Condition segment ' + condition.segment);

      // Get the exclude condition
      let excludeCondition = definition.excludeConditions;
      console.log('Condition exclusionDuration ' +
        excludeCondition.exclusionDuration);
      console.log('Condition segment ' + excludeCondition.segment);
    }
  }
}
function printSegments(results) {
  if (results && !results.error) {
    var segments = results.items;
    for (var i = 0, segment; segment = segments[i]; i++) {
      console.log('Segment Id: ' + segment.id);
      console.log('Segment Kind: ' + segment.kind);
      console.log('Segment Name: ' + segment.name);
      console.log('Segment Definition: ' + segment.definition);

      // These fields are only set for custom segments and not default segments.
      if (segment.created) {
        console.log('Created: ' + segment.created);
        console.log('Updated: ' + segment.updated);
      }
    }
  }
}
function printUploads(results) {
  if (results && !results.error) {
    var uploads = results.items;
    for (var i = 0, upload; upload = uploads[i]; i++) {
      console.log('Upload Id: ' + upload.id);
      console.log('Upload Kind: ' + upload.kind);
      console.log('Account Id: ' + upload.accountId);
      console.log('Data Set Id: ' + upload.customDataSourceId);
      console.log('Upload Status: ' + upload.status);
    }
  }
}
/***/
/*---end-***************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/
/************************************************************************************************************************/
