import logoImg from "@/assets/images/logo.svg";
import FooterLinkColumn from "@/components/footer/FooterLinkColumn";
import {
  footerHelpLinks,
  footerQuickLinks,
  footerSocialMediaLinks,
} from "@/constants/navigation";

export default function FooterLeft() {
  return (
    <div className="flex w-full max-w-[690px] flex-col lg:flex-row lg:items-start">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-13 xl:gap-20">
          <div className="flex flex-shrink-0 justify-center lg:justify-start">
            <a href="#hero">
              <img src={logoImg} alt="NeoFi Logo" />
            </a>
          </div>
          <FooterLinkColumn label="Quick links" links={footerQuickLinks} />
          <FooterLinkColumn label="Help" links={footerHelpLinks} />
          <FooterLinkColumn
            label="Social Media"
            links={footerSocialMediaLinks}
          />
        </div>
      </div>
    </div>
  );
}
