"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending, error, refetch } = authClient.useSession();

  const user = session?.user;
  const router = useRouter();

  const handelsignout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  // 1. Keep this as a base array
  const navLinks = [
    {
      label: "Browse Jobs",
      href: "/jobs",
    },
    {
      label: "Pricing",
      href: "/plans",
    },
  ];

  // 2. Fixed spelling and added leading slashes for proper routing
  const dashboardLinks = {
    seeker: "/dashboard/seeker",
    recruiter: "/dashboard/recruiter",
    admin: "/dashboard/admin",
  };

  // 3. Dynamically push dashboard safely
  if (user?.email) {
    const userRole = user?.role || "seeker";
    // Fallback to basic dashboard if role doesn't match keys perfectly
    const targetHref = dashboardLinks[userRole] || "/dashboard/seeker";

    navLinks.push({
      label: "Dashboard",
      href: targetHref,
    });
  }

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-auto max-w-11/12 mx-4 sm:mx-6 lg:mx-8">
        <div className="my-4 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-3xl font-bold">
              <span className="text-blue-500">Hire</span>
              <span className="text-orange-500">loop</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-8 ">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-white/80 pl-4">
              {user ? (
                <div className="flex gap-3">
                  <p className="text-sm font-medium text-center pt-2 text-violet-400">
                    Hi, {user.name}
                  </p>
                  <Button
                    as={Link}
                    onClick={handelsignout}
                    className="rounded-xl px-4 py-3 text-white font-medium text-violet-400 transition hover:bg-white/5"
                    radius="lg"
                  >
                    Sign out
                  </Button>
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm font-medium text-violet-400 hover:text-violet-300"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/signup"
                    className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6L18 18"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6H20M4 12H20M4 18H20"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="mb-4 rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-white/10 pt-4">
              {user ? (
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium pt-2 text-violet-400">
                    Hi, {user.name}
                  </p>
                  <Button
                    as={Link}
                    onClick={handelsignout}
                    className="rounded-xl px-4 py-3 text-white font-medium text-violet-400 transition hover:bg-white/5"
                    radius="lg"
                  >
                    Sign out
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/login"
                    className="rounded-xl px-4 py-3 text-base font-medium text-violet-400 transition hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>

                  <Button
                    as={Link}
                    href="/signup"
                    className="bg-white font-semibold text-black"
                    radius="lg"
                  >
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
