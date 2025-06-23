import { useNavigate } from "react-router";
function Electronics() {
  const navigate = useNavigate();
    return ( <>
    <div className="p-6 space-y-6 bg-gray-50 text-gray-800">
   <div className="flex items-center gap-10 flex-wrap">
     <button
        className=" px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
    <h6 className="text-3xl font-extrabold text-blue-700 uppercase">Electronics & Communication</h6>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-1: Semiconductor Diodes & Applications</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Semiconductor Diodes:</strong> Ideal and practical diodes, V-I characteristics, diode equivalent circuits. Zener diode breakdown mechanisms (Zener and Avalanche).
      <br />
      <strong>Diode Applications:</strong> Half and full wave rectification, clippers, clampers, Zener diode as shunt regulator, voltage-multiplier circuits.
      <br />
      <strong>Special Purpose Diodes:</strong> Light-emitting diodes (LEDs), photo diodes, varactor diodes, tunnel diodes.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-2: Bipolar and Field Effect Transistors</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Bipolar Junction Transistors (BJTs):</strong> Construction, characteristics, operation, amplification action. Configurations: Common Base, Common Emitter, Common Collector.
      <br />
      <strong>Field Effect Transistors (FETs):</strong> JFET construction and characteristics, transfer characteristics. MOSFET (depletion and enhancement type), transfer characteristics.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-3: Operational Amplifiers</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Op-Amps:</strong> Introduction and basic structure of operational amplifiers. Practical op-amp circuits including inverting amplifier, non-inverting amplifier, unit follower, summing amplifier, integrator, and differentiator.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-4: Digital Electronics</h2>
    <p className="mt-2 text-sm leading-relaxed">
      Number systems and representations, code conversions, binary arithmetic. Introduction to basic and universal gates. Boolean algebra and simplification of Boolean expressions. K-Map minimization techniques.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-5: Communication Engineering Fundamentals</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Signal and System Basics:</strong> Basics of signal representation and analysis, electromagnetic spectrum, elements of a communication system.
      <br />
      <strong>Modulation:</strong> Need for modulation, amplitude modulation and demodulation techniques.
      <br />
      <strong>Wireless Communication:</strong> Introduction and overview of wireless and cellular communication. Generations and standards in cellular systems.
    </p>
  </div>
</div>

    </> );
}

export default Electronics;