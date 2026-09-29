import { cookies } from "@/content/pravni";
import { PravniStranka, metadataDokumentu } from "@/components/pravni-stranka";

export const metadata = metadataDokumentu(cookies);

export default function Stranka() {
  return <PravniStranka dokument={cookies} />;
}
