'use client';

import FadeIn from "@/components/animations/FadeIn";
import { Play, Tag, Target, Camera, Sparkles, AlertTriangle, ArrowRight } from "lucide-react";
import { EVALUATION_MODELS } from "@/data/t2vProject";

export default function BadcaseShowcase() {
  const modelColors: Record<string, string> = {
    "MuseSteamer 2.0 Turbo": "text-indigo-500",
    "Kling 3.0": "text-emerald-500",
    "Seedance 2.0 VIP": "text-blue-500",
    "CogVideo 2.0": "text-amber-500",
    "CogVideoX 2.0": "text-amber-500"
  };

  const modelVideos: Record<string, string> = {
    "MuseSteamer 2.0 Turbo": "/videos/t2v-badcase1/muse_steamer2.0.mp4",
    "Kling 3.0": "/videos/t2v-badcase1/kling3.0.mp4",
    "Seedance 2.0 VIP": "/videos/t2v-badcase1/seedance2.0_vip.mp4",
    "CogVideo 2.0": "/videos/t2v-badcase1/cogvideoX2.0.mp4",
    "CogVideoX 2.0": "/videos/t2v-badcase1/cogvideoX2.0.mp4"
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn delay={0.1}>
          <div className="mb-16 text-center md:text-left max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              典型 Badcase 分析 01：物理规律与精细交互阻尼
            </h2>
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-6">
              Evaluation Case Study 01
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              本案例用于评估模型在广告级特写镜头下，对物体材质、书写动作连贯性以及物理交互反馈（阻尼感）的生成能力。重点观察模型是否能够准确还原「笔尖接触纸面」瞬间的真实物理逻辑与墨水扩散细节。
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
                    &quot;橡木办公桌上，一支钢笔被手拿起并在纸面写下一行字，并且墨水在纸面留下清晰痕迹，整体为文具广告风，主体细节清晰，镜头近景跟随笔尖。&quot;
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
                    <span className="font-bold text-gray-900 text-xs">广告宣传</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-500">考察能力:</span>
                    <span className="font-bold text-gray-900 text-xs">细粒度交互</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Camera className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-500">运镜:</span>
                    <span className="font-bold text-gray-900 text-xs">近景跟随</span>
                  </div>
                </div>
              </div>

              {/* Models Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {EVALUATION_MODELS.map((model, idx) => {
                  const videoPath = modelVideos[model];
                  const isTarget = model === "MuseSteamer 2.0 Turbo";
                  const isBest = model === "Kling 3.0";
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
                    { label: "画面质量", enLabel: "Visual Quality", score: 3.8, percentage: 76 },
                    { label: "运动质量", enLabel: "Motion Quality", score: 3.2, percentage: 64 },
                    { label: "Prompt遵循", enLabel: "Instruction Following", score: 3.6, percentage: 72 }
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
                      <div className="text-2xl font-black text-gray-900">3.53</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">Ranking</div>
                      <div className="text-xl font-bold text-rose-600">#4 <span className="text-sm text-gray-400">/ 4</span></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 leading-relaxed border border-gray-100">
                    Muse Steamer 能够生成连贯的手部运笔动作，但在关键的「笔尖接触纸面」瞬间，缺乏物理约束反馈（阻尼感），导致动作显得机械、漂浮。
                  </div>
                </div>
              </div>

              {/* Competitor Summary */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Competitor Summary</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg border border-emerald-100 bg-emerald-50/30">
                    <div className="text-[10px] font-bold text-emerald-600 uppercase mb-1">Rank #1</div>
                    <div className="text-sm font-bold text-gray-900">Kling 3.0 <span className="text-emerald-600 ml-1">4.67</span></div>
                  </div>
                  <div className="p-3 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">Rank #2</div>
                    <div className="text-sm font-bold text-gray-900">Seedance 2.0 <span className="text-gray-500 ml-1">4.43</span></div>
                  </div>
                  <div className="p-3 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="text-[10px] font-bold text-gray-500 uppercase mb-1">Rank #3</div>
                    <div className="text-sm font-bold text-gray-900">CogVideoX 2.0 <span className="text-gray-500 ml-1">3.90</span></div>
                  </div>
                  <div className="p-3 rounded-lg border border-rose-200 bg-rose-50/50">
                    <div className="text-[10px] font-bold text-rose-600 uppercase mb-1">Rank #4</div>
                    <div className="text-sm font-bold text-rose-900">Muse Steamer <span className="text-rose-600 ml-1">3.53</span></div>
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
                  "运动物理规律缺失", 
                  "笔尖缺少真实阻尼", 
                  "动作如悬浮滑移", 
                  "墨迹扩散细节不足",
                  "运笔节奏机械"
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
                  <span className="text-sm font-bold text-gray-700">运动质量</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 hidden md:block self-center" />
                <div className="flex flex-col items-center justify-center flex-1">
                  <span className="text-[10px] text-gray-400 uppercase mb-1">能力</span>
                  <span className="text-sm font-bold text-gray-700 text-center leading-tight">运动合理性 /<br/>物理规律</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 hidden md:block self-center" />
                <div className="flex flex-col items-center justify-center flex-1">
                  <span className="text-[10px] text-gray-400 uppercase mb-1">归因</span>
                  <span className="text-sm font-bold text-rose-600 text-center leading-tight">人体约束不足 /<br/>缺失接触阻尼</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-rose-50/50 border border-rose-100 rounded-lg flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-sm text-rose-700">影响：笔尖接触纸面时毫无阻力反馈，手部动作变成了僵硬的匀速平移，破坏了书写的真实感。</span>
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
                    <li className="flex items-start gap-2"><span className="text-indigo-400 mt-0.5">•</span> 手部动作与运镜基本连贯</li>
                    <li className="flex items-start gap-2"><span className="text-rose-400 mt-0.5">•</span> 笔尖接触纸面时毫无物理阻尼感</li>
                    <li className="flex items-start gap-2"><span className="text-rose-400 mt-0.5">•</span> 书写动作如悬浮般滑移</li>
                    <li className="flex items-start gap-2"><span className="text-rose-400 mt-0.5">•</span> 缺少墨水在纸面渗透的微观细节</li>
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    竞品表现
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold text-emerald-600 mb-1">Kling 3.0</div>
                      <div className="text-sm text-gray-600">表现最佳。笔尖下压反馈真实，墨迹清晰，运镜极稳。</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-600 mb-1">Seedance 2.0</div>
                      <div className="text-sm text-gray-600">广告光影质感最好，但手部动作略快。</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-600 mb-1">CogVideoX 2.0</div>
                      <div className="text-sm text-gray-600">笔尖有接触感，但画面清晰度与材质表现较弱。</div>
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
                  <div className="text-sm font-medium text-gray-800 pt-0.5">强化物体间交互的物理规律建模，特别是刚体碰撞与摩擦力的视觉表现（阻尼感）。</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl border border-orange-100 bg-orange-50/30">
                  <div className="text-orange-600 font-bold font-mono shrink-0">P1</div>
                  <div className="text-sm font-medium text-gray-800 pt-0.5">提升微观尺度的材质变化表现（如墨水在纸纤维中的扩散渗透效果）。</div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl border border-blue-100 bg-blue-50/30">
                  <div className="text-blue-600 font-bold font-mono shrink-0">P2</div>
                  <div className="text-sm font-medium text-gray-800 pt-0.5">优化人体精细关节（手指捏笔）的刚性约束，避免动作出现软化形变。</div>
                </div>
              </div>
            </div>

          </div>

          {/* ⑥ Case Conclusion */}
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Case Conclusion</h4>
            <div className="space-y-3 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>该案例暴露出 Muse Steamer 2.0 Turbo 在处理「物理接触与作用力」时，仍然停留在像素级别的“形似”，而缺乏物理规律级别的“神似”。</p>
              <p>模型能够画出一支笔和一只手，也能让手动起来，但在笔尖接触桌面的瞬间，模型无法模拟出真实的阻尼反馈，导致书写动作变成了“悬浮平移”。相比 Kling 3.0，Muse 在精细动力学模拟上存在明显缺陷，这是从“生成好看的视频”走向“生成符合物理直觉的视频”必须跨越的鸿沟。</p>
            </div>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}