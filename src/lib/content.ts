export const profile = {
  name: "王凯",
  headline: "大模型训练与 AI Agent 应用",
  company: "快手",
  experience: "AI Native 实践者",
  bio: "围绕业务全链路进行 AI 能力盘点、问题拆解与落地，关注智能治理、Agent、Workflow 与 Skill 产品化，让 AI 从概念走进真实业务。",
};

export const experiences = [
  {
    company: "快手",
    role: "大模型训练与 AI Agent 应用",
    meta: "商业生态与体验部 · 大模型训练组",
    date: "当前",
    current: true,
    description:
      "聚焦大模型训练与业务 Agent 应用，推动 AI 能力在复杂业务场景中的产品化、评测与规模化使用。",
    achievements: [
      "面向电商、商业化领域 200+ 名 PE、运营进行 AI 实战分享",
      "将 Prompt、Workflow、Agent、Skill 实践沉淀为标准化课程",
      "孵化培养模型训练师人才梯队 11 名，助力业务团队 AI 转型",
    ],
    skills: ["Agent", "Skill", "Workflow", "模型训练", "AI 评测"],
  },
  {
    company: "抖音电商",
    role: "电商治理机审运营",
    meta: "电商治理 · 假货治理域",
    date: "2024.09 — 2025.12",
    current: false,
    description:
      "负责假货治理域机审能力建设，覆盖目标拆解、能力搭建和风险覆盖，推动感知、研判、召回、处置、判罚的自动化链路落地。",
    achievements: [
      "建设假货内容场风险管控，降低依赖人工审核造成的效率瓶颈",
      "以模型立规补齐风险感知能力，形成智能风控完整闭环",
      "获得 2 次 M+、5 次 A 级以上奖项及 2 次 Spot Bonus",
    ],
    skills: ["机审", "风险策略", "模型立规", "数据分析", "项目推动"],
  },
];

export const projects = [
  {
    slug: "merchant-auto-review",
    marker: "71%",
    title: "商家入驻机审",
    summary:
      "将商家入驻从纯人工审核逐步转为智能机审，缩短商家等待链路并释放审核人力。",
    date: "2025",
    tags: ["智能审核", "商家治理", "AI 工具"],
    metrics: [
      "Q2 机审率 71%",
      "准确率 98.58%",
      "基期人力 34 → 23 人",
      "AI 工具服务 90+ 用户",
    ],
  },
  {
    slug: "review-agent",
    marker: "↓39%",
    title: "辅助人审 Agent",
    summary:
      "由 Agent / Workflow 完成信息收集、规则匹配和初判，审核员基于结构化证据快速确认。",
    date: "2025",
    tags: ["Agent", "Workflow", "人审提效"],
    metrics: ["审核 AHT 降低 39.25%", "预估节省 4.5 HC", "完成实景试跑验证"],
  },
  {
    slug: "sales-digital-human",
    marker: "709×",
    title: "客开数字人",
    summary:
      "以 Skill 解决移动端报备、批量查询和原因透出问题，并反推 Skill 平台基础能力升级。",
    date: "2025",
    tags: ["数字人", "Skill", "平台建设"],
    metrics: [
      "两项 Skill 累计调用 709 次",
      "覆盖 264 名用户",
      "推动 30+ 项平台优化",
    ],
  },
];
