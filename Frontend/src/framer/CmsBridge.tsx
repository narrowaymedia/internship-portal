// The Primer components read their CMS data (courses, teachers, lessons, FAQ, plans, …) from these
// hidden rows, exactly like the Framer site's "CMS Bridge" collection lists.
import rows from "./cms.json";

export function CmsBridge() {
  return (
    <div className="fr-cms" aria-hidden="true">
      {(rows as Record<string, string>[]).map((r, i) => (
        <span
          key={i}
          {...r}
          style={{ height: 1, width: 1, display: "block", overflow: "hidden", opacity: 0, pointerEvents: "none" }}
        />
      ))}
    </div>
  );
}
