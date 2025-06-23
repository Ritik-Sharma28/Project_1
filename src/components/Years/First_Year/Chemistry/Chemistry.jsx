import { useNavigate } from "react-router";
function Chemistry() {
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
    <h6 className="text-3xl font-extrabold text-blue-700 uppercase">Chemistry</h6>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-1: Solid State Chemistry & Advanced Materials</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Solid State Chemistry:</strong> Introduction, Crystal imperfections, Stoichiometric and Nonstoichiometric defects.
      <br />
      <strong>Liquid Crystals:</strong> Introduction, types and applications; industrially important materials used as liquid crystals.
      <br />
      <strong>Graphite and Fullerene:</strong> Introduction, structure, and applications.
      <br />
      <strong>Nanomaterials:</strong> Introduction, preparation methods, characteristics and applications, Carbon Nanotubes (CNT).
      <br />
      <strong>Green Chemistry:</strong> Introduction, 12 principles, importance of green synthesis, green chemicals. Green vs Conventional synthesis of Adipic acid and Paracetamol. Environmental impact of green chemistry on society.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-2: Spectroscopy and Stereochemistry</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Spectroscopic Techniques:</strong> Elementary ideas and simple applications of UV, IR and NMR spectroscopy with numerical problems.
      <br />
      <strong>Stereochemistry:</strong> Optical isomerism in compounds without chiral carbon, Geometrical isomerism, Chiral drugs.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-3: Named Reactions, Catalysis & Corrosion</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Named Reactions:</strong> Beckmann, Diels–Alder, Cannizzaro, Aldol Condensation, Reimer–Tiemann, Hofmann, and Friedel–Craft reactions—mechanisms and industrial applications.
      <br />
      <strong>Catalysis:</strong> Introduction, characteristics and types of catalysts, Theories of catalysis, Positive and negative catalysts, Catalytic promoters/inhibitors, Autocatalyst, Enzyme and industrial catalysts.
      <br />
      <strong>Corrosion:</strong> Introduction, types, causes, prevention/control; corrosion issues in industries like Power generation, Chemical processing, Oil & Gas, and Pulp & Paper.
      <br />
      <strong>Chemistry of Engineering Materials:</strong> Cement—constituents, manufacturing, hardening/setting, deterioration; Plaster of Paris (POP).
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-4: Water Technology & Fuels</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Water Technology:</strong> Sources and impurities of water, hardness, boiler troubles, water softening (Lime-Soda, Zeolite, Ion Exchange, Reverse Osmosis), determination of hardness and alkalinity with numerical problems.
      <br />
      <strong>Fuels and Combustion:</strong> Definitions, classifications, characteristics of good fuel, calorific values (gross and net), determination via Bomb Calorimeter, Dulong’s formula for theoretical value, ranking and analysis of coal (Proximate and Ultimate), Chemistry of biogas production and its environmental impact.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-5: Materials Chemistry</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Polymers:</strong> Classification, polymerization processes, thermosetting vs thermoplastic, polymer blends and composites, conducting and biodegradable polymers. Preparation, properties and applications of Teflon, Lucite, Bakelite, Kevlar, Dacron, Thiokol, Nylon, Buna-N, and Buna-S. Environmental impact and specialty polymers.
      <br />
      <strong>Organometallic Compounds:</strong> General methods of preparation and applications of organometallic compounds (CH₃MgBr and LiAlH₄).
    </p>
  </div>
</div>

    </> );
}

export default Chemistry;