var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var gTimeZone=0;
function dcsCookie(){
if(typeof(dcsOther)=="function"){
dcsOther();
}
else if(typeof(dcsPlugin)=="function"){
dcsPlugin();
}
else if(typeof(dcsFPC)=="function"){
dcsFPC(gTimeZone);
}
}
function dcsGetCookie(name){
var pos=document.cookie.indexOf(name+"=");
if(pos!=-1){
var start=pos+name.length+1;
var end=document.cookie.indexOf(";",start);
if(end==-1){
end=document.cookie.length;
}
return unescape(document.cookie.substring(start,end));
}
return null;
}
function dcsGetCrumb(name,crumb){
var aCookie=dcsGetCookie(name).split(":");
for(var i=0;i<aCookie.length;i++){
var aCrumb=aCookie[i].split("=");
if(crumb==aCrumb[0]){
return aCrumb[1];
}
}
return null;
}
function dcsGetIdCrumb(name,crumb){
var cookie=dcsGetCookie(name);
var id=cookie.substring(0,cookie.indexOf(":lv="));
var aCrumb=id.split("=");
for(var i=0;i<aCrumb.length;i++){
if(crumb==aCrumb[0]){
return aCrumb[1];
}
}
return null;
}
function dcsFPC(offset){
if(typeof(offset)=="undefined"){
return;
}
var name=gFpc;
var dCur=new Date();
dCur.setTime(dCur.getTime()+(dCur.getTimezoneOffset()*60000)+(offset*3600000));
var dExp=new Date(dCur.getTime()+315360000000);
var dSes=new Date(dCur.getTime());
if(document.cookie.indexOf(name+"=")!=-1){
var id=dcsGetIdCrumb(name,"id");
var lv=parseInt(dcsGetCrumb(name,"lv"));
var ss=parseInt(dcsGetCrumb(name,"ss"));
if((id==null)||(id=="null")||isNaN(lv)||isNaN(ss)){
return;
}
WT.co_f=id;
var dLst=new Date(lv);
dSes.setTime(ss);
if((dCur.getTime()>(dLst.getTime()+1800000))||(dCur.getTime()>(dSes.getTime()+28800000))){
dSes.setTime(dCur.getTime());
WT.vt_f_s="1";
}
if((dCur.getDay()!=dLst.getDay())||(dCur.getMonth()!=dLst.getMonth())||(dCur.getYear()!=dLst.getYear())){
WT.vt_f_d="1";
}
}
else{
var tmpname=name+"_TMP=";
document.cookie=tmpname+"1";
if(document.cookie.indexOf(tmpname)!=-1){
document.cookie=tmpname+"; expires=Thu, 01-Jan-1970 00:00:01 GMT";
if((typeof(gWtId)!="undefined")&&(gWtId!="")){
WT.co_f=gWtId;
}
else if((typeof(gTempWtId)!="undefined")&&(gTempWtId!="")){
WT.co_f=gTempWtId;
WT.vt_f="1";
}
else{
WT.co_f="2";
var cur=dCur.getTime().toString();
for(var i=2;i<=(32-cur.length);i++){
WT.co_f+=Math.floor(Math.random()*16.0).toString(16);
}
WT.co_f+=cur;
WT.vt_f="1";
}
if(typeof(gWtAccountRollup)=="undefined"){
WT.vt_f_a="1";
}
WT.vt_f_s="1";
WT.vt_f_d="1";
}
else{
WT.vt_f="2";
WT.vt_f_a="2";
return;
}
}
WT.co_f=escape(WT.co_f);
WT.vt_sid=WT.co_f+"."+dSes.getTime();
var expiry="; expires="+dExp.toGMTString();
document.cookie=name+"="+"id="+WT.co_f+":lv="+dCur.getTime().toString()+":ss="+dSes.getTime().toString()+expiry+"; path=/"+(((typeof(gFpcDom)!="undefined")&&(gFpcDom!=""))?("; domain="+gFpcDom):(""));
}
function dcsEvt(evt){
var e=evt.target||evt.srcElement;
if(e.tagName&&(e.tagName=="IMG")){
e=e.parentElement||e.parentNode;
}
return e;
}
function dcsBind(event,func){
if((typeof(window[func])=="function")&&document.body){
if(document.body.addEventListener){
document.body.addEventListener(event,window[func],true);
}
else if(document.body.attachEvent){
document.body.attachEvent("on"+event,window[func]);
}
}
}
function dcsET(){
dcsBind("click","dcsDownload");
dcsBind("click","dcsFormButton");
}
function dcsMultiTrack(){
for(var i=0;i<arguments.length;i++){
if(arguments[i].indexOf('WT.')==0){
WT[arguments[i].substring(3)]=arguments[i+1];
i++;
}
if(arguments[i].indexOf('DCS.')==0){
DCS[arguments[i].substring(4)]=arguments[i+1];
i++;
}
if(arguments[i].indexOf('DCSext.')==0){
DCSext[arguments[i].substring(7)]=arguments[i+1];
i++;
}
}
var dCurrent=new Date();
DCS.dcsdat=dCurrent.getTime();
dcsTag();
}
function dcsDownload(evt){
evt=evt||(window.event||"");
if(evt){
var e=dcsEvt(evt);
if(e.pathname&&e.hostname){
var path=(e.pathname.indexOf("/")!=0)?"/"+e.pathname:e.pathname;
dcsMultiTrack("DCS.dcssip",e.hostname,"DCS.dcsuri",path,"DCS.dcsqry",e.search||"","WT.ti","Link:"+(e.innerHTML||""),"WT.dl","1");
DCS.dcssip=DCS.dcsuri=DCS.dcsqry=WT.ti=WT.dl="";
}
}
}
function dcsFormButton(evt){
evt=evt||(window.event||"");
if(evt){
var e=dcsEvt(evt);
if(!e.href&&e.tagName&&(e.tagName=="INPUT")){
if(e.type&&((e.type=="submit")||(e.type=="image")||(e.type=="reset"))){
var qry="";
var elems=e.form.elements;
for(var i=0;i<elems.length;i++){
if((elems[i].type=="text")||(elems[i].type=="hidden")||(elems[i].type=="select-one")){
qry+=((qry=="")?"":"&")+escape(elems[i].name)+"="+escape(elems[i].value);
}
}
var title=e.form.id||e.form.className||e.form.name||"unknown";
dcsMultiTrack("DCS.dcsuri",e.form.action,"DCS.dcsqry",qry,"WT.ti","FormButton:"+title,"WT.dl","2");
DCS.dcsuri=DCS.dcsqry=WT.ti=WT.dl="";
}
}
}
}
function dcsAdv(){
dcsFunc("dcsET");
dcsFunc("dcsCookie");
}
var gImages=new Array;
var gIndex=0;
var DCS=new Object();
var WT=new Object();
var DCSext=new Object();
var gQP=new Array();
function dcsVar(){
var dCurrent=new Date();
WT.tz=dCurrent.getTimezoneOffset()/60*-1;
if(WT.tz==0){
WT.tz="0";
}
WT.bh=dCurrent.getHours();
WT.ul=navigator.appName=="Netscape"?navigator.language:navigator.userLanguage;
if(typeof(screen)=="object"){
WT.cd=navigator.appName=="Netscape"?screen.pixelDepth:screen.colorDepth;
WT.sr=screen.width+"x"+screen.height;
}
if(typeof(navigator.javaEnabled())=="boolean"){
WT.jo=navigator.javaEnabled()?"Yes":"No";
}
if(document.title){
WT.ti=document.title;
}
WT.js="Yes";
if(typeof(gVersion)!="undefined"){
WT.jv=gVersion;
}
if(document.body&&document.body.addBehavior){
document.body.addBehavior("#default#clientCaps");
if(document.body.connectionType){
WT.ct=document.body.connectionType;
}
document.body.addBehavior("#default#homePage");
WT.hp=document.body.isHomePage(location.href)?"1":"0";
}
if(parseInt(navigator.appVersion)>3){
if((navigator.appName=="Microsoft Internet Explorer")&&document.body){
WT.bs=document.body.offsetWidth+"x"+document.body.offsetHeight;
}
else if(navigator.appName=="Netscape"){
WT.bs=window.innerWidth+"x"+window.innerHeight;
}
}
WT.fi="No";
if(window.ActiveXObject){
if((typeof(gFV)!="undefined")&&(gFV.length>0)){
WT.fi="Yes";
WT.fv=gFV;
}
}
else if(navigator.plugins&&navigator.plugins.length){
for(var i=0;i<navigator.plugins.length;i++){
if(navigator.plugins[i].name.indexOf('Shockwave Flash')!=-1){
WT.fi="Yes";
WT.fv=navigator.plugins[i].description.split(" ")[2];
break;
}
}
}
DCS.dcsdat=dCurrent.getTime();
DCS.dcssip=window.location.hostname;
DCS.dcsuri=window.location.pathname;
if(window.location.search){
DCS.dcsqry=window.location.search;
if(gQP.length>0){
for(var i=0;i<gQP.length;i++){
var pos=DCS.dcsqry.indexOf(gQP[i]);
if(pos!=-1){
var front=DCS.dcsqry.substring(0,pos);
var end=DCS.dcsqry.substring(pos+gQP[i].length,DCS.dcsqry.length);
DCS.dcsqry=front+end;
}
}
}
}
if((window.document.referrer!="")&&(window.document.referrer!="-")){
if(!(navigator.appName=="Microsoft Internet Explorer"&&parseInt(navigator.appVersion)<4)){
DCS.dcsref=window.document.referrer;
}
}
}
function A(N,V){
return"&"+N+"="+dcsEscape(V);
}
function dcsEscape(S){
if(typeof(RE)!="undefined"){
var retStr=new String(S);
for(R in RE){
retStr=retStr.replace(RE[R],R);
}
return retStr;
}
else{
return escape(S);
}
}
function dcsCreateImage(dcsSrc){
if(document.images){
gImages[gIndex]=new Image;
gImages[gIndex].src=dcsSrc;
gIndex++;
}
else{
document.write('<IMG ALT="" BORDER="0" NAME="DCSIMG" WIDTH="1" HEIGHT="1" SRC="'+dcsSrc+'">');
}
}
function dcsMeta(){
var elems;
if(document.all){
elems=document.all.tags("meta");
}
else if(document.documentElement){
elems=document.getElementsByTagName("meta");
}
if(typeof(elems)!="undefined"){
for(var i=1;i<=elems.length;i++){
var meta=elems.item(i-1);
if(meta.name){
if(meta.name.indexOf('WT.')==0){
WT[meta.name.substring(3)]=meta.content;
}
else if(meta.name.indexOf('DCSext.')==0){
DCSext[meta.name.substring(7)]=meta.content;
}
else if(meta.name.indexOf('DCS.')==0){
DCS[meta.name.substring(4)]=meta.content;
}
}
}
}
}
function dcsTag(){
var P="http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+gDomain+(gDcsId==""?'':'/'+gDcsId)+"/dcs.gif?";
for(N in DCS){
if(DCS[N]){
P+=A(N,DCS[N]);
}
}
for(N in WT){
if(WT[N]){
P+=A("WT."+N,WT[N]);
}
}
for(N in DCSext){
if(DCSext[N]){
P+=A(N,DCSext[N]);
}
}
if(P.length>2048&&navigator.userAgent.indexOf('MSIE')>=0){
P=P.substring(0,2040)+"&WT.tu=1";
}
dcsCreateImage(P);
}
function dcsFunc(func){
if(typeof(window[func])=="function"){
window[func]();
}
}
dcsVar();
dcsMeta();
dcsFunc("dcsAdv");
dcsTag();

}
/*
     FILE ARCHIVED ON 01:17:28 Feb 08, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:37:45 Jun 05, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.505
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.01
  cdx.remote: 13.758
  LoadShardBlock: 331.851 (3)
  PetaboxLoader3.datanode: 155.134 (4)
  PetaboxLoader3.resolve: 240.557 (3)
  load_resource: 163.177
*/