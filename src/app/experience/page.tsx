import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { experiences } from "@/lib/content";

export default function ExperiencePage() {
  return (
    <main className="page">
      <div className="prose">
        <Link className="back" href="/">
          <ArrowLeft /> 返回首页
        </Link>
        <p className="micro">Experience</p>
        <h1>职业经历</h1>
        {experiences.map((item) => (
          <article className="experience-detail" key={item.company}>
            <p className="date">{item.date}</p>
            <h2>
              <Link className="company-link" href={`/companies/${item.slug}`}>
                {item.company} <ArrowRight />
              </Link>
            </h2>
            <h3>{item.role}</h3>
            <p>{item.description}</p>
            <ul>
              {item.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
