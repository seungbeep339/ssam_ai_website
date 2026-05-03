import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Ssam.ai",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="border-b border-gray-100 px-6 h-16 flex items-center">
        <Link href="/">
          <Image src="/ssam_ai_logo_word.png" alt="Ssam.ai" width={120} height={34} className="h-8 w-auto" />
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: May 2025</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>
              When you join our waitlist, we collect your email address and optionally your school
              or university name. We do not collect any other personal information unless you
              voluntarily provide it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Notify you when early access to Ssam.ai is available</li>
              <li>Send product updates and announcements relevant to the waitlist</li>
              <li>Understand which schools and universities have the most interest in Ssam.ai</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Data Storage</h2>
            <p>
              Your information is stored securely using Supabase, a cloud database provider.
              We take reasonable measures to protect your data from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. We Do Not Sell Your Data</h2>
            <p>
              We will never sell, trade, or rent your personal information to third parties.
              Your email is only used to communicate with you about Ssam.ai.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Unsubscribe</h2>
            <p>
              You can remove yourself from the waitlist at any time by emailing us at{" "}
              <a href="mailto:hello@ssam.ai" className="text-purple-600 hover:underline">
                hello@ssam.ai
              </a>
              . We will delete your information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@ssam.ai" className="text-purple-600 hover:underline">
                hello@ssam.ai
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-sm text-purple-600 hover:underline">
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
