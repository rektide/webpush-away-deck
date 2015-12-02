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
var LI= React.createFactory(ListItem)
var MD= React.createFactory(Markdown)
var T= React.createFactory(Text)

var layout= React.createFactory(Layout)
var fit= React.createFactory(Fit)
var fill= React.createFactory(Fill)
var code= React.createFactory(CodePane)
var blockQuote= React.createFactory(BlockQuote)
var quote= React.createFactory(Quote)
var cite= React.createFactory(Cite)

var br= React.createFactory("br")
var div= React.createFactory("div")
var span= React.createFactory("span")
var iframe= React.createFactory("iframe")

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
function href(href){
	return L({href}, href)
}

var m= 0.6 // medium

var spec= "https://tools.ietf.org/html/draft-ietf-webpush-protocol-02"
function ss(section){
	return "https://tools.ietf.org/html/draft-ietf-webpush-protocol-02#section-" + section
}
function ssl(section){
	var href= ss(section)
	return L({href}, href)
}
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
					cite(null, "Everyone"))))
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
		A4(null, T({textColor:"primary"}, "Nicely making it through standardizing")))
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
		return S({notes},
			H(null, _WP, " talk outline:"),
			L({align: "left"},
				LI(null, "Opening: welcome", A0({span: true}, " (please learn a lot & enjoy)")),
				LI(null, "Model: WebPush Protocol", A1({span: true}, " (resourceful)")),
				LI(null, "Technique: HTTP2 Push", A2({span: true}, " (async)")),
				LI(null, "Application: Push API", A3({span: true}, " (example)")),
				LI(null, "Implementation: WebPush-Pump", A4({span: true}, " (mine)"))),
			footer)
	}
}

var overview= order(null)(`<p>I'm Matthew Fowle, thank you all so much for attending.</p>
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
	var src= "http://steamcommunity.com/sharedfiles/filedetails/?id=258816001"
	return S({notes},
		T({margin: "-1.5em 0 0"}, "You probably know this but"),
		A0(null,
			H({size: 2}, "Stuff goes in")),
		A1(null,
			A2(null,
				iframe({
					src,
					height:"600px",
					width: "90%",
					transform: "scale(0.4)"})),
			H({size: 2},
				"Stuff comes out",
				A3({span: true}, " (eventually)"))))
}()

var resources101= (notes)=> {
	return S({notes},
		T(null, "Great, so what about a WebPush queue?"),
		A0(null,
			H({size: 3}, "It's just resources")),
		A1(null,
			T(null, "(things with URLs)")),
		L(null,
			LI(null,
				A1(null,
					"\"A ",
					b(null, "subscription resource"),
					" is used to receive messages from a subscription and to delete a subscription.\"")),
			LI(null,
				A2(null,
					"\"A ",
					b(null, "push resource"),
					" is used to send messages to a subscription.\""))),
		A3(null, ssl(2)))
}()

var pushService= (notes)=> {
	return S({notes},
		T(null, "These resources are gotten from a ", b(null, "push service":)),
		A1(null, "\nThis resource is used to create push message subscriptions\n"))
		
}()


var create= (notes)=> {
	return S({notes},
		H(null, "Step 1"),
		H({size: 3}, "Create a queue"))
}()





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

var subscribeCode= (notes)=> {
	var source= `POST /subscribe/ HTTP/1.1
Host: yoyodyne.net`
	var href= ss("4")
	return S({notes},
		code({source, language: "http", size: 4}),
		ssl(4))
}()

var subscribedCode= (notes)=> {
	var source= `HTTP/1.1 201 Created
Date: Thu, 11 Dec 2014 23:56:52 GMT
Link: </p/JzLQ3raZJfFBR0aqvOMsLrt54w4rJUsV>;
	rel="urn:ietf:params:push"
Link: </receipts/xjTG79I3VuptNWS0DsFu4ihT97aE6UQJ>;
	rel="urn:ietf:params:push:receipt"
Location: https://push.example.net/s/LBhhw0OohO-Wl4Oi971UGsB7sdQGUibx`
	return S({notes},
		A0(null,
			code({source, language: "http"}),
			ssl(4)),
		A1(null, 
			T(null, "There they are:")),
		L(null,
			LI(null, A2(null, "A way to push stuff in")),
			LI(null, A3(null, "A means to hear acks")),
			LI(null, A4(null, "A means to get stuff out"))))
}()

