import Typography from "@/components/shared/Typography";

type FooterCreditLinkProps = {
  label: string;
  href: string;
  author: string;
};

export default function FooterCreditLink({
  label,
  href,
  author,
}: FooterCreditLinkProps) {
  return (
    <Typography variant="smallText" className="text-foreground">
      <span className="mr-1">{label}</span>
      <a
        href={href}
        className="font-bold underline transition-colors duration-200 hover:text-gray-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {author}
      </a>
    </Typography>
  );
}
