import React from "react";
import { render } from "react-dom";

import {
	Appear, BlockQuote, Cite, CodePane, Deck, Fill,
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
var T= React.createFactory(Text)

var A1= defaulter(A, {fid: 1})
var A2= defaulter(A, {fid: 1})
var A3= defaulter(A, {fid: 1})
var A4= defaulter(A, {fid: 1})

var m= 0.6 // medium

var spec= "https://tools.ietf.org/html/draft-ietf-webpush-protocol-02"
var specSlug= "Generic Event Delivery Using HTTP Push"
var WP= H(null,
		L({href: spec},
			 "WebPush"))
var HTTP= <Heading big>HTTP2</Heading>

var s1= ()=> {
	var draft= T(null, L({href: spec}, "draft-ietf-webpush-protocol-02"))
	return S(null, 
		H({size:0.6}, "Hi. Welcome to"),
		H({caps:1}, "WebPush Away."),
		T(null, "This is a talk on"),
		WP,
		draft,
		T(null, slug)
	)
}()

var s2= ()=> {
	
}()

render(
	<Spectacle>
		<Deck transition={["zoom"]} transitionDuration={288}>
			{s1}
			<Slide bgColor="primary" notes="">
				<Heading size={0.6} caps>
					Hi. Welcome to
				</Heading>
				<Heading caps>
					WebPush Away.
				</Heading>
				<Text>
					This is a talk on 
				</Text>
				<Heading>
					<Link href="https://tools.ietf.org/html/draft-ietf-webpush-protocol-02">
						WebPush
					</Link>
				</Heading>
				<Text>
					<Link href="https://tools.ietf.org/html/draft-ietf-webpush-protocol-02">
 						draft-ietf-webpush-protocol-02
					</Link><br/>
					Generic Event Delivery Using HTTP Push
				</Text>
			</Slide>
			<Slide>
				<Heading>It's*</Heading>
				<Heading big>rad</Heading>
				<Text>*WebPush. But this talk too.</Text>
				<Text>But not as rad as</Text>
				<Text>WebPush</Text>
			</Slide>
			<Slide>
				<Heading>Because WebPush is a</Heading>
				<Heading big>queue</Heading>
			</Slide>
			<Slide>
				<Heading>And queues are</Heading>
			</Slide>
			<Slide>
				<Heading>Great.</Heading>
			</Slide>
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
