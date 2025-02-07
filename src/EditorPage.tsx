const EditorPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <form>
            {/* Title Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Post Title"
                className="w-full text-xl px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Content Textarea */}
            <div className="mb-6">
              <textarea
                rows={8}
                placeholder="Write your post (in markdown)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Tags Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter tags"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {['programming', 'javascript', 'webdev'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-500 text-white rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition-colors"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;