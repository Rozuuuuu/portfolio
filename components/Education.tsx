export default function Education() {
  return (
    <section id="education" className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
          <p className="mb-2">University of Southern Philippines Foundation, Lahug, Cebu City, 6000</p>
          <p>Expected Graduation: 2026</p>
        </div>
        <h3 className="text-2xl font-bold mt-8 mb-4">Relevant Courses</h3>
        <ul className="list-disc list-inside">
          <li>Introduction to Computer Science</li>
          <li>Data Structures and Algorithms</li>
          <li>Object-Oriented Programming</li>
          <li>Database Management Systems</li>
          <li>Web Development</li>
          <li>Software Engineering</li>
        </ul>
      </div>
    </section>
  )
}

