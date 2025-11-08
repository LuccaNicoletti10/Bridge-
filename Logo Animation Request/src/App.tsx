import logo from "figma:asset/272e16d8150231a73b099bb0b62f847828d663c6.png";

export default function App() {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="relative">
        <img
          src={logo}
          alt="Logo"
          className="w-96 h-96 object-contain"
        />
      </div>
    </div>
  );
}