/**
*  @url http://www.codemiles.com/scripting-language/first-visit-pop-up-window-javascript-code-t1217.html
*  @date 09/11/2010
*/


// Script courtesy of http://www.web-source.net - Your Guide to Professional Web Site Design and Development
function GetCookie(name) {
	var arg=name+"=";
	var alen=arg.length;
	var clen=document.cookie.length;
	var i=0;
	while (i<clen)
	{
		var j=i+alen;
		if (document.cookie.substring(i,j)==arg)
			return "here";
		i=document.cookie.indexOf(" ",i)+1;
		if (i==0) break;
	}
	return null;
}

var visit=GetCookie("COOKIE1");
if (visit==null)
{
	var expire=new Date();
	window.name = "thiswin";
	newwin=open("yourpagename.html", "dispwin",
		"width=450,height=455,scrollbars=yes,menubar=no");
	expire=new Date(expire.getTime()+7776000000);
	document.cookie="COOKIE1=here; expires="+expire;
}