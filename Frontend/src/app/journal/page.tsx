import Page from "@/framer/pages/journal";
import { metaFor } from "@/framer/meta";

export const metadata = metaFor("/journal");

export default function Route() {
  return <Page />;
}
