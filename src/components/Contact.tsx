"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const resume = process.env.NEXT_PUBLIC_RESUME_URL;
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    if (!email) return;
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 3000);
  };
  return (
    <section id="contact" className="contact section">
      <p className="micro">想聊聊？</p>
      <h2>一起做点有意思的事。</h2>
      <p>如果你关注 AI 如何真正进入业务链路，期待与你交流。</p>
      {email && (
        <button className="email" onClick={copy}>
          {email}
          <Copy />
        </button>
      )}
      <div className="contact-actions">
        {email && (
          <a className="button primary" href={`mailto:${email}`}>
            联系我 →
          </a>
        )}
        {resume && (
          <a
            className="button secondary"
            href={resume}
            download
            target="_blank"
            rel="noreferrer"
          >
            下载简历 ↓
          </a>
        )}
      </div>
      {copied && (
        <div className="toast" role="status">
          已复制邮箱
        </div>
      )}
    </section>
  );
}
