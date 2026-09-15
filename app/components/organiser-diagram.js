export default function OrganiserDiagram({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 320"
      role="img"
      aria-labelledby="organiser-diagram-title"
      className={className}
    >
      <title id="organiser-diagram-title">
        Concept diagram of the Velqen adjustable 2-tier under-sink organiser
      </title>

      <rect x="1" y="1" width="398" height="318" rx="16" fill="#FFFFFF" stroke="#E4DFD1" />

      {/* cabinet outline */}
      <rect x="40" y="30" width="320" height="250" fill="none" stroke="#C7C1AF" strokeWidth="2" strokeDasharray="6 6" />

      {/* U-bend */}
      <path
        d="M170 30 v50 a30 30 0 0 0 60 0 v-50"
        fill="none"
        stroke="#9AA3B2"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* central frame */}
      <rect x="75" y="150" width="250" height="14" fill="#16233D" rx="3" />
      <rect x="75" y="150" width="14" height="110" fill="#16233D" rx="3" />
      <rect x="311" y="150" width="14" height="110" fill="#16233D" rx="3" />

      {/* upper tray (pulled out slightly) */}
      <rect x="60" y="170" width="150" height="28" rx="4" fill="#C1712F" />
      <rect x="60" y="170" width="150" height="6" rx="2" fill="#DA8B48" />

      {/* lower tray, taller, pulled out further */}
      <rect x="60" y="215" width="180" height="40" rx="4" fill="#16233D" />
      <rect x="60" y="215" width="180" height="6" rx="2" fill="#2A3B5F" />

      {/* anti-slip feet */}
      <circle cx="89" cy="266" r="5" fill="#5B6472" />
      <circle cx="318" cy="266" r="5" fill="#5B6472" />

      {/* labels */}
      <text x="200" y="20" textAnchor="middle" fontSize="12" fill="#5B6472">Cabinet width (adjustable 360–540mm)</text>
      <text x="235" y="65" fontSize="11" fill="#5B6472">Plumbing clearance</text>
      <line x1="232" y1="60" x2="215" y2="50" stroke="#5B6472" strokeWidth="1" />
      <text x="8" y="188" fontSize="11" fill="#5B6472">Upper tray</text>
      <line x1="8" y1="194" x2="58" y2="184" stroke="#5B6472" strokeWidth="1" />
      <text x="8" y="238" fontSize="11" fill="#5B6472">Lower tray</text>
      <line x1="8" y1="244" x2="58" y2="234" stroke="#5B6472" strokeWidth="1" />
      <text x="200" y="300" textAnchor="middle" fontSize="11" fill="#9AA3B2">Concept illustration — not final product photography</text>
    </svg>
  );
}
