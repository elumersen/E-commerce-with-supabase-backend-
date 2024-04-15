import Link from "next/link";
import User from "../User";

export default async function Header() {
  return (
    <div>
      {/* <Link
        href="/"
        className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4"
      >
        Home
      </Link> */}
      <h3>My Auth App</h3>
      <User />
    </div>
  );
}
