

  const Directory = () => {
  
    return (
      <div>
        <h1 className="text-center text-2xl font-bold mb-4 underline">Who am I?</h1>
        <div className="rounded-2xl p-6 mb-2 border-2 ">
          <div className="flex items-center ">
            <img src="\assets\suit-cropped.jpg" alt="dapper" className="mx-5 mb-4 h-100 border-1 object-cover rounded-lg" />
            <p className=" font-semibold text-xl">Hey thanks for visiting my site, my names Alex. I am an aspiring developer that went to school at Georgian College. With experience in programming and related hardware, I also have some experience in game development and business technologies. I hope you will consider my employment!</p>
          </div>
        </div>
   
        <div>
          <h2 className="text-center text-2xl font-bold mb-4 underline">Whats in here?</h2>
          <ul className="text-center p-1">
            <li className="text-center text-xl p-1 font-semibold">About: A brief overview of my skills and education</li>
            <li className="text-center p-1 text-xl font-semibold">Projects: Some things of note that I have worked on</li>
          </ul>
        </div>
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-center text-2xl font-bold mb-4 underline">Due to this website being publicly deployed</h2>
            <h3 className="text-center text-xl font-semibold mb-4">Refer to either the resume or business card that was provided to you to get in touch with me</h3>
            <h4 className="text-center text-xl font-semibold">Thanks</h4>
            <img src="\assets\peepoWICKED.png" alt="WICKED" className="mx-auto mb-4 h-auto" />
          </div> 
      </div>
    );
  };

  export default Directory;