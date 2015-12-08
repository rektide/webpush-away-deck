import React from "react";
import { render } from "react-dom";

import {
	Appear, BlockQuote, Cite, CodePane, Deck, Fit, Fill,
	Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text, S as _S
} from "./src";

import preloader from "./src/utils/preloader";

import Interactive from "./assets/interactive";

require("normalize.css");
require("./src/themes/default/index.css");

const images = {
	city: require("./assets/city.jpg"),
	kat: require("./assets/kat.png"),
	logo: require("./assets/formidable-logo.svg"),
	markdown: require("./assets/markdown.png")
};

preloader([images.city, images.kat, images.markdown]);

var defaulter= function(fn, opts){
	return function(o){
		if(!o)
			o= arguments[0]= {}
		for(var i in opts){
			if( o[i]=== undefined){
				o[i]= opts[i]
			}
		}
		return fn.apply(null, arguments)
	}
}

var S= React.createFactory(Slide)
var H= React.createFactory(Heading)
var A= React.createFactory(Appear)
var L= React.createFactory(Link)
var list= React.createFactory(List)
var LI= React.createFactory(ListItem)
var MD= React.createFactory(Markdown)
var T= React.createFactory(Text)

var layout= React.createFactory(Layout)
var fit= React.createFactory(Fit)
var fill= React.createFactory(Fill)
var code= defaulter(React.createFactory(CodePane), {})
var blockQuote= React.createFactory(BlockQuote)
var quote= React.createFactory(Quote)
var cite= React.createFactory(Cite)

var br= React.createFactory("br")
var div= React.createFactory("div")
var span= React.createFactory("span")
var iframe= defaulter(React.createFactory("iframe"), {height: "520px", width: "80%"})
var img= defaulter(React.createFactory(Image), {})

var A0= defaulter(A, {fid: 1})
var A1= defaulter(A, {fid: 2})
var A2= defaulter(A, {fid: 3})
var A3= defaulter(A, {fid: 4})
var A4= defaulter(A, {fid: 5})
var A5= defaulter(A, {fid: 5})
var A6= defaulter(A, {fid: 5})
var A7= defaulter(A, {fid: 5})
var A8= defaulter(A, {fid: 5})
var A9= defaulter(A, {fid: 5})
var Hb= defaulter(H, {big: true})
var Hbf= defaulter(Hb, {fit: true})

var b= defaulter(React.createFactory(_S), {type: "bold"})
var i= defaulter(React.createFactory(_S), {type: "italic"})
function ib(more){
	return b(null,
		i.apply(null, arguments))
}
function href(href){
	return L({href}, href)
}

var m= 0.6 // medium
var black = {bgColor: "black"}
var primary = {textColor: "#f9c300"}
var span = {span: true}
var smallQuote = {bgColor: "black", textSize: "3rem"}
var smallerQuote = {bgColor: "black", textSize: "2.6rem"}

var spec= "https://tools.ietf.org/html/draft-ietf-webpush-protocol-02"
function ss(section){
	section= isNaN(section) ? section : "section-" + section
	return "https://tools.ietf.org/html/draft-ietf-webpush-protocol-02#section-" + section
}
function _http2(section){
	section= isNaN(section) ? section : "section-" + section
	return "https://tools.ietf.org/html/rfc7540#" + section
}

function wrap(fn){
	return function(section, name, primaryColor){
		var o= {
		  href: fn(section)
		}
		if(primaryColor === true){
			o.textColor = primary.textColor
		}
		if(name){
			name = "§" + section + " " + name
		}else{
			name = href
		}
		return L(o, name)
	}
}
var ssl= wrap(ss)
var http2= wrap(_http2)


var specSlug= "Generic Event Delivery Using HTTP Push"
var _WP= L({href: spec}, "WebPush")
var WP= Hb(null, _WP)
var HTTP= <Heading big>HTTP2</Heading>


var webpushAway= ()=> {
	var draft= T(null, L({href: spec}, "draft-ietf-webpush-protocol-02"))
	return S(null, 
		T(null, "Hi. Welcome to"),
		H({caps:true}, "WebPush Away."),
		T(null, "This is a talk on"),
		WP,
		draft,
		T(null, specSlug)
	)
}()

var rad= (notes)=> {
	return S({notes},
		H(null, "It*'s"),
		Hb(null, "rad"),
		A0(null,
			T(null, "*Webpush."),
			T(null, "But this talk is too."),
			T(null, "But not as rad as")))
}()

var radSpec= (notes)=> {
	return S(notes,
		WP,
		A0(null,
			T(null, specSlug)))
}()

