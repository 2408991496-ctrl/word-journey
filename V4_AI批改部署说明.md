# V4 智谱 AI 批改部署说明

## 此次新增

- 句子、作文点击“AI批改”（或 Ctrl/Cmd + Enter）后调用智谱 GLM-4.7-Flash。
- 返回判断、具体错误及中文原因、修改参考、目标词使用及内容要点反馈。
- 不要求自由表达与参考答案逐字一致；提示模型识别原意变化、孤立罗列目标词等情况。
- AI可能误判，反馈供教学参考，不作为正式考试评分。
- 客观题仍本地检查，不调用AI。
- 草稿和返回的批改反馈保存在本机，包含在原有备份、报告中。
- 请求失败、超时、未配置密钥时明确提示，保留答案，允许重试。

## 1. 上传代码

解压“WordJourney_V4_GitHub更新包.zip”，将里面的文件和文件夹按原位置上传到原 GitHub 仓库，不上传ZIP本身、不删除其他文件。

仓库根目录应包含：

```text
api/
  grade.mjs
src/
tests/
package.json
vercel.json
README.md
```

api必须和package.json在同一层，不能放进src或public。package.json增加测试脚本，没有增加运行依赖，原有锁文件保留即可。

## 2. 在 Vercel 配置密钥

打开原项目 → Settings → Environment Variables → Add Environment Variable：

- 名称：AI_API_KEY
- 值：从智谱标准API Key页面复制完整密钥，不是API Key ID
- 环境：勾选Production；需要测试预览部署时也勾选Preview
- 保存后在Deployments重新部署（Redeploy），或保存变量后再提交此次GitHub更新

无需填写模型变量，服务端固定使用glm-4.7-flash，不自动退回付费模型。

禁止把密钥写进源代码、README或GitHub；不要使用VITE_前缀环境变量存储密钥。项目.gitignore已忽略.env文件。

## 3. 部署与验收

保持Vite、pnpm build、dist原有构建设置。项目会同时部署静态前端和api/grade.mjs服务端函数，函数最长60秒，向智谱发起请求最长45秒。

待Vercel显示Ready后，打开原正式网址并刷新：

1. 开启一组训练，进入写句子。
2. 对“My classmate lent me a dictionary.”输入“I borrowed a dictionary from my classmates.”，点击AI批改，检查是否指出单复数改变原意。AI结果可能有所差异。
3. 输入正确单数改写，检查是否接受合理表达。
4. 作文只输入“borrow”和“solve”，检查是否提示未形成完整文章、词汇未用于完整表达。
5. 完成一篇符合要点的短文，检查具体问题与修改参考。
6. 刷新后确认答案及批改反馈仍保留。

未配密钥时应显示“AI批改尚未配置”。直接在浏览器打开/api/grade会显示405或方法提示，这是正常的：接口只接受训练页面的POST请求。

本机启动学习.cmd、pnpm dev和pnpm preview仍是静态/前端预览，不会自动运行Vercel函数；AI批改请在部署后的Vercel网站测试。纯dist上传到普通静态托管无法提供AI批改。

## 4. 频率、费用与数据

- 只调用glm-4.7-flash，免费及账号限额以智谱控制台当时显示为准。
- 本接口设有同一运行实例内每IP每分钟10次、最多同时2次的基础限制。Vercel多实例和实例重启会重置计数，不是全局配额或绝对防滥用措施；大规模公开前需要持久限流或平台防护。
- 句子最多1200字符，作文最多6000字符，输出最多2200 Token。
- 模型免费不代表托管服务所有用量免费，仍按Vercel套餐与使用量计费。
- 主动点击AI批改会把本题题目、要求、目标词、参考及答案经Vercel发送至智谱；不会发送昵称、整本学习历史或其他题的答案。
- 不记录密钥或答案到应用日志；托管平台及模型供应商的数据处理以其政策为准。

## 验证范围

生产构建、15项自动测试通过。包括模拟智谱响应、未配密钥、超时、权限错误、输出校验、基础限流、旧备份兼容。浏览器验证了AI结果展示、等待期间编辑保护、失败保留草稿和手机宽度布局。

没有使用真实密钥调用智谱，也未替用户上传GitHub或部署Vercel。真实账号权限、跨境连接、模型实际批改质量需按上述步骤验收。

官方资料：
- https://docs.bigmodel.cn/cn/guide/models/free/glm-4.7-flash
- https://vercel.com/docs/functions/runtimes/node-js
