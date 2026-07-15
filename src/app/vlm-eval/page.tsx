'use client';

import FadeIn from "@/components/animations/FadeIn";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { CheckCircle2, Target, Lightbulb, Zap, Award, ArrowRight } from "lucide-react";

export default function VLMEvalPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <FadeIn delay={0.1}>
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline">VLM Evaluation</Badge>
            <Badge variant="outline">Benchmark</Badge>
            <Badge variant="outline">Capability Analysis</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            ERNIE Vision Language Model Evaluation
          </h1>
          <p className="text-2xl text-gray-500 font-medium">视觉语言模型多场景能力评测</p>
        </div>
      </FadeIn>

      <div className="space-y-16">
        {/* 1. 项目背景 & 2. 我的职责 */}
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={0.2}>
            <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4">
              <Target className="w-6 h-6 mr-2 text-red-500" />
              1. 项目背景
            </h2>
            <p className="text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-100">
              多模态大模型在不同垂直场景（如文档分析、图表理解、复杂推理）下的表现差异显著。为了准确指导业务落地与模型选型，亟需构建一套全面的 Benchmark，来评估多模态大模型在核心维度的真实能力界限，并排查高风险的“视觉幻觉”问题。
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4">
              <Zap className="w-6 h-6 mr-2 text-purple-500" />
              2. 我的职责
            </h2>
            <ul className="space-y-3">
              {[
                "规划底层评测维度（感知、认知、推理等）",
                "主导测试集的数据清洗、去重与难度分级",
                "设计并打通“自动化初步评测 + 人工深度抽检”的双轨管线",
                "产出多模态能力分析深度报告与竞品对比分析",
                "将评测结果对齐研发团队，推动针对性修复"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-600">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* 3. 方法流程 */}
        <FadeIn delay={0.4}>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-6">
            <Lightbulb className="w-6 h-6 mr-2 text-amber-500" />
            3. 评测管线 (Pipeline)
          </h2>
          <Card className="p-8 border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 w-full p-4 bg-gray-50 rounded-lg text-center font-medium text-gray-700 border border-gray-200">数据收集与入库</div>
              <ArrowRight className="hidden md:block w-5 h-5 text-gray-400" />
              <div className="flex-1 w-full p-4 bg-gray-50 rounded-lg text-center font-medium text-gray-700 border border-gray-200">清洗与难度分级</div>
              <ArrowRight className="hidden md:block w-5 h-5 text-gray-400" />
              <div className="flex-1 w-full p-4 bg-gray-50 rounded-lg text-center font-medium text-gray-700 border border-gray-200">Benchmark 构建</div>
              <ArrowRight className="hidden md:block w-5 h-5 text-gray-400" />
              <div className="flex-1 w-full p-4 bg-gray-50 rounded-lg text-center font-medium text-gray-700 border border-gray-200">自动/人工双轨评测</div>
              <ArrowRight className="hidden md:block w-5 h-5 text-gray-400" />
              <div className="flex-1 w-full p-4 bg-purple-50 rounded-lg text-center font-bold text-purple-700 border border-purple-200">误差分析与定级</div>
            </div>
          </Card>
        </FadeIn>

        {/* 4. 核心体系 */}
        <FadeIn delay={0.5}>
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">4. 核心能力维度</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Image Understanding</h3>
              <p className="text-sm text-gray-500">场景识别、主体关系、全局语义理解</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">OCR & Chart</h3>
              <p className="text-sm text-gray-500">复杂排版文本提取、图表数据解析</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Reasoning</h3>
              <p className="text-sm text-gray-500">逻辑推理、常识问答、空间关系推断</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Instruction Following</h3>
              <p className="text-sm text-gray-500">多轮对话、格式遵循、细粒度指令执行</p>
            </div>
          </div>
        </FadeIn>

        {/* 5. 项目产出 */}
        <FadeIn delay={0.6}>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-6">
            <Award className="w-6 h-6 mr-2 text-emerald-500" />
            5. 项目产出
          </h2>
          <Card className="p-6 md:p-8 border-purple-100 bg-purple-50/30">
            <ul className="space-y-4">
              {[
                "建立了标准化的 VLM 能力基线，为后续业务场景（如智能文档分析）的模型选型提供直接决策依据。",
                "精准定位了模型在复杂场景下的核心缺陷，特别是“幻觉率”和“细粒度属性识别错误”。",
                "优化了多模态数据的自动化清洗策略，使得新评测集的构建效率提升 30% 以上。"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>

        {/* 6. Badcase案例 */}
        <FadeIn delay={0.7}>
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">6. Badcase 案例分析</h2>
          <div className="bg-gray-900 text-white rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">测试场景 & Prompt</div>
                <div className="text-sm text-gray-300 mb-2">[图像为一张复杂的英文餐饮收据，包含小费与税率]</div>
                <div className="font-medium text-lg text-purple-300">&quot;提取图中收据的总金额(Total)，并说明税率是多少。&quot;</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">暴露问题 (Issues)</div>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><span className="text-red-400 mr-2">✗</span> 提取了 Subtotal (小计) 而非 Total</li>
                  <li className="flex items-center"><span className="text-red-400 mr-2">✗</span> 捏造了图中不存在的税率数值 (幻觉)</li>
                </ul>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">核心归因 (Attribution)</div>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li>1. <span className="font-semibold text-white">OCR Precision:</span> 对密集数字排版区域的定位不够精准</li>
                  <li>2. <span className="font-semibold text-white">Visual Hallucination:</span> 在未明确找到目标时，基于语言模型的先验知识进行了强行补全</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}