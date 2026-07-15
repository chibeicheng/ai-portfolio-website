'use client';

import FadeIn from "@/components/animations/FadeIn";
import { t2vProjectData } from "@/data/t2vProject";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ProjectReflection() {
  const { reflection } = t2vProjectData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">项目总结与能力沉淀</h2>
          </div>

          <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
              {reflection.intro}
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <h3 className="text-lg font-bold text-gray-900">核心能力提升</h3>
              </div>
              <ul className="space-y-4">
                {reflection.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="text-indigo-400 mr-3 text-lg leading-none mt-0.5">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col items-center">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
              下一个项目
            </span>
            <Link 
              href="/vlm-eval" 
              className="group flex items-center justify-between w-full max-w-lg bg-gray-50 hover:bg-gray-900 hover:text-white border border-gray-200 hover:border-gray-900 p-6 rounded-2xl transition-all duration-300"
            >
              <div>
                <div className="text-xs text-gray-500 group-hover:text-gray-400 mb-1">视觉语言模型多场景能力评测</div>
                <div className="text-xl font-bold text-gray-900 group-hover:text-white">ERNIE VLM 视觉理解评测项目</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white group-hover:bg-gray-800 flex items-center justify-center transition-colors">
                <ArrowRight className="w-5 h-5 text-gray-900 group-hover:text-white" />
              </div>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}