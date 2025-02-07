import { Heart } from 'lucide-react';

const articles = [
  {
    title: "How to build webapps that scale",
    body: "In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...",
    author: "Eric Simons",
    authorImage: "https://imgur.com/Qr71crq.jpg",
    date: "January 20th",
    likes: 29
  },
  {
    title: "The song you won't ever stop singing. No matter how hard you try.",
    body: "In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...",
    author: "Albert Pai",
    authorImage: "https://imgur.com/N4VcUeJ.jpg",
    date: "January 20th",
    likes: 32
  }
]

//type Article = (typeof articles)[number];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner */}
      <div className="bg-green-600 shadow-inner text-white py-8 text-center">
        <h1 className="logo-font text-5xl font-bold mb-2">conduit</h1>
        <p className="text-xl">A place to share your knowledge.</p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Feed */}
          <div className="md:w-3/4">
            {/* Feed Toggle */}
            <div className="flex gap-4">
              <button className="text-gray-400 py-2">Your Feed</button>
              <button className="text-green-600 py-2 border-b-2 border-green-600">
                Global Feed
              </button>
            </div>

            {/* Articles */}
            {articles.map((article, index) => (
              <article key={index} className="py-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <a href="/profile">
                      <img
                        src={article.authorImage}
                        alt="author"
                        className="w-8 h-8 rounded-full"
                      /></a>
                    <div className="ml-2">
                      <p className="font-medium">
                        <a href="/profile">{article.author}</a>
                      </p>
                      <p className="text-gray-400 text-sm">
                        {article.date}
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:bg-green-600 focus:text-white rounded-md px-3 py-1 transition-colors duration-200">
                    <Heart size={16} fill="currentColor" />
                    <span>{article.likes}</span>
                  </button>
                </div>
                <div className="preview-link">
                  <a href="/post">
                    <h2 className="text-2xl font-bold mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {article.body}
                    </p>
                    <span className="text-gray-400 text-sm">Read more...</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold mb-2">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['programming', 'javascript', 'angularjs', 'react', 'mean', 'node', 'rails'].map(
                  (tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white px-2 py-1 rounded-full text-sm transition-colors duration-200"
                    >
                      {tag}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;