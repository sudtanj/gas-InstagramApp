instagramId="";
content=null;
function initInstagramApp(instagramId){
  this.instagramId=instagramId;
}
function fetchContent(){
  this.content = UrlFetchApp.fetch("https://saveig.com/"+this.instagramId).getContentText();
}
function getImages(){
  const $ = Cheerio.load(content);
  var result=[];
  $('a').each(function(){
    if($(this).attr('class')===("download")){
      result.push($(this).attr('href'));
    }
  });
  return result;
}
