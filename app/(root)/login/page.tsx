import { auth } from "@/services";
import { handleSignIn } from "@/services/actions";
import { rootPaths } from "@/services/routes";
import { redirect } from "next/navigation";

async function Login() {
  const session = await auth();
  if (session?.user) redirect(rootPaths.home.path);
  return (
    <section className="h-[60vh] flex items-center justify-center">
      <form
        action={handleSignIn}
        className="flex flex-col gap-4 w-full max-w-[620px] mx-auto p-6 border border-neutral-300 rounded-2xl"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            autoComplete="current-password"
            placeholder="Enter your email password"
          />
        </div>

        <button
          name="action"
          value="email"
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-lg"
        >
          Login
        </button>
        <div className="divider text-neutral-900 after:h-[1px] before:h-[1px] after:bg-neutral-300 before:bg-neutral-300">
          OR
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            name="action"
            value="github"
            className="flex items-center justify-center gap-2 w-full bg-slate-900 p-3 rounded-lg text-white"
          >
            <span>Github</span>
          </button>
          <button
            type="submit"
            name="action"
            value="google"
            className="flex items-center justify-center gap-2 w-full border border-neutral-300 p-3 rounded-lg  text-neutral-900"
          >
            <span>Google</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
