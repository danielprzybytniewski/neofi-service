import RegisterButton from "@/components/shared/RegisterButton";
import { Button } from "@/components/ui/button";

type NavbarButtonsProps = {
  handleClose?: () => void;
};

export default function NavbarButtons({ handleClose }: NavbarButtonsProps) {
  return (
    <>
      <Button
        variant="ghost"
        className="cursor-pointer px-6 py-2 text-base font-normal text-white hover:bg-transparent hover:text-gray-400 active:text-gray-400"
        onClick={handleClose}
      >
        Log In
      </Button>
      <RegisterButton size="sm" onClick={handleClose}>
        Try For Free
      </RegisterButton>
    </>
  );
}
