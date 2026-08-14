import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FormFrame } from "@/components/FormFrame";

export const metadata: Metadata = {
  title: "Perform with Us",
  description:
    "Apply to perform poetry, comedy, singing, music or storytelling at Invva Club open mics in Ahmedabad.",
};

export default function PerformPage() {
  return (
    <FormFrame kicker="Performers" title="Take the stage">
      <p className="text-muted text-lg leading-relaxed mb-10">
        Poetry, standup, singing, music, storytelling — if you have something
        to say, Invva has a mic and a room that listens. Tell us about you.
      </p>

      <ContactForm
        endpoint="/api/perform"
        submitLabel="Submit performer form"
        successMessage="We'll reach out on WhatsApp or call soon. Keep writing. Keep rehearsing."
        fields={[
          { name: "name", label: "Full name", placeholder: "Your name" },
          {
            name: "phone",
            label: "Phone / WhatsApp",
            type: "tel",
            placeholder: "10-digit number",
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "you@email.com",
            required: false,
          },
          {
            name: "artForm",
            label: "Art form",
            as: "select",
            options: [
              { value: "poetry", label: "Poetry" },
              { value: "comedy", label: "Stand-up comedy" },
              { value: "singing", label: "Singing" },
              { value: "music", label: "Music / instruments" },
              { value: "storytelling", label: "Storytelling" },
              { value: "other", label: "Other" },
            ],
          },
          {
            name: "experience",
            label: "Experience level",
            as: "select",
            options: [
              { value: "first-timer", label: "First time on stage" },
              { value: "few", label: "A few open mics" },
              { value: "regular", label: "Regular performer" },
              { value: "solo", label: "Looking for a solo show" },
            ],
          },
          {
            name: "about",
            label: "Tell us about your set",
            as: "textarea",
            placeholder: "Theme, language, duration, anything we should know…",
          },
        ]}
      />

      <p className="mt-10 text-sm text-muted">
        Prefer calling?{" "}
        <a href="tel:7002472946" className="text-teal-bright hover:underline">
          7002472946
        </a>
        {" · "}
        <Link href="/audience" className="text-teal-bright hover:underline">
          Join as audience instead
        </Link>
      </p>
    </FormFrame>
  );
}
