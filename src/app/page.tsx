'use client';

import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import { ArrowRight, BarChart2, Users, Layers, Workflow, Video, Image as ImageIcon, FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const metrics = [
    { value: "20+", label: "管理标注人员", icon: <Users className="w-5 h-5 mb-2 text-indigo-500" /> },
    { value: "3", label: "多模态 AI 项目", icon: <Layers className="w-5 h-5 mb-2 text-indigo-500" /> },
    { value: "300+", label: "评测样本量", icon: <BarChart2 className="w-5 h-5 mb-2 text-indigo-500" /> },
    { value: "SOP", label: "评测标准落地", icon: <Workflow className="w-5 h-5 mb-2 text-indigo-500" /> },
  ];

  const projects = [
    {
      title: "T2V 文生视频模型评测",
      desc: "构建贴合真实用户场景的视频生成能力评测体系，量化物理规律与动作连贯性表现。",
      link: "/t2v-eval",
      icon: <Video className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "VLM 视觉理解能力评测",
      desc: "全链路评测多模态大模型在图像理解、OCR 及复杂推理等核心维度的真实能力界限。",
      link: "/vlm-eval",
      icon: <ImageIcon className="w-6 h-6 text-purple-500" />
    },
    {
      title: "图片 Caption 数据生产",
      desc: "端到端建立高质量图文数据集生产管线，规范标注体系并严格把控交付质量。",
      link: "/image-caption",
      icon: <FileText className="w-6 h-6 text-gray-700" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for new opportunities
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            谭耀铠
            <br />
            <span className="text-gradient">AI 项目助理</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-4 font-light">
            构建高价值评测体系与多模态AI数据流，加速模型能力落地。
          </p>
          <p className="text-md md:text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            擅长将抽象的模型能力转化为可量化的业务指标，连接算法研发与真实用户需求。
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-black hover:bg-gray-900 rounded-full transition-all group">
              关于我
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Project Directions */}
      <section className="mt-32">
        <FadeIn delay={0.5}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">项目方向</h2>
            <p className="text-gray-500">聚焦多模态模型评测与高质量数据体系建设</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Link href={project.link} key={i} className="block group">
                <Card className="h-full border-gray-100 group-hover:border-indigo-200 transition-colors p-8">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Metrics Section */}
      <section className="mt-24">
        <FadeIn delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <Card key={i} className="text-center p-8 flex flex-col items-center justify-center shadow-none border-gray-100 hover:shadow-none hover:bg-gray-50">
                {metric.icon}
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {metric.label}
                </div>
              </Card>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}