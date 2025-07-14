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

function wI(s,t,c,m){if(isW)document.write("<img src='"+s+"' alt='"+t+"'"+(c!=""?" class='"+c+"'":"")+(m!=""?" usemap='"+m+"'":"")+">");}
function rT(){if(isW)document.write("<!"+"--");}
function w(o){if(o&&o.className)o.className=o.className+"W";}
function e(n){return document.getElementById(n);}
function rE(n){var o=e(n);if(o)o.parentNode.removeChild(o);}
var s1="heroL";var s2="heroS";var s3="storyS";
function recW(o){var ch=o.childNodes;var l=ch.length;var cls,i;for(var x=0;x<l;x++){i=ch[x];cls=i.className;if(cls==s1||cls==s2||cls==s3)mw(i);if(i.childNodes.length>0)recW(i);}}
function wrT(){document.write("<!"+"--");}
function rFT(){if(gFV()>=6){wrT();}else{rT();}}
function rFF(fw,fs,fc,w,t,c,m){if(gFV()>=6){var fSrc;if(isW){fSrc=fw;fc+="W";}else{fSrc=fs;}document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' class='"+fc+"'><param name='movie' value='"+fSrc+"'><param name='allowScriptAccess' value='sameDomain'><param name='quality' value='high'><param name='wmode' value='transparent'><embed src='"+fSrc+"' quality='high' class='"+fc+"' name='Banner_1024' bgcolor='#ffffff' align='middle' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage='https://web.archive.org/web/20060208011726/http://www.macromedia.com/go/getflashplayer' wmode='transparent'></object>");}else{wI(w,t,c,m)}}
var fV=0;var ver=-1;
function gFV(){var lfv=12;var ag=navigator.userAgent.toLowerCase();if(ag.indexOf("mozilla/3")!=-1&&ag.indexOf("msie")==-1){fV=0;}if(ver!=-1)return ver;if(navigator.plugins!=null&&navigator.plugins.length>0){var flashPlugin=navigator.plugins['Shockwave Flash'];if(typeof flashPlugin=='object'){for(var i=lfv;i>=3;i--){if(flashPlugin.description.indexOf(i+'.')!=-1){fV=i;break;}}}}else if(ag.indexOf("msie")!=-1&&parseInt(navigator.appVersion)>=4&&ag.indexOf("win")!=-1&&ag.indexOf("16bit")==-1){var doc='<scr'+'ipt language="VBScript"\> \r';doc+='On Error Resume Next \r';doc+='Dim obFlash \r';doc+='For i='+lfv+' To 3 Step -1 \r';doc+='   Set obFlash=CreateObject("ShockwaveFlash.ShockwaveFlash." & i) \r';doc+='   If IsObject(obFlash) Then \r';doc+='      fV=i \r';doc+='      Exit For \r';doc+='   End If \r';doc+='Next \r';doc+='</scr'+'ipt\>';document.write(doc);}else{fV=0};ver=fV;return fV;}

}
/*
     FILE ARCHIVED ON 01:17:26 Feb 08, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:37:42 Jun 05, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.681
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 21.86
  LoadShardBlock: 465.126 (6)
  PetaboxLoader3.datanode: 160.953 (7)
  PetaboxLoader3.resolve: 102.967 (2)
  load_resource: 117.417
*/