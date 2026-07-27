import { PrismaClient, PublishState } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.siteConfig.upsert({
    where: { id: "owner" },
    update: {},
    create: {
      id: "owner",
      name: "王凯",
      headline: "大模型训练与 AI Agent 应用",
      currentCompany: "快手",
      bio: "围绕业务全链路进行 AI 能力盘点、问题拆解与落地，关注智能治理、Agent、Workflow 与 Skill 产品化。",
    },
  });

  const count = await prisma.experience.count();
  if (count === 0) {
    await prisma.experience.create({
      data: {
        company: "抖音电商",
        role: "电商治理机审运营",
        department: "电商治理 / 假货治理域",
        startDate: new Date("2024-09-01"),
        endDate: new Date("2025-12-31"),
        description:
          "负责假货治理域机审能力建设，覆盖目标拆解、能力搭建与风险覆盖。",
        state: PublishState.published,
      },
    });
  }
}

main().finally(() => prisma.$disconnect());
