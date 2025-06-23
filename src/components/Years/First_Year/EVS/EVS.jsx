import { useNavigate } from "react-router";
function EVS() {
  const navigate = useNavigate();
    return ( <div className="p-6 space-y-6 bg-gray-50 text-gray-800">
  <div className="flex items-center gap-10 flex-wrap">
     <button
        className=" px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
    <h6 className="text-3xl font-extrabold text-blue-700 uppercase">Environmental Science</h6>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-1: Environment and Ecosystem</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Environment:</strong> Definition, types, components, segments, scope and importance. Need for public awareness.
      <br />
      <strong>Ecosystem:</strong> Definition, types, structure, food chain, food web, ecological pyramid, balanced ecosystem.
      <br />
      <strong>Human Activities:</strong> Impact of food, shelter, housing, agriculture, industry, mining, transportation, economic and social security on environment. Introduction to Environmental Impact Assessment (EIA) and Sustainable Development.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-2: Natural Resources</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Resources:</strong> Introduction and classification.
      <br />
      <strong>Water Resources:</strong> Availability, sources, quality, waterborne and induced diseases, fluoride and arsenic issues in drinking water.
      <br />
      <strong>Mineral Resources:</strong> Biogeochemical cycles – carbon, nitrogen, and sulfur.
      <br />
      <strong>Energy Resources:</strong> Conventional and non-conventional energy sources.
      <br />
      <strong>Forest Resources:</strong> Availability and depletion of forests, environmental impact of forest degradation on society.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-3: Pollution and Public Health</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Pollution:</strong> Water, air, soil, noise pollution and their effects.
      <br />
      <strong>Public Health:</strong> Environmental impacts on public health. Basics of solid waste management.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-4: Current Environmental Issues</h2>
    <p className="mt-2 text-sm leading-relaxed">
      Global warming, greenhouse effect, climate change, acid rain, ozone layer formation and depletion, population growth, automobile pollution, and the burning of paddy straw.
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-5: Environmental Protection</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Environmental Protection:</strong> Environmental Protection Act (1986), roles and initiatives by NGOs.
      <br />
      <strong>Human & Environment:</strong> Population growth, environmental education, and women education for sustainable development.
    </p>
  </div>
</div>
);
}

export default EVS;