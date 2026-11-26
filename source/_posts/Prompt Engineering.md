---
title: Prompt Engineering
date: 2026-11-26 22:14:29
tags: [Prompt, LLM]
categories: [学习笔记, AI]
description: Prompt 工程速记：提示词结构、调参与自我修正，以及 RTF、ICIO、CoT、ToT、GoT、ReAct、BROKE、CO-STAR、CRISPE、AIDA、PAS 等框架。
---

## 输入与基础

- 输入层意图检测：屏蔽用户攻击
- 调优 - 需求 - 细节
- **instruction - context - examples - input - output format**
- temperature：↑ 创作类；↓ 学术类
- 用 `[***] | 【***】` 做 AI 替换输出

## 设计流程

- chain of thought 思维链 CoT
- 需求拆解 - 提示词设计 - 测试验证
- 效果评估 - 迭代优化 - 模板化复用
- 要素清单：role - task - style - format - point - example（1~5）- chunk - CoT - tool - 控制变量法 - edge
- 复述、自我修正：初步回答 - 自我检查 - 列出问题 - 修正并输出最终答案

## 框架

- <span class="text-accent">RTF：role - task - format；简单</span>
- <span class="text-accent">ICIO：instruction - context - input - output；已有基础</span>
- <span class="text-accent">CoT：问题 - 步骤 - 步骤 - ...；一步步推理；故障排查</span>
- <span class="text-accent">ToT：生成 - 评估 - 剪枝 - 回溯；迭代；设计</span>
- <span class="text-accent">GoT：生成 -> 评估 -> 分支拓展 / 节点融合；策划 | 架构设计</span>
- <span class="text-accent">RAG-Prompting</span>
- <span class="text-accent">ReAct：思考 - 行动 - 观察；代码执行</span>
- <span class="text-accent">BROKE：background - role - objective - key results - evolve（迭代）；方案</span>
- CO-STAR：context - objective - style - tone（情绪）- audience - response；公告
- CRISPE：context - role - instruction - style - persona（情绪 & 态度）- output；文案
- AIDA：attention（title | hook）- interest（痛点 & 需求）- desire（场景化描述）- action（号召）；营销
- PAS：problem - agitation（严重后果）- solution；短广

## 提示词自动化

- 提示词自动化：任务定义（元提示模板）- 候选生成（不同风格 & 侧重点）- 自动评估（准确性 & 可控性 & 完整性）- 筛选优化 - 迭代优化