var webQueue= (notes)=> {
	return S({notes},
		T(null, "Rad because"),
		WP,
		T(null, "is a"),
		H(null, "web queue"))
}()


var queuesGreat= (notes)=> {
	return S({notes},
			T(null, "And queues are"),
			H(null, "Great"),
			br(),
			A0(null,
				layout(null,
					fill(null, 
						T(null, "Kafka")),
					fill(null,
						T(null, "RabbitMQ")))),
			A1(null,
				blockQuote({bgColor: "black"},
					quote(null, "\"It is known\""),
					cite(null, "Everyone", true))))
}()

var webGreat= (notes)=> {
	var href= "http://www.w3.org/DesignIssues/Axioms.html"
	return S({notes},
		T(null, "The"),
		H(null, "Web"),
		T(null, "is"),
		H(null, "Great."),
		A0(null, T(null, "It has resources.")),
		A1(null, L({href}, href)))
}()

var shouldGreat= (notes)=> {
	return S({notes},
		T(null, "So a web queue?"),
		H(null, "Should be great"))
}()

var has= (notes)=> {
	return S({notes},
		H(null, _WP, "?"),
		Hb(null, "Has:"))
}()

var magic= (notes)=> {
	return S({notes, bgColor: "black"},
		Hbf(null, "MAGIC!"))
}()

var httpMagic= (notes)=> {
	return S({notes},
		layout(null,
			fill(null,
				L(null,
					LI(null, "HTTP2 magic!"),
					LI(null, A0(null, "Push magic!")),
					LI(null, A1(null, "Great magic")))),
			fill(null,
				L(null,
					LI(null, A2(null, "* Not actually magic")),
					LI(null, A3(null, "** Actually push")),
					LI(null, A4(null, "*** Probably still great"))))),
		A5(null, T({margin: "1.5em 0 0"}, "Worth talking about")))
}()

var probablyGreat= (notes)=> {
	return S({notes, bgColor: "black"},
		H(null, "Probably great"))
}()

var probablyGreat2= (notes)=> {
	return S({notes, bgColor: "black", textColor:"primary"},
		H(null, "Probably great"),
		A0(null, T({textColor:"primary"}, "Solid model for a queue")),
		T({textColor:"primary"}, 
			A1({span: true}, "Interesting innovative techniques"),
			A2({span: true}, " (push not-magic)")),
		A3(null, T({textColor:"primary"}, "Interesting application")),
		A4(null, T({textColor:"primary"}, "Nicely making it through standardization.")))
}()

var otherWeb= (notes)=> {
	return S({notes},
		H(null, "Related web transfer tech?"),
		H({size: 3}, "Webhooks"),
		list(null,
			LI(null, "Not usable within browser"),
			LI(null, "Destination has to exist on the web"),
			LI(null, "No coherent idea of streams, of who is sending"),
			LI(null, "Perhaps the best push the web has right now")),
		T(null, "\"I accept data on the web\""))
}()

var order= (n)=> {
	return (notes)=> {
		var footer
		if(!n){
			footer= T({margin: "0.7em 0 0"},
				A0(null,
					T(null, "So this should be"),
					H(null, "Epic")))

		}
		var now= {
			textSize: "3rem",
			bold: true
		}

		var parens = n === 0
		var p1= parens ?  A0({span: true}, " (please learn a lot & enjoy)") : null
		var p2= parens ?  A1({span: true}, " (resourceful)") : null
		var p3= parens ?  A2({span: true}, " (async)") : null
		var p4= parens ?  A3({span: true}, " (reason for spec)") : null
		var p5= parens ?  A4({span: true}, " (mine)") : null
		var p6= parens ?  A4({span: true}, " ") : null
		return S({notes},
			H(null, _WP, " talk outline:"),
			list({align: "left"},
				LI(n === 0 ? now : null, "Opening: welcome", p1),
				LI(n === 1 ? now : null, "Model: WebPush Protocol", p2),
				LI(n === 2 ? now : null, "Technique: HTTP2 Push", p3),
				LI(n === 3 ? now : null, "Application: Push API", p4),
				LI(n === 4 ? now : null, "Implementation: WebPush-Pump", p5),
				LI(n === 5 ? now : null, "Asynchronous bi-directional web", p6)),
			footer)
	}
}

