import Navbar from "@/components/navbar/Navbar";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col">
      <Navbar />
      <main className="flex-1"></main>
    </div>
  );
}
