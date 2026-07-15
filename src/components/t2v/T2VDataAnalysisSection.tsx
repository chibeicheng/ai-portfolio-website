'use client';

import FadeIn from "@/components/animations/FadeIn";

export default function T2VDataAnalysisSection() {
  const analysisSections = [
    {
      id: "01",
      title: "整体评测结果",
      enTitle: "Overall Benchmark",
      conclusion: "MuseSteamer 2.0 Turbo 在本轮模拟评测中综合排名第三，整体表现优于 CogVideo 2.0，但与 Seedance 2.0 VIP、Kling 3.0 仍存在差距。",
      insight: "整体得分可以快速呈现模型的相对位置，但还需要结合分数分布、场景表现和问题归因进一步分析差距来源。",
      image: "/images/t2v-analysis/overall-ranking.png"
    },
    {
      id: "02",
      title: "综合得分分布",
      enTitle: "Score Distribution",
      conclusion: "MuseSteamer 2.0 Turbo 的高分样本占比低于 Seedance 2.0 VIP 和 Kling 3.0，说明模型稳定产出高质量视频的能力仍有提升空间。",
      insight: "相比单一平均分，分数段分布更能反映模型输出质量的稳定性和上限能力。",
      image: "/images/t2v-analysis/score-distribution.png"
    },
    {
      id: "03",
      title: "不同场景表现",
      enTitle: "Scenario Performance",
      conclusion: "模型在不同真实用户场景下表现存在差异，复杂多主体交互、创意影视、复杂运镜等场景更容易暴露模型短板。",
      insight: "场景级分析可以帮助定位模型在哪些真实使用场景中表现不足，从而为专项优化提供依据。",
      image: "/images/t2v-analysis/scenario-performance.png.png"
    },
    {
      id: "04",
      title: "不同难度表现",
      enTitle: "Difficulty Analysis",
      conclusion: "随着 Prompt 难度提升，MuseSteamer 2.0 Turbo 的综合得分下降更明显，说明复杂指令、多元素组合和长时序一致性仍是挑战。",
      insight: "难度梯度分析能够验证评测集是否真正拉开模型能力差距，也能辅助判断模型在复杂任务下的鲁棒性。",
      image: "/images/t2v-analysis/difficulty-analysis..png"
    },
    {
      id: "05",
      title: "三个评测维度细分分析",
      enTitle: "Capability Breakdown",
      conclusion: "从画面质量、运动质量、指令遵循三个维度进一步拆解后，可以更清晰地看到 MuseSteamer 2.0 Turbo 的具体能力短板。",
      insight: "维度细分分析能够把综合得分拆解为可归因的能力信号，帮助判断问题来自画面生成、运动生成，还是 Prompt 理解。",
      image: "/images/t2v-analysis/capability-breakdown.png"
    },
    {
      id: "06",
      title: "高频问题归因",
      enTitle: "Failure Pattern Analysis",
      conclusion: "MuseSteamer 2.0 Turbo 的高频 Badcase 主要集中在 Prompt 信息丢失、多主体运动不同步、肢体结构异常、运动执行不足等问题。",
      insight: "Badcase 归因不是单纯统计错误，而是将评测结果转化为可执行的模型优化信号。",
      image: "/images/t2v-analysis/failure-patterns.png"
    },
    {
      id: "07",
      title: "关键结论与优化建议",
      enTitle: "Optimization Insights",
      conclusion: "基于综合得分、场景分析、难度分析、能力拆解和 Badcase 归因，最终形成 P0 / P1 / P2 分层优化建议。",
      insight: "该评测流程完成了从模型表现评估到优化方向沉淀的闭环，体现评测对模型迭代的直接价值。",
      image: "/images/t2v-analysis/optimization-insights.png"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn delay={0.1}>
          {/* Hero Section */}
          <div className="mb-24 text-center md:text-left max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              从评测结果到模型优化方向
            </h2>
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-6">
              From benchmark results to optimization priorities.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              本模块基于 MuseSteamer 2.0 Turbo 与 Seedance 2.0 VIP、Kling 3.0、CogVideo 2.0 的横向竞品评测结果，从整体得分、分数分布、场景表现、难度变化、能力细分、Badcase 归因等角度进行分析，并最终沉淀为 P0 / P1 / P2 模型优化建议。
            </p>
          </div>

          {/* Analysis Sections */}
          <div className="space-y-32">
            {analysisSections.map((section, idx) => {
              const isEven = idx % 2 !== 0;
              return (
                <div 
                  key={section.id} 
                  className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Content */}
                  <div className="w-full md:w-5/12 flex flex-col justify-center">
                    <div className="text-indigo-500/80 font-mono text-lg font-bold mb-4">
                      {section.id}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-8">
                      {section.enTitle}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">分析结论</div>
                        <p className="text-gray-600 leading-relaxed">
                          {section.conclusion}
                        </p>
                      </div>
                      
                      <div className="bg-indigo-50/50 border border-indigo-100/50 rounded-xl p-5">
                        <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">Insight</div>
                        <p className="text-indigo-900/70 text-sm leading-relaxed">
                          {section.insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className="w-full md:w-7/12">
                    <div className="relative w-full rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-full h-auto">
                        <img 
                          src={section.image} 
                          alt={section.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
