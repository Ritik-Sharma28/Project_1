import { Link, Outlet, useMatch } from "react-router-dom";

function Semester_Home() {
    const isRoot = useMatch("/Semesters");
     return ( 
     //<div class="">
//   <div class="flex items-center justify-center bg-amber-50">
//     <p class="text-[50px] font-bold">Select Your Semester</p>
//   </div>
//   <div class="rounded-2xl border-2"></div>

//   <div class="mt-10 sm:grid grid-cols-2 gap-5 bg-blue-100 p-4">
//     <div class="rounded-lg bg-blue-400">
//       <ul class="mx-2 grid gap-6 p-4 text-[30px]">
//         <li class="cursor-pointer rounded-2xl bg-amber-50 p-2">SEMESTER 1</li>
//         <li class="cursor-pointer rounded-2xl bg-amber-50 p-2">SEMESTER 2</li>
//         <li class="cursor-pointer rounded-2xl bg-amber-50 p-2">SEMESTER 3</li>
//         <li class="cursor-pointer rounded-2xl bg-amber-50 p-2">SEMESTER 4</li>
//       </ul>
//     </div>

//     <div class="rounded-lg bg-blue-400">
//       <ul class="mx-2 grid gap-6 p-4 text-[30px]">
//         <li class="cursor-pointer rounded-2xl bg-amber-50 p-2">SEMESTER 5</li>
//         <li class="cursor-pointer rounded-2xl bg-amber-50 p-2">SEMESTER 6</li>
//         <li class="cursor-pointer rounded-2xl bg-amber-50 p-2">SEMESTER 7</li>
//         <li class="cursor-pointer rounded-2xl bg-amber-50 p-2">SEMESTER 8</li>
//       </ul>
//     </div>
//     <div></div>
//   </div>
// </div>

<>

{
isRoot && (
<div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-6">
  <div className="flex items-center justify-center mb-8">
    <p className="text-4xl md:text-5xl font-bold text-blue-900 drop-shadow-lg">
      Select Your Year
    </p>
  </div>

  <div className="mx-auto w-3/4 border-b-4 border-blue-400 sm:rounded-full mb-10"></div>

  <div className=" gap-8 max-w-4xl mx-auto">
    <div className="rounded-2xl bg-blue-500 p-6 shadow-lg">
      <ul className="grid gap-4 text-2xl text-center font-semibold text-blue-900">
       <Link to="First_Year"> <li className="cursor-pointer rounded-xl bg-amber-100 py-3 hover:bg-amber-200 transition"> FIRST YEAR </li> </Link>  
        <li className="cursor-pointer rounded-xl bg-amber-100 py-3 hover:bg-amber-200 transition">SECOND YEAR</li>
        <li className="cursor-pointer rounded-xl bg-amber-100 py-3 hover:bg-amber-200 transition">THIRD YEAR</li>
        <li className="cursor-pointer rounded-xl bg-amber-100 py-3 hover:bg-amber-200 transition">FOURTH YEAR</li>
      </ul>
    </div>

  </div>
  
</div>
)
}
<Outlet/>
</>

);
}

export default Semester_Home
;