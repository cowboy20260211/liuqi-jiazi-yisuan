# Learnings - 六气甲子医算项目

## 项目约定
- 使用TypeScript编写所有逻辑
- 不使用外部库（纯TS实现）
- 地支数组：['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
- 地支阴阳：[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0] (1=阳, 0=阴)

## 计算逻辑
- 司地：从司天前进3位 (index + 3) % 12
- 司人：根据司地阴阳，阳进1位，阴退1位
- 病经：从人命放到司人处，顺排到司天处（循环查找）
- 病气：根据病经地支查BINGQI_MAP

## 技术栈
- Cloudflare Pages Functions (API路由在 /functions 目录)
- Vitest (单元测试)
- 原生HTML/JS (测试页面，不使用框架)

## 部署参数
- CLOUDFLARE_API_TOKEN: XoxEzegAwAiWVP9bjtD9NjdWwOzeHWAB9tqmQQH1
- CLOUDFLARE_ACCOUNT_ID: 8c2c26abfa69e5889751aa7542a34342
