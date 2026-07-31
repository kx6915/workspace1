const companies = {
  kuaishou: {
    name: "四川快手——大模型训练",
    role: "大模型运营专家",
    meta: "商业生态与体验部 / 大模型训练组",
    date: "2025.12.09 - 至今",
    description:
      "负责大模型在电商与商业化场景的应用落地，主导或参与商家入驻、色情禁售等多个 0→1 场景，覆盖 Agent 链路搭建、Prompt 工程、工作流开发与内部 AI 工具建设。",
    achievements: [
      "作为大模型训练专业导师，2 次面向电商、商业化领域 200+ 名人员开展分享，孵化模型训练师人才梯队 11 名。",
      "辅助客开业务同学提效 30%+，覆盖用户 264 人次，Skill 总安装量 1220+。",
    ],
    skills: ["Agent", "Skill", "Workflow", "模型训练", "AI 评测"],
    projects: [
      "merchant-auto-review",
      "intelligent-application-suite",
      "review-efficiency-structured-risk",
      "sales-digital-human",
    ],
  },
  bytedance: {
    name: "字节跳动——电商机审运营",
    role: "假货机审运营专家",
    meta: "中国内容质量与数据服务平台部 · 内容风控质量",
    date: "2024.09 - 2025.11.28",
    description:
      "负责假货机审的产品、工具、Agent、专项探索及经验总结，同时负责售卖意图识别、商品匹配、智能立规等疑难专项 Agent 的交付。",
    achievements: [
      "团队机审覆盖率 0→74.1%（个人贡献↑16.55%）；推动人力节降 162 人（个人贡献↓38 人，占比 23.5%）。",
      "累计完成 5 批次、150+ 名新人培训，统筹 3 名 PE 与 5 名标注团队协同工作。",
      "累计获团队 A 级及以上奖项 5 次，360 绩效评估 M+（超出预期）。",
    ],
    skills: ["机审", "风险策略", "模型立规", "数据分析"],
    projects: [
      "product-matching-agent",
      "intelligent-rule-making",
      "asr-cpo-recall-optimization",
    ],
  },
};

const projects = {
  "merchant-auto-review": {
    companySlug: "kuaishou",
    company: "四川快手——大模型训练",
    role: "主 PMO · 0→1",
    title: "商家入驻智能机审项目",
    date: "2025.12 - 至今",
    summary: "将商家入驻从人工审核逐步转为智能机审，缩短等待链路并释放人力。",
    tags: ["智能审核", "商家治理", "AI 工具"],
    background:
      "随着电商业务快速发展，商家入驻规模持续扩大。资质审核长期高度依赖人工，平均开店时长约 21.51h，与业内领先的“小时级”时效差距较大，人力成本和商家流失风险同时上升。",
    roleDescription:
      "项目主 PMO，负责机审能力落地、整体目标拆解、资源协调与项目节奏把控，是项目从规划到交付的统筹者。",
    goals: [
      "通过模型替代人审实现 HC 节降，达成 70% 机审率。",
      "分阶段目标：Q1 机审率 40%，Q2 机审率 65%。",
    ],
    approach: [
      "拆解业务流程与审核员 SOP，将治理规则与审核步骤结合，识别模型可实现的环节并评估实现难度和 ROI。",
      "确定开发周期和排期，拆解工作流平台等基础建设能力，向研发输出 BRD 并完成平台方案对齐。",
      "从高 ROI 环节切入：主观判断交由 Prompt 处理，数据转换与清洗通过 Workflow Python 节点实现。",
      "推广能力并沉淀经验，孵化 5 名 PE，实现机审能力规模化复制。",
    ],
    tools: [
      "内部低代码工作流平台",
      "Workflow Python 节点",
      "Prompt 工程与模型能力评估",
      "ROI 评估方法",
      "vibe coding（Python / SQL / Java）",
    ],
    metrics: [
      "机审覆盖率 0→71%（Q1 目标 40%、达成 48%；Q2 目标 65%、达成 71%）。",
      "上线 84 个模型，线上平均准确率 98.41%，误伤率 0.97%，漏放率 0.62%。",
      "单 case AHT 219s→154s（↓29.7%），已实现人力节降 11 人。",
    ],
  },
  "intelligent-application-suite": {
    companySlug: "kuaishou",
    company: "四川快手——大模型训练",
    role: "独立开发 · vibe coding",
    title: "智能应用集合 · 内网 AI 工具平台",
    date: "快手任职期间",
    summary: "为 PE 与治理策略同学提供统一的低代码 AI 工具承载平台。",
    tags: ["AI 工具", "vibe coding", "内网平台"],
    background:
      "PE 与治理侧策略同学代码能力薄弱，工作流开发和策略配置受限；内部“特征书写”函数含义不清晰，长期依赖口口相传，缺乏统一工具承载。",
    roleDescription: "独立完成需求设计、开发与内网部署。",
    goals: [],
    approach: [
      "集成智能代码生成、智能 SQL 生成、智能特征书写、智能助手与 JSON 在线解析等工具。",
      "建设统一认证登录、权限同步管理和工具动态扩展能力。",
      "将 vibe coding 方法推广至产品侧，帮助产品自行产出 PRD，减少研发对齐成本。",
    ],
    tools: [
      "vibe coding",
      "Python / SQL / Java",
      "大模型能力调用",
      "统一认证与权限管理",
      "内网部署",
    ],
    metrics: [
      "平台用户 92 人，累计使用 1551 次。",
      "将特征书写流程标准化、工具化，降低 PE 与策略同学代码门槛。",
      "产品与研发对齐频次减少 3 次以上，研发周期缩短 1 天以上。",
    ],
  },
  "review-efficiency-structured-risk": {
    companySlug: "kuaishou",
    company: "四川快手——大模型训练",
    role: "研发侧核心开发 · 项目二号位",
    title: "审核提效 · 违规信息结构化透出",
    date: "2026.03.24 - 2026.06.09",
    summary: "结构化定位违规信息，降低审核员查找违规点与规则判断的成本。",
    tags: ["审核提效", "Workflow", "结构化透出"],
    background:
      "3 月审核量 10w+、一审审核人力 71 名、整体 AHT 253.7s。违规点分散在商详页、视频和直播，审核员还需记忆复杂豁免规则；同时模型输出冗长，关键信息、审核建议与结论混杂。",
    roleDescription:
      "研发侧核心开发、项目二号位，负责直播与短视频核心链路的实际开发和打通。",
    goals: [
      "形成“快速定位 + 一键判断”的极简审核工作流。",
      "核心指标：AHT 降低 30%+。",
    ],
    approach: [
      "开发“功效不符”直播体裁 Workflow 并打通短视频链路，辅助货架、原声体裁 Workflow 与 Agent 开发。",
      "将短视频链路迭代至 2.0，通过模型与产品协同优化继续降低 AHT。",
      "完成数据分析、问题诊断、规则制定与优化、流程测试、监控和反馈闭环。",
      "培养 1 名新研发接手链路维护，并孵化 2 名 PE。",
    ],
    tools: [
      "内部低代码工作流平台",
      "Workflow / Agent 开发",
      "Prompt 工程",
      "数据分析",
      "多体裁审核场景",
    ],
    metrics: [
      "单 case 维度提效 60.5%，单视频维度提效 37.1%。",
      "直播场域 AHT 下降 73.76%。",
      "短视频 2.0 较 1.0 额外带来 10.04% AHT 下降。",
    ],
  },
  "sales-digital-human": {
    companySlug: "kuaishou",
    company: "四川快手——大模型训练",
    role: "核心开发 · 0→1",
    title: "Skill 工程 · 客开数字人",
    date: "2026.03 - 2026.06",
    summary: "将批量报备查询与创建能力接入客开数字人，迁移至移动端。",
    tags: ["数字人", "Skill", "客开提效"],
    background:
      "报备人员需在 PC 端对多条记录逐条查询与操作，报备量越大，操作和查询成本越高，亟需通过数字人能力将高频报备流程迁移至移动端。",
    roleDescription:
      "核心开发，负责批量报备查询、报备创建 Skill，以及评测 Skill 与评测体系建设。",
    goals: [
      "使业务人员可在移动端完成报备查询与创建。",
      "目标业务提效 30%+、评测准确率 90%+。",
    ],
    approach: [
      "开发批量报备查询与报备创建 Skill，接入客开数字人。",
      "优化 Skill 开发流程，将单项能力开发周期由 2 周缩短至 1 周。",
      "结合业务流程与产品需求沉淀评测 Skill，接入开发平台构建标准化评测体系。",
    ],
    tools: [
      "Skill 框架开发",
      "客开数字人",
      "业务接口接入",
      "开发平台",
      "评测 Skill 与评测体系设计",
    ],
    metrics: [
      "Skill 安装数 1220+，覆盖用户 264 人次，调用次数 700+。",
      "报备效率提升 30%+，Skill 评测准确率 90%+。",
      "单项开发周期由 2 周缩短至 1 周。",
    ],
  },
  "product-matching-agent": {
    companySlug: "bytedance",
    company: "字节跳动——电商机审运营",
    role: "负责人 · 0→1",
    title: "商品匹配 Agent（基建层能力）",
    date: "2025.07 - 2025.08",
    summary: "搭建可被上层风控复用的底层商品匹配能力。",
    tags: ["Agent", "商品匹配", "基建层能力"],
    background:
      "假货治理中存在大量“口播带货但无明确商品代码”的场景，传统商品代码提取方式失效，导致违规商品无法精准匹配、风控拦截存在盲区。",
    roleDescription:
      "由 0→1 负责整体 Agent 框架搭建，以及链接匹配 Prompt 内容编写。",
    goals: [],
    approach: [
      "拆解达人作弊方式，形成链接、黑词、款式三类并行匹配链路，合并结果后输出链接号与全部商品信息。",
      "将“从讲解中提取商品代码”重构为大模型对口播链接编码后核实价格、类目并判断匹配度。",
    ],
    tools: [
      "Agent 框架搭建",
      "Prompt 工程",
      "多路并行链路设计",
      "大模型语义判断（价格 / 类目核实）",
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
      "减肥类目虚假宣传屡禁不止，达人作弊手法不断变化；传统人工立规依赖经验、响应滞后、覆盖有限，难以应对快速演变的违规话术。",
    roleDescription: "核心开发，统筹规则拆解、数据分析链路与 Agent 链路搭建。",
    goals: ["准度不低于 90%，商品匹配召回率不低于 40%。"],
    approach: [
      "结合 CPO 负反馈数据与达人作弊意图拆解风险点，使用模型生成意图规则并推动规则下沉。",
      "分析并拆分负反馈 case，搭建 Agent 链路，根据规则豁免设计链路和任务目标，实现高准自动驳回。",
    ],
    tools: [
      "模型意图规则生成",
      "Agent 链路设计",
      "规则豁免逻辑",
      "数据分析",
      "资源 / QPS 监控",
    ],
    metrics: [
      "推动虚假宣传减肥标签 2 条规则下沉。",
      "实现虚假宣传减肥标签的高准自动驳回。",
    ],
  },
  "asr-cpo-recall-optimization": {
    companySlug: "bytedance",
    company: "字节跳动——电商机审运营",
    role: "核心开发",
    title: "立规链路 ASR 优化与 CPO 召回提升",
    date: "2025",
    summary: "优化 ASR 转译质量与立规链路召回，降低关键违规信息漏放。",
    tags: ["ASR", "CPO 召回", "链路优化"],
    background:
      "立规链路运行中，口播语音转文字存在较高转译错误，导致违规话术识别失败；同时 CPO 工单召回率偏低，关键违规信息存在漏放。",
    roleDescription:
      "核心开发，负责数据分析与问题诊断、规则制定与优化、流程测试、监控与反馈，并形成经验输出。",
    goals: [
      "ASR 转译错误占比由 12.5% 降至 5% 以内。",
      "CPO 工单召回率由 71% 提升至 80%。",
    ],
    approach: [
      "结合 CPO 负反馈数据与达人作弊意图拆解风险点，使用模型生成意图规则并推动规则下沉。",
      "分析并拆分负反馈 case，搭建 Agent 链路，根据规则豁免设计链路和任务目标。",
      "与算法协同监控驳回量和 QPS，排查插件资源与 ASR 转译错误，推动链路稳定上线并沉淀案例。",
    ],
    tools: [
      "ASR 转译问题排查",
      "资源 / QPS / 驳回量监控",
      "模型意图规则生成",
      "Agent 链路",
      "数据分析与规则豁免逻辑",
    ],
    metrics: [
      "CPO 工单召回率 71%→稳定 80%+。",
      "ASR 转译错误占比 12.5%→4.8%，达成 5% 以内目标。",
    ],
  },
};

const root = document.querySelector("#detail-root");
const page = document.body.dataset.detailPage;
const slug = new URLSearchParams(window.location.search).get("slug");

const pills = (items) =>
  `<div class="pills">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;

const list = (items) =>
  `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

function renderCompany(company) {
  document.title = `${company.name} · 王凯`;
  const projectCards = company.projects
    .map((projectSlug) => {
      const project = projects[projectSlug];
      return `<a class="detail-project-card" href="project.html?slug=${projectSlug}">
        <h3>${project.title}</h3>
        <p class="detail-card-copy"><b>背景</b>${project.background}</p>
        <div class="detail-card-copy detail-card-result"><b>成果</b>${list(project.metrics)}</div>
        <span>查看完整项目 →</span>
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
    <section class="detail-panel"><small>HIGHLIGHTS</small><h2>在职成果</h2>${list(company.achievements)}</section>
    <section class="detail-section"><header class="heading"><small>PROJECTS AT THIS COMPANY</small><h2>在职期间项目</h2><span></span></header>
      <div class="detail-project-grid">${projectCards}</div>
    </section>
  </div>`;
}

function renderProject(project) {
  document.title = `${project.title} · 王凯`;
  const goals = project.goals.length
    ? `<h3 class="detail-subheading">目标与指标</h3>${list(project.goals)}`
    : "";

  root.innerHTML = `<article class="detail-container project-detail">
    <a class="detail-back" href="company.html?slug=${project.companySlug}">← 返回公司经历</a>
    <header class="detail-hero">
      <small>${project.date} · CASE STUDY</small><h1>${project.title}</h1>
      <p class="detail-lead">${project.summary}</p>
      <a class="detail-company-link" href="company.html?slug=${project.companySlug}">${project.company} · ${project.role} →</a>
      ${pills(project.tags)}
    </header>
    <section class="detail-section"><small>01 · CONTEXT</small><h2>项目背景</h2><p>${project.background}</p></section>
    <section class="detail-section"><small>02 · ROLE & GOALS</small><h2>我的角色</h2><p>${project.roleDescription}</p>${goals}</section>
    <section class="detail-section"><small>03 · BREAKDOWN</small><h2>拆解与完成思路</h2>
      <ol class="detail-steps">${project.approach.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${item}</p></li>`).join("")}</ol>
    </section>
    <section class="detail-section"><small>04 · TECHNOLOGY</small><h2>技术栈与工具</h2>${list(project.tools)}</section>
    <section class="detail-panel"><small>05 · IMPACT</small><h2>数据与成果</h2>${list(project.metrics)}</section>
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