var overview= order(0)(`<p>I'm Matthew Fowle, thank you all so much for attending.</p>
<p>It's been a long time since I've track-B'ed it at JSConf,
And it's obviously a bit sad being at Last Call,
But I am still super jazzed about JavaScript, and the web, and how the user agent
is a tangible thing to the rest of the world</p>
<p>And I super love protocols that give us means to push data around</p>
<p>And that we can 

I'm here to talk about a super interesting protocol
for creating, pushing into, and consuming from a queue.</p>
<p>We'll tour through WebPush's overall model, where I'll highlight how it's resourceful, naturally a thing of the web,</p>
<p>We'll look at how WebPush uses HTTP2 push- which is a totally new thing for the web</p>
<p>We'll look at what need WebPush was created to serve, which is Push API, a way for
application servers to send stuff to your browser, even if the page is closed, the browser is closed, or the device is shut off</p>
<p>And we'll take a peak at some tricks I used to implement a Node server.</p>
`)

var model= (notes)=> {
	return S({notes},
		Hbf(null, "Model"),
		T(null, "Webpush is a queue,"),
		H({size: 3},
			A0({span: true}, "So what is a queue?")))
}()

var goesInGoesOut= (notes)=> {
	var src= "http://steamcommunity.com/sharedfiles/filedetails/?id=358583033"
	return S({notes},
		T({margin: "-1.5em 0 0"}, "You probably know this but"),
		A0(null,
			H({size: 2}, "Stuff goes in")),
		A1(null,
			A2(null,
				iframe({src})),
			H({size: 2},
				"Stuff comes out",
				A3(span, " (eventually)"))))
}()

var resources101= (notes)=> {
	var href= "https://tools.ietf.org/html/draft-ietf-webpush-protocol-02"
	return S({notes},
		T(null, "Great, so what about a WebPush queue?"),
		A0(null,
			H({size: 3}, "It's just resources")),
		A1(null,
			T(null, "(things with URLs, running somewhere)")),
		A2(null,
			blockQuote({bgColor: "black"},
				quote(smallQuote,
					"\"A ",
					ib(null, "subscription resource"),
					" is used to receive messages from a subscription and to delete a subscription.\""),
				cite(null,
					ssl(2, "Overview", true)))),
		A3(null,
			blockQuote({bgColor: "black"},
				quote(smallQuote,
					"\"A ",
					ib(null, "push resource"),
					" is used to send messages to a subscription.\""),
				cite(null,
					ssl(2, "Overview", true)))))
}()

var _legoPortal= "http://steamcommunity.com/sharedfiles/filedetails/?id=258816001"
var prettySimple= (notes)=> {
	var src= _legoPortal
	return S({notes},
		H({size: 3}, "Pretty simple"),
		iframe({src}),
		T(null,
			"With only one little not-magic technique involved ",
			A0({span: true}, "(push)")),
		A1(null, "c/o HTTP2"))
}()

var pushService= (notes)=> {
	return S({notes},
		T(null,
			"These two resources are gotten from a ",
			ib(null, "push service"),
			":"),
		A0(null, blockQuote(black,
			quote(null,
				"This resource is used to create ",
				ib(null, "push message subscriptions")),
			cite(null,
				ssl(2.1, "HTTP Resources", true)))))
}()

var create= (notes)=> {
	return S({notes},
		T(null, "Let's jump in,"),
		T(null,
			"and get that push message subscription ",
			A0(null,
				"(queue)")),
		H(null, "Step 1"),
		A0(null,
			H({size: 3}, "Create a queue:")),
		A1(null,
			T(null, "POST to the Push Service")))
}()

var _subscribeRequest= `POST /subscribe/ HTTP/1.1
Host: yoyodyne.net`
var subscribeRequest= (notes)=> {
	var source= _subscribeRequest
	var href= ss("4")
	return S({notes},
		H({size: 3}, "Step 1: Create a queue"),
		code({source: _subscribeRequest, language: "http"}),
		ssl(4),
		A0(null,
			H({size: 3}, "Simple enough?")))
}()

var _subscribeResponse= `HTTP/1.1 201 Created
Date: Thu, 11 Dec 2014 23:56:52 GMT
Link: </p/JzLQ3raZJfFBR0aqvOMsLrt54w4rJUsV>;
	rel="urn:ietf:params:push"
Link: </receipts/xjTG79I3VuptNWS0DsFu4ihT97aE6UQJ>;
	rel="urn:ietf:params:push:receipt"
Location: https://push.example.net/s/LBhhw0OohO-Wl4Oi971UGsB7sdQGUibx`
var subscribeResponse= (notes)=> {
	return S({notes},
		H({size: 3},
			"Step 1: Create a queue",
			A0(span, " results")),
		A0(null,
			code({source: _subscribeResponse, language: "http"}),
			ssl(4)),
		A1(null, 
			T(null, "We get three resources:")),
		list(null,
			LI(null, A2(null, "A way to push stuff in (push resource)")),
			LI(null, A3(null, "Also, means to hear acks (receipt subscribe resource)")),
			LI(null, A4(null, "A means to get stuff out (subscription resource)"))))
}()

