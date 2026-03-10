import BackgroundLogo from "./background-logo";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-gray-200 flex justify-center items-start pt-20">
      {/* background */}
      <BackgroundLogo />

      {/* main content */}
      <div className="relative z-10 w-[1200px] bg-white/70 backdrop-blur-md shadow-2xl rounded-xl p-10">
        {children}
      </div>
    </div>
  );
}
