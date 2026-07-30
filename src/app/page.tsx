import Link from "next/link";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Nav } from "@/components/Nav";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences, profile, projects } from "@/lib/content";

export const revalidate = 60;

export default function Home() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const resume = process.env.NEXT_PUBLIC_RESUME_URL;
  return (
    <>
      <Nav />
      <main>
        <section id="home" className="hero">
          <div className="hero-glow" />
          <div className="hero-content">
            <p className="hello">你好，我是</p>
            <h1>
              王 <i>凯</i>
            </h1>
            <p className="headline">
              {profile.headline} <span>@ {profile.company}</span>
            </p>
            <p className="hero-meta">
              {profile.experience} · 商业生态与体验部 / 大模型训练组
            </p>
            <p className="hero-bio">{profile.bio}</p>
            <div className="hero-actions">
              {email && (
                <a className="button primary" href="#contact">
                  <Mail />
                  联系我
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
                  <Download />
                  下载简历
                </a>
              )}
              <a className="button secondary" href="#experience">
                浏览履历 <ArrowDown />
              </a>
            </div>
          </div>
          <a className="scroll" href="#about" aria-label="继续浏览">
            <ArrowDown />
          </a>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeading eyebrow="01 · About" title="关于我" />
            <div className="about-grid">
              <p className="about-lead">
                我相信，AI 的价值不在 Demo，
                <br />
                而在每一个<span>真实业务结果</span>。
              </p>
              <div>
                <p>{profile.bio}</p>
                <p>
                  2022 年本科毕业。先后在字节跳动与四川快手从事 AI
                  相关业务，既做过风险治理的机审能力建设，也持续探索
                  Agent、Workflow、Skill 与模型训练的规模化应用。
                </p>
                <div className="pills">
                  <span>Agent</span>
                  <span>Workflow</span>
                  <span>Skill</span>
                  <span>模型训练</span>
                  <span>智能治理</span>
                  <span>数据分析</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section subtle">
          <div className="container">
            <SectionHeading eyebrow="02 · Experience" title="职业经历" />
            <div className="timeline">
              {experiences.map((item, index) => (
                <Link
                  aria-label={`查看${item.company}任职经历与全部项目`}
                  className="experience-item"
                  href={`/companies/${item.slug}`}
                  key={item.company}
                >
                  <div className="logo-column">
                    <div className="company-logo">{item.company[0]}</div>
                    {index < experiences.length - 1 && (
                      <span className="timeline-line" />
                    )}
                  </div>
                  <div className="experience-body">
                    <div className="experience-title">
                      <div>
                        <h3>
                          <span className="company-link">
                            {item.company} <ArrowRight />
                          </span>
                        </h3>
                        <h4>{item.role}</h4>
                      </div>
                      <p className="date">
                        {item.current && (
                          <span className="status">
                            <i />
                            <i />
                          </span>
                        )}
                        {item.date}
                      </p>
                    </div>
                    <p className="meta">{item.meta}</p>
                    <p className="description">{item.description}</p>
                    <ul>
                      {item.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                    <div className="pills">
                      {item.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionHeading eyebrow="03 · Featured Projects" title="代表项目" />
            <div className="project-grid">
              {projects.map((project) => (
                <Link
                  className="project-card"
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                >
                  <div className="project-cover">
                    <span>{project.marker}</span>
                    <small>0{projects.indexOf(project) + 1}</small>
                  </div>
                  <div className="project-content">
                    <div className="project-title">
                      <h3>{project.title}</h3>
                      <ArrowRight />
                    </div>
                    <p>{project.summary}</p>
                    <time>{project.date}</time>
                    <div className="pills">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/projects" className="more-link">
              查看全部项目 <ArrowRight />
            </Link>
          </div>
        </section>
        <Contact />
      </main>
      <footer>© 2026 王凯 · Last updated 2026-07-27</footer>
    </>
  );
}
