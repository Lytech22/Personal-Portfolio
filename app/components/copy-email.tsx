"use client";

import { useEffect, useState } from "react";

const email = "leulyitbarek4149@gmail.com";

type CopyStatus = "idle" | "copied" | "failed";

function copyWithSelection(value: string) {
  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  field.style.pointerEvents = "none";
  document.body.appendChild(field);
  field.select();

  try {
    return document.execCommand("copy");
  } finally {
    field.remove();
  }
}

export function CopyEmail() {
  const [status, setStatus] = useState<CopyStatus>("idle");

  useEffect(() => {
    if (status === "idle") return;

    const timeout = window.setTimeout(() => setStatus("idle"), 2200);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else if (!copyWithSelection(email)) {
        throw new Error("Clipboard access is unavailable");
      }

      setStatus("copied");
    } catch {
      try {
        setStatus(copyWithSelection(email) ? "copied" : "failed");
      } catch {
        setStatus("failed");
      }
    }
  }

  const label = status === "copied" ? "Email copied" : status === "failed" ? "Copy failed" : "Copy email";

  return (
    <button
      type="button"
      className="copy-email"
      onClick={handleCopy}
      aria-label="Copy Leul Yitbarek's email address"
      aria-live="polite"
      aria-atomic="true"
      title={email}
    >
      {label}
    </button>
  );
}
