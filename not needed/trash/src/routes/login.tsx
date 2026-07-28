import { createFileRoute, Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — PMU Best Practices Seminar" },
      { name: "description", content: "Sign in to access your PMU Best Practices Seminar account." },
      { property: "og:title", content: "Login — PMU Best Practices Seminar" },
      { property: "og:description", content: "Sign in to access your PMU Best Practices Seminar account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen bg-cream grid place-items-center px-6 py-24">
      <div className="w-full max-w-md rounded-2xl bg-white border border-border p-8 md:p-10 shadow-sm">
        <div className="h-12 w-12 rounded-full bg-navy grid place-items-center">
          <LogIn size={20} className="text-gold" />
        </div>
        <h1 className="mt-5 font-serif text-2xl text-navy">Sign in</h1>
        <p className="mt-1 text-sm text-navy/70">
          Access your seminar account and manage your registration.
        </p>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-navy/60 font-semibold">
              Email
            </span>
            <input
              type="email"
              className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-navy/60 font-semibold">
              Password
            </span>
            <input
              type="password"
              className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-deep transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-sm text-navy/70">
          Not registered yet?{" "}
          <Link to="/" hash="contact" className="text-gold font-semibold hover:underline">
            Register for the seminar
          </Link>
        </p>
      </div>
    </div>
  );
}
