---
title: AI
date: 2026-11-26 21:06:04
tags: [AI, LLM, Agent, RAG, Prompt]
categories: [学习笔记, AI]
description: 一张速记式的 AI 知识地图，串联机器学习、大模型训练、Prompt、Token、RAG、Tool、MCP、Agent 与模型压缩。
---

## 总览

- 人工智能：感知 - 理解 - 学习 - 推理 - 决策 - 交流

## 机器学习与深度学习

- 机器学习 ML：数据 - 训练 - 模型（特征标签）；预测（规律）
- 监督学习 / 无监督学习：答案 | 标签
- 强化学习：奖惩机制 | 行动
- 深度学习 DL：前向预测 - 计算损失 - 反向传播 - 更新参数
- 大语言模型 LLM：理解 - 生成 - 推理；预测

## 大模型的训练与上线

- 训练上线链路：随机初始化（参数）- 海量数据 - 预训练（懂）- 指令微调（做）- 对齐反馈（做好）- 模型上线 - 用户使用
- 幻觉：RAG | Tool Calling | 微调（高质量数据）| 验证
- 多模态（信息的不同表现形式）模型：理解 | 生成

## Prompt 提示词

- prompt 提示词：给 AI 的任务说明书（给案例 - 分步骤 - 自我检查）
- prompt engineering：清晰表达

![Prompt 提示词结构图](/images/ai-notes/prompt-framework.jpeg)

## Token 与上下文

- token：tokenizer 子词切分（复用 + 拆分）
- 编解码链路：`encode -> tokenId -> LLM -> decode -> token`
- 表示与计算：`embedding (特征 & 关系) -> transformer -> attention -> 预测 -> add context`
- context window：分段投喂 | 强调 | 精简
- memory：固化参数 | context window & <span class="text-accent">平台记忆 & agent 记忆</span>

## RAG 检索增强（what）

- 价值：知识时效性 | 接入 API | 减少无关 context | 按需检索 | 依据
- 流程：`read - 切分 - embedding - 索引 - 检索 - rerank (top-n) - 增强 context (prompt)`

## Tool 工具调用（how）

- 定义（name + description + param）+ 实现（function + return）
- tool calling：application 居中协调

## Agent

- agent：自主规划 + 行动 + 反馈 + 调整（循环）
- 长期记忆 + 权限 + 日志监控 + 人工审核

## MCP 协议

- MCP（Model Context Protocol）协议 -> 外部 tool calling
  - (application) Host：Client - Server
  - 能力：tools - resources - prompts

## Skill

- package/ 目录结构：
  - skill.md（核心说明）
  - references/（参考补充）
  - assets/（素材）
  - scripts/（脚本）
- 匹配规则：LLM | application

## Workflow

- 节点分工 - 数据传递 - 条件判断 - 循环执行

## Agent 的组成

- harness（马具）+ model（马）= agent：plugin
- harness 包含：context + memory | tools | 环境（sandbox）+ 权限 | 执行循环 | 日志监控

## 多 Agent 协作

- manager agent 协调：接收 - 拆分 - 分工 - 整合
- 协作模式：管理者 Orchestrator | 接力 Pipeline | 群体协作 mesh
- agent 之间通信：不同系统：A2A

## Super Agent

- 特征：context（持续）- 并行（高效）- 主动 - 稳定（持久）
- 设计要点：router - worker | 事件驱动 | 全双工 & 多渠道 | compute & state & env 分离 | 看门狗
- 目标：持续管理推进

## 模型压缩

- 模型蒸馏：小模型学习大模型；轻量化 | 专精任务
- 模型量化：降低参数精度（细节 down）；更轻更快；权衡：模型效果 | 资源占用
- 模型剪枝：
  - 非结构化（稀疏计算）：单独裁减（参数 | 连接）
  - 结构化：一整块结构
