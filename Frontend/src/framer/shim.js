// Minimal stand-in for the "framer" runtime the Primer code components import.
// The components only use property-control metadata (ignored here) and render-target checks.
export function addPropertyControls() {}
export const ControlType = new Proxy({}, { get: (_t, k) => String(k) });
export const RenderTarget = {
  canvas: "CANVAS",
  export: "EXPORT",
  thumbnail: "THUMBNAIL",
  preview: "PREVIEW",
  current: () => "PREVIEW",
  hasRestrictions: () => false,
};
export function useIsStaticRenderer() {
  return false;
}
