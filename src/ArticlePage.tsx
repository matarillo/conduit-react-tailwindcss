import { Heart, Plus, Edit, Trash2 } from 'lucide-react';

const ArticlePage = () => {
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="banner bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">How to build webapps that scale</h1>

          <div className="flex items-center gap-4">
            <a href="/profile" className="flex items-center">
              <img src="https://imgur.com/Qr71crq.jpg" alt="Eric Simons" className="w-8 h-8 rounded-full" />
              <div className="ml-2">
                <p className="font-medium">Eric Simons</p>
                <span className="text-gray-400 text-sm">January 20th</span>
              </div>
            </a>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 text-sm border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-400 rounded px-3 py-1.5 transition-colors">
                <Plus size={16} />
                Follow Eric Simons
                <span className="text-gray-400">(10)</span>
              </button>
              <button className="flex items-center gap-1 text-sm border border-green-400 hover:bg-green-400 hover:text-white text-green-400 rounded px-3 py-1.5 transition-colors">
                <Heart size={16} fill="currentColor" />
                Favorite Post
                <span className="text-gray-400">(29)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <article className="post-content prose prose-slate mx-auto">
          <p className="mb-4">
            Web development technologies have evolved at an
            incredible clip over the past few years. We&#39;ve gone
            from rudimentary DOM manipulation with libraries like
            jQuery to supercharged web applications organized &amp;
            powered by elegant MV* based frameworks like AngularJS.
            Pair this with significant increases in browser
            rendering speeds, and it is now easier than ever before
            to build production quality applications on top of
            Javascript, HTML5, and CSS3.
          </p><p className="mb-4">
            While these advances have been incredible, they are only
            just starting to affect the clear platform of the
            future: mobile. For years, mobile rendering speeds were
            atrocious, and the MVC frameworks &amp; UI libraries
            provided by iOS and Android were far superior to writing
            mobile apps using web technologies. There were also some
            very public failures -- Facebook famously wrote their
            first iOS app in 2011 using HTML5 but ended up scrapping
            it due to terrible performance.
          </p><p className="mb-4">
            For years now, hybrid apps have been mocked and jeered
            by native app developers for being clunky and ugly,
            having subpar performance, and having no advantages over
            native apps. While these may have been valid reasons in
            2011, they are now virtually baseless, thanks to a
            collection of new technologies that have emerged over
            the past two years. With these technologies, you can
            design, build, and deploy robust mobile apps faster than
            you could with native technologies, all while incurring
            little to no app performance penalties. This is thanks
            in large part to super fast mobile browser rendering
            speeds and better JavaScript performance. This course is
            designed to teach you how to effectively use these new
            technologies to build insanely great mobile apps.
          </p><p className="mb-4">
            Without further ado, we&#39;d like to welcome you to the
            future of mobile app development, freed from the
            shackles of native languages &amp; frameworks. Let&#39;s
            learn what the new mobile stack consists of and how it
            works.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" id="introducing-ionic">Introducing Ionic.</h2>
          <p className="mb-4">
            Before, building hybrid apps was a chore -- not because
            it was hard to build web pages, but because it was hard
            to build full-fledged web applications. With AngularJS,
            that has changed. As a result, Angular became the core
            innovation that made hybrid apps possible. The bright
            folks at Drifty were some of the first to realize this
            and subsequently created the <a
              href="https://ionicframework.com/"
              target="_blank">Ionic Framework</a
            > to bridge the gap between AngularJS web apps and hybrid
            mobile apps. Since launching a little over a year ago, the
            Ionic Framework has <a
              href="https://www.google.com/trends/explore?hl=en-US&q=ionic+framework&cmpt=q&tz&tz&content=1"
              target="_blank"
            >quickly grown in popularity amongst developers</a
            > and their <a
              href="https://github.com/driftyco/ionic"
              target="_blank">main Github repo</a
            > has over 13K stars as of this writing.
          </p><p className="mb-4">
            Ionic provides similar functionality for AngularJS that <a
              href="https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKit_Framework/"
              target="_blank">iOS UIKit</a
            > provides for Obj-C/Swift, and that <a
              href="https://developer.android.com/guide/topics/ui/overview.html"
              target="_blank">Android UI elements</a
            > provides for Java. Core mobile UI paradigms are available
            to developers out of the box, which means that developers
            can focus on building apps, instead of common user interface
            elements. Some examples of these include <a
              href="https://ionicframework.com/docs/api/directive/ionList/"
              target="_blank">list views</a
            >, <a
              href="https://ionicframework.com/docs/api/directive/ionNavView/"
              target="_blank">stateful navigation</a
            >, <a
              href="https://ionicframework.com/docs/nightly/api/directive/ionTabs/"
              target="_blank">tab bars</a
            >, <a
              href="https://ionicframework.com/docs/api/service/$ionicActionSheet/"
              target="_blank">action sheets</a
            >, and <a
              href="https://ionicframework.com/docs/nightly/api/"
              target="_blank">so much more</a
            >.
          </p>
          <p className="mb-4">
            Ionic is a great solution for creating both mobile web
            apps and native apps. The first sections of this course
            will go over structuring Ionic apps that can run on the
            web. Then we will cover packaging that same exact code
            into a native app. We will be using a build tool called
            Cordova for packaging our app. For those unfamiliar with
            Cordova, it is the open source core of Adobe&#39;s
            proprietary PhoneGap build system. Adobe describes it
            with this analogy: Cordova is to PhoneGap as Blink is to
            Chrome. Basically, PhoneGap is Cordova plus a whole
            bunch of other Adobe stuff.
          </p>
          <p className="mb-4">
            The folks at Ionic have done a fantastic job of making
            Cordova super easy to use by directly wrapping it in
            their &#39;ionic&#39; command line tool (don&#39;t
            worry, we&#39;ll cover this later). Just remember that
            Cordova is something that is running under the hood of
            your hybrid app that you will rarely need to worry
            about, but we will cover some common interactions with
            it in this course.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" id="what-we-re-going-to-build">
            What we&#39;re going to build
          </h2>
          <p className="mb-4">
            We will be building an app called Songhop, a
            &quot;Tinder for music&quot; app that allows you to
            listen to 30-second song samples and favorite the ones
            you like. This is based on a real Ionic/Cordova powered
            app we built that exists on the <a
              href="https://itunes.apple.com/us/app/songhop/id899245239?mt=8"
              target="_blank">iOS App Store</a
            > -- feel free to download it to get a feeling for what Ionic
            is capable of (and rate it 5 stars :). It&#39;s also worth
            noting that it only took us a month to build the Songhop
            app that&#39;s on the App Store, so that should give you
            an idea of how fast you can build &amp; iterate using Ionic
            / Cordova.
          </p><p className="mb-4">
            <strong
            >You can also see a <a
              href="https://ionic-songhop.herokuapp.com"
              target="_blank"
            >live demo of the completed application
                we&#39;ll be building here</a
              > (resize your browser window to the size of a phone
              for the best experience).</strong>
          </p><p className="mb-4">
            We&#39;ll be covering a wide variety of topics in this
            course: scaffolding a new application, testing it in the
            emulator, installing native plugins for manipulating
            audio &amp; files, swipe gestures for our interface,
            installing the app on your own device, deploying to the
            iOS &amp; Android app stores, and so much more.
          </p>
        </article>

        <hr className="my-8 border-t border-gray-300" />

        {/* Post Actions */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4">
            <a href="/profile" className="flex items-center">
              <img src="https://imgur.com/Qr71crq.jpg" alt="Eric Simons" className="w-8 h-8 rounded-full" />
              <div className="ml-2 text-left">
                <p className="font-medium">Eric Simons</p>
                <span className="text-gray-500 text-sm">January 20th</span>
              </div>
            </a>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 text-sm border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-400 rounded px-3 py-1.5 transition-colors">
                <Plus size={16} />
                Follow Eric Simons
                <span className="text-gray-400">(10)</span>
              </button>
              <button className="flex items-center gap-1 text-sm border border-green-400 hover:bg-green-400 hover:text-white text-green-400 rounded px-3 py-1.5 transition-colors">
                <Heart size={16} fill="currentColor" />
                Favorite Post
                <span className="text-gray-400">(29)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="max-w-3xl mx-auto">
          {/* Comments */}
          {[1, 2].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow mb-4">
              <div className="p-4">
                <p className="text-gray-600">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
              <div className="px-4 py-3 bg-gray-50 rounded-b-lg flex items-center text-xs">
                <a href="/profile" className="flex items-center flex-1">
                  <img src="https://imgur.com/Qr71crq.jpg" alt="" className="w-6 h-6 rounded-full" />
                  <span className="ml-2 font-medium">Jacob Schmidt</span>
                  <span className="ml-2 text-gray-500">Dec 29th</span>
                </a>
                {index === 1 && (
                  <div className="flex gap-3 text-gray-400">
                    <Edit size={16} className="cursor-pointer hover:text-gray-600" />
                    <Trash2 size={16} className="cursor-pointer hover:text-gray-600" />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Comment Form */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div>
              <textarea
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-gray-400"
                placeholder="Write a comment..."
                rows={3}
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-b-lg">
              <img src="https://imgur.com/Qr71crq.jpg" alt="" className="w-8 h-8 rounded-full" />
              <button className="bg-green-500 text-white rounded px-4 py-1 text-sm hover:bg-green-600 transition-colors">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;