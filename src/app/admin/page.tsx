export const metadata = { title: "内容管理 · 王凯" };

export default function AdminPage() {
  return (
    <main className="admin">
      <div>
        <p className="micro">Owner Console</p>
        <h1>内容管理</h1>
        <p>
          后台数据结构已建立。接入数据库与身份认证后，可在此维护站点信息、职业经历、项目、媒体与发布快照。
        </p>
        <div className="admin-grid">
          <article>
            <strong>站点信息</strong>
            <span>姓名、身份、邮箱、CV</span>
          </article>
          <article>
            <strong>职业经历</strong>
            <span>2 条已配置</span>
          </article>
          <article>
            <strong>代表项目</strong>
            <span>3 条已配置</span>
          </article>
          <article>
            <strong>发布快照</strong>
            <span>等待数据库连接</span>
          </article>
        </div>
      </div>
    </main>
  );
}
