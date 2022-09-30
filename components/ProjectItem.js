import Image from "next/image";
import Link from "next/link";

export default function ProjectItem(props) {
  const { title, desc, thumbnail, url } = props;

  return (
    <Link href={url}>
      <div className="relative flex flex-col items-center justify-center h-auto w-full p-4 cursor-pointer hover:bg-slate-700 rounded-lg hover:shadow-2xl ease-in duration-100">
        <div>
          <Image className="rounded-md" src={thumbnail}></Image>
        </div>
        <div className="text-center">
          <h1 className="text-2xl">{title}</h1>
          <p>Technologies:</p>
          <p className="italic text-xl">{desc}</p>
        </div>
      </div>
    </Link>
  );
};
