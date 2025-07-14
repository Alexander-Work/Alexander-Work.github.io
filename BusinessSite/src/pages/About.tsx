export default function About() {
  return (
   
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Some of My Qualifications</h2>
      <p className="mb-4">
        I am a developer with a wide skillset in web development, game development, database work, and generic applications in C#/Java. Below are some of my qualifications and skills that I have acquired over the years.
      </p>
      {/* grid setup for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* cards */}
      <div className="rounded-2xl p-6 max-w-sm border-2 transition-shadow shadow-md hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
        <h2 className="text-xl font-semibold underline mb-2">Web Development</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>CSS Frameworks (Tailwind CSS, Bootstrap)</li>
            <li>APIs</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 max-w-sm border-2 transition-shadow shadow-md hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
        <h2 className="text-xl font-semibold underline mb-2">Game Development</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>UE5</li>
            <li>Unity</li>
            <li>C#</li>
            <li>Some experience in C++</li>
            <li>Audio work for sound effects</li>
            <li>Pathfinding and Collision work</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 max-w-sm border-2 transition-shadow shadow-md hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
        <h2 className="text-xl font-semibold underline mb-2">Database Work</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Microsoft SQL</li>
            <li>APIs</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 max-w-sm border-2 transition-shadow shadow-md hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
        <h2 className="text-xl font-semibold underline mb-2">App Languages</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>C#</li>
            <li>Java</li>
            <li>Kotlin</li>
            <li>Some Python work</li>
          </ul>
        </div>
      </div>
      {/* End of cards */}

      <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Documentation/Microsoft Office</li>
        <li>Adaptable teamwork</li>
        <li>Good Communication</li>
        <li>Problem Solver</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <h2 className="mb-1 text-xl underline font-semibold">Computer Programming and Analysis</h2>
      <h3 className="mb-1 font-semibold">Georgian College 2022-2025</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Learned the above skills within this course</li>
        <li>Dean's List several semesters</li>
        <li>Business/Management elements within the course completed</li>
      </ul>
      
    </div>
  );
}
