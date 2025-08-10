export default function Achievements() {
  const achievements = [
    "2nd Place in Hackathon Competition in CCS Days at USPF",
    "Best in Logo in Hackathon Competition",
    "Most Promising in Hackathon Competition",
    "Dean's List 2022-2023",
    "Dean's List 2023-2024",
    "NCII Passer",
    "NCII in Computer Systems Servicing (Certified by TESDA)",
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Achievements & Certifications</h2>
        <ul className="list-disc list-inside space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-lg">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

