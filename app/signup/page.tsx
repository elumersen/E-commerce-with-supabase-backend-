import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const supabase = createClient();

    if (password !== confirmPassword) {
      return redirect("/signup?message=Passwords do not match");
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/signup?message=Could not authenticate user");
    }

    return redirect(
      `/confirm?message=Check email(${email}) to continue sign in process`
    );
  };

  return (
    <div className="flex flex-col w-full px-8 h-screen items-center justify-center gap-2 bg-gradient-to-r from-slate-300 to-slate-500">
      <video className="w-screen h-screen object-cover fixed left-0 top-0 right-0 bottom-0 z-1" autoPlay loop muted poster="/thumbnail.jpeg">
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <form
        className="animate-in border border-white flex flex-col w-full justify-center gap-2 text-foreground bg-transparent backdrop-blur-2xl sm:max-w-80 h-auto p-10 rounded-md shadow-md"
        action={signUp}
      >
        <label className="text-md text-white" htmlFor="email">
          Email
        </label>
        <input
          className="bg-white/40 rounded-md px-4 py-2 border mb-6 placeholder:text-white focus:outline-none"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md text-white" htmlFor="password">
          Password
        </label>
        <input
          className="bg-white/40 rounded-md px-4 py-2 border mb-6 placeholder:text-white focus:outline-none"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <label className="text-md text-white" htmlFor="password">
          Confirm Password
        </label>
        <input
          className="bg-white/40 rounded-md px-4 py-2 border mb-6 placeholder:text-white focus:outline-none"
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          required
        />
        <button className="border border-white text-white bg-transparent rounded-md px-4 py-2 text-foreground mb-2">
          Sign up
        </button>

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>

  );
}
