import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/content";

export const metadata = { title: "代表项目 · 王凯" };

export default function ProjectsPage() {
  return (
    <main className="page">
      <div className="container">
        <Link className="back" href="/">
          <ArrowLeft /> 返回首页
        </Link>
        <header className="page-header">
          <p>Projects</p>
          <h1>代表项目</h1>
          <span />
        </header>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              className="project-summary-card"
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <div className="project-title">
                <h3>{project.title}</h3>
                <ArrowRight />
              </div>
              <p className="project-card-copy">
                <strong>背景</strong>
                {project.background}
              </p>
              <div className="project-card-copy project-card-result">
                <strong>成果</strong>
                <ul>
                  {project.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
