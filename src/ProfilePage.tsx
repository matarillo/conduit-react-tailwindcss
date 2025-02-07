import { Heart, Plus } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen">
      {/* User Info Section */}
      <div className="bg-gray-100 py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <a href="/profile"><img
              src="https://imgur.com/Qr71crq.jpg"
              alt="Eric Simons"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            /></a>
            <h2 className="text-2xl font-bold mb-2"><a href="/profile">Eric Simons</a></h2>
            <p className="text-gray-400 mb-4 max-w-xl mx-auto">
              Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games
            </p>
            <button className="flex items-center gap-1 ml-auto border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-600 rounded px-4 py-1 text-sm transition-colors">
              <Plus size={16} />
              Follow Eric Simons
              <span className="text-gray-500">(10)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Toggle */}
          <div className="flex gap-6">
            <button className="text-green-600 py-2 border-b-2 border-green-600">
              My Posts
            </button>
            <button className="text-gray-400 py-2 hover:text-gray-600">
              Favorited Posts
            </button>
          </div>

          {/* Posts */}
          {[
            {
              author: "Eric Simons",
              title: "How to build webapps that scale",
              likes: 29
            },
            {
              author: "Albert Pai",
              title: "The song you won't ever stop singing. No matter how hard you try.",
              likes: 32
            }
          ].map((post, index) => (
            <article key={index} className="py-6 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <a href="/profile"><img
                    src="https://imgur.com/Qr71crq.jpg"
                    alt={post.author}
                    className="w-8 h-8 rounded-full"
                  /></a>
                  <div className="ml-2">
                    <p className="font-medium"><a href="/profile">{post.author}</a></p>
                    <p className="text-gray-400 text-sm">January 20th</p>
                  </div>
                </div>
                <button className="flex items-center gap-1 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-md px-3 py-1 transition-colors duration-200">
                  <Heart size={16} fill="currentColor" />
                  <span>{post.likes}</span>
                </button>
              </div>
              <div className="preview-link">
                <a href="/post" className="block group">
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-green-600">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves...
                  </p>
                  <span className="text-gray-400 text-sm">Read more...</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;