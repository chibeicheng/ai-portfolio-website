'use client';

import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { Target, Database, Workflow, TerminalSquare } from "lucide-react";

export default function AboutPage() {
  const capabilities = [
    {
      title: "模型评测能力 (Model Evaluation)",
      icon: <Target className="w-6 h-6 text-indigo-500 mb-4" />,
      desc: "能够从 0 到 1 搭建针对 T2V、VLM 等多模态模型的评测框架，设计科学的评测指标（如物理规律、指令遵循、幻觉率），并主导客观自动化评测与主观人工评测的全流程落地。"
    },
    {
      title: "数据体系能力 (Data Pipeline)",
      icon: <Database className="w-6 h-6 text-purple-500 mb-4" />,
      desc: "精通高质量数据集的建设管线，包括标签体系设计、Annotation Guideline 制定、数据清洗过滤，以及多级质量控制 (QC) 机制，保障数据交付的准确性与一致性。"
    },
    {
      title: "项目管理能力 (Project Management)",
      icon: <Workflow className="w-6 h-6 text-emerald-500 mb-4" />,
      desc: "具备 20+ 人标注与评测团队的管理经验。擅长通过 SOP 标准化流程降低沟通成本，推进评测与数据生产项目的高效执行与按期交付。"
    },
    {
      title: "AI工具提效能力 (AI Tooling & Workflow)",
      icon: <TerminalSquare className="w-6 h-6 text-blue-500 mb-4" />,
      desc: "熟练使用 Trae, Codex, Dify 等现代 AI 工具及 Python 脚本，自动化处理数据统计、Badcase 初筛与报告生成，将传统人工流程效率提升 30% 以上。"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <SectionHeading 
        title="关于我" 
        subtitle="AI 项目助理，在算法研发与真实用户价值之间搭建桥梁。"
      />

      <div className="grid md:grid-cols-12 gap-16 mt-12">
        <div className="md:col-span-5">
          <FadeIn delay={0.1}>
            <div className="prose prose-lg text-gray-600 font-light leading-relaxed max-w-none">
              <p className="mb-6">
                我是一名专注于大模型评测与数据体系建设的 <strong className="text-gray-900 font-medium">AI 项目助理</strong>。
              </p>
              <p className="mb-6">
                曾深度参与多项多模态大模型相关业务，涵盖文生视频、视觉语言模型理解以及高质量图文数据集生产。我坚信，在算法与算力日趋同质化的今天，<span className="text-indigo-600 font-medium">高质量的评测牵引和数据喂养</span>才是决定 AI 产品真正走向落地的核心壁垒。
              </p>
              <p>
                我的核心价值在于：<strong className="text-gray-900">定义好坏、制定标准、产出数据、推动落地。</strong>
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-7">
          <FadeIn delay={0.2}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">四大核心能力</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {capabilities.map((cap, index) => (
                <Card key={index} className="p-6 border-gray-100 hover:border-indigo-100">
                  {cap.icon}
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{cap.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}