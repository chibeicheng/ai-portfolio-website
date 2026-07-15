'use client';

import FadeIn from "@/components/animations/FadeIn";
import { t2vProjectData } from "@/data/t2vProject";
import { Check, ChevronRight } from "lucide-react";

export default function LifecycleTimeline() {
  const { lifecycle } = t2vProjectData;

  return (
    <section className="py-24 bg-gray-900 text-white border-y border-gray-800 relative overflow-hidden">
      {/* 极简背景装饰，保持克制 */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-900 to-gray-900 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn delay={0.1}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4">AI模型评测项目全流程</h2>
            <p className="text-gray-400 text-lg max-w-2xl font-mono text-sm tracking-widest uppercase mb-2">
              PROJECT LIFECYCLE & MY CONTRIBUTION
            </p>
            <p className="text-gray-400 text-lg max-w-2xl">
              从需求拆解到推动模型优化，构建端到端的 AI 评测价值流。
            </p>
          </div>

          <div className="relative">
            {/* 贯穿全流程的极细连接线 */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gray-800 md:hidden"></div>

            <div className="space-y-12 md:space-y-16">
              {lifecycle.map((stage, index) => (
                <div key={index} className="relative flex flex-col md:flex-row md:items-start group">
                  
                  {/* 节点序号与轴线设计 */}
                  <div className="flex items-center md:w-32 mb-4 md:mb-0 shrink-0">
                    <div className={`
                      flex items-center justify-center w-14 h-14 rounded-full border-2 relative z-10 bg-gray-900
                      transition-all duration-300
                      ${stage.isPrimary 
                        ? 'border-indigo-500 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]' 
                        : 'border-gray-700 text-gray-500'}
                    `}>
                      <span className="text-lg font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    {/* 桌面端连接线 */}
                    <div className={`hidden md:block h-px flex-grow ml-4 mr-8 transition-colors duration-300 ${stage.isPrimary ? 'bg-indigo-500/50' : 'bg-gray-800'}`}></div>
                  </div>

                  {/* 核心内容区 */}
                  <div className="flex-grow pl-14 md:pl-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      {/* 阶段标题与目标 (第一层：Goal) */}
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${stage.isPrimary ? 'text-white' : 'text-gray-200'}`}>
                          {stage.title}
                        </h3>
                        <p className="text-gray-400 text-[15px] leading-relaxed max-w-xl">
                          {stage.goal}
                        </p>
                      </div>
                      
                      {/* 阶段成果 (第三层：Deliverables) */}
                      {stage.output && (
                        <div className="shrink-0 flex items-center md:justify-end">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 text-gray-400 text-xs font-medium">
                            <span className="mr-1.5 opacity-60">阶段交付：</span>
                            {stage.output}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* 我的职责 (第二层：My Contribution) */}
                    <div className={`
                      rounded-xl p-5 border 
                      ${stage.isPrimary 
                        ? 'bg-gray-800/40 border-gray-700' 
                        : 'bg-transparent border-gray-800/50'}
                    `}>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                        我的工作
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {stage.actions?.map((action, actionIdx) => (
                          <li key={actionIdx} className="flex items-start text-[14px] text-gray-300">
                            <Check className={`w-4 h-4 mr-2 mt-0.5 shrink-0 ${stage.isPrimary ? 'text-indigo-400' : 'text-gray-500'}`} />
                            <span className="leading-snug">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 引导箭头 (仅在重点节点间显示，增强流动感) */}
                  {index < lifecycle.length - 1 && (
                    <div className="hidden md:flex absolute -bottom-10 left-6 text-gray-700">
                      <ChevronRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}