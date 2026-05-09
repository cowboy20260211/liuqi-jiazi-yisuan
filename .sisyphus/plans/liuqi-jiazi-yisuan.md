# 六气甲子医算 - Cloudflare Pages 项目工作计划

## TL;DR

> **Quick Summary**: 创建Cloudflare Pages项目"六气甲子医算"，实现中医五运六气计算API（POST /api/calculate），包含HTML测试页面和基础测试。
>
> **Deliverables**:
> - Cloudflare Pages项目初始化（wrangler.toml配置）
> - API接口实现（TypeScript，POST JSON）
> - 简单HTML测试页面
> - Vitest单元测试
> - README文档
>
> **Estimated Effort**: Short
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Task 1 → Task 2 → Task 3 → Task 4 → Task 5

---

## Context

### Original Request
用户要求创建Cloudflare Pages项目"六气甲子医算"，实现中医五运六气计算API接口，包含：
- 地支计算逻辑（人命、司天、司地、司人、病经、病气）
- 简单HTML测试页面
- 基础测试（Vitest）
- 使用提供的部署参数

### Interview Summary
**Key Discussions**:
- API设计：POST + JSON Body（路径：/api/calculate）
- 需要HTML测试页（非纯API）
- 需要基础测试（Vitest）
- 语言：TypeScript

**用户提供的部署参数**:
- `CLOUDFLARE_API_TOKEN`: XoxEzegAwAiWVP9bjtD9NjdWwOzeHWAB9tqmQQH1
- `CLOUDFLARE_ACCOUNT_ID`: 8c2c26abfa69e5889751aa7542a34342

### Metis Review
**状态**: 咨询超时，但核心需求已明确，继续执行计划生成。

---

## Work Objectives

### Core Objective
创建Cloudflare Pages项目，实现中医五运六气计算API，提供简单的Web测试界面。

### Concrete Deliverables
- `wrangler.toml` - Cloudflare Pages配置
- `/functions/api/calculate.ts` - API接口实现
- `/public/index.html` - HTML测试页面
- `/src/calculator.ts` - 核心计算逻辑
- `/tests/calculator.test.ts` - Vitest单元测试
- `package.json` - 项目依赖配置
- `README.md` - 项目文档

### Definition of Done
- [ ] `npx wrangler pages dev .` 本地运行成功
- [ ] POST /api/calculate 返回正确JSON结果
- [ ] HTML测试页可以正常提交和显示结果
- [ ] Vitest测试全部通过
- [ ] 项目成功部署到Cloudflare Pages

### Must Have
- 正确的五运六气计算逻辑
- POST /api/calculate 接受 {renming, sitian} 参数
- 返回 {renming, sitian, sidi, siren, bingjing, bingqi}
- 参数验证（必须在地支范围内）
- 简单可用的HTML测试界面
- 基础单元测试覆盖核心计算逻辑

### Must NOT Have (Guardrails)
- 不实现用户认证系统
- 不连接数据库（纯计算逻辑）
- 不实现复杂的前端框架（原生HTML/JS即可）
- 不添加不必要的依赖包
- 不在代码中硬编码API Token（使用环境变量或CLI参数）

---

## Verification Strategy (MANDATORY)

> **ZERO HUMAN INTERVENTION** - ALL verification is agent-executed.

### Test Decision
- **Infrastructure exists**: NO - 需要初始化
- **Automated tests**: YES - Vitest
- **Framework**: Vitest
- **测试策略**: TDD风格 - 先写测试，再实现功能

### QA Policy
Every task MUST include agent-executed QA scenarios (see TODO template below).
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **API测试**: 使用Bash (curl) - 发送POST请求，验证JSON响应
- **HTML测试**: 使用Playwright - 打开页面，填写表单，点击按钮，验证结果
- **单元测试**: 使用Bash (npx vitest run) - 运行测试，验证通过

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately - 项目初始化):
├── Task 1: 项目结构初始化 + wrangler.toml [quick]
├── Task 2: 核心计算逻辑实现 (calculator.ts) [quick]
└── Task 3: Vitest测试环境配置 [quick]

