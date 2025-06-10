

function First_Year () {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-indigo-100 py-10 px-6">
  <div className="flex justify-center mb-8">
    <h4 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow">
      SUBJECTS
    </h4>
  </div>

  <div className="max-w-4xl mx-auto">
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg font-semibold text-blue-900">
      {[
        { name: "PHYSICS", bg: "bg-amber-200" },
        { name: "CHEMISTRY", bg: "bg-amber-200" },
        { name: "MATHS - I", bg: "bg-amber-400" },
        { name: "MATHS - II", bg: "bg-amber-400" },
        { name: "ELECTRONIC", bg: "bg-amber-100" },
        { name: "MECHANICAL", bg: "bg-amber-300" },
        { name: "SOFT SKILLS", bg: "bg-amber-100" },
        { name: "PPS", bg: "bg-amber-100" },
        { name: "ELECTRICAL", bg: "bg-amber-300" },
        { name: "EVS", bg: "bg-amber-100" },
      ].map((subject, i) => (
        <li
          key={i}
          className={`p-3 rounded-xl border-2 border-blue-300 shadow-md cursor-pointer transition-transform hover:scale-105 hover:bg-amber-50 ${subject.bg}`}
        >
          {subject.name}
        </li>
      ))}
    </ul>
  </div>
</div>


      );
}

export default First_Year;