var queueCreated= (notes)=> {
	return S({notes},
		T(null, "With these resources created, we have a queue."),
		T(null, "Maybe we want to start listening,"),
		T(null, "Maybe we want to push."),
		T(null, "It's a queue: order ought not matter"))
}()

var pushNow= (notes)=> {
	return S({notes},
		T(null, "So picking randomly,..."),
		H(null,
			"Push. ",
			A0(null,
				"Push ",
				ib(null, "now."))))
}()

var p= (notes)=> {
	return S({notes},
		blockQuote(black,
			quote(smallQuote,
				"An [pusher] requests the delivery of a push message by ",
				"sending a HTTP request to a push resource distributed to the ",
				"[pushee] by a [queue creator].  The push message is included in ",
   				"the body of the request."),
			cite(null,
				ssl(6, "Requesting Push Message Delivery", true))),
		T(null, "And that looks like..."))
}()

var _pRequest= `POST /p/JzLQ3raZJfFBR0aqvOMsLrt54w4rJUsV HTTP/1.1
Host: push.example.net
Content-Type: text/plain;charset=utf8
Content-Length: 36

iChYuI3jMzt3ir20P8r_jgRR-dSuN182x7iB`
var pRequest= (notes)=> {
	return S({notes},
		code({source: _pRequest, language: "http"}),
		ssl(6, "Requesting Push Message Delivery request"),
		T(null,
			"So we're POST'ing to the ",
			ib(null, "push resource"),
			"."))
}()

var _pResponse= `HTTP/1.1 201 Created
Date: Thu, 11 Dec 2014 23:56:55 GMT
Location: https://push.example.net/d/qDIYHNcfAIPP_5ITvURr-d6BGtYnTRnk`
var pResponse= (notes)=> {
	return S({notes},
		code({source: _pResponse, language: "http"}),
		ssl(6, "Requesting Push Message Delivery response"),
		T(null,
			"We get back a ",
			ib(null, "push message resource"),
			"."),
		T(null,
			"With an address the sender can look for a receipt of."),
		T(null,
			"(Well come back to receipts latter)"))
}()

var pExtra= (notes)=> {
	return S({notes},
		H({size: 3},
			"Pushers ",
			i(null, "may"),
			" also:"),
		A0(null,
			blockQuote(black,
				quote(smallQuote,
					"An [pusher] can use the Push-Receipt header field to ",
					"request a confirmation from the push service when a push message is ",
					"delivered and acknowledged by [a listener]"),
				cite(null,
					ssl(6.1, "Requesting Push Message Receipts", true)))),
		A1(null,
			blockQuote(black,
				quote(smallQuote,
					"A [pusher] can use the TTL header field to limit the time ",
					"that a push message is retained by a push service."),
				cite(null,
					ssl(6.2, "Push Message Time-To-Live", true)))))
}()

var pRequest2= (notes)=> {
	var source= `POST /p/JzLQ3raZJfFBR0aqvOMsLrt54w4rJUsV HTTP/1.1
Host: push.example.net
Content-Type: text/plain;charset=utf8
Content-Length: 36
TTL: 3600
Push-Receipt: https://push.example.net/r/3ZtI4YVNBnUUZhuoChl6omUvG4ZM9mpN

iChYuI3jMzt3ir20P8r_jgRR-dSuN182x7iB`
	return S({notes},
		code({source, language: "http"}),
		ssl(6, "Requesting Push Message Delivery request"),
		T(null,
			"Two new footers at the bottom, see?"),
		T(null,
			ib(null, "TTL"),
			" is easy enough. It's a time, in seconds, for the queue to hold a message."),
		A0(null,
			T(null,
				"And ",
				ib(null, "Push-Receipts"),
				" says who to notify when the message gets acked")),
		A1(null,
			T(null,
				"That requires using subscribe's ",
				ib(null, "receipt subscribe"),
				" to get a ",
				ib(null, "receipt subscription"),
				".")))
}()

var _receiptRequest= `POST /receipts/xjTG79I3VuptNWS0DsFu4ihT97aE6UQJ HTTP/1.1
Host: push.example.net`
var _receiptResponse= `HTTP/1.1 201 Created
Date: Thu, 11 Dec 2014 23:56:52 GMT
Location: https://push.example.net/r/3ZtI4YVNBnUUZhuoChl6omUvG4ZM9mpN`
var receiptSubscription= (notes)=> {
	return S({notes},
		blockQuote(black,
			quote(smallQuote,
				"A [pusher] requests the creation of a ",
				ib(null, "receipt subscription "),
				"by sending a HTTP POST request to the ",
				ib(null, "receipt subscribe resource")),
			cite(null,
				ssl(5, "Subscribing for Push Message Receipts", true))),
		A0(null,
			code({source: _receiptRequest})),
		A1(null,
			code({source: _receiptResponse})))
}()