var s9= (notes)=> {
	
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
			{overview}
			{model}
			{goesInGoesOut}
			{resources101}
			<Slide>
				<Heading>[this] Great</Heading>
				<iframe src=""></iframe>
			</Slide>
			<Slide>
				So we're going to do it like this
			</Slide>
			<Slide>
				http://steamcommunity.com/sharedfiles/filedetails/?id=563287795
			</Slide>
			<Slide>
				This presentation also has
			</Slide>
			<Slide>
				<Heading big>HTTP2</Heading>
			</Slide>
			<Slide>
				<Appear fid={1}>
					<Text>Which delivers resources</Text>
				</Appear>
				<Text>Which is great</Text>
			</Slide>
			<Slide>
			</Slide>
			<Slide>
				<Appear fid={1}>
					<Text>HTTP is great at delivering resources</Text>
				</Appear>
				<Appear fid={2}>
					<Text>And delivering resources is what we want</Text>
				</Appear>
				<Appear fid={3}>
					<Text>Cause, that's the queue working</Text>
				</Appear>
			</Slide>
			<Slide>
				HTTP2 is kind of
			</Slide>
			<Slide>
				<Appear fid={1}>
					<Heading big>HTTP2</Heading>
					<Heading>is kind of</Heading>
				</Appear>
				<Appear fid={2}>
					Companion Cube
				</Appear>
				http://steamcommunity.com/sharedfiles/filedetails/?id=563287795
			</Slide>
			<Slide>
				So it's kind of all
			</Slide>
			<Slide>
				
			</Slide>
			
			
			<Slide>
				
			</Slide>
			<Slide>
				<Heading size={0.8}>
					That s kind of like a talk on
				</Heading>
				<Text>
					Portals
				</Text>
			</Slide>
			<Slide transition={["zoom"]} bgColor="primary" notes="">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					Spectacle
				</Heading>
				<Heading size={1} fit caps>
					A ReactJS Presentation Library
				</Heading>
				<Heading size={1} fit caps textColor="black">
					Where You Can Write Your Decks In JSX
				</Heading>
				<Link href="https://github.com/FormidableLabs/spectacle">
					<Text bold caps textColor="tertiary">View on Github</Text>
				</Link>
				<Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
			</Slide>
			<Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
				<Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
				<Heading size={1} fit textColor="primary" textFont="secondary">
					Wait what?
				</Heading>
			</Slide>
			<Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
				<CodePane
					lang="jsx"
					source={require("raw!./assets/deck.example")}
					margin="20px auto"
				/>
			</Slide>
			<Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
				<Appear fid="1">
					<Heading size={1} caps fit textColor="primary">
						Full Width
					</Heading>
				</Appear>
				<Appear fid="2">
					<Heading size={1} caps fit textColor="tertiary">
						Adjustable Darkness
					</Heading>
				</Appear>
				<Appear fid="3">
					<Heading size={1} caps fit textColor="primary">
						Background Imagery
					</Heading>
				</Appear>
			</Slide>
			<Slide transition={["zoom", "fade"]} bgColor="primary">
				<Heading caps fit>Flexible Layouts</Heading>
				<Layout>
					<Fill>
						<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
							Left
						</Heading>
					</Fill>
					<Fill>
						<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
							Right
						</Heading>
					</Fill>
				</Layout>
			</Slide>
			<Slide transition={["slide"]} bgColor="black">
				<BlockQuote>
					<Quote>Wonderfully formatted quotes</Quote>
					<Cite>Ken Wheeler</Cite>
				</BlockQuote>
			</Slide>
			<Slide transition={["spin", "zoom"]} bgColor="tertiary">
				<Heading caps fit size={1} textColor="primary">
					Inline Markdown
				</Heading>
				<Markdown>
					{`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
					`}
				</Markdown>
			</Slide>
			<Slide transition={["slide", "spin"]} bgColor="primary">
				<Heading caps fit size={1} textColor="tertiary">
					Smooth
				</Heading>
				<Heading caps fit size={1} textColor="secondary">
					Combinable Transitions
				</Heading>
			</Slide>
			<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
				<List>
					<ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
					<ListItem><Appear fid="2">Autofit text</Appear></ListItem>
					<ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
					<ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
					<ListItem><Appear fid="5">PDF export</Appear></ListItem>
					<ListItem><Appear fid="6">And...</Appear></ListItem>
				</List>
			</Slide>
			<Slide transition={["slide"]} bgColor="primary">
				<Heading size={1} caps fit textColor="tertiary">
					Your presentations are interactive
				</Heading>
				<Interactive/>
			</Slide>
			<Slide transition={["spin", "slide"]} bgColor="tertiary">
				<Heading size={1} caps fit lineHeight={1.5} textColor="primary">
					Made with love in Seattle by
				</Heading>
				<Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
			</Slide>
		</Deck>
	</Spectacle>
, document.getElementById("root"));
