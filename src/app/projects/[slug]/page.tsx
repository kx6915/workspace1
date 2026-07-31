import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  return { title: project ? `${project.title} · 王凯` : "项目" };
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();
  return (
    <main className="page">
      <article className="prose">
        <Link className="back" href="/projects">
          <ArrowLeft /> 返回项目列表
        </Link>
        <p className="micro">{project.date} · Case Study</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <Link
          className="company-reference"
          href={`/companies/${project.companySlug}`}
        >
          {project.company} · {project.role} <ArrowRight />
        </Link>
        <div className="pills">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <hr />
        <section className="case-section">
          <p className="micro">01 · Context</p>
          <h2>项目背景</h2>
          <p>{project.background}</p>
        </section>
        <section className="case-section">
          <p className="micro">02 · Role & Goals</p>
          <h2>我的角色与目标</h2>
          <p>{project.roleDescription}</p>
          {project.goals.length > 0 && (
            <ul className="case-detail-list">
              {project.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          )}
        </section>
        <section className="case-section">
          <p className="micro">03 · Breakdown</p>
          <h2>拆解与完成思路</h2>
          <ol className="approach-list">
            {project.approach.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="case-section">
          <p className="micro">04 · Technology</p>
          <h2>技术栈与工具</h2>
          <ul className="case-detail-list">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </section>
        <section className="case-section result-panel">
          <p className="micro">05 · Impact</p>
          <h2>数据与成果</h2>
          <ul className="metrics">
            {project.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
