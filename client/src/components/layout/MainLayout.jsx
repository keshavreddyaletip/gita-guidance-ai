import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto p-8">
          {children}
        </div>
      </div>
    </>
  );
}