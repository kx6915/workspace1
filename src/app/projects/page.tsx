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
              className="project-card"
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <div className="project-cover">
                <span>{project.marker}</span>
              </div>
              <div className="project-content">
                <div className="project-title">
                  <h3>{project.title}</h3>
                  <ArrowRight />
                </div>
                <p>{project.summary}</p>
                <div className="pills">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
