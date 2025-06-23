import { useNavigate } from "react-router";
function Mechanical() {
  const navigate = useNavigate();
    return ( <><div className="p-6 space-y-6 bg-gray-50 text-gray-800">
 <div className="flex items-center gap-10 flex-wrap">
     <button
        className=" px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
    <h6 className="text-3xl font-extrabold text-blue-700 uppercase">Mechanical Engineering</h6>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-1: Introduction to Mechanics of Solids</h2>
    <p className="mt-2 text-sm leading-relaxed">
      Force, moment, and couple; principle of transmissibility; Varignon's theorem. Resultant of force systems – concurrent and non-concurrent coplanar forces. Types of supports (Hinge, Roller) and loads (Point, UDL, UVL). Free body diagram, equilibrium equations, and support reactions.
      <br />
      <strong>Stress and Strain:</strong> Normal and shear stress, strain, Hooke’s law, Poisson’s ratio, elastic constants and their relationships. Stress-strain diagram for ductile and brittle materials, factor of safety.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-2: Basics of Thermodynamics</h2>
    <p className="mt-2 text-sm leading-relaxed">
      Introduction to microscopic and macroscopic approaches. Concept of continuum, control volume, and surfaces. Thermodynamic properties, path, process, and cycle. Thermodynamic equilibrium, quasistatic process, energy forms, work, heat, gas laws, ideal gas, and Zeroth law.
      <br />
      <strong>First Law of Thermodynamics:</strong> Joule’s experiment, internal energy, enthalpy, PMM-I.
      <br />
      <strong>Second Law of Thermodynamics:</strong> Heat engines, efficiency, heat pump, refrigerator. Kelvin-Planck and Clausius statements, PMM-II.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-3: Introduction to Fluid Mechanics</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Fluid Properties:</strong> Pressure, density, dynamic and kinematic viscosity, surface tension, vapor pressure, cavitation. Newtonian and Non-Newtonian fluids.
      <br />
      <strong>Principles and Devices:</strong> Pascal’s Law, continuity equation. Flow measurement devices: Simple manometer, U-tube manometer, Bourdon tube, Venturi meter, Pitot tube, Orifice meter.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-4: IC Engines & Electric Vehicles</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>IC Engines:</strong> Basic definitions, components, construction and working of two-stroke and four-stroke SI and CI engines, scavenging process. Comparison between 2-stroke vs 4-stroke, SI vs CI engines.
      <br />
      <strong>Electric and Hybrid Vehicles:</strong> Components of EV, batteries, chargers, drives, transmission, power devices. Advantages and disadvantages of EVs. Hybrid electric vehicles (HEV), HEV drive train components, and advantages of HV.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-5: Introduction to Mechatronics</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Mechatronic Systems:</strong> Evolution, scope, advantages, disadvantages, industrial applications. Introduction to autotronics, bionics, and avionics with their applications.
      <br />
      <strong>Sensors and Transducers:</strong> Types and characteristics of sensors and transducers.
      <br />
      <strong>Actuation Systems:</strong> Mechanical, hydraulic, and pneumatic systems.
      <br />
      <strong>Measurement & Instruments:</strong> Concept of measurement, errors, calibration. Strain (Bonded & Unbonded Strain Gauges), temperature sensors (Thermocouple, Optical Pyrometer), force (Proving Ring), torque (Prony Brake Dynamometer). Concepts of accuracy, precision, and resolution.
    </p>
  </div>
</div>
</>  );
}

export default Mechanical;