var individualClients= (notes)=> {
	return S({notes},
		H({size: 3},
			"Kind of complex,"),
		A0(null,
			T(null, "This is for late bindings, so the queue can hand out stable, per-subscription /receipts")),
		A1(null,
			T(null, "But pushers get their receipts aggregated into a smaller set of /r's")))
}()

var pushRecap= (notes)=> {
	var ts= "1.4rem"
	return S({notes},
		H({size: 3}, "Pushing recap"),
		layout(null,
			fit({textSize: ts},
				H({size: 4}, "Subscription"),
				code({source: _subscribeRequest, textSize: ts, fontSize: ts}),
				code({source: _subscribeResponse, textSize: ts})),
			fit(null,
				H({size: 4}, "Receipt Subscription"),
				code({source: _receiptRequest, textSize: ts}),
				code({source: _receiptResponse, textSize: ts})),
			fit(null,
				H({size: 4}, "Push data"),
				code({source: _pRequest, textSize: ts}),
				code({source: "ok", textSize: ts}))))
}()

var pushRecap1= (notes)=> {
	var ts= "1.4rem"
	return S({notes},
		H({size: 3}, "Pushing recap: subscription"),
		code({source: _subscribeRequest, textSize: ts, fontSize: ts}),
		code({source: _subscribeResponse, textSize: ts}))
}()

var pushRecap2= (notes)=> {
	var ts= "1.4rem"
	return S({notes},
		H({size: 3}, "Pushing recap: receipt subscription"),
		code({source: _receiptRequest, textSize: ts}),
		code({source: _receiptResponse, textSize: ts}))
}()

var pushRecap3= (notes)=> {
	var ts= "1.4rem"
	return S({notes},
		H({size: 3}, "Pushing recap: push"),
		code({source: _pRequest, textSize: ts}),
		code({source: "[no reply]", textSize: ts}))
}()


var sendingEasy= (notes)=> {
	return S({notes},
		T(null, "Whew,..."),
		H({size: 3},
			"Sending wasn't ",
			i(null, "so"),
			" bad."),
		A0(null,
			T(null, "Receiving?")))
}()


var queuesAndCubes= (notes)=> {
	
}()

