import { AiOutlineGithub } from "react-icons/ai";

export default function About() {
  return (
    <div className="w-full sm:max-w-[1000px] m-auto text-white text-2xl flex flex-col gap-8">
        
      <div className="text-justify tracking-tighter m-4">
        <h1 className="text-5xl font-semibold mb-4">About</h1>
        <p>
          Currently on the last year of a Computer Science degree at a UK
          university. I will be graduating in 2023 and hope to do my
          Master&apos;s soon after.
          <br />
          Part time I work as a programing tutor for an online teaching start
          up.
        </p>
      </div>

      <div className="flex justify-center items-center flex-col text-center">
        <AiOutlineGithub size={60} />
        <p>GitHub</p>
      </div>
    </div>
  );
}
