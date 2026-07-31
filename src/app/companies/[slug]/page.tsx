import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { experiences, projects } from "@/lib/content";

export function generateStaticParams() {
  return experiences.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const company = experiences.find((item) => item.slug === params.slug);
  return { title: company ? `${company.company} · 王凯` : "公司经历" };
}

export default function CompanyDetail({
  params,
}: {
  params: { slug: string };
}) {
  const company = experiences.find((item) => item.slug === params.slug);
  if (!company) notFound();
  const companyProjects = projects.filter(
    (project) => project.companySlug === company.slug,
  );

  return (
    <main className="page company-page">
      <div className="container">
        <Link className="back" href="/#experience">
          <ArrowLeft /> 返回职业经历
        </Link>
        <header className="company-hero">
          <p className="micro">Company Experience · {company.date}</p>
          <h1>{company.company}</h1>
          <h2>{company.role}</h2>
          <p className="meta">{company.meta}</p>
          <p className="lead">{company.description}</p>
          <div className="pills">
            {company.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </header>

        <section className="company-achievements">
          <p className="micro">Highlights</p>
          <h2>在职成果</h2>
          <ul>
            {company.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section className="company-projects">
          <div className="section-heading">
            <p>Projects at this company</p>
            <h2>在职期间项目</h2>
            <span />
          </div>
          <div className="project-grid">
            {companyProjects.map((project) => (
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
        </section>
      </div>
    </main>
  );
}
