'use client';

import FadeIn from "@/components/animations/FadeIn";
import { t2vProjectData } from "@/data/t2vProject";
import { RefreshCw, ArrowRight } from "lucide-react";

export default function QualityControlLoop() {
  const { execution } = t2vProjectData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">项目执行与质量管理</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              质量管理不是项目结束后的检查，而是贯穿整个项目执行过程。
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {execution.team.map((member, idx) => (
              <div key={idx} className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm">
                <span className="font-bold text-gray-900 mr-2">{member.role}:</span>
                <span className="text-gray-600">{member.count}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-0">
              {execution.phases.map((phase, idx) => (
                <div key={idx} className="border-l-2 border-indigo-100 pl-6 pb-8 relative last:pb-0">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{phase.title}</h3>
                  {phase.goal && (
                    <p className="text-sm text-gray-500 mb-3">{phase.goal}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {phase.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100">
                        {item}
                      </span>
                    ))}
                  </div>
                  {phase.outputs && (
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">阶段产出</span>
                      {phase.outputs.map((output, i) => (
                        <span key={i} className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-2 py-1 rounded-md">
                          {output}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 text-white flex flex-col items-center justify-center relative overflow-hidden">
              <RefreshCw className="absolute -right-10 -bottom-10 w-64 h-64 text-gray-800 opacity-50" />
              <div className="relative z-10 w-full">
                <h3 className="text-xl font-bold mb-8 text-center text-indigo-300">质量控制闭环</h3>
                <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-2">
                  {execution.qcLoop.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-800 border border-gray-700 rounded-lg text-xs md:text-sm font-medium">
                        {step}
                      </div>
                      {idx < execution.qcLoop.length - 1 && (
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-8 text-center leading-relaxed">
                  通过高频的 Diff 分析与 Waterline 拉齐，消除标注员主观认知偏差，确保最终交付数据的一致性与可用性。
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}