const companies = {
  kuaishou: {
    name: "四川快手——大模型训练",
    role: "大模型运营专家",
    meta: "大模型训练 · 电商和商业化场景",
    date: "2025.12 - 至今",
    description:
      "负责大模型在电商和商业化场景的应用落地，主导从 0-1 盘点平台基建能力，建设 Agent 工具，培训 PE，负责商家入驻、色情禁售等多个场景的 Agent 链路搭建、工作流开发与内部 AI 工具建设。",
    achievements: [
      "人员孵化：作为大模型训练专业导师，2 次向电商、商业化领域 200+ 名人员分享，孵化培养模型训练师人才梯队 11 名。",
      "Skill 工程提效：辅助客开业务同学提效 30%+，覆盖用户 264 人次，总计安装量超 1200 次。",
    ],
    skills: ["Agent", "Skill", "Workflow", "模型训练", "AI 评测"],
    projects: ["merchant-auto-review", "sales-digital-human"],
  },
  bytedance: {
    name: "字节跳动——电商机审运营",
    role: "假货机审运营专家",
    meta: "中国内容质量与数据服务平台部（内容风控质量）",
    date: "2024.09 - 2025.11",
    description:
      "负责电商假货场景机审的产品、工具、Agent 与专项探索，搭建售卖意图识别、商品匹配、立规等疑难专项 Agent 并交付，形成可复用教程与经验沉淀。",
    achievements: [
      "团队机审覆盖率 0→74.1%（个人贡献↑16.55%）；推动人力节降 162 人（个人贡献↓38 人，占比 23.5%）。",
      "累计完成 5 批次、150+ 名新人培训，统筹 3 名 PE 与 5 名标注团队协同工作，沉淀可复用的培养教程与作业规范。",
      "累计获团队 A 级及以上奖项 5 次，360 绩效评估 M+（超出预期）。",
    ],
    skills: ["机审", "风险策略", "模型立规", "数据分析"],
    projects: ["product-matching-agent", "intelligent-rule-making"],
  },
};

const projects = {
  "merchant-auto-review": {
    companySlug: "kuaishou",
    company: "四川快手——大模型训练",
    role: "主 PMO · 0→1",
    title: "商家入驻智能机审项目",
    date: "2025.12 - 至今",
    summary:
      "将商家入驻从纯人工审核逐步转为智能机审，缩短商家等待链路并释放审核人力。",
    tags: ["智能审核", "商家治理", "AI 工具"],
    background:
      "商家入驻规模快速扩张，资质审核长期高度依赖人审，新商开店时长远落后业内“小时时级”时效，人力成本高、效率瓶颈突出。目标以模型替代人审、实现 70% 机审率。",
    approach: [
      "作为项目主 PMO，统筹目标拆解、资源协调与节奏把控。将人审 SOP 与治理规则结合，按“模型可实现性 + ROI”对审核环节分级，确定开发排期，并向研发输出工作流平台建设 BRD，推动基础平台从 0 搭建。",
      "由高 ROI 环节切入搭建 AI 识别能力：需主观判断的环节交由模型提示词处理，数据转换与清洗通过工作流 Python 节点实现；沉淀方法论并孵化 5 名 PE，完成机审能力规模化复制。",
      "独立通过 vibe coding 开发「智能应用集合」内网 AI 工具平台，将特征书写流程标准化，覆盖 90+ 内部用户、累计调用 1500+ 次；推动产品侧研发对齐频次减少 3+ 次、研发周期缩短 1 天以上。",
    ],
    metrics: [
      "机审覆盖率 0 → 71%，Q1、Q2 均超目标达成。",
      "上线 84 个模型，线上平均准确率 98.41%，误伤率 0.97%，漏放率 0.62%。",
      "单 case AHT 219s → 154s（↓29.7%），已实现人力节降 11 人。",
    ],
  },
  "sales-digital-human": {
    companySlug: "kuaishou",
    company: "四川快手——大模型训练",
    role: "核心开发 · 0→1",
    title: "Skill 工程 · 客开数字人",
    date: "2026.03 - 2026.06",
    summary:
      "通过批量报备查询与报备创建 Skill，接入客开数字人，实现业务在移动端完成报备流程。",
    tags: ["数字人", "Skill", "客开提效"],
    background:
      "报备环节是客户开发流程中保障合规与业务落地的关键节点。报备人员需要在 PC 端多条记录之间逐条操作，报备量越大，操作查询成本越高，急需数字人能力解决该问题。",
    approach: [
      "开发批量报备查询与报备创建 Skill，接入客开数字人，实现业务移动端完成报备流程；同时优化开发流程，将开发周期从 2 周缩短至 1 周。",
      "结合业务开发流程与产品需求，将评测经验沉淀为评测 Skill，实现 90%+ 的 Skill 评测准确率，并将能力接入开发平台。",
    ],
    metrics: [
      "Skill 安装数 1220+。",
      "覆盖用户 264 人次，调用次数超 700 次。",
      "辅助客开业务报备效率提升 30%+。",
    ],
  },
  "product-matching-agent": {
    companySlug: "bytedance",
    company: "字节跳动——电商机审运营",
    role: "负责人 · 0→1",
    title: "商品匹配 Agent（基建层能力）",
    date: "2025.07 - 2025.08",
    summary: "针对口播带货但无明确商品代码场景，搭建可复用的底层商品匹配能力。",
    tags: ["Agent", "商品匹配", "基建层能力"],
    background:
      "假货治理中存在大量“口播带货但无明确商品代码”的场景，传统商品代码提取方式失效，导致违规商品无法精准匹配、风控拦截存在盲区。",
    approach: [
      "由 0→1 负责整体 Agent 框架搭建与链接匹配 Prompt 编写；拆解达人作弊方式，形成“链接 / 黑词 / 款式”三类匹配路径并行判断，合并结果并输出对应链接号与全量商品信息。",
      "将“从讲解中提取商品代码”重构为大模型对口播链接编码后核实价格、类目并判断匹配度，从根本上解决商品代码缺失场景，作为基建层能力供上层风控复用。",
    ],
    metrics: [
      "商品匹配准确率稳定在 90%+。",
      "解决链接无法匹配与匹配错误问题，并投入稳定使用。",
    ],
  },
  "intelligent-rule-making": {
    companySlug: "bytedance",
    company: "字节跳动——电商机审运营",
    role: "核心开发",
    title: "智能立规 · 减肥专项（自动化风险挖掘）",
    date: "2025.08 - 2025.09",
    summary: "构建更自动化、可规模化的风险挖掘与拦截能力。",
    tags: ["智能立规", "风险挖掘", "Agent"],
    background:
      "减肥类目虚假宣传屡禁不止，达人作弊手法不断变化。传统人工立规依赖经验、响应滞后、覆盖有限，需要更自动化、可规模化的风险挖掘与拦截能力。",
    approach: [
      "与治理、产品对齐拆解规则管控风险点，结合 CPO 负反馈数据与达人作弊意图，使用模型生成意图规则并实现规则下沉、宣发。",
      "统筹团队拆解规则管控点，分析负反馈 case，搭建 Agent 链路并结合规则豁免完成任务拆分，实现立规链路高准自动驳回。",
      "与算法协同监控线上驳回量、QPS 变化，排查插件资源与 ASR 转译错误问题，推动链路稳定上线并形成经验分享。",
    ],
    metrics: [
      "推动虚假宣传减肥标签 2 条规则下沉。",
      "CPO 工单召回率 71% → 稳定 80%+。",
      "ASR 转译错误占比 12.5% → 4.8%。",
    ],
  },
};

