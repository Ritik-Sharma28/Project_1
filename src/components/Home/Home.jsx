function Home() {
    return ( 
        <div className="flex h-svh items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-500 p-6">
  
  <div className="flex w-full max-w-6xl flex-col sm:flex-row items-center justify-between gap-10 bg-white rounded-2xl shadow-2xl px-10 py-12">

    <div className="animate-fade-in-up text-center sm:text-left">
      <h1 className="text-[55px] sm:text-[70px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-500">
        WELCOME TO IET
      </h1>
    </div>

    <div className="hidden sm:block w-[2px] h-48 bg-gray-300"></div>

   
    <div className="text-gray-800 text-lg sm:text-xl font-medium space-y-4">
      <p>✅ PYQs of all semesters</p>
      <p>📚 Get detailed notes</p>
      <p>🤝 Connect with seniors</p>
    </div>
  </div>
</div>
    );
}

export default Home;