import { Link, Outlet , useMatch } from "react-router";


function First_Year () {
  const isRoot = useMatch("/Years/First_Year");
    return ( <>
       {isRoot && <div className="min-h-screen bg-gradient-to-b from-blue-100 to-indigo-100 py-10 px-6">
  <div className="flex justify-center mb-8">
    <h4 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow">
      SUBJECTS
    </h4>
  </div>

  <div className="max-w-4xl mx-auto">
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg font-semibold text-blue-900">
      {[
        { name: "PHYSICS", bg: "bg-amber-200" , id : "physics"},
        { name: "CHEMISTRY", bg: "bg-amber-200" , id : "chemistry"},
        { name: "MATHS - I", bg: "bg-amber-400" , id : "maths1"},
        { name: "MATHS - II", bg: "bg-amber-400" , id : "maths2"},
        { name: "ELECTRONIC", bg: "bg-amber-100" , id : "electronic"},
        { name: "MECHANICAL", bg: "bg-amber-300" , id : "mechanical"},
        { name: "SOFT SKILLS", bg: "bg-amber-100" , id : "softskills"},
        { name: "PPS", bg: "bg-amber-100" , id : "pps"},
        { name: "ELECTRICAL", bg: "bg-amber-300", id : "electrical" },
        { name: "EVS", bg: "bg-amber-100" , id : "evs" },
      ].map((subject, i) => ( <Link to={subject.id}>
        <li
          key={i}
          className={`p-3 rounded-xl border-2 border-blue-300 shadow-md cursor-pointer transition-transform hover:scale-105 hover:bg-amber-50 ${subject.bg}`}
        >
          {subject.name} 
        </li> </Link>
      ))}
    </ul>
  </div>
  
</div> } 

<Outlet />
</>


      );
}

export default First_Year;