import Page from "@/framer/pages/about";
import { metaFor } from "@/framer/meta";

export const metadata = metaFor("/about");

export default function Route() {
  return <Page />;
}
