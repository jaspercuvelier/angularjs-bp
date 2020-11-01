function doGet(e) {

  var html = HtmlService.createTemplateFromFile("index.html")
      html.data = {}
  return html.evaluate().setTitle("<<--TITLE HERE --> ").addMetaTag('viewport', 'width=device-width, initial-scale=1');
}


function include(filename,data){
  var html = HtmlService.createTemplateFromFile(filename)
    html.data = data;
  return html.evaluate().getContent()
}


const props = PropertiesService.getScriptProperties()
const [email, key, projectId] = [props.getProperty('client_email'), props.getProperty('private_key'), props.getProperty('project_id')];
//https://github.com/grahamearley/FirestoreGoogleAppsScript
const firestore = FirestoreApp.getFirestore(email, key, projectId);