Wave 2 (After Wave 1 - API + 测试):
├── Task 4: API接口实现 (/functions/api/calculate.ts) [quick]
├── Task 5: 单元测试编写 (/tests/calculator.test.ts) [quick]
└── Task 6: HTML测试页面 (/public/index.html) [quick]

Wave 3 (After Wave 2 - 集成测试 + 部署准备):
├── Task 7: 本地集成测试 [quick]
└── Task 8: 部署配置 + README [quick]

Wave FINAL (After ALL tasks):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real manual QA (unscrement-high)
└── Task F4: Scope fidelity check (deep)
-> Present results -> Get explicit user okay
```

### Dependency Matrix

- **1**: - - 2, 3
- **2**: - 3, 4, 5
- **3**: 1 - 5
- **4**: 2 - 6, 7
- **5**: 2, 3 - 7
- **6**: 1 - 7
- **7**: 4, 5, 6 - F1-F4
- **FINAL**: 4 tasks parallel

### Agent Dispatch Summary

- **1**: **1** - T1 → `quick`
- **2**: **1** - T2 → `quick`
- **3**: **1** - T3 → `quick`
- **4**: **1** - T4 → `quick`
- **5**: **1** - T5 → `quick`
- **6**: **1** - T6 → `quick`
- **7**: **1** - T7 → `quick`
- **8**: **1** - T8 → `quick`
- **FINAL**: **4** - F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

> Implementation + Test = ONE Task. Never separate.
> EVERY task MUST have: Recommended Agent Profile + Parallelization info + QA Scenarios.

- [x] 1. 项目初始化 + wrangler.toml配置

  **What to do**:
  - 创建 package.json (包含vitest依赖)
  - 创建 wrangler.toml 配置文件：
    ```toml
    name = "liuqi-jiazi-yisuan"
    compatibility_date = "2024-01-01"

    [vars]
    # 环境变量可以在这里定义，但敏感信息使用CLI参数
    ```
  - 创建基础目录结构：/functions/api/, /src/, /tests/, /public/
  - 初始化 npm 项目：npm init -y

  **Must NOT do**:
  - 不在 wrangler.toml 中硬编码 API Token
  - 不添加不必要的依赖

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 项目初始化是标准流程，快速执行
  - **Skills**: []
  - **Skills Evaluated but Omitted**: 无

  **Parallelization**:
  - **Can Run In Parallel**: NO (Wave 1 - 第一个任务)
  - **Parallel Group**: Wave 1
  - **Blocks**: Task 2, Task 3
  - **Blocked By**: None (can start immediately)

  **References**:
  - Cloudflare Pages Functions 文档: https://developers.cloudflare.com/pages/functions/
  - Wrangler 配置参考: https://developers.cloudflare.com/workers/wrangler/configuration/

  **Acceptance Criteria**:
  - [ ] package.json 存在且包含 vitest 依赖
  - [ ] wrangler.toml 配置正确（name字段为liuqi-jiazi-yisuan）
  - [ ] 目录结构创建完成（/functions/api/, /src/, /tests/, /public/）

  **QA Scenarios**:

  Scenario: 验证项目初始化
    Tool: Bash (npm)
    Preconditions: 项目目录存在
    Steps:
      1. cat package.json | grep -q "vitest" && echo "PASS: vitest依赖存在"
      2. cat wrangler.toml | grep -q "liuqi-jiazi-yisuan" && echo "PASS: wrangler配置正确"
      3. ls -la functions/ src/ tests/ public/ | wc -l | grep -q "4" && echo "PASS: 目录结构完整"
    Expected Result: 所有检查输出 PASS
    Failure Indicators: 任何检查输出不是PASS
    Evidence: .sisyphus/evidence/task-1-verify-init.txt

  **Evidence to Capture**:
  - [ ] .sisyphus/evidence/task-1-verify-init.txt

  **Commit**: YES
  - Message: `chore: init project structure with wrangler config`
  - Files: `package.json`, `wrangler.toml`, 目录结构
  - Pre-commit: `npm install`

---

- [x] 2. 核心计算逻辑实现 (src/calculator.ts)

  **What to do**:
  - 创建 src/calculator.ts 文件
  - 实现地支定义：
    ```typescript
    export const DIZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    export const YINYANG = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]; // 1=阳, 0=阴
    ```
  - 实现病气映射：
    ```typescript
    export const BINGQI_MAP: Record<string, string> = {
      '子': '少阴君火', '午': '少阴君火',
      '丑': '太阴湿土', '未': '太阴湿土',
      '寅': '少阳相火', '申': '少阳相火',
      '卯': '阳明燥金', '酉': '阳明燥金',
      '辰': '太阳寒水', '戌': '太阳寒水',
      '巳': '厥阴风木', '亥': '厥阴风木',
    };
    ```
  - 实现计算函数 calculate(renming, sitian):
    1. 参数验证（必须在地支内）
    2. 计算司地：从司天前进3位（(index + 3) % 12）
    3. 计算司人：根据司地阴阳，阳进1位，阴退1位
    4. 计算病经：从人命放到司人处，顺排到司天处（循环查找）
    5. 计算病气：根据病经查BINGQI_MAP
    6. 返回 {renming, sitian, sidi, siren, bingjing, bingqi}

  **Must NOT do**:
  - 不添加中文注释以外的注释
  - 不使用外部库（纯TS实现）

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 纯逻辑实现，无外部依赖，快速完成
  - **Skills**: []
  - **Skills Evaluated but Omitted**: 无

  **Parallelization**:
  - **Can Run In Parallel**: NO (depends on Task 1)
  - **Parallel Group**: Wave 1
  - **Blocks**: Task 4, Task 5
  - **Blocked By**: Task 1 (目录结构)

  **References**:
  - 用户需求中的计算逻辑描述
  - Draft文件: .sisyphus/drafts/liuqi-jiazi-yisuan.md

  **Acceptance Criteria**:
  - [ ] src/calculator.ts 文件存在
  - [ ] calculate函数接受两个参数（renming, sitian）
  - [ ] 参数验证正常工作（无效地支返回错误）
  - [ ] 计算逻辑正确（可以用示例验证）

  **QA Scenarios**:

  Scenario: 验证计算逻辑 - 示例1
    Tool: Bash (node)
    Preconditions: src/calculator.ts 已创建
    Steps:
      1. 创建测试脚本：echo "import { calculate } from './src/calculator.ts'; console.log(JSON.stringify(calculate('子', '午')));" > test-calc.mjs
      2. node test-calc.mjs
      3. 验证输出包含正确的JSON结构
    Expected Result: 输出 {"renming":"子","sitian":"午",...,"bingqi":"..."}
    Failure Indicators: 报错或输出不符合预期
    Evidence: .sisyphus/evidence/task-2-calc-test1.json

  Scenario: 验证参数验证
    Tool: Bash (node)
    Preconditions: src/calculator.ts 已创建
    Steps:
      1. 创建测试脚本验证无效参数：calculate('子', '无效')
      2. 捕获错误输出
    Expected Result: 抛出错误或返回错误对象
    Failure Indicators: 无效参数被接受
    Evidence: .sisyphus/evidence/task-2-calc-validation.txt

  **Evidence to Capture**:
  - [ ] .sisyphus/evidence/task-2-calc-test1.json
  - [ ] .sisyphus/evidence/task-2-calc-validation.txt

  **Commit**: YES
  - Message: `feat: implement core calculation logic`
  - Files: `src/calculator.ts`
  - Pre-commit: `npx tsc --noEmit src/calculator.ts`

---

- [x] 3. Vitest测试环境配置

  **What to do**:
  - 安装vitest依赖：npm install -D vitest @vitest/coverage-v8
  - 创建 vitest.config.ts 配置文件
  - 配置package.json scripts: "test": "vitest run"
  - 验证测试环境可用：npx vitest --version

  **Must NOT do**:
  - 不安装不必要的测试工具
  - 不配置复杂的测试环境

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 标准测试环境配置，快速完成
  - **Skills**: []
  - **Skills Evaluated but Omitted**: 无

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 2, both depend on Task 1)
  - **Parallel Group**: Wave 1
  - **Blocks**: Task 5
  - **Blocked By**: Task 1

  **References**:
  - Vitest官方文档: https://vitest.dev/guide/

  **Acceptance Criteria**:
  - [ ] vitest 安装成功 (package.json中有vitest依赖)
  - [ ] vitest.config.ts 配置正确
  - [ ] npm test 命令可用

  **QA Scenarios**:

  Scenario: 验证Vitest安装
    Tool: Bash (npm)
    Preconditions: Task 1完成，package.json存在
    Steps:
      1. npm test -- --version
      2. 检查输出包含vitest版本号
    Expected Result: 输出版本号（如 vitest/1.x.x）
    Failure Indicators: 命令失败或找不到vitest
    Evidence: .sisyphus/evidence/task-3-vitest-version.txt

  **Evidence to Capture**:
  - [ ] .sisyphus/evidence/task-3-vitest-version.txt

  **Commit**: YES
  - Message: `test: setup vitest testing environment`
  - Files: `package.json`, `vitest.config.ts`
  - Pre-commit: `npm install`

---

- [ ] 4. API接口实现 (/functions/api/calculate.ts)

  **What to do**:
  - 创建 /functions/api/calculate.ts 文件
  - 实现POST请求处理：
    ```typescript
    export async function onRequestPost(context) {
      const { request } = context;
      const body = await request.json();
      const { renming, sitian } = body;

      // 参数验证
      if (!renming || !sitian) {
        return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 });
      }

      // 调用计算函数
      const result = calculate(renming, sitian);

      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    ```
  - 导入src/calculator.ts中的calculate函数
  - 添加CORS头部（可选，方便测试）

  **Must NOT do**:
  - 不在API层实现计算逻辑（调用calculator）
  - 不添加复杂的错误处理（基础验证即可）

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Cloudflare Pages Functions标准实现，快速完成
  - **Skills**: []
  - **Skills Evaluated but Omitted**: 无

  **Parallelization**:
  - **Can Run In Parallel**: NO (depends on Task 2)
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 7
  - **Blocked By**: Task 2 (calculator逻辑), Task 1 (目录结构)

  **References**:
  - Cloudflare Pages Functions文档: https://developers.cloudflare.com/pages/functions/
  - 用户需求中的API输出格式

  **Acceptance Criteria**:
  - [ ] /functions/api/calculate.ts 文件存在
  - [ ] POST请求正确处理JSON body
  - [ ] 返回正确的JSON响应
  - [ ] 参数验证工作正常

  **QA Scenarios**:

  Scenario: 测试API接口 - 有效参数
    Tool: Bash (curl)
    Preconditions: 本地运行 wrangler pages dev .
    Steps:
      1. curl -X POST http://localhost:8788/api/calculate \
         -H "Content-Type: application/json" \
         -d '{"renming":"子","sitian":"午"}'
      2. 验证响应是有效的JSON
      3. 验证JSON包含renming, sitian, sidi, siren, bingjing, bingqi字段
    Expected Result: HTTP 200, JSON响应包含所有字段
    Failure Indicators: HTTP 4xx/5xx, JSON格式错误, 缺少字段
    Evidence: .sisyphus/evidence/task-4-api-test-valid.json

  Scenario: 测试API接口 - 缺少参数
    Tool: Bash (curl)
    Preconditions: 本地运行 wrangler pages dev .
    Steps:
      1. curl -X POST http://localhost:8788/api/calculate \
         -H "Content-Type: application/json" \
         -d '{"renming":"子"}'
      2. 验证响应状态码为400
    Expected Result: HTTP 400, 错误信息
    Failure Indicators: HTTP 200或缺少错误提示
    Evidence: .sisyphus/evidence/task-4-api-test-missing.txt

  **Evidence to Capture**:
  - [ ] .sisyphus/evidence/task-4-api-test-valid.json
  - [ ] .sisyphus/evidence/task-4-api-test-missing.txt

  **Commit**: YES
  - Message: `feat: implement API endpoint /api/calculate`
  - Files: `functions/api/calculate.ts`
  - Pre-commit: `npx tsc --noEmit functions/api/calculate.ts`

---

- [ ] 5. 单元测试编写 (/tests/calculator.test.ts)

  **What to do**:
  - 创建 /tests/calculator.test.ts 文件
  - 使用vitest编写测试用例：
    - 测试参数验证（无效地支）
    - 测试计算逻辑（多个示例）：
      - calculate('子', '午') → 验证所有字段
      - calculate('丑', '未') → 验证所有字段
      - calculate('寅', '申') → 验证所有字段
    - 测试边界情况（循环查找）
  - 运行测试：npm test

  **Must NOT do**:
  - 不测试API层（那是集成测试）
  - 不写冗余的测试用例

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 单元测试编写，快速完成
  - **Skills**: []
  - **Skills Evaluated but Omitted**: 无

  **Parallelization**:
  - **Can Run In Parallel**: NO (depends on Task 2, 3)
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 7
  - **Blocked By**: Task 2 (calculator逻辑), Task 3 (测试环境)

  **References**:
  - Vitest文档: https://vitest.dev/guide/
  - src/calculator.ts - 要测试的函数

  **Acceptance Criteria**:
  - [ ] /tests/calculator.test.ts 文件存在
  - [ ] npm test 运行成功
  - [ ] 所有测试用例通过（至少3个主要用例）
  - [ ] 测试覆盖率 > 80%

  **QA Scenarios**:

  Scenario: 运行单元测试
    Tool: Bash (npm)
    Preconditions: Task 2, 3, 5完成
    Steps:
      1. npm test
      2. 检查输出：PASS 数量，失败数量
      3. 验证退出码为0（成功）
    Expected Result: Tests passed, exit code 0
    Failure Indicators: Tests failed, exit code 1
    Evidence: .sisyphus/evidence/task-5-test-result.txt

  **Evidence to Capture**:
  - [ ] .sisyphus/evidence/task-5-test-result.txt

  **Commit**: YES
  - Message: `test: add unit tests for calculator`
  - Files: `tests/calculator.test.ts`
  - Pre-commit: `npm test`

---

- [ ] 6. HTML测试页面 (/public/index.html)

  **What to do**:
  - 创建 /public/index.html 文件
  - 实现简单界面：
    - 两个下拉菜单：选择人命、司天（地支选项）
    - 提交按钮
    - 结果显示区域（显示JSON响应）
  - 使用原生HTML/JS实现（不依赖框架）：
    ```html
    <!DOCTYPE html>
    <html>
    <head><title>六气甲子医算测试</title></head>
    <body>
      <h1>六气甲子医算 API 测试</h1>
      <select id="renming">...</select>
      <select id="sitian">...</select>
      <button onclick="calculate()">计算</button>
      <pre id="result"></pre>
      <script>
        async function calculate() {
          const renming = document.getElementById('renming').value;
          const sitian = document.getElementById('sitian').value;
          const response = await fetch('/api/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ renming, sitian })
          });
          const data = await response.json();
          document.getElementById('result').textContent = JSON.stringify(data, null, 2);
        }
      </script>
    </body>
    </html>
    ```

  **Must NOT do**:
  - 不使用React/Vue等框架
  - 不添加样式（或极简样式）
  - 不实现复杂的交互逻辑

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 简单HTML页面，快速完成
  - **Skills**: []
  - **Skills Evaluated but Omitted**: `playwright` (不需要，这是实现不是测试)

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 5, both depend on Task 1)
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 7
  - **Blocked By**: Task 1 (目录结构)

  **References**:
  - 用户需求：简单HTML测试页
  - Cloudflare Pages静态资源: https://developers.cloudflare.com/pages/configuration/serving-pages/

  **Acceptance Criteria**:
  - [ ] /public/index.html 文件存在
  - [ ] 包含两个下拉菜单（人命、司天）
  - [ ] 包含提交按钮和结果显示区域
  - [ ] JavaScript正确调用API并显示结果

  **QA Scenarios**:

  Scenario: 测试HTML页面功能
    Tool: Playwright
    Preconditions: 本地运行 wrangler pages dev .
    Steps:
      1. 打开 http://localhost:8788
      2. 选择人命下拉菜单，选择"子"
      3. 选择司天下拉菜单，选择"午"
      4. 点击"计算"按钮
      5. 等待结果显示
      6. 验证结果区域包含JSON内容
    Expected Result: 页面显示计算结果JSON
    Failure Indicators: 页面报错，无法选择，无结果显示
    Evidence: .sisyphus/evidence/task-6-html-test.png

  **Evidence to Capture**:
  - [ ] .sisyphus/evidence/task-6-html-test.png

  **Commit**: YES
  - Message: `feat: add HTML test page`
  - Files: `public/index.html`
  - Pre-commit: 无（HTML不需要编译）

---

- [ ] 7. 本地集成测试

  **What to do**:
  - 启动本地开发服务器：npx wrangler pages dev .
  - 使用curl测试API：
    - 有效参数测试
    - 缺少参数测试
    - 无效参数测试
  - 在浏览器中测试HTML页面
  - 记录测试结果

  **Must NOT do**:
  - 不修改代码（只测试）
  - 不部署到生产环境

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 集成测试，快速验证
  - **Skills**: [`playwright`] (for HTML page testing)
  - **Skills Evaluated but Omitted**: 无

  **Parallelization**:
  - **Can Run In Parallel**: NO (depends on Task 4, 5, 6)
  - **Parallel Group**: Wave 3
  - **Blocks**: Task F1-F4
  - **Blocked By**: Task 4 (API), Task 5 (测试), Task 6 (HTML)

  **References**:
  - Wrangler开发命令: https://developers.cloudflare.com/workers/wrangler/commands/#dev
  - 之前任务的输出

  **Acceptance Criteria**:
  - [ ] 本地服务器启动成功
  - [ ] API测试通过（curl命令）
  - [ ] HTML页面测试通过（浏览器）
  - [ ] 所有功能正常工作

  **QA Scenarios**:

  Scenario: 完整集成测试 - API + HTML
    Tool: Bash (curl) + Playwright
    Preconditions: Task 4, 5, 6完成
    Steps:
      1. 启动本地服务器（后台）：npx wrangler pages dev . &
      2. 等待服务器启动（sleep 5）
      3. curl测试API：curl -X POST http://localhost:8788/api/calculate -H "Content-Type: application/json" -d '{"renming":"子","sitian":"午"}'
      4. 验证JSON响应正确
      5. 使用Playwright打开页面并测试
    Expected Result: API返回正确JSON，HTML页面正常工作
    Failure Indicators: API报错，页面无法加载
    Evidence: .sisyphus/evidence/task-7-integration.txt, task-7-page.png

  **Evidence to Capture**:
  - [ ] .sisyphus/evidence/task-7-integration.txt
  - [ ] .sisyphus/evidence/task-7-page.png

  **Commit**: NO (只是测试，不提交)

---

- [ ] 8. 部署配置 + README

  **What to do**:
  - 创建 README.md：
    - 项目介绍（六气甲子医算）
    - 本地开发指南
    - API使用说明（POST /api/calculate, 参数说明, 响应格式）
    - 部署指南（使用提供的参数）
  - 创建 .gitignore（排除node_modules, .wrangler, 等）
  - 部署命令示例：
    ```bash
    CLOUDFLARE_API_TOKEN=xxx CLOUDFLARE_ACCOUNT_ID=xxx npx wrangler pages deploy . --project-name=liuqi-jiazi-yisuan
    ```

  **Must NOT do**:
  - 不在README中暴露完整API Token（使用示例或环境变量）
  - 不添加冗长的文档

  **Recommended Agent Profile**:
  - **Category**: `writing`
    - Reason: 编写文档和README
  - **Skills**: []
  - **Skills Evaluated but Omitted**: 无

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 7, both in Wave 3)
  - **Parallel Group**: Wave 3
  - **Blocks**: Task F1-F4
  - **Blocked By**: Task 1 (项目初始化)

  **References**:
  - 用户提供的部署参数
  - 标准README模板

  **Acceptance Criteria**:
  - [ ] README.md 文件存在
  - [ ] 包含项目介绍、开发指南、API说明、部署指南
  - [ ] .gitignore 文件存在
  - [ ] 部署命令清晰明确

  **QA Scenarios**:

  Scenario: 验证README完整性
    Tool: Bash (cat)
    Preconditions: Task 8完成
    Steps:
      1. cat README.md | grep -q "六气甲子医算" && echo "PASS: 项目介绍存在"
      2. cat README.md | grep -q "npm install" && echo "PASS: 开发指南存在"
      3. cat README.md | grep -q "/api/calculate" && echo "PASS: API说明存在"
      4. cat README.md | grep -q "wrangler pages deploy" && echo "PASS: 部署指南存在"
    Expected Result: 所有检查输出 PASS
    Failure Indicators: 任何检查失败
    Evidence: .sisyphus/evidence/task-8-readme-check.txt

  **Evidence to Capture**:
  - [ ] .sisyphus/evidence/task-8-readme-check.txt

  **Commit**: YES
  - Message: `docs: add README and deployment config`
  - Files: `README.md`, `.gitignore`
  - Pre-commit: 无

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
>
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**
> **Never mark F1-F4 as checked before getting user's okay.** Rejection or user feedback -> fix -> re-run -> present again -> wait for okay.

- [ ] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, curl endpoint, run command). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Run `npx tsc --noEmit` + linter + `npm test`. Review all changed files for: `as any`, `@ts-ignore`, empty catches, console.log in prod, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic names (data/result/item/temp).
  Output: `Build [PASS/FAIL] | Lint [PASS/FAIL] | Tests [N pass/N fail] | Files [N clean/N issues] | VERDICT`

- [ ] F3. **Real Manual QA** — `unspecified-high` (+ `playwright` skill if UI)
  Start from clean state. Execute EVERY QA scenario from EVERY task — follow exact steps, capture evidence. Test cross-task integration (features working together, not isolation). Test edge cases: empty state, invalid input, rapid actions. Save to `.sisyphus/evidence/final-qa/`.
  Output: `Scenarios [N/N pass] | Integration [N/N] | Edge Cases [N tested] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual diff (git log/diff). Verify 1:1 — everything in spec was built (no missing), nothing beyond spec was built (no creep). Check "Must NOT do" compliance. Detect cross-task contamination: Task N touching Task M's files. Flag unaccounted changes.
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | Unaccounted [CLEAN/N files] | VERDICT`

---

## Commit Strategy

- **1**: `chore: init project structure with wrangler config` - package.json, wrangler.toml, npm install
- **2**: `feat: implement core calculation logic` - src/calculator.ts, npx tsc --noEmit
- **3**: `test: setup vitest testing environment` - package.json, vitest.config.ts, npm install
- **4**: `feat: implement API endpoint /api/calculate` - functions/api/calculate.ts, npx tsc --noEmit
- **5**: `test: add unit tests for calculator` - tests/calculator.test.ts, npm test
- **6**: `feat: add HTML test page` - public/index.html
- **7**: (no commit - testing only)
- **8**: `docs: add README and deployment config` - README.md, .gitignore

---

## Success Criteria

### Verification Commands
```bash
# 本地开发测试
npx wrangler pages dev .

# 在另一个终端测试API
curl -X POST http://localhost:8788/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"renming":"子","sitian":"午"}'

# 运行单元测试
npm test

# 部署到Cloudflare Pages
CLOUDFLARE_API_TOKEN=XoxEzegAwAiWVP9bjtD9NjdWwOzeHWAB9tqmQQH1 \
CLOUDFLARE_ACCOUNT_ID=8c2c26abfa69e5889751aa7542a34342 \
npx wrangler pages deploy . --project-name=liuqi-jiazi-yisuan
```

### Final Checklist
- [ ] All "Must Have" present
- [ ] All "Must NOT Have" absent
- [ ] All tests pass (npm test)
- [ ] API returns correct JSON for valid inputs
- [ ] HTML test page works in browser
- [ ] Project successfully deployed to Cloudflare Pages
- [ ] README.md contains all required sections

