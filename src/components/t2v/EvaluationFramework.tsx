'use client';

import FadeIn from "@/components/animations/FadeIn";
import { t2vProjectData } from "@/data/t2vProject";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function EvaluationFramework() {
  const { framework } = t2vProjectData;

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn delay={0.1}>
          {/* Header */}
          <div className="mb-16">
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-3">
              Evaluation Framework Pipeline
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">评测体系设计</h2>
          </div>

          <div className="space-y-12">
            
            {/* ① 评测原则 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">1</div>
                <h3 className="text-xl font-bold text-gray-900">评测原则 <span className="text-gray-400 font-normal ml-2">Evaluation Principles</span></h3>
              </div>
              <div className="ml-4 pl-8 border-l border-gray-200">
                <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl text-gray-600 leading-relaxed text-lg font-medium">
                  {framework.principles}
                </div>
              </div>
            </div>

            {/* ② & ③ 一级维度与能力拆解 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">2</div>
                <h3 className="text-xl font-bold text-gray-900">评测维度与能力拆解 <span className="text-gray-400 font-normal ml-2">Capability Breakdown</span></h3>
              </div>
              
              <div className="ml-4 pl-8 border-l border-gray-200 space-y-8">
                
                {framework.dimensions.map((dim, dimIdx) => {
                  const items = dim.flow || dim.priorities || [];
                  const color = dim.color;
                  
                  return (
                    <div key={dimIdx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                      <div className={`px-6 py-5 border-b ${
                        color === 'indigo' ? 'bg-indigo-50/30 border-indigo-100' :
                        color === 'emerald' ? 'bg-emerald-50/30 border-emerald-100' :
                        'bg-amber-50/30 border-amber-100'
                      }`}>
                        <div className="flex items-baseline justify-between">
                          <h4 className="text-lg font-bold text-gray-900">{dim.title}</h4>
                          <span className={`text-xs font-mono uppercase tracking-widest ${
                            color === 'indigo' ? 'text-indigo-600/70' :
                            color === 'emerald' ? 'text-emerald-600/70' :
                            'text-amber-600/70'
                          }`}>{dim.enTitle}</span>
                        </div>
                      </div>
                      <div className="p-6 md:p-8 space-y-4">
                        {items.map((item, idx) => {
                          let isPrimary = false;
                          let isBonus = false;
                          let levelBadge = '';

                          if ((item as { level?: string }).level) {
                            isPrimary = (item as { level?: string }).level === 'Priority 1';
                            isBonus = (item as { level?: string }).level === 'Bonus';
                            levelBadge = (item as { level?: string }).level || '';
                          } else {
                            isPrimary = idx === 0;
                            levelBadge = `Priority ${idx + 1}`;
                          }

                          let bgClass = "bg-white hover:bg-gray-50/50";
                          let borderClass = "border-gray-100 hover:border-gray-200";
                          let badgeBg = "bg-gray-100";
                          let badgeText = "text-gray-500";
                          let titleClass = "text-gray-900 text-base font-bold";
                          let descClass = "text-gray-500";
                          let tagBg = "bg-gray-50";
                          let tagText = "text-gray-500";
                          let tagBorder = "border-gray-200";

                          if (isPrimary) {
                            bgClass = color === 'indigo' ? 'bg-indigo-50/40' : color === 'emerald' ? 'bg-emerald-50/40' : 'bg-amber-50/40';
                            borderClass = color === 'indigo' ? 'border-indigo-100' : color === 'emerald' ? 'border-emerald-100' : 'border-amber-100';
                            badgeBg = color === 'indigo' ? 'bg-indigo-100/50' : color === 'emerald' ? 'bg-emerald-100/50' : 'bg-amber-100/50';
                            badgeText = color === 'indigo' ? 'text-indigo-600' : color === 'emerald' ? 'text-emerald-600' : 'text-amber-600';
                            titleClass = color === 'indigo' ? 'text-indigo-900 text-lg font-bold' : color === 'emerald' ? 'text-emerald-900 text-lg font-bold' : 'text-amber-900 text-lg font-bold';
                            descClass = color === 'indigo' ? 'text-indigo-800/80' : color === 'emerald' ? 'text-emerald-800/80' : 'text-amber-800/80';
                            tagBg = "bg-white";
                            tagText = color === 'indigo' ? 'text-indigo-600' : color === 'emerald' ? 'text-emerald-600' : 'text-amber-600';
                            tagBorder = color === 'indigo' ? 'border-indigo-100' : color === 'emerald' ? 'border-emerald-100' : 'border-amber-100';
                          }

                          if (isBonus) {
                            bgClass = "bg-gradient-to-br from-amber-50/50 to-orange-50/30";
                            borderClass = "border-amber-100/50";
                            badgeBg = "bg-amber-100/50";
                            badgeText = "text-amber-600";
                            titleClass = "text-amber-900 text-base font-bold";
                            descClass = "text-amber-800/80";
                            tagBg = "bg-white";
                            tagText = "text-amber-600";
                            tagBorder = "border-amber-100";
                          }

                          return (
                            <div key={idx} className={`p-5 rounded-xl border flex flex-col md:flex-row md:items-start gap-3 md:gap-6 transition-all duration-300 ${bgClass} ${borderClass}`}>
                              <div className="md:w-1/4 flex flex-col items-start shrink-0">
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2 ${badgeBg} ${badgeText}`}>
                                  {levelBadge}
                                </span>
                                <span className={titleClass}>{item.name}</span>
                              </div>
                              <div className="md:w-3/4 flex flex-col justify-center">
                                <p className={`text-sm leading-relaxed ${descClass}`}>
                                  {item.desc}
                                </p>
                                {(item as { tags?: string[] }).tags && (
                                  <div className="flex flex-wrap gap-2 mt-3">
                                    {(item as { tags?: string[] }).tags!.map((tag: string, tIdx: number) => (
                                      <span key={tIdx} className={`text-xs px-2.5 py-1 rounded-md border ${tagBg} ${tagText} ${tagBorder}`}>
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* ④ 统一评分机制 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">3</div>
                <h3 className="text-xl font-bold text-gray-900">统一评分机制 <span className="text-gray-400 font-normal ml-2">Independent Scoring & Comparison</span></h3>
              </div>
              <div className="ml-4 pl-8 border-l border-gray-200 space-y-6">
                
                {/* 1-5分 绝对能力评价 */}
                <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">ABSOLUTE SCORING</div>
                    <div className="text-3xl font-black text-gray-900">1 ~ 5 分</div>
                    <div className="text-sm text-gray-500 mt-1">三大维度独立绝对评分</div>
                  </div>
                  <div className="flex-grow w-full flex flex-col md:flex-row gap-2">
                    {framework.scoring.map((score, idx) => (
                      <div key={idx} className="flex-1 flex flex-row md:flex-col items-center justify-between md:justify-center p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="text-lg font-bold text-gray-900 md:mb-1">{score.score}</div>
                        <div className="text-sm text-gray-500 font-medium">{score.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GBS 竞品对比法 */}
                <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
                    <div>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">RELATIVE COMPARISON</div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{framework.gbs?.title}</div>
                      <div className="text-sm text-gray-500">{framework.gbs?.subtitle}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {framework.gbs?.levels.map((level, idx) => (
                      <div key={idx} className={`p-6 md:p-8 rounded-2xl border ${level.border} ${level.bg} flex flex-col justify-between h-full`}>
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-3 h-3 rounded-full ${level.label === 'Good' ? 'bg-emerald-500' : level.label === 'Same' ? 'bg-gray-400' : 'bg-rose-500'}`}></div>
                            <div className={`text-2xl font-black ${level.color}`}>{level.label}</div>
                          </div>
                          <div className="text-base font-bold text-gray-900 mb-2">{level.title}</div>
                        </div>
                        <div className="text-sm font-medium text-gray-600 leading-relaxed">
                          {level.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500 border border-gray-100 flex items-start">
                    <span className="text-gray-400 mr-2 mt-0.5">ℹ</span>
                    <span>{framework.gbs?.description}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ⑤ Badcase归因 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">4</div>
                <h3 className="text-xl font-bold text-gray-900">Badcase 归因 <span className="text-gray-400 font-normal ml-2">Root Cause Analysis</span></h3>
              </div>
              <div className="ml-4 pl-8 border-l border-gray-200">
                <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                  <div className="flex-1 w-full text-center px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700">
                    一级评测维度
                  </div>
                  <ArrowRight className="hidden md:block w-5 h-5 text-gray-400 shrink-0" />
                  <div className="md:hidden"><ArrowRight className="w-5 h-5 text-gray-400 rotate-90" /></div>
                  <div className="flex-1 w-full text-center px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700">
                    二级能力细项
                  </div>
                  <ArrowRight className="hidden md:block w-5 h-5 text-gray-400 shrink-0" />
                  <div className="md:hidden"><ArrowRight className="w-5 h-5 text-gray-400 rotate-90" /></div>
                  <div className="flex-1 w-full text-center px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg shadow-sm text-sm font-medium text-white">
                    归因标签 (Attribution Tag)
                  </div>
                </div>
              </div>
            </div>

            {/* ⑥ 模型优化建议 (闭环) */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-bold text-indigo-600">5</div>
                <h3 className="text-xl font-bold text-gray-900">评测闭环与模型优化 <span className="text-gray-400 font-normal ml-2">Optimization Pipeline</span></h3>
              </div>
              <div className="ml-4 pl-8">
                {/* 最后一步不需要左侧边线，因此这里没有 border-l */}
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-4 p-6 rounded-2xl border border-indigo-100 bg-indigo-50/30">
                  {["评测结果", "Badcase", "能力差距", "优化建议", "模型迭代"].map((step, idx) => (
                    <div key={idx} className="flex items-center justify-center w-full md:w-auto">
                      <div className="px-5 py-2.5 rounded-full bg-white border border-indigo-100 text-indigo-700 text-sm font-bold shadow-sm whitespace-nowrap">
                        {step}
                      </div>
                      {idx < 4 && (
                        <ChevronRight className="w-5 h-5 text-indigo-300 ml-2 md:ml-4 hidden md:block" />
                      )}
                    </div>
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