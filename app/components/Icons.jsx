// Lightweight inline SVG icons (no dependencies).
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ name }) {
  switch (name) {
    case "plot":
      return (
        <svg {...base}>
          <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
        </svg>
      );
    case "home":
      return (
        <svg {...base}>
          <path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6" />
        </svg>
      );
    case "shop":
      return (
        <svg {...base}>
          <path d="M4 9l1-4h14l1 4M4 9h16M4 9v11h16V9M9 20v-5h6v5" />
          <path d="M4 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0 2 2 0 004 0" />
        </svg>
      );
    case "key":
    case "keys":
      return (
        <svg {...base}>
          <circle cx="8" cy="8" r="4" />
          <path d="M11 11l9 9M17 17l2-2M14 14l2-2" />
        </svg>
      );
    case "build":
      return (
        <svg {...base}>
          <path d="M3 21h18M6 21V7l6-3 6 3v14M10 11h4M10 15h4M10 7h4" />
        </svg>
      );
    case "tower":
      return (
        <svg {...base}>
          <path d="M4 21V8l5-3v3l5-3v16M14 21V11l5 2v8M7 11h0M7 14h0M7 17h0" />
        </svg>
      );
    case "renovate":
      return (
        <svg {...base}>
          <path d="M14 7l3-3 3 3-3 3M17 4l-9 9M3 21l3-9 9-3-3 9-9 3z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...base}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...base}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...base}>
          <path d="M12 21s7-6.4 7-11a7 7 0 00-14 0c0 4.6 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "menu":
      return (
        <svg {...base}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...base}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...base} width={18} height={18}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

export function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115zm6.305-6.234c-.075-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
