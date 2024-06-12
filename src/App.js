function App() {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by John Doe
          </div>
          <ul>
            <li>
              <strong>Views: </strong> 4000
            </li>
            <li><strong>Downloads</strong></li>
            <li><strong>Likes: </strong></li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
