import Typography from "@/components/shared/Typography";
import type { FooterLink } from "@/constants/navigation";

export default function FooterLinkColumn({
  label,
  links,
}: {
  label: string;
  links: FooterLink[];
}) {
  return (
    <div className="flex flex-col items-center gap-3 lg:items-start lg:gap-6">
      <Typography variant="subtitle" className="text-foreground text-xl">
        {label}
      </Typography>
      <ul className="flex list-none flex-col items-center gap-2 leading-none lg:items-start">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-primary-foreground text-sm font-normal transition-colors duration-200 hover:text-gray-500 focus:text-gray-500 active:text-gray-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
