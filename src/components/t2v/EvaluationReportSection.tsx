'use client';

import FadeIn from "@/components/animations/FadeIn";
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowDown,
  FileText, 
  BarChart3, 
  Library, 
  ListChecks, 
  TableProperties, 
  FolderArchive 
} from "lucide-react";

export default function EvaluationReportSection() {
  const architectureSteps = [
    { title: "项目背景", desc: "说明评测目标、模型版本和竞品范围。" },
    { title: "评测方法", desc: "说明评测维度、评分方式和横向比较方式。" },
    { title: "评分标准", desc: "说明画面质量、运动质量、Prompt遵循三大维度。" },
    { title: "数据统计", desc: "呈现综合得分、分数分布、场景表现和难度表现。" },
    { title: "模型对比", desc: "分析 Muse Steamer 与 Seedance、Kling、CogVideo 的能力差异。" },
    { title: "Good Case", desc: "展示模型表现较好的样本，说明优势能力。" },
    { title: "Bad Case", desc: "展示模型失败样本，说明核心短板和归因标签。" },
    { title: "核心结论", desc: "总结模型优势、主要短板和竞品差距。" },
    { title: "优化建议", desc: "形成 P0 / P1 / P2 分层优化方向。" }
  ];

  const evidenceChain = [
    { en: "Overall Score", zh: "综合得分" },
    { en: "Score Distribution", zh: "分数分布" },
    { en: "Scenario / Difficulty", zh: "场景与难度分析" },
    { en: "Failure Pattern", zh: "高频问题统计" },
    { en: "Root Cause Attribution", zh: "Badcase归因" },
    { en: "Optimization Priority", zh: "优化优先级" }
  ];

  const deliverables = [
    { icon: FileText, title: "Evaluation Report", desc: "完整的结构化评测分析报告。" },
    { icon: BarChart3, title: "Data Visualization Dashboard", desc: "评测数据的多维可视化看板。" },
    { icon: Library, title: "Good / Bad Case Library", desc: "典型成功与失败案例库。" },
    { icon: TableProperties, title: "Badcase Attribution Table", desc: "高频问题的结构化归因表。" },
    { icon: ListChecks, title: "Optimization Priority List", desc: "分层级的模型优化建议清单。" },
    { icon: FolderArchive, title: "Project Context Pack", desc: "评测项目的完整上下文与资产包。" }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn delay={0.1}>
          
          {/* 1. Hero Section */}
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              评测报告撰写与结论交付
            </h2>
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-8">
              Evaluation Report Delivery
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              在完成模型评分、数据分析和 Badcase 归因后，我将评测结果整理为结构化评测报告。报告不只是分数汇总，而是把模型表现、竞品差距、失败模式和优化方向转化为算法团队可理解、可追踪、可执行的结论。
            </p>
          </div>

          {/* 2. Report Purpose */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">从评测数据到可决策结论</h3>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                T2V 模型评测结果包含大量分数、图表和案例。如果缺少清晰的报告结构，评测结论很难被算法、产品和项目团队复用。因此，评测报告需要建立一条从数据证据到模型优化建议的表达链路。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Before */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Before</div>
                <ul className="space-y-4">
                  {["分数分散", "图表孤立", "Badcase缺少归因", "结论难以指导优化"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                        <X className="w-3 h-3 text-gray-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* After */}
              <div className="bg-indigo-50/30 border border-indigo-100 rounded-3xl p-8 shadow-sm">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-6">After</div>
                <ul className="space-y-4">
                  {["结构化报告", "数据可视化支撑", "Good / Bad Case 解释模型能力", "P0 / P1 / P2 优化建议"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-indigo-900">
                      <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Report Architecture */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-gray-900">评测报告结构设计</h3>
            </div>
            
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute left-6 top-4 bottom-4 w-px bg-gray-200 hidden md:block"></div>
              <div className="space-y-6">
                {architectureSteps.map((step, idx) => (
                  <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                    <div className="hidden md:flex w-12 h-12 bg-white border-2 border-gray-200 rounded-full items-center justify-center text-gray-400 font-mono text-sm z-10 shrink-0">
                      {idx + 1}
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow flex-1 w-full group">
                      <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{step.title}</h4>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Evidence Chain */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">从数据到结论的证据链</h3>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                评测报告中的每一个结论都需要有数据或案例支撑。通过建立证据链，可以避免报告停留在主观描述，而是形成可解释、可复盘的模型能力分析。
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 flex-wrap bg-gray-50 border border-gray-100 p-8 rounded-3xl">
              {evidenceChain.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                  <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm flex flex-col items-center text-center min-w-[140px]">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{item.en}</span>
                    <span className="text-sm font-bold text-gray-800">{item.zh}</span>
                  </div>
                  {idx < evidenceChain.length - 1 && (
                    <>
                      <ArrowRight className="w-5 h-5 text-gray-300 hidden md:block shrink-0" />
                      <ArrowDown className="w-5 h-5 text-gray-300 block md:hidden shrink-0 my-1" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 5. Good Case / Bad Case Section */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Good Case 与 Bad Case 分析</h3>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Good Case 用于解释模型当前优势，Bad Case 用于定位模型短板。二者共同支撑最终的评测结论。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Good Case */}
              <div className="bg-emerald-50/30 border border-emerald-100 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900">Good Case</h4>
                </div>
                <ul className="space-y-4 text-emerald-800/80">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    展示模型优势能力
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    说明在哪些场景下表现稳定
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    提炼可保留的能力特征
                  </li>
                </ul>
              </div>

              {/* Bad Case */}
              <div className="bg-rose-50/30 border border-rose-100 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-rose-600" />
                  </div>
                  <h4 className="text-xl font-bold text-rose-900">Bad Case</h4>
                </div>
                <ul className="space-y-4 text-rose-800/80">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    展示模型失败模式
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    对应具体评分维度
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    归因到二级能力和问题标签
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    转化为模型优化信号
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Optimization Recommendation */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">优化建议分层</h3>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                通过分层优化建议，评测报告可以帮助算法团队判断哪些问题需要优先处理，哪些问题可以进入后续迭代。
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-6 rounded-2xl border border-rose-100 bg-rose-50/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-rose-600 font-bold font-mono text-2xl shrink-0">P0</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">核心阻塞问题</div>
                  <div className="text-sm text-gray-600 leading-relaxed">优先影响模型基础体验，例如多主体运动不同步、Prompt关键信息丢失、肢体结构异常。</div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-6 rounded-2xl border border-orange-100 bg-orange-50/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-orange-600 font-bold font-mono text-2xl shrink-0">P1</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">主要体验问题</div>
                  <div className="text-sm text-gray-600 leading-relaxed">例如运镜执行不足、主体时序漂移、属性与数量控制不足。</div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-6 rounded-2xl border border-blue-100 bg-blue-50/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 font-bold font-mono text-2xl shrink-0">P2</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">局部表现优化</div>
                  <div className="text-sm text-gray-600 leading-relaxed">例如画面局部闪烁、高频细节稳定性不足、边缘纹理细节偏弱。</div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Final Deliverables */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900">最终交付物</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 8. Closing Statement */}
          <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              Report as the final evaluation bridge
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
              评测报告是连接模型评测与模型优化的最后一环。它将评测规则、数据结果、案例分析和优化建议整合为一套可复用的方法论资产，为后续模型版本迭代和同类评测项目提供参考。
            </p>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
