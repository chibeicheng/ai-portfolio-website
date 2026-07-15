'use client';

import FadeIn from "@/components/animations/FadeIn";
import { t2vProjectData } from "@/data/t2vProject";
import { CheckCircle2, Target } from "lucide-react";

export default function ProjectOverview() {
  const { overview } = t2vProjectData;

  // Helper to safely format the highlighted text
  const formatHighlightedText = (text: string) => {
    // We know exactly what text to expect based on the prompt, so we can hardcode the splitting logic
    // for this specific case to ensure "MuseSteamer 2.0 Turbo" and "优势、短板、竞品差距" are styled correctly.
    if (text.includes("MuseSteamer 2.0 Turbo")) {
       const parts = text.split("MuseSteamer 2.0 Turbo");
       return (
         <>
           {parts[0]}
           <span className="text-emerald-700">MuseSteamer 2.0 Turbo</span>
           {parts[1].replace("优势、短板和竞品差距", "")}
           <span className="text-emerald-700">优势、短板和竞品差距</span>
         </>
       );
    }
    return text;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">项目概览</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* 左侧：项目背景 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-px bg-indigo-500 mr-4"></span>
                项目背景
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {overview.background}
              </p>
            </div>
            
            {/* 右侧：项目目标 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-px bg-emerald-500 mr-4"></span>
                项目目标
              </h3>
              <ul className="space-y-3">
                {overview.objectives.map((item, idx) => (
                  <li 
                    key={idx} 
                    className={`flex items-start ${
                      item.isHighlighted 
                        ? "bg-[#f0fdf4] p-3 md:p-4 rounded-xl text-emerald-900 font-semibold" 
                        : "text-gray-600"
                    }`}
                  >
                    {item.isHighlighted ? (
                      <Target className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                    )}
                    
                    <div className="flex flex-col">
                      <span className={item.isHighlighted ? "text-[17px] leading-snug" : "text-lg"}>
                        {item.isHighlighted ? formatHighlightedText(item.text) : item.text}
                      </span>
                      {item.desc && (
                        <span className="text-[13px] md:text-[14px] text-gray-500 font-normal mt-2 leading-relaxed">
                          {item.desc}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 底部数据概览卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {overview.metrics.map((metric, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-4xl font-extrabold text-indigo-600 mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}