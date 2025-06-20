import glossImg from "@/assets/images/gloss.png";
import glossMobileImg from "@/assets/images/gloss-mobile.png";

export default function HeroImage() {
  return (
    <div className="mt-8 flex justify-center lg:mt-0 lg:justify-end">
      <img
        src={glossImg}
        srcSet={`${glossMobileImg} 300w, ${glossImg} 512w`}
        sizes="(max-width: 1024px) 300px, 512px"
        alt="gloss"
      />
    </div>
  );
}
