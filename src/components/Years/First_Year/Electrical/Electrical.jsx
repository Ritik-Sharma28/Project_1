function Electrical() {
    return ( <div className="p-6 space-y-6 bg-gray-50 text-gray-800">
  <div className="text-center">
    <h6 className="text-3xl font-extrabold text-blue-700 uppercase">Basic Electrical Engineering</h6>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-1: DC Circuit Analysis</h2>
    <p className="mt-2 text-sm leading-relaxed">
      Types of elements and networks. Kirchhoff’s laws, ideal and practical voltage/current sources. Mesh and Nodal analysis, source transformation, star-delta transformation.
      <br />
      <strong>Theorems:</strong> Superposition theorem, Thevenin’s theorem, Norton’s theorem, Maximum power transfer theorem (numerical based on independent and ideal sources only; no source transformation for theorems).
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-2: Single-Phase AC Circuit Analysis</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Sinusoidal Waveforms:</strong> Representation, average and RMS values, form factor, peak factor.
      <br />
      <strong>AC Circuit Analysis:</strong> R-L-C combinations (series and parallel), apparent, active, and reactive power, power factor.
      <br />
      <strong>Resonance:</strong> Series and parallel resonance, bandwidth, and quality factor.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-3: Three-Phase AC Circuits & Transformers</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Three-Phase Circuits:</strong> Balanced circuits, star and delta connection voltage/current relationships with numerical.
      <br />
      <strong>Magnetic Circuits:</strong> MMF, flux, flux density, reluctance, permeability, field strength and units.
      <br />
      <strong>Transformers:</strong> Working principle, EMF equation, ideal and practical transformers, equivalent circuit, losses, and efficiency (with numerical problems).
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-4: Electrical Machines</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>DC Machines:</strong> Principle and construction, EMF equation, types of DC generators (self-excited, separately excited, shunt, series), principle and torque equation of DC motors, series and shunt motors (with simple numericals).
      <br />
      <strong>Three-Phase Induction Motor:</strong> Construction, principle, and applications.
      <br />
      <strong>Three-Phase Alternator:</strong> Working principle.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-5: Measuring Instruments & Installations</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Measuring Instruments:</strong> Types, construction, and working of PMMC, MI, and Dynamometer type instruments.
      <br />
      <strong>Electrical Installations:</strong> Introduction to SFU, MCB, ELCB, MCCB, ACB. Types of wires and cables. Earthing (types), and safety precautions to avoid electrical shock.
    </p>
  </div>
</div>
 );
}

export default Electrical;