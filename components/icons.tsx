import type { SVGProps } from "react";
import type { Sluzba } from "@/content/klinika";

type IconProps = SVGProps<SVGSVGElement>;

/** Sdílené výchozí atributy — tahy kreslíme aktuální barvou textu. */
function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ZubIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 5.2c-1.6-1.3-3.2-1.9-4.7-1.6C5.2 4 4 5.9 4 8.6c0 2.3.5 4 1.1 6.2.5 1.8.8 3.4 1.1 4.6.2 1 .8 1.6 1.5 1.6.8 0 1.3-.6 1.5-1.7l.6-3.2c.2-1 .7-1.5 1.4-1.5h1.6c.7 0 1.2.5 1.4 1.5l.6 3.2c.2 1.1.7 1.7 1.5 1.7.7 0 1.3-.6 1.5-1.6.3-1.2.6-2.8 1.1-4.6.6-2.2 1.1-3.9 1.1-6.2 0-2.7-1.2-4.6-3.3-5-1.5-.3-3.1.3-4.7 1.6Z" />
    </Svg>
  );
}

export function StitIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.8 4.8 5.6v5.7c0 4.4 3 8.4 7.2 9.9 4.2-1.5 7.2-5.5 7.2-9.9V5.6L12 2.8Z" />
      <path d="m9.2 11.8 2 2 3.6-3.7" />
    </Svg>
  );
}

export function JiskraIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M18.5 16.5 19 18l1.5.5-1.5.5-.5 1.5-.5-1.5L16.5 19l1.5-.5.5-1.5Z" />
    </Svg>
  );
}

export function KanalekIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.6c-2.6-1.4-5.1-1-6.3.9-1.3 2 .1 5.6.9 8.4.6 2 .9 3.7 1.2 5 .2 1 .8 1.6 1.5 1.6.8 0 1.2-.7 1.4-1.7l.5-3" />
      <path d="M12 3.6c2.6-1.4 5.1-1 6.3.9 1.3 2-.1 5.6-.9 8.4-.6 2-.9 3.7-1.2 5-.2 1-.8 1.6-1.5 1.6-.8 0-1.2-.7-1.4-1.7l-.5-3" />
      <path d="M10.6 8.2c.5 2.6.7 5.2.6 7.8" strokeDasharray="2 1.6" />
      <path d="M13.4 8.2c-.5 2.6-.7 5.2-.6 7.8" strokeDasharray="2 1.6" />
    </Svg>
  );
}

export function ChirurgieIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 20.2 14.6 9.6l2.6-5.4 2.6 2.6-5.4 2.6L20.2 20" />
      <path d="M9.6 14.6 4.5 19.7" />
      <path d="M14.4 14.7 20 20.3" />
    </Svg>
  );
}

export function RovnatkaIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 9.5h18" />
      <path d="M3 14.5h18" />
      <rect x="6" y="7.6" width="3.6" height="8.8" rx="1.2" />
      <rect x="14.4" y="7.6" width="3.6" height="8.8" rx="1.2" />
    </Svg>
  );
}

export function ImplantatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8.5 3.5h7l-.7 3.4H9.2L8.5 3.5Z" />
      <path d="M12 6.9v13.6" />
      <path d="M9.6 10h4.8" />
      <path d="M9.9 13h4.2" />
      <path d="M10.3 16h3.4" />
    </Svg>
  );
}

export function DiteIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10.2h.01M15 10.2h.01" strokeWidth={2.2} />
      <path d="M8.6 14.4c.9 1.2 2 1.8 3.4 1.8s2.5-.6 3.4-1.8" />
    </Svg>
  );
}

const ikony = {
  zub: ZubIcon,
  stit: StitIcon,
  jiskra: JiskraIcon,
  kanalek: KanalekIcon,
  implantat: ImplantatIcon,
  chirurgie: ChirurgieIcon,
  dite: DiteIcon,
} satisfies Record<Sluzba["ikona"], (props: IconProps) => React.ReactElement>;

export function SluzbaIcon({
  ikona,
  ...props
}: IconProps & { ikona: Sluzba["ikona"] }) {
  const Komponenta = ikony[ikona];
  return <Komponenta {...props} />;
}

export function TelefonIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6.2 3.5h3l1.5 3.7-1.9 1.4a10.5 10.5 0 0 0 4.6 4.6l1.4-1.9 3.7 1.5v3a1.7 1.7 0 0 1-1.9 1.7C10.2 16.8 7.2 13.8 4.5 5.4A1.7 1.7 0 0 1 6.2 3.5Z" />
    </Svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="m3.8 6.7 7.3 5.2c.5.4 1.3.4 1.8 0l7.3-5.2" />
    </Svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21c4-4.4 6-7.7 6-10a6 6 0 1 0-12 0c0 2.3 2 5.6 6 10Z" />
      <circle cx="12" cy="11" r="2.3" />
    </Svg>
  );
}

export function HodinyIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.2V12l3.2 1.9" />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Svg>
  );
}

export function SipkaIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </Svg>
  );
}

export function HvezdaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 3.2 2.6 5.6 6 .8-4.4 4.2 1.1 6.1L12 17l-5.3 2.9 1.1-6.1L3.4 9.6l6-.8L12 3.2Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function ZavritIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Svg>
  );
}
