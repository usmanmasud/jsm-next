import Image from "next/image";
import { Hello } from "../components/hello";

export default function Home() {
  console.log("Who are my");
  return (
    <>
      <h1 className="text-red-500">Wwlcome to nexxt js</h1>
      <Hello />
    </>
  );
}
