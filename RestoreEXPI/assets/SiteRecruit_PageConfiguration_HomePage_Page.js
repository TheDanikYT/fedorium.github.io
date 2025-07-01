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

// Copyright 2005 SurveySite. All rights reserved.
// Page: Homepage
// Date: 2005-10-12
  
if (!window.SRG) {
var SRC = new Object();
var SRG = new Object();
var SRK = new Object();
SRG.parseFlag = false;
SRG.empty = false;
SRK.browser = new Object();
SRK.browser.internetExplorer = 'Microsoft Internet Explorer';
SRK.browser.mozilla = 'Netscape';
SRG.browserName = navigator.appName; 
SRG.browserVersion = parseInt(navigator.appVersion);
SRG.isInternetExplorer = false;
SRG.isMozilla = false;
if (SRG.browserName == SRK.browser.internetExplorer)
{
if (SRG.browserVersion > 3)
{
SRG.isInternetExplorer = true;
}
}
if (SRG.browserName == SRK.browser.mozilla)
{
if (SRG.browserVersion > 4)
{
SRG.isMozilla = true;
}
}
SRK.cookieLifetimeType = new Object();
SRK.cookieLifetimeType.duration = 1;
SRK.cookieLifetimeType.expireDate = 2;
SRK.invitationType = new Object();
SRK.invitationType.standard = 0;
SRK.invitationType.email = 1;
SRK.invitationType.domainDeparture = 2;
SRK.cookieType = new Object();
SRK.cookieType.alreadyAsked = 1;
SRK.cookieType.inProgress = 2;
SRK.horizontalAlignment = new Object();
SRK.horizontalAlignment.left = 0;
SRK.horizontalAlignment.middle = 1;
SRK.horizontalAlignment.right = 2;
SRK.verticalAlignment = new Object();
SRK.verticalAlignment.top = 0;
SRK.verticalAlignment.middle = 1;
SRK.verticalAlignment.bottom = 2;
SRC.cookieName = 'msresearch';
SRC.cookieDomain = '.microsoft.com';
SRC.cookiePath = '/';
SRK.cookieJoinChar = ':';
SRC.cookieLifetimeType = 1;
SRC.cookieDuration = 90;
function SiteRecruit_CookieUtilities()
{
this.cookieDurationFactor = 1000 * 60 * 60 * 24;
this.cookieRemovalDate = 'Fri, 02-Jan-1970 00:00:00 GMT';
this.setSurveyCookie = CookieUtilities_setSurveyCookie;
this.getSurveyCookie = CookieUtilities_getSurveyCookie;
this.removeSurveyCookie = CookieUtilities_removeSurveyCookie;
this.surveyCookieExists = CookieUtilities_surveyCookieExists;
function CookieUtilities_setSurveyCookie(cookieType)
{
var currentDate = new Date();  
var expireDate = new Date();
if (SRC.cookieLifetimeType == SRK.cookieLifetimeType.duration)
{
expireDate.setTime(currentDate.getTime()
+ (SRC.cookieDuration * this.cookieDurationFactor));
}
else
{
expireDate.setTime(Date.parse(SRC.cookieExpireDate));
}        
var c = '=' + cookieType;
if (cookieType == SRK.cookieType.inProgress)
{
var j = SRK.cookieJoinChar;
c += j + escape(document.location)
+ j + currentDate.getTime()
+ j + '0';
}
c += '; path=' + SRC.cookiePath;
if (cookieType == SRK.cookieType.alreadyAsked)
{
c += '; expires=' + expireDate.toGMTString();
}
if (SRC.cookieDomain != '')
{
c += '; domain=' + SRC.cookieDomain;
}
document.cookie = SRC.cookieName + c;
return true;
}
function CookieUtilities_getSurveyCookie()
{
var c = '';
c = document.cookie.toString();
var index = c.indexOf(SRC.cookieName);
var endc = c.length;
c = c.substring(index, endc);
var ind1 = c.indexOf(';');
if (ind1 != -1)
{   
c = c.substring(0, ind1);
}
var ind2 = c.indexOf('=');
c = c.substring(ind2 + 1);
if (index == -1) return null;
return c;
}
function CookieUtilities_removeSurveyCookie()
{
var c = SRC.cookieName + '='
+ '; path=' + SRC.cookiePath
+ '; expires=' + this.cookieRemovalDate;
if (SRC.cookieDomain != '')
{
c += '; domain=' + SRC.cookieDomain;
}
document.cookie = c;
}
function CookieUtilities_surveyCookieExists(cookieType)
{
var t = '';
if (cookieType)
{
t = cookieType;
}
return (document.cookie.indexOf(SRC.cookieName + '=' + t) != -1)
}
}
SRG.cookieUtils = new SiteRecruit_CookieUtilities();
SRC.frequency = 0.0009;
SRC.useCookie = true;

function SiteRecruit_Primer()
{
this.isEligible = Primer_isEligible;
this.srandom = Primer_srandom;
function Primer_srandom()
{
var n = 1000000000;
function ugen(old, a, q, r, m)
{
var t = Math.floor(old / q);
t = a * (old - (t * q)) - (t * r);
return Math.round((t < 0) ? (t + m) : t);
}
var m1 = 2147483563;
var m2 = 2147483399;
var a1 = 40014;
var a2 = 40692;
var q1 = 53668;
var q2 = 52774;
var r1 = 12211;
var r2 = 3791;
var x = 67108862;
var shuffle = new Array(32);
var g1 = (((new Date()).getTime() % 100000) & 0x7FFFFFFF);
var g2 = g1;
var i = 0;
for (; i < 19; i++)
{
g1 = ugen(g1, a1, q1, r1, m1);
}
for (i = 0; i < 32; i++)
{
g1 = ugen(g1, a1, q1, r1, m1);
shuffle[31 - i] = g1;
}
g1 = ugen(g1, a1, q1, r1, m1);
g2 = ugen(g2, a2, q2, r2, m2);
var s = Math.round((shuffle[Math.floor(shuffle[0] / x)] + g2) % m1);
return Math.floor(s / (m1 / (n + 1))) / n;
}
function Primer_isEligible()
{
if (!SRC.useCookie || !SRG.cookieUtils.surveyCookieExists())
{
if (SRC.frequency > this.srandom())
{
return true;
}
}
return false;
}
}

SRG.startBuilder = false;
if (SRG.isInternetExplorer || SRG.isMozilla)
{
SRG.primer = new SiteRecruit_Primer();
if (SRG.primer.isEligible())
{  
SRG.startBuilder = true;
document.write('<script src="https://web.archive.org/web/20060208090237/http://www.microsoft.com/h/en-us/r/SiteRecruit_InvitationBuilder.js"></script>');
}
}

}

}
/*
     FILE ARCHIVED ON 09:02:37 Feb 08, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:37:42 Jun 05, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 3.854
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.012
  esindex: 0.016
  cdx.remote: 86.349
  LoadShardBlock: 332.804 (6)
  PetaboxLoader3.datanode: 192.347 (7)
  load_resource: 140.289
  PetaboxLoader3.resolve: 56.661
*/