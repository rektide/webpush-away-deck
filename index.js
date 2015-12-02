import React from "react";
import { render } from "react-dom";

import {
	Appear, BlockQuote, Cite, CodePane, Deck, Fit, Fill,
	Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
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
var WP= Hb(null,
		L({href: spec},
			 "WebPush"))
var HTTP= <Heading big>HTTP2</Heading>


var webpushAway= ()=> {
	var draft= T(null, L({href: spec}, "draft-ietf-webpush-protocol-02"))
	return S(null, 
		H({size:0.6}, "Hi. Welcome to"),
		H({caps:1}, "WebPush Away."),
		T(null, "This is a talk on"),
		WP,
		draft,
		T(null, specSlug)
	)
}()



var rad= (notes)=> {
	return S({notes},
		A0(null,
			H(null, "It*'s"),
			Hb(null, "rad")),
		A1(null,
			T(null, "*Webpush."),
			T(null, "But this talk is too."),
			T(null, "But not as rad as")))
}()

var radSpec= (notes)=> {
	return S(notes,
		A0(null, WP),
		A1(null,
			T(null, specSlug)))
}()

var bigQueue= (notes)=> {
	return S({notes},
		A0(null,
			H(null, "Because"),
			WP,
			T(null, "is a web queue")),
		A1(null,
			T(null, "And queues are")),
		A2(null,
			Hb(null, "Great")))
}(`
WebPush is a big queue.
And queues are great.
They send stuff! Put something in a queue, and get it from elsewhere.
`)


var series= (notes)=> {
	// A queue is pretty close to
	// a series of tubes
}()

// put things in
// get things out

// a queue is pretty close to
// [this]

// things in, things out

// and in addition to stuff in and stuff out
// this talk has one other awesome
// magic
// http2 magic!
// please, stick around and enjoy WebPush Away!


var webGreat= (notes)=> {
	return S({notes},
		A0(null, T("The web is")),
		A1(null, Hb("Great")))
}()

var webPushGreat= (notes)=> {
	return S({notes},
		WP,
		T(null, "is a great queue"),
		T(null, "for a great"),
		Hg(null, "Web"))
}()


var beLikeTubes= (notes)=> {
	var src= ""
	return S({notes},
		A0(null, Hb(null, "Queues are like")),
		A1(null,
			T("A series of tubes"),
			iframe({src})))
}()

var s4_really= (notes)=> {
	return S({notes, bgColor: "black"},
		A0(null,
			Hb(null, "Really great")))
}()


// and- Webpush is a great queue
// What is a queue?
// Why is webpush a great queue?

// Well, a queue is something you put stuff into
// And get stuff out of
// WebPush is great, because it's that, on the web

// Ask a "push service" server
//   for a queue
// And it'll give it to you

// See? Three pieces. In, out, and an ack (receipt)

// Webpush does that
// And it uses HTTP2
//   in a way that makes webpush powerful
// Webpush also 



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

var s6= (notes)=> {
	return S({notes},
		Hbf(null, "That's pretty great"))
}()

var httpGreat= (notes)=> {
	return S({notes},
		A0(null,
			WP,
			T(null, "is really great")))

}()

var s7= (notes)=> {
	return S({notes},
		A0(null, T(null, "WebPush is one way a queue might look on the net")),
		A1(null, T(null, "It provides those three resources")),
		A2(null, T(null, "All you have to do is <b>POST</b> to create it")))
}()

var s8= (notes)=> {
	var source= `POST /subscribe/ HTTP/1.1
Host: yoyodyne.net`
	var href= ss("4")
	return S({notes},
		code({source, language: "http", size: 4}),
		ssl(4))
}()

var s9_created= (notes)=> {
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
			{bigQueue}
			{s4_really}
			{s5}
			{s6}
			{s7}
			{s8}
			{s9_created}
			<Slide>
				<Heading big>Really great.</Heading>
			</Slide>
			<Slide>
				<Heading>Great like</Heading>
			</Slide>
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
