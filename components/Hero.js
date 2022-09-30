export default function Hero() {
  const st = "I build software";

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="text-white text-4xl mt-[30%] sm:mt-[10%]">
        <h1>Hello, I&apos;m Kris</h1>
        <h2>{st}</h2>
      </div>
    </div>
  );
}
