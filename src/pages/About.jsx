export default function About() {
  return (
   
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Some of My Qualifications</h2>
      <p className="mb-4">
        I am a developer with a wide skillset in web development, game development, database work, and some UI design. Below are some of my qualifications and skills that I have acquired over the years.
      </p>
      {/* grid setup for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* cards */}
        <div className="rounded-2xl p-6 max-w-sm border-2 transition-shadow shadow-md hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
        <h2 className="text-xl font-semibold mb-2">Web Development</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>CSS Frameworks (Tailwind CSS, Bootstrap)</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 max-w-sm border-2 transition-shadow shadow-md hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
        <h2 className="text-xl font-semibold mb-2">Game Development</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>CSS Frameworks (Tailwind CSS, Bootstrap)</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 max-w-sm border-2 transition-shadow shadow-md hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
        <h2 className="text-xl font-semibold mb-2">Database Work</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>CSS Frameworks (Tailwind CSS, Bootstrap)</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 max-w-sm border-2 transition-shadow shadow-md hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]">
        <h2 className="text-xl font-semibold mb-2">UI Design</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>CSS Frameworks (Tailwind CSS, Bootstrap)</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">Skills</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>CSS Frameworks (Tailwind CSS, Bootstrap)</li>
        <li>RESTful APIs</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Experience</h3>
      <p className="mb-4">
        I have worked on various projects ranging from small personal websites to large-scale applications. My experience includes both front-end and back-end development.
      </p>
    </div>
  );
}
