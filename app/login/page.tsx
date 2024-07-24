import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import Image from 'next/image'

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

    return redirect("/");
  };
  

  return (
    <>
      <div
        className="hero min-h-screen w-full"
        style={{
          backgroundImage: "url(image/cover.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-2xl font-bold">
              Praw : Coffee & Bakery
            </h1>
            <div className="divider"></div>
            <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="กรุณากรอก email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="กรุณากรอกรหัสผ่าน" className="input input-bordered" required />
                  </div>
                  <div className="form-control mt-6">
                    <SubmitButton
                      formAction={signIn}
                      className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
                      pendingText="Signing In..."
                    >
                      Log In
                    </SubmitButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
