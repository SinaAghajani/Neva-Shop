"use client";

import { useState } from "react";
import { Check, Mail, Send } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-(--primary) px-6 py-12 sm:px-10 sm:py-14 lg:px-16">
          <div className="absolute -left-20 -top-20 size-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-28 right-0 size-80 rounded-full bg-black/5" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Mail className="size-6" />
              </div>

              <h2 className="mt-5 text-2xl font-black text-white sm:text-3xl">
                از انتخاب‌های جدید باخبر شوید
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-white/70">
                برای دریافت جدیدترین محصولات، پیشنهادهای ویژه و اخبار Neva ایمیل
                خود را ثبت کنید.
              </p>
            </div>

            <div>
              {submitted ? (
                <div className="flex min-h-14 items-center gap-3 rounded-2xl bg-white px-5 text-sm font-bold text-(--primary)">
                  <span className="flex size-8 items-center justify-center rounded-full bg-(--primary-light)">
                    <Check className="size-4" />
                  </span>
                  ایمیل شما با موفقیت ثبت شد.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <Input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="ایمیل شما"
                    aria-label="ایمیل شما"
                    required
                    className="h-14 border-white/10 bg-white text-(--foreground)"
                    endIcon={<Mail className="size-5" />}
                    containerClassName="flex-1"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="h-14 shrink-0 bg-white! text-(--primary)! hover:bg-(--secondary-light)! hover:text-(--primary-dark)!"
                  >
                    عضویت
                    <Send className="size-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
