import { PrismaClient, PublishState } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.siteConfig.upsert({
    where: { id: "owner" },
    update: {},
    create: {
      id: "owner",
      name: "王凯",
      headline: "大模型运营专家",
      currentCompany: "四川快手——大模型训练",
      contactEmail: "wangkai031wy@163.com",
      bio: "围绕业务全链路进行 AI 能力盘点、问题拆解与落地，关注智能治理、Agent、Workflow 与 Skill 产品化。",
    },
  });

  const count = await prisma.experience.count();
  if (count === 0) {
    await prisma.experience.create({
      data: {
        company: "字节跳动——电商机审运营",
        role: "假货机审运营专家",
        department: "中国内容质量与数据服务平台部（内容风控质量）",
        startDate: new Date("2024-09-01"),
        endDate: new Date("2025-11-30"),
        description:
          "负责假货治理域机审能力建设，覆盖目标拆解、能力搭建与风险覆盖。",
        state: PublishState.published,
      },
    });
  }
}

main().finally(() => prisma.$disconnect());