render(
	<Spectacle>
		<Deck transition={["zoom"]} transitionDuration={288} progress="number">
			{webpushAway}
			{rad}
			{radSpec}
			{webQueue}
			{queuesGreat}
			{webGreat}
			{shouldGreat}
			{has}
			{magic}
			{httpMagic}
			{probablyGreat}
			{probablyGreat2}
			{otherWeb}

			{overview}
			{model}
			{goesInGoesOut}
			{resources101}
			{prettySimple}
			{pushService}
			{order(1)()}
			{create}
			{subscribeRequest}
			{subscribeResponse}
			{queueCreated}

			{pushNow}
			{p}
			{pRequest}
			{pResponse}
			{pExtra}
			{pRequest2}
			{receiptSubscription}
			{individualClients}
			{pushRecap1}
			{pushRecap2}
			{pushRecap3}
			{sendingEasy}

			{
				/* RECIEVING SEQUENCE */
			}
			{
				S(null,
					Hbf(null, "Receiving"),
					T(null, "The pull sequence,"),
					T(null, "with a brief interlude on"),
					H({size: 3}, "HTTP2 and Push"),
					T(null, "(Which is ok if you don't yet know!)"))
			}
			{
				S(null,
					H(null,
						"To pull queued data, we GET"),
					T(null,
						"On the Location: returned by /subscribe/"),
					H({size: 3},
						A0(null,
							"The ",
							ib(null,
								"push message subscription"))))
			}
			{
				S(null,
					H({size: 3},
						"GET'ting the push message subscription"),
					T(null,
						"doesn't do anything."),
					H(null,
						"The server does not respond."),
					T(null,
						A0(span,
							"The request is left open.")),
					T(null,
						A1(span,
							"But since this is HTTP2 nothing blocks")))
			}
			{
				S(null,
					H({size: 3},
						"A null resource... ",
						A0(span,
							" kind of.")),
					T(null,
						"The request doesn't terminate,"),
					T(null,
						"It just hangs out, open,"),
					T(null,
						"But it signals to the server"),
					H(null,
						"That it ought push."))
			}
			{
				S(null,
					H(null,
						"Push"),
					T(null,
						"And that brings us to HTTP2"),
					T(null,
						"Which provides push"))
			}
			

			{
				/* HTTP SEQUENCE */
				S(null,
					Hbf(null, "HTTP2"),
					T(null, "Intermission"))
			}
			{
				order(2)()
			}
			{
				S(null,
					Hbf(null, "A super fast intro to HTTP2"))
			}
			{
				S(null,
					H({size: 4},
						"HTTP2 is about frames"),
					T(null,
						A0(span, "It is a messaging protocol")),
					T(null,
						A1(span,"For a HTTP")),
					T(null,
						A2(span, "Which is a request response message protocol")))
			}
			{
				S(null,
					H(null, "What does messaging protocol mean?"),
					H({size: 3}, "Frames?"),
					blockQuote(black,
						quote(smallQuote,
							"The basic protocol unit in HTTP/2 is a frame (",
							http2(4.1, "Frame Format"),
							").  Each ",
							"frame type serves a different purpose.  For example, HEADERS and DATA ",
							"frames form the basis of HTTP requests and responses (",
							http2(8.1, "HTTP Request/Response Exchange"),
							")",
						cite(null,
							http2(2, "HTTP2 Overview", true)))),
					T(null,
						"Client and server send frames, ",
						"belonging to streams- which are like ",
						"conversations happening across the connection"))
			}
			{
				S(null,
					Hbf(null, "But it's more than HTTP in frames"),
					T(null,
						A0(span, "And more than I'm going over here, "),
						A1(span,
							"cause it's big. Too much awesome! "),
						A2(span,
							"Too much awesome & too much stream control, ",
							"which you just gotta do")),
					H(null,
						"It's messaging. Many conversations/streams, at once."),
					T(null,
						"That's new!"))
			}
			{
				S(null,
					Hbf(null, "When you have streams you have"),
					Hbf(null, "decisions on what to send"),
					T(null,
						"You (implicitly or explicitly) are picking which packets to push"),
					T(null,
						A0(span,
							"(\"Good problems to have\")")),
					T(null,
						"This is much more than request/response"))
			}
			{
				S(null,
					T(null,
						A0(span,"One of those server-sent frames:")),
					H({size:2},
						A1(span, "PUSH_PROMISE")))
			}
			{
				S(null,
					H({size:2}, "PUSH_PROMISE:"),
					H(null, "\"I am going to send you a stream\""),
					T(null, "Inside is just content"),
					A0(null,
						T(null, "Conceptually, an unasked for GET")))
			}
			{
				S(null,
					H({size:3}, "HTTP2 is novel bi-directional & asynchronous communication"))
			}

			{
				S(null,
					T(null, "Ok, back to "),
					H(null,
						"GET /s/example-push-message-subscription"),
					T(null,
						"This request is hanging open,"),
					T(null,
						"We've just learned about PUSH_PROMISE"),
					T(null,
						"And that's what the server starts dequeuing across"))
			}
			{
				S(null,
					blockQuote(black,
						quote(null,
							"[WebPush] uses HTTP/2 ",
							"server push [HTTP2 RFC7540] to send the contents of push messages as they ",
							"are sent by application servers."),
						cite(null,
							ssl(7, "Receiving Push Messages for a Subscription", true))),
					T(null,
						"(as they are sent meaning 'the same content, eventually')"))
			}
			{
				S(null,
					code({source: `PUSH_PROMISE [stream 7; promised stream 4] +END_HEADERS
  :method     = GET
  :path       = /d/qDIYHNcfAIPP_5ITvURr-d6BGtYnTRnk
  :authority  = push.example.net
HEADERS      [stream 4] +END_HEADERS
  :status        = 200
  :link          = </p/some-msg>; rel="urn:ietf:params:push"
DATA         [stream 4] +END_STREAM
  iChYuI3jMzt3ir20P8r_jgRR-dSuN182x7iB`}),
					ssl(7, "Receiving Push Messages for a Subscription"))
			}
			{
				S(null,
					H(null,
						"Content in, content out"),
					H(null,
						A0(span,
							iframe({src: "http://steamcommunity.com/sharedfiles/filedetails/?id=563287795"}),
							H({size: 3}, "Win!"))))
			}

			{
				/* RECEIPTS */
			}
			{
				S(null,
					H(null,
						"This is the base of WebPush Protocol"),
					H({size: 3},
						"There's also receipts"),
					T(null,
						"So everyone can be sure of the push win"),
					A0(null,
						T(null,
							"From the previous PUSH_PROMISE:"),
						code({source: `PUSH_PROMISE [stream 7; promised stream 4] +END_HEADERS
  :method        = GET
  :path          = /d/qDIYHNcfAIPP_5ITvURr-d6BGtYnTRnk`})),
						T(null,
							"Path is a ",
							ib(null, "push message resource"),
							","))
			}
			{
				S(null,
					T(null,
						"Two components-"),
					H({size: 3},
						"Receipts- pushee notifying the queue"),
					blockQuote(black,
						quote(smallQuote,
							"The [pusher] MUST acknowledge receipt of the message ",
							"by performing a HTTP DELETE on the push message resource."),
						cite(null,
							ssl(7.2, "Acknowledge Push Messages", true))))
			}
			{
				S(null,
					T(null,
						"Two components-"),
					H({size: 3},
						"Receipts: queue notifying the pusher"),
					blockQuote(black,
						quote(smallQuote,
							"The [pusher] requests the delivery of receipts from the ",
							"push service by making a HTTP GET request to the receipt subscription ",
							"resource.  The push service does not respond to this request, it ",
							"instead uses HTTP/2 server push to send push receipts when ",
							"messages are acknowledged (Section 7.2) by the user agent. ",
							"Each receipt is pushed as the response to a synthesized GET request ",
							"sent in a PUSH_PROMISE.  This GET request is made to the same push ",
							"message resource that was created by the push service when the ",
							"application server requested message delivery."),
						cite(null,
							ssl(7.3, "Receiving Push Message Receipts"))))
			}
			{
				S(null,
					H({size: 3},
						"Message receipts"),
					code({source: `DELETE /d/qDIYHNcfAIPP_5ITvURr-d6BGtYnTRnk HTTP/1.1
Host: push.example.net`}),
					ssl(7.2, "Acknowledge Push Messages"),
					code({source:`HEADERS      [stream 13] +END_STREAM +END_HEADERS
:method        = GET
:path          = /r/3ZtI4YVNBnUUZhuoChl6omUvG4ZM9mpN
:authority     = push.example.net`}),
					code({source: `PUSH_PROMISE [stream 13; promised stream 82] +END_HEADERS
:method        = GET
:path          = /d/qDIYHNcfAIPP_5ITvURr-d6BGtYnTRnk
:authority     = push.example.net`}),
					ssl(7.3, "Receiving Push Message Receipts"))
			}
			{
				S(null,
					H(null,
						"Two PUSH_PROMISE uses,"),
					list(null,
						LI(null,
							"Listening for messages"),
						LI(null,
							"Listening for receipts")))
			}
			{
				S(null,
					H(null,
						"WebPush Protocol"),
					img({src: "/assets/webpush.png"}))
			}


			{
				/* PUSH API */
				order(3)()
			}
			{
				S(null,
					H(null,
						"Push API"),
					H({size: 3},
						"The client side API that preciptated WebPush Protocol"),
					A0(null,
						blockQuote(black,
							quote(smallerQuote,
								"The Push API provides webapps with scripted access to server-sent ",
								"messages, for simplicity referred to here as push messages, as ",
								"delivered by push services. A push service allows an application server ",
								"to send messages to a webapp, regardless of whether the webapp is currently ",
								"active on the user agent. The push message will be delivered to a Service ",
								"Worker, which could then store the message's data or display a notification to the user."),
							cite(null,
								L({href: "http://www.w3.org/TR/push-api/#abstract", textColor: primary.textColor},
									"http://www.w3.org/TR/push-api/#abstract")))))
			}
			{
				S(null,
					H(null,
						"Push API"),
					img({src: "/pushapi.png", width: "75%"}))
			}
			{
				S(null,
					layout(null,
						fit(null,
							img({src: "/webpush.png"})),
						fill(null,
							img({src: "/pushapi.png", height:"580px"}))))
			}
			{
				S(null,
					H({size: 3},
						"Identical flows"),
					list(null,
						LI(null,
							A0(span,
								"WebPush Protocol is the web queue")),
						LI(null,
							A1(span,
								"Push API is the browser interface"))))
			}
			{
				S(null,
					H(null, "Push API"),
					H({size: 3},
						"used within ServiceWorkerGlobalScope"),
					code({source: `// https://example.com/serviceworker.js
this.onpush = function(event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
}`}),
					L({href:"http://www.w3.org/TR/push-api/#example", textColor: primary.textColor}, "- http://www.w3.org/TR/push-api/#example"))
			}

			{
				/* implementation */
				order(4)()
			}
			{
				S(null,
					H({size: 3}, "Implementation"),
					H(null, "WebPush Pump"),
					T(null, "Node powered resource-oriented implementation"),
					H({size: 4},
						L({href: "https://github.com/rektide/webpush-pump"},
							"https://github.com/rektide/webpush-pump")))
			}
			{
				S(null,
					H({size: 3},
						"I really like"),
					H(null,
						"Web Push's resource-orientation"),
					T(null,
						A0(span, "A lot of discrete resources")))
			}
			{
				S(null,
					H(null, "Context.js"),
					T(null, "Resource container"),
					code({source:`function Context( opts){
	self.subscribe= {}
	self.p= {}
	self[ "push:receipt"]= {}
	self.s= {}
	self.d= {}`}),
					T(null,
						A0(span, "With deliberately uncreative naming")),
					L({href: "https://github.com/rektide/webpush-pump/blob/master/Context.js"},
						"https://github.com/rektide/webpush-pump/blob/master/Context.js"))
			}
			{
				S(null,
					T(null, "Req context- own growing container"),
					code({textSize: "1.4rem", style: {"fontSize": "1.4rem"}, source: `function *subscribe(next){
var reqCtx= this[ ctxName], // request container
  ctx= reqCtx.ctx, // global container
  _created
if(!reqCtx.subscribe){
	reqCtx.subscribe= _created= new Subscribe(reqCtx)
	ctx.accept( _created) }
if(!reqReqCtx.p){
	reqCtx.push= _created= new P(reqCtx)
	ctx.accept( _created) }
if(!reqCtx.receipt){
	reqCtx.receipt= _created= new Receipt(reqCtx)
	ctx.accept( _created) }}`}))
			}
			{
				S(null,
					T(null, "Create all resources off request context"),
					code({source: `_created = new Subscribe(reqCtx)`}),
					T(null, "Add them to contexts"),
					code({source: `reqCtx.push(_created); ctx.accept(_created)`}),
					T(null,
						A0(span, "Homogenous contracting, predictable interfaces")))
			}
			{
				S(null,
					H(null, "Views in Context"),
					T(null, "MutationObserver maintained projections"),
					code({source: `this.subscribeToS= projection(this.s, function( s){
	return s.symbol // to all s for subscribe
}, function(s){
	return s.subscribe // map from s's subscribe
})`}),
					T(null, "Structure for looking up all s having a subscribe property"))
			}
			{
				S(null,
					H(null, "Symbols, symbols everywhere"),
					T(null, "Supposedly the new, faster lookup"),
					code({source: `function base(opts){
	this.symbol= self.symbol|| opts&& opts.symbol|| Symbol()`}))
			}

			{
				order(5)()
			}
			{
				S(null,
					H(null, "Push API is a significant advance"),
					T(null, "Some imo nits-"),
					T(null, "Pushes opaque, url-less blobs, would be nice to push resources"),
					T(null, "Only way to get notified of HTTP2 Push events in the browser*"),
					T(null,
						A0(span, "(*Short of out-of band signalling (SSE))")))
			}
			{
				S(null,
					H({size: 3}, "Push can be a sigificant advance in the web"),
					T(null, "And WebPush/Push API a solid first use"),
					H(null, "But there will be much more!"))
			}
			{
				S(null,
					T(null,
						"This was ",
						ib(null, "WebPush Away")),
					T(null, "I'm super happy to have gotten to share this with you!"),
					Hbf(null, "The future is exciting!!"))
			}
		</Deck>
	</Spectacle>
, document.getElementById("root"));



var s5= (notes)=> {
	return S({notes},
		layout({}, 
			fit(null,
				A0(null, T(null, "You put things"))),
			fill(null,
				A1(null, Hb(null, "IN"))),
			fit(null,
				A0(null, T(null, "a queue")))),
		layout(null,
			fit(
				A2(null, T(null, "And later and/or elsewhere")),
				A2(null, T(null, "You get things"))),
			fill(null,
				A3(null, Hb(null, "OUT"))),
			fit(null,
				A2(null, T(null, "of a a queue")))))
}

var receipt= (notes)=> {
	return S(null,
		A4(null,
				T(null, "That's pretty great")),
		layout({}, 
			fit(null,
				A5(null, T(null, "Perhaps a"))),
			fill(null,
				A6(null, Hb(null, "RECEIPT"))),
			fit(null,
				A5(null, T(null, "that a thing has been sent")))))
}()

var s7= (notes)=> {
	return S({notes},
		A0(null, T(null, "WebPush is one way a queue might look on the net")),
		A1(null, T(null, "It provides those three resources")),
		A2(null, T(null, "All you have to do is <b>POST</b> to create it")))
}()


