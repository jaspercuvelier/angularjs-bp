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


