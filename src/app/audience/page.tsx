import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FormFrame } from "@/components/FormFrame";

export const metadata: Metadata = {
  title: "Join as Audience",
  description:
    "Be part of Invva Club's supportive open mic audience in Ahmedabad. Best weekend plan in the city.",
};

export default function AudiencePage() {
  return (
    <FormFrame kicker="Audience" title="Best thing you can do this weekend">
      <p className="text-muted text-lg leading-relaxed mb-10">
        Supportive crowds. New faces. Studio nights that feel like family.
        Drop your details and we&apos;ll keep you posted on the next Invva
        evening.
      </p>

      <ContactForm
        endpoint="/api/audience"
        submitLabel="Join the audience list"
        successMessage="You're on the list. Watch Instagram @invvaclub for the next date — or wait for our ping."
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
            name: "cityArea",
            label: "Area in Ahmedabad",
            placeholder: "e.g. Prahlad Nagar, SG Highway…",
            required: false,
          },
          {
            name: "interest",
            label: "What draws you in?",
            as: "select",
            options: [
              { value: "poetry", label: "Poetry nights" },
              { value: "comedy", label: "Comedy" },
              { value: "music", label: "Music & singing" },
              { value: "stories", label: "Storytelling" },
              { value: "all", label: "All of it" },
              { value: "kids", label: "Kids events" },
            ],
          },
          {
            name: "note",
            label: "Anything else?",
            as: "textarea",
            required: false,
            placeholder: "Friends group, accessibility needs, questions…",
            rows: 3,
          },
        ]}
      />

      <p className="mt-10 text-sm text-muted">
        Want the mic instead?{" "}
        <Link href="/perform" className="text-teal-bright hover:underline">
          Apply to perform
        </Link>
      </p>
    </FormFrame>
  );
}
