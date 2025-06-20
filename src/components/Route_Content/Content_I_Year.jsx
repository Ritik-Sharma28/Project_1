import Physics from "../Years/First_Year/Physics/Physics"
import Chemistry from "../Years/First_Year/Chemistry/Chemistry"
import Maths_I from "../Years/First_Year/Maths_I/Maths_I"     
import Maths_II from "../Years/First_Year/Maths_II/Maths_II"
import Electronics from "../Years/First_Year/Electronics/Electronics"
import SoftSkills from "../Years/First_Year/Softskills/SoftSkills"
import Mechanical from "../Years/First_Year/Mechanical/Mechanical"
import Electrical from "../Years/First_Year/Electrical/Electrical"
import EVS from "../Years/First_Year/EVS/EVS"
import PPS from "../Years/First_Year/PPS/PPS"

function Content_I_Year() {

const physicsContent = [{
                path: "physics",
                element: <Physics/>, 
               
              }]

const chemistryContent = [{
  path: "chemistry",
  element : <Chemistry/>,
  
}
]  

const maths_IContent = [{
  path : "maths1",
  element :<Maths_I/>,
  // children : [{}]
}]

const maths_IIContent = [{
  path : "maths2",
  element : <Maths_II/>,
  // children : [{}]
}]

const electronicsContent = [{  
  path: "electronic",
  element: <Electronics/>
}]

const softskillsContent = [{  
  path: "softskills",
  element : <SoftSkills/>
}]

const mechanicalContent = [{
  path : "mechanical",
  element : <Mechanical/>
}]

const electricalContent = [{
  path : "electrical",
  element : <Electrical/>
}]

const ppsContent = [{
  path : "pps",
  element : <PPS/>
}]

const evsContent = [{
  path : "evs",
  element : <EVS/>
}]

return [
    ...physicsContent,
    ...chemistryContent,
    ...maths_IContent,
    ...maths_IIContent,
    ...softskillsContent,
    ...electronicsContent,
    ...mechanicalContent,
    ...evsContent,
    ...electricalContent,
    ...ppsContent
    
  
]

}

export default Content_I_Year;