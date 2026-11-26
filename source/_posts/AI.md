---
title: AI
date: 2026-11-26 21:06:04
tags: [AI, LLM, Agent, RAG, Prompt]
categories: [学习笔记, AI]
description: 一张速记式的 AI 知识地图，串联机器学习、大模型训练、Prompt、Token、RAG、Tool、MCP、Agent 与模型压缩。
---

## 总览

- <span class="note-row"><span class="note-key">人工智能：</span><span class="note-val">感知 - 理解 - 学习 - 推理 - 决策 - 交流</span></span>

## 机器学习与深度学习

- <span class="note-row"><span class="note-key">机器学习 ML：</span><span class="note-val">数据 - 训练 - 模型（特征标签）；预测（规律）</span></span>
- <span class="note-row"><span class="note-key">监督学习 / 无监督学习：</span><span class="note-val">答案 | 标签</span></span>
- <span class="note-row"><span class="note-key">强化学习：</span><span class="note-val">奖惩机制 | 行动</span></span>
- <span class="note-row"><span class="note-key">深度学习 DL：</span><span class="note-val">前向预测 - 计算损失 - 反向传播 - 更新参数</span></span>
- <span class="note-row"><span class="note-key">大语言模型 LLM：</span><span class="note-val">理解 - 生成 - 推理；预测</span></span>

## 大模型的训练与上线

- <span class="note-row"><span class="note-key">训练上线链路：</span><span class="note-val">随机初始化（参数）- 海量数据 - 预训练（懂）- 指令微调（做）- 对齐反馈（做好）- 模型上线 - 用户使用</span></span>
- <span class="note-row"><span class="note-key">幻觉：</span><span class="note-val">RAG | Tool Calling | 微调（高质量数据）| 验证</span></span>
- <span class="note-row"><span class="note-key">多模态（信息的不同表现形式）模型：</span><span class="note-val">理解 | 生成</span></span>

## Prompt 提示词

- <span class="note-row"><span class="note-key">prompt 提示词：</span><span class="note-val">给 AI 的任务说明书（给案例 - 分步骤 - 自我检查）</span></span>
- <span class="note-row"><span class="note-key">prompt engineering：</span><span class="note-val">[清晰表达](/blog/2026/11/26/Prompt%20Engineering/)</span></span>

![Prompt 提示词结构图](/images/ai-notes/prompt-framework.jpeg)

## Token 与上下文

- <span class="note-row"><span class="note-key">token：</span><span class="note-val">tokenizer 子词切分（复用 + 拆分）</span></span>
- <span class="note-row"><span class="note-key">编解码链路：</span><span class="note-val">`encode -> tokenId -> LLM -> decode -> token`</span></span>
- <span class="note-row"><span class="note-key">表示与计算：</span><span class="note-val">`embedding (特征 & 关系) -> transformer -> attention -> 预测 -> add context`</span></span>
- <span class="note-row"><span class="note-key">context window：</span><span class="note-val">分段投喂 | 强调 | 精简</span></span>
- <span class="note-row"><span class="note-key">memory：</span><span class="note-val">固化参数 | context window & <span class="text-accent">平台记忆 & agent 记忆</span></span></span>

## RAG 检索增强（what）

- <span class="note-row"><span class="note-key">价值：</span><span class="note-val">知识时效性 | 接入 API | 减少无关 context | 按需检索 | 依据</span></span>
- <span class="note-row"><span class="note-key">流程：</span><span class="note-val">`read - 切分 - embedding - 索引 - 检索 - rerank (top-n) - 增强 context (prompt)`</span></span>

## Tool 工具调用（how）

- 定义（name + description + param）+ 实现（function + return）
- <span class="note-row"><span class="note-key">tool calling：</span><span class="note-val">application 居中协调</span></span>

## Agent

- <span class="note-row"><span class="note-key">agent：</span><span class="note-val">自主规划 + 行动 + 反馈 + 调整（循环）</span></span>
- 长期记忆 + 权限 + 日志监控 + 人工审核

## MCP 协议

- MCP（Model Context Protocol）协议 -> 外部 tool calling
  - <span class="note-row"><span class="note-key">(application) Host：</span><span class="note-val">Client - Server</span></span>
  - <span class="note-row"><span class="note-key">能力：</span><span class="note-val">tools - resources - prompts</span></span>

## Skill

- package/ 目录结构：
  - skill.md（核心说明）
  - references/（参考补充）
  - assets/（素材）
  - scripts/（脚本）
- <span class="note-row"><span class="note-key">匹配规则：</span><span class="note-val">LLM | application</span></span>

## Workflow

- 节点分工 - 数据传递 - 条件判断 - 循环执行

## Agent 的组成

- <span class="note-row"><span class="note-key">harness（马具）+ model（马）= agent：</span><span class="note-val">plugin</span></span>
- <span class="note-row"><span class="note-key">harness 包含：</span><span class="note-val">context + memory | tools | 环境（sandbox）+ 权限 | 执行循环 | 日志监控</span></span>

## 多 Agent 协作

- <span class="note-row"><span class="note-key">manager agent 协调：</span><span class="note-val">接收 - 拆分 - 分工 - 整合</span></span>
- <span class="note-row"><span class="note-key">协作模式：</span><span class="note-val">管理者 Orchestrator | 接力 Pipeline | 群体协作 mesh</span></span>
- <span class="note-row"><span class="note-key">agent 之间通信：</span><span class="note-val">不同系统：A2A</span></span>

## Super Agent

- <span class="note-row"><span class="note-key">特征：</span><span class="note-val">context（持续）- 并行（高效）- 主动 - 稳定（持久）</span></span>
- <span class="note-row"><span class="note-key">设计要点：</span><span class="note-val">router - worker | 事件驱动 | 全双工 & 多渠道 | compute & state & env 分离 | 看门狗</span></span>
- <span class="note-row"><span class="note-key">目标：</span><span class="note-val">持续管理推进</span></span>

## 模型压缩

- <span class="note-row"><span class="note-key">模型蒸馏：</span><span class="note-val">小模型学习大模型；轻量化 | 专精任务</span></span>
- <span class="note-row"><span class="note-key">模型量化：</span><span class="note-val">降低参数精度（细节 down）；更轻更快；权衡：模型效果 | 资源占用</span></span>
- 模型剪枝：
  - <span class="note-row"><span class="note-key">非结构化（稀疏计算）：</span><span class="note-val">单独裁减（参数 | 连接）</span></span>
  - <span class="note-row"><span class="note-key">结构化：</span><span class="note-val">一整块结构</span></span>
