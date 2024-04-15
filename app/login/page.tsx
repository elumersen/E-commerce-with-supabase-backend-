import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="flex flex-col w-full px-8 h-screen items-center justify-center gap-2 bg-gradient-to-r from-slate-300 to-slate-500">
      <video className="w-screen h-screen object-cover fixed left-0 top-0 right-0 bottom-0 z-1" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <form className="animate-in border border-white flex flex-col w-full justify-center gap-2 text-foreground bg-transparent backdrop-blur-2xl sm:max-w-80 h-auto p-10 rounded-md shadow-md">
        <label className="text-md text-white" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md bg-white/40 px-4 py-2 border mb-6 placeholder:text-white"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md text-white" htmlFor="password">
          Password
        </label>
        <input
          className="bg-white/40 rounded-md px-4 py-2 border mb-6 placeholder:text-white"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={signIn}
          className="border border-white text-white bg-transparent rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      <p className='text-gray-200 text-sm'>
					Don't have an Account?{' '}
					<Link href='/signup' className='text-blue-300 underline underline-offset-4'>
						Sign Up
					</Link>
				</p>
      </form>
    </div>
  );
}
