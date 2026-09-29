import { ochranaUdaju } from "@/content/pravni";
import { PravniStranka, metadataDokumentu } from "@/components/pravni-stranka";

export const metadata = metadataDokumentu(ochranaUdaju);

export default function Stranka() {
  return <PravniStranka dokument={ochranaUdaju} />;
}
