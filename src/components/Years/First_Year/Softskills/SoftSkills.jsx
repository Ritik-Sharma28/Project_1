import { useNavigate } from "react-router";
function SoftSkills() {
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
    <h6 className="text-3xl font-extrabold text-blue-700 uppercase">Communication Skills</h6>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-1: Workplace Communication</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Professional Vocabulary:</strong> Antonyms, synonyms, homophones, homonyms.
      <br />
      <strong>Business Correspondence:</strong> Letter, agenda, notices, minutes of meeting, CV and résumé, group discussion (G.D.), and interview skills.
      <br />
      <strong>Assignments/Activities:</strong>
      <ul className="list-disc list-inside pl-4">
        <li>Group discussion using professional vocabulary</li>
        <li>Resume design task</li>
        <li>Attend and write minutes of a meeting</li>
      </ul>
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-2: Public Speaking & Presentation Skills</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Oral and Non-verbal Communication:</strong> Introduction, modes of speech delivery.
      <br />
      <strong>Prerequisites of Speaking:</strong> Confidence, clarity, fluency.
      <br />
      <strong>Pitching an Idea:</strong> Process, preparation, and structure.
      <br />
      <strong>Assignments/Activities:</strong>
      <ul className="list-disc list-inside pl-4">
        <li>Group or individual presentations on assigned topics</li>
      </ul>
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-3: Critical Thinking & Emotional Intelligence</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Critical Thinking:</strong> Analysis, interpretation, inference, explanation, self-regulation, open-mindedness, problem-solving.
      <br />
      <strong>Emotional Intelligence:</strong> Self-awareness, self-regulation, empathy, motivation, social skills.
      <br />
      <strong>Assignments/Activities:</strong>
      <ul className="list-disc list-inside pl-4">
        <li>Write a critical assessment/review of case-based studies</li>
      </ul>
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-4: Leadership Skills</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Qualities of Leadership:</strong> Integrity, capability, passion.
      <br />
      <strong>Leadership Communication:</strong> Aligning employees with strategic goals, building trust and transparency, promoting collaboration and workplace culture, listening and responding.
      <br />
      <strong>Assignments/Activities:</strong>
      <ul className="list-disc list-inside pl-4">
        <li>Conduct a podcast or interview with a personality the student admires</li>
      </ul>
    </p>
  </div>

  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-indigo-600">Unit-5: Mental Health & Stress Management</h2>
    <p className="mt-2 text-sm leading-relaxed">
      <strong>Mental Health at Workplace:</strong> Definition and contributing factors.
      <br />
      <strong>Stress Management Techniques:</strong> Application of the 4 A’s – Avoid, Alter, Access, Adapt.
      <br />
      <strong>Value-based Reading:</strong> A select reading on mental well-being.
      <br />
      <strong>Assignments/Activities:</strong>
      <ul className="list-disc list-inside pl-4">
        <li>Poster presentation on assigned mental health/stress-related topics</li>
      </ul>
    </p>
  </div>
</div>
</> );
}

export default SoftSkills;