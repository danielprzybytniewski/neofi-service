import playImg from "@/assets/images/play.svg";
import RegisterButton from "@/components/shared/RegisterButton";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-5 lg:w-auto lg:flex-row">
      <RegisterButton />
      <div className="bg-gradient-1 rounded-[40px] p-px">
        <RegisterButton
          variant="outline"
          className="bg-background rounded-[39px] border-0"
        >
          <img src={playImg} alt="play" className="h-3.5 w-3 flex-shrink-0" />
          Watch video
        </RegisterButton>
      </div>
    </div>
  );
}
