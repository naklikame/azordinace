import { podminky } from "@/content/pravni";
import { PravniStranka, metadataDokumentu } from "@/components/pravni-stranka";

export const metadata = metadataDokumentu(podminky);

export default function Stranka() {
  return <PravniStranka dokument={podminky} />;
}
