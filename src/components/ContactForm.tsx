"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Magnetic } from "./Motion";

type Field = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[];
  rows?: number;
};

type Props = {
  endpoint: string;
  fields: Field[];
  submitLabel: string;
  successMessage: string;
};

export function ContactForm({
  endpoint,
  fields,
  submitLabel,
  successMessage,
}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.86, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 240, damping: 16 }}
            className="neo p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -40 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.1 }}
            >
              <CheckCircle2 className="mx-auto mb-4 text-teal-bright" size={40} />
            </motion.div>
            <p className="font-display text-xl font-semibold mb-2">
              You&apos;re in.
            </p>
            <p className="text-muted">{successMessage}</p>
            <button
              type="button"
              className="btn-ghost mt-6"
              onClick={() => setStatus("idle")}
            >
              Submit another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {fields.map((field, i) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <label htmlFor={field.name} className="form-label">
                  {field.label}
                  {field.required !== false && (
                    <span className="text-teal-bright"> *</span>
                  )}
                </label>
                {field.as === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    required={field.required !== false}
                    rows={field.rows ?? 4}
                    placeholder={field.placeholder}
                    className="input-field resize-y min-h-[120px]"
                  />
                ) : field.as === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    required={field.required !== false}
                    className="input-field"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type ?? "text"}
                    required={field.required !== false}
                    placeholder={field.placeholder}
                    className="input-field"
                  />
                )}
              </motion.div>
            ))}

            {status === "error" && (
              <motion.p
                className="text-sm text-red-400"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.p>
            )}

            <Magnetic className="inline-block">
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full sm:w-auto disabled:opacity-70"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending…
                  </>
                ) : (
                  submitLabel
                )}
              </motion.button>
            </Magnetic>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
