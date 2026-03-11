// import BackgroundLogo from "./background-logo";

// export default function Layout({ children }) {
//   return (
//     <div className="relative min-h-screen bg-gray-200 pt-24">
//       <BackgroundLogo />

//       <div className="border border-red-500 relative z-10 max-w-[1200px] mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-xl px-10 pt-12 py-8">
//         {children}
//       </div>
//     </div>
//   );
// }
import BackgroundLogo from "./background-logo";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-gray-200 flex justify-center items-start pt-20">
      <BackgroundLogo />

      <div className="border border-red-500 relative z-10 w-full max-w-[1200px] h-fit bg-white/70 backdrop-blur-md shadow-2xl rounded-xl p-10">
        {children}
      </div>
    </div>
  );
}