const root = document.querySelector("#detail-root");
const page = document.body.dataset.detailPage;
const slug = new URLSearchParams(window.location.search).get("slug");

const pills = (items) =>
  `<div class="pills">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;

function renderCompany(company) {
  document.title = `${company.name} · 王凯`;
  const projectCards = company.projects
    .map((projectSlug) => {
      const project = projects[projectSlug];
      return `<a class="detail-project-card" href="project.html?slug=${projectSlug}">
        <div><small>${project.date} · ${project.role}</small><h3>${project.title}</h3></div>
        <p>${project.summary}</p><span>查看完整项目 →</span>
      </a>`;
    })
    .join("");

  root.innerHTML = `<div class="detail-container">
    <a class="detail-back" href="index.html#experience">← 返回职业经历</a>
    <header class="detail-hero">
      <small>COMPANY EXPERIENCE · ${company.date}</small>
      <h1>${company.name}</h1><h2>${company.role}</h2>
      <p class="meta">${company.meta}</p><p class="detail-lead">${company.description}</p>
      ${pills(company.skills)}
    </header>
    <section class="detail-panel"><small>HIGHLIGHTS</small><h2>在职成果</h2>
      <ul>${company.achievements.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-section"><header class="heading"><small>PROJECTS AT THIS COMPANY</small><h2>在职期间项目</h2><span></span></header>
      <div class="detail-project-grid">${projectCards}</div>
    </section>
  </div>`;
}

function renderProject(project) {
  document.title = `${project.title} · 王凯`;
  root.innerHTML = `<article class="detail-container project-detail">
    <a class="detail-back" href="company.html?slug=${project.companySlug}">← 返回公司经历</a>
    <header class="detail-hero">
      <small>${project.date} · CASE STUDY</small><h1>${project.title}</h1>
      <p class="detail-lead">${project.summary}</p>
      <a class="detail-company-link" href="company.html?slug=${project.companySlug}">${project.company} · ${project.role} →</a>
      ${pills(project.tags)}
    </header>
    <section class="detail-section"><small>01 · CONTEXT</small><h2>项目背景</h2><p>${project.background}</p></section>
    <section class="detail-section"><small>02 · BREAKDOWN</small><h2>拆解与完成思路</h2>
      <ol class="detail-steps">${project.approach.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${item}</p></li>`).join("")}</ol>
    </section>
    <section class="detail-panel"><small>03 · IMPACT</small><h2>数据与成果</h2>
      <ul>${project.metrics.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  </article>`;
}

if (page === "company" && companies[slug]) renderCompany(companies[slug]);
else if (page === "project" && projects[slug]) renderProject(projects[slug]);
else {
  root.innerHTML = `<div class="detail-container detail-missing"><small>404</small><h1>没有找到这个内容</h1><a class="button" href="index.html">返回首页 →</a></div>`;
}

document
  .querySelector("#theme")
  ?.addEventListener("click", () =>
    document.documentElement.toggleAttribute("data-dark"),
  );
