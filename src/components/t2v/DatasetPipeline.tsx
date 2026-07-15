'use client';

import FadeIn from "@/components/animations/FadeIn";
import { t2vProjectData } from "@/data/t2vProject";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function DatasetPipeline() {
  const { dataset } = t2vProjectData;

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn delay={0.1}>
          
          {/* 1. Hero Section */}
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{dataset.hero.title}</h2>
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-6">
              {dataset.hero.enTitle}
            </p>
            <p className="text-gray-500 text-lg md:text-xl max-w-3xl leading-relaxed">
              {dataset.hero.desc}
            </p>
          </div>

          {/* 2. Benchmark Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {dataset.philosophy.map((item, idx) => (
              <div key={idx} className="border-t border-gray-200 pt-6">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{item.title}</div>
                <div className="text-lg font-bold text-gray-900 mb-3">{item.name}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 3. Construction Pipeline */}
          <div className="mb-24">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 text-center md:text-left">
              构建流程 Pipeline
            </h3>
            <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center md:justify-between gap-4 md:gap-0 bg-gray-50/50 border border-gray-100 rounded-3xl p-8 md:p-10">
              {dataset.pipeline.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center">
                  <div className={`text-sm font-bold text-center ${idx === 0 || idx === dataset.pipeline.length - 1 ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step}
                  </div>
                  {idx < dataset.pipeline.length - 1 && (
                    <>
                      <ArrowRight className="hidden md:block w-4 h-4 text-gray-300 mx-4" />
                      <ArrowDown className="md:hidden w-4 h-4 text-gray-300 my-3" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4 & 5. Query Transformation Case */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-center md:text-left">
              Query 强化改写案例
            </h3>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
              <div className="mb-6">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">原始 Query</div>
                <div className="text-gray-500 text-sm line-through decoration-gray-300">
                  {dataset.transformationCase.original}
                </div>
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <ArrowDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Prompt 强化改写</div>
                <div className="text-gray-900 font-medium leading-relaxed bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                  {dataset.transformationCase.enhanced}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">评测目标 (Target)</div>
                <div className="flex flex-wrap gap-2">
                  {dataset.transformationCase.target.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}