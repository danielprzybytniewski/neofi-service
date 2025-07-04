import gloss2Img from "@/assets/images/gloss-2.png";
import gloss2MobileImg from "@/assets/images/gloss-2-mobile.png";

export default function BlockchainFeatureImage() {
  return (
    <div className="flex justify-center lg:justify-start">
      <img
        src={gloss2Img}
        srcSet={`${gloss2MobileImg} 300w, ${gloss2Img} 506w`}
        sizes="(max-width: 1024px) 300px, 506px"
        alt="gloss2"
      />
    </div>
  );
}
