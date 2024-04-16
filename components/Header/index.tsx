import Link from "next/link";
import User from "../User";

export default async function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-full">
      <h3>My Auth App</h3>
      <User />
    </header>
  );
}
