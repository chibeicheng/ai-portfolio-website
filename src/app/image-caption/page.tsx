'use client';

import FadeIn from "@/components/animations/FadeIn";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { CheckCircle2, Target, Lightbulb, Zap, Award, ArrowRight } from "lucide-react";

export default function ImageCaptionPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <FadeIn delay={0.1}>
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline">Data Pipeline</Badge>
            <Badge variant="outline">Quality Control</Badge>
            <Badge variant="outline">SOP Construction</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Image Caption Dataset Production
          </h1>
          <p className="text-2xl text-gray-500 font-medium">多模态高质量图文数据集生产体系</p>
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
              高质量的训练数据是大模型能力上限的决定性因素。面对海量、多样化的长尾图像数据，如何高效生产出准确、丰富、细粒度且风格一致的 Caption 数据，是多模态模型预训练与 SFT 阶段的核心瓶颈。
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4">
              <Zap className="w-6 h-6 mr-2 text-gray-700" />
              2. 我的职责
            </h2>
            <ul className="space-y-3">
              {[
                "设计细粒度的图像标签体系与 Caption 描述层级规范",
                "编写详尽且可执行的 Annotation Guideline",
                "对标注团队进行专业培训与多轮认知对齐",
                "建立多级 Quality Control (QC) 与抽检机制",
                "闭环跟进数据交付，与算法团队对齐数据可用性"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-600">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
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
            3. 数据生产管线 (Data Pipeline)
          </h2>
          <Card className="p-8 border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 w-full p-4 bg-gray-50 rounded-lg text-center font-medium text-gray-700 border border-gray-200">Requirement<br/><span className="text-xs text-gray-500">需求定义</span></div>
              <ArrowRight className="hidden md:block w-5 h-5 text-gray-400" />
              <div className="flex-1 w-full p-4 bg-gray-50 rounded-lg text-center font-medium text-gray-700 border border-gray-200">Guideline<br/><span className="text-xs text-gray-500">规范建设</span></div>
              <ArrowRight className="hidden md:block w-5 h-5 text-gray-400" />
              <div className="flex-1 w-full p-4 bg-gray-50 rounded-lg text-center font-medium text-gray-700 border border-gray-200">Training<br/><span className="text-xs text-gray-500">团队培训</span></div>
              <ArrowRight className="hidden md:block w-5 h-5 text-gray-400" />
              <div className="flex-1 w-full p-4 bg-gray-50 rounded-lg text-center font-medium text-gray-700 border border-gray-200">QC System<br/><span className="text-xs text-gray-500">质量控制</span></div>
              <ArrowRight className="hidden md:block w-5 h-5 text-gray-400" />
              <div className="flex-1 w-full p-4 bg-gray-100 rounded-lg text-center font-bold text-gray-900 border border-gray-300">Delivery<br/><span className="text-xs text-gray-500 font-normal">数据集交付</span></div>
            </div>
          </Card>
        </FadeIn>

        {/* 4. 核心体系 */}
        <FadeIn delay={0.5}>
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">4. 细粒度标签体系</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-gray-900 mb-2">主体与实体</h3>
              <p className="text-xs text-gray-500">人物、动物、物体、材质、数量描述</p>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-gray-900 mb-2">动作与状态</h3>
              <p className="text-xs text-gray-500">细粒度姿态、正在发生的交互动作</p>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-gray-900 mb-2">空间与环境</h3>
              <p className="text-xs text-gray-500">前后景关系、相对位置、光影与天气</p>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-gray-900 mb-2">风格与氛围</h3>
              <p className="text-xs text-gray-500">画风类别、摄影参数、情感基调</p>
            </div>
          </div>
        </FadeIn>

        {/* 5. 项目产出 */}
        <FadeIn delay={0.6}>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-6">
            <Award className="w-6 h-6 mr-2 text-emerald-500" />
            5. 项目产出
          </h2>
          <Card className="p-6 md:p-8 border-gray-200 bg-gray-50">
            <ul className="space-y-4">
              {[
                "成功交付数十万级高质量 Image Caption 数据集，有效提升了模型在密集实体场景下的生成准确率。",
                "通过严谨的 QC 机制，最终数据标注准确率与一致性达 95% 以上。",
                "将数据生产流程抽象为可复用的 SOP，将后续新项目（如 Video Caption）的冷启动时间缩短了 50%。"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-gray-600 mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>

        {/* 6. Badcase案例 */}
        <FadeIn delay={0.7}>
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">6. 标注 Badcase 分析</h2>
          <div className="bg-gray-900 text-white rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">原始图像场景</div>
                <div className="text-sm text-gray-300 mb-2">[一名男子在雨中的公交站台撑着红色雨伞，低头看手机，背景是模糊的车灯]</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">标注员原始描述</div>
                <div className="font-medium text-lg text-gray-300">&quot;一个男人在车站打伞。&quot;</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">暴露问题 (Issues)</div>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><span className="text-red-400 mr-2">✗</span> 粒度过粗，遗漏了关键属性（红色雨伞、下雨天）</li>
                  <li className="flex items-center"><span className="text-red-400 mr-2">✗</span> 遗漏了交互动作（低头看手机）</li>
                  <li className="flex items-center"><span className="text-red-400 mr-2">✗</span> 缺失环境与氛围描述（模糊的车灯）</li>
                </ul>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">核心归因 (Attribution)</div>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li>1. <span className="font-semibold text-white">Guideline Coverage:</span> 早期规范未强制要求覆盖光影与背景景深描述</li>
                  <li>2. <span className="font-semibold text-white">Training Alignment:</span> 标注员对“密集描述”的标准理解不统一</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-emerald-400 uppercase tracking-wider mb-1">优化后描述 (QC后)</div>
                  <div className="text-sm italic">&quot;雨天，一名男子在公交站台撑着一把红色的雨伞，正低头看着手中的手机。背景是散景效果下模糊的城市车灯。&quot;</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}