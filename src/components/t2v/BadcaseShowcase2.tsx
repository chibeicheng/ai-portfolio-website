'use client';

import FadeIn from "@/components/animations/FadeIn";
import { Play, Tag, Target, Camera, Sparkles, AlertTriangle, ArrowRight } from "lucide-react";
import { EVALUATION_MODELS } from "@/data/t2vProject";

export default function BadcaseShowcase2() {
  const modelColors: Record<string, string> = {
    "MuseSteamer 2.0 Turbo": "text-indigo-500",
    "Kling 3.0": "text-emerald-500",
    "Seedance 2.0 VIP": "text-blue-500",
    "CogVideo 2.0": "text-amber-500",
    "CogVideoX 2.0": "text-amber-500"
  };

  const modelVideos: Record<string, string> = {
    "MuseSteamer 2.0 Turbo": "/videos/t2v-badcase2/muse_steamer_2.0_turbo.mp4",
    "Kling 3.0": "/videos/t2v-badcase2/kling3.0.mp4",
    "Seedance 2.0 VIP": "/videos/t2v-badcase2/seedance2.0BIP.mp4",
    "CogVideo 2.0": "/videos/t2v-badcase2/cogvideoX2.0.mp4",
    "CogVideoX 2.0": "/videos/t2v-badcase2/cogvideoX2.0.mp4"
  };

  return (
    <section className="py-12 bg-white pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn delay={0.1}>
          {/* Header */}
          <div className="mb-16 text-center md:text-left max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              典型 Badcase 分析 02：多主体交互与细粒度动作表达
            </h2>
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-6">
              Evaluation Case Study 02
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              本案例用于评估模型在古风人物、动物主体、喂食动作、人宠互动、细粒度接触动作和镜头推进方面的综合生成能力。重点观察模型是否能够准确还原「少女蹲下喂食」和「白猫靠近并蹭手」这类多主体交互动作。
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left: Models Output */}
            <div className="w-full lg:w-7/12 space-y-8">
              
              {/* Prompt Quote Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-sm">
                <div className="flex-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Evaluation Prompt</div>
                  <div className="text-lg font-medium text-gray-900 leading-relaxed">
                    &quot;古风院落中，一名少女和一只白猫，少女蹲下喂食时白猫轻轻靠近蹭她的手，整体为古风柔和渲染，具体场景明确，主体细节清晰，镜头从中景推近。&quot;
                  </div>
                </div>
                <div className="w-full md:w-48 shrink-0 flex flex-col gap-3 pt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-500">难度:</span>
                    <span className="font-bold text-gray-900">中等</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-500">场景:</span>
                    <span className="font-bold text-gray-900 text-xs">古风/多主体交互</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-500">考察能力:</span>
                    <span className="font-bold text-gray-900 text-xs">人宠交互</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Camera className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-500">运镜:</span>
                    <span className="font-bold text-gray-900 text-xs">中景推近</span>
                  </div>
                </div>
              </div>

              {/* Models Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {EVALUATION_MODELS.map((model, idx) => {
                  const videoPath = modelVideos[model];
                  const isTarget = model === "MuseSteamer 2.0 Turbo";
                  const isBest = model === "Seedance 2.0 VIP";
                  return (
                  <div key={idx} className="group relative aspect-video bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
                    {videoPath && (
                      <video 
                        src={videoPath}
                        className="absolute inset-0 w-full h-full object-cover"
                        controls
                        muted
                        preload="metadata"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-white/80 shadow-sm flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-5 h-5 text-gray-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent pt-12 pointer-events-none">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${modelColors[model] || 'bg-gray-400'}`}></div>
                        <span className="font-bold text-white text-sm drop-shadow-md">{model}</span>
                      </div>
                    </div>
                    {isTarget && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-indigo-500/90 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-widest border border-indigo-400 pointer-events-none">
                        Target Model
                      </div>
                    )}
                    {isBest && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-emerald-500/90 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-widest border border-emerald-400 pointer-events-none">
                        Best Overall
                      </div>
                    )}
                  </div>
                )})}
              </div>
            </div>

            {/* Right: Analysis Area */}
            <div className="w-full lg:w-5/12 space-y-6">
              
              {/* ① Evaluation Score */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Evaluation Score</div>
                <div className="space-y-5">
                  {[
                    { label: "画面质量", enLabel: "Visual Quality", score: 4.2, percentage: 84 },
                    { label: "运动质量", enLabel: "Motion Quality", score: 3.4, percentage: 68 },
                    { label: "Prompt遵循", enLabel: "Instruction Following", score: 2.8, percentage: 56 }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-baseline text-sm mb-2">
                        <span className="font-bold text-gray-700">
                          {item.label} <span className="text-gray-400 font-normal text-xs ml-1 hidden sm:inline">{item.enLabel}</span>
                        </span>
                        <span className="font-bold text-gray-900">{item.score} <span className="text-gray-400 font-normal">/ 5</span></span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            item.score < 3.5 ? 'bg-rose-500' : 
                            item.score < 4.0 ? 'bg-amber-500' : 
                            'bg-indigo-500'
                          }`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Overall Score</div>
                      <div className="text-2xl font-black text-gray-900">3.47</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">Ranking</div>
                      <div className="text-xl font-bold text-rose-600">#4 <span className="text-sm text-gray-400">/ 4</span></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 leading-relaxed border border-gray-100">
                    Muse Steamer 完全丢失了「中景推近」的运镜指令，直接采用了大特写（Close-up）构图，导致「古风院落」背景完全被景深虚化。同时，由于构图过近，核心的「蹲下喂食」与「蹭手」动作被裁切到画外，严重影响了语义还原与交互展示。
                  </div>
                </div>
              </div>

              {/* Competitor Summary */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Competitor Summary</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg border border-emerald-100 bg-emerald-50/30">
                    <div className="text-[10px] font-bold text-emerald-600 uppercase mb-1">Rank #1</div>
                    <div className="text-sm font-bold text-gray-900">Seedance 2.0 <span className="text-emerald-600 ml-1">4.87</span></div>
                  </div>
                  <div className="p-3 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">Rank #2</div>
                    <div className="text-sm font-bold text-gray-900">Kling 3.0 <span className="text-gray-500 ml-1">4.77</span></div>
                  </div>
                  <div className="p-3 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">Rank #3</div>
                    <div className="text-sm font-bold text-gray-900">CogVideoX 2.0 <span className="text-gray-500 ml-1">4.33</span></div>
                  </div>
                  <div className="p-3 rounded-lg border border-rose-200 bg-rose-50/50">
                    <div className="text-[10px] font-bold text-rose-600 uppercase mb-1">Rank #4</div>
                    <div className="text-sm font-bold text-rose-900">Muse Steamer <span className="text-rose-600 ml-1">3.47</span></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Middle Area: Tags & Root Cause */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* ② Bad Case Tags */}
            <div className="lg:col-span-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-full">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Bad Case Tags</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "运镜指令失效", 
                  "构图裁切严重", 
                  "场景语义丢失", 
                  "核心交互不可见",
                  "过度背景虚化"
                ].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-rose-50 text-rose-600 border border-rose-100 rounded-lg text-xs font-medium cursor-pointer transition-colors hover:bg-rose-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ③ Root Cause Analysis */}
            <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-full">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Root Cause Analysis</div>
              <div className="flex flex-col md:flex-row items-center md:items-stretch gap-2 md:gap-0 bg-gray-50 border border-gray-100 p-4 rounded-xl">
                <div className="flex flex-col items-center justify-center flex-1">
                  <span className="text-[10px] text-gray-400 uppercase mb-1">维度</span>
                  <span className="text-sm font-bold text-gray-700">Prompt遵循</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 hidden md:block self-center" />
                <div className="flex flex-col items-center justify-center flex-1">
                  <span className="text-[10px] text-gray-400 uppercase mb-1">能力</span>
                  <span className="text-sm font-bold text-gray-700 text-center leading-tight">空间与<br/>运镜控制</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 hidden md:block self-center" />
                <div className="flex flex-col items-center justify-center flex-1">
                  <span className="text-[10px] text-gray-400 uppercase mb-1">归因</span>
                  <span className="text-sm font-bold text-rose-600 text-center leading-tight">实体比例与<br/>景别失控</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-rose-50/50 border border-rose-100 rounded-lg flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-sm text-rose-700">影响：模型过度关注主体面部特征，忽略了中景（Medium Shot）的指令约束，导致关键的交互动作（喂食/蹭手）溢出画幅边界。</span>
              </div>
            </div>
          </div>

          {/* Bottom Area */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* ④ Case Analysis */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Case Analysis</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-indigo-900 mb-4">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    MuseSteamer 表现
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="text-rose-400 mt-0.5">•</span> 运镜指令失效，错用大特写</li>
                    <li className="flex items-start gap-2"><span className="text-rose-400 mt-0.5">•</span> 背景过度虚化，丢失院落场景</li>
                    <li className="flex items-start gap-2"><span className="text-rose-400 mt-0.5">•</span> 构图失误导致喂食动作不可见</li>
                    <li className="flex items-start gap-2"><span className="text-indigo-400 mt-0.5">•</span> 猫咪毛发质感与光影较好</li>
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    竞品表现
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold text-emerald-600 mb-1">Seedance</div>
                      <div className="text-sm text-gray-600">光影极佳，喂食与蹭手动作自然，构图完美</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-600 mb-1">Kling</div>
                      <div className="text-sm text-gray-600">中景推近运镜准确，人宠空间关系合理</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-600 mb-1">CogVideoX</div>
                      <div className="text-sm text-gray-600">场景还原度高，但猫形态略显僵硬</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ⑤ Optimization Insights */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Optimization Direction</div>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl border border-rose-100 bg-rose-50/30">
                  <div className="text-rose-600 font-bold font-mono shrink-0">P0</div>
                  <div className="text-sm font-medium text-gray-800 pt-0.5">强化空间构图与景别指令遵循能力，解决&quot;要中景给特写&quot;的越界问题。</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl border border-orange-100 bg-orange-50/30">
                  <div className="text-orange-600 font-bold font-mono shrink-0">P1</div>
                  <div className="text-sm font-medium text-gray-800 pt-0.5">优化多主体复杂指令的注意力分配机制，确保&quot;环境-主体-动作&quot;三要素均衡。</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl border border-blue-100 bg-blue-50/30">
                  <div className="text-blue-600 font-bold font-mono shrink-0">P2</div>
                  <div className="text-sm font-medium text-gray-800 pt-0.5">提升动物毛发在动态交互中的细节保持度。</div>
                </div>
              </div>
            </div>

          </div>

          {/* ⑥ Case Conclusion */}
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Case Conclusion</h4>
            <div className="space-y-3 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>该案例暴露出 Muse Steamer 2.0 Turbo 在处理「多约束复杂 Prompt」时，容易出现严重的『注意力偏移』。模型为了保证主体（人与猫）的生成质量，牺牲了运镜（中景推近）与场景（院落）的约束，导致核心动作（喂食蹭手）在画幅边界外被裁切。</p>
              <p>相比 Seedance 和 Kling 对全局画面的精准把控，Muse 在空间构图和指令对齐上存在明显代差，这是典型的“为了清晰度牺牲语义完整性”的模型缺陷。</p>
            </div>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}