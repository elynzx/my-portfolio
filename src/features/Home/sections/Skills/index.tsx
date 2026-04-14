const skills = [
  {
    category: "Frontend",
    color: "var(--color-bgPink)",
    items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "React", "JavaScript"],
  },
  {
    category: "Backend",
    color: "var(--color-bgPinkDark)",
    items: ["Java", "Python", "Spring Boot"],
  },
  {
    category: "Data",
    color: "var(--color-bgGray)",
    items: ["SQL", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    color: "var(--color-bgPinkCover)",
    items: ["Docker", "Git", "DataCamp (learning)", "VS Code"],
  },
];

export const Skills = () => {

  return (
<section className="flex flex-col items-center justify-center w-full py-8">
      <h2 className="text-3xl font-bold text-darkPink mb-8" role="heading" aria-level={2}>Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {skills.map((group, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4 text-title" style={{ color: "var(--color-darkGray)" }} role="heading" aria-level={3}>{group.category}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-solid border-borderGray hover:scale-105 transition-transform"
                  style={{
                    background: group.color,
                    color: "var(--color-darkGray)",
                    borderColor: "var(--color-borderGray)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}