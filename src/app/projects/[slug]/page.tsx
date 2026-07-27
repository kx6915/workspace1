import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
        <div className="pills">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <hr />
        <h2>核心成果</h2>
        <ul className="metrics">
          {project.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
        <h2>方法</h2>
        <p>
          从业务问题出发，完成数据分析、目标拆解、能力盘点与链路设计；通过小流量验证持续校准效果，再将有效方案标准化、产品化并推广复用。
        </p>
      </article>
    </main>
  );
}
