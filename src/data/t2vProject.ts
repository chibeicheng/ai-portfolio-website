export const EVALUATION_MODELS = [
  "MuseSteamer 2.0 Turbo",
  "Kling 3.0",
  "Seedance 2.0 VIP",
  "CogVideoX 2.0"
];

export const t2vProjectData = {
  hero: {
    label: "AI模型评测项目 · 2024.12 - 2025.06",
    title: "MuseSteamer 2.0 Turbo",
    subtitle: "T2V文生视频竞品评测项目",
    description: "基于真实用户使用场景，对 MuseSteamer 2.0 Turbo 与行业主流文生视频模型开展横向竞品评测，通过统一的评测体系分析模型能力差距，为算法团队提供模型优化方向和数据支撑。",
    tags: [
      "AI模型评测",
      "文生视频",
      "竞品分析",
      "项目管理"
    ],
    info: [
      { label: "项目角色", value: "AI项目助理", type: "text" },
      { label: "项目类型", value: "AI模型评测项目", type: "text" },
      { label: "评测模型", value: EVALUATION_MODELS, type: "list" },
      { label: "项目团队", value: "11人标注团�?+ 5人质检团队", type: "text" },
      { label: "核心评测维度", value: ["画面质量", "运动质量", "Prompt遵循"], type: "tags" }
    ]
  },
  overview: {
    background: "随着文生视频模型快速迭代，传统单一指标难以真实反映模型在实际用户场景中的表现。因此项目需要建立一套覆盖画面质量、运动质量和指令遵循能力的统一评测体系，对 MuseSteamer 2.0 Turbo 与主流竞品开展横向分析。",
    objectives: [
      { text: "建立统一、可执行的 T2V 评测标准", isHighlighted: false },
      { text: "构建覆盖多场景、多能力、多难度的评测集", isHighlighted: false },
      { 
        text: "定位 MuseSteamer 2.0 Turbo 的优势、短板和竞品差距", 
        isHighlighted: true,
        desc: "项目最终目标是帮助算法团队识别模型能力边界，并形成可落地的优化方向。"
      },
      { text: "为算法团队提供可落地的优化建议", isHighlighted: false },
      { text: "沉淀可复用的评测流程和项目知识资产", isHighlighted: false }
    ],
    metrics: [
      { value: "3", label: "核心评测维度" },
      { value: "10", label: "生命周期阶段" },
      { value: "16", label: "评测与质检团队" },
      { value: "4", label: "横向评测模型" }
    ]
  },
  lifecycle: [
    { 
      title: "需求理解与项目启动", 
      goal: "明确评测需求，对齐交付目标与排期", 
      actions: ["对接算法团队评测需求", "协助确认模型版本与竞品范围", "明确项目评测目标与交付物"],
      output: "项目计划",
      isPrimary: false
    },
    { 
      title: "评测体系设计", 
      goal: "建立统一的、可执行的模型能力维度", 
      actions: ["拆分二级能力指标", "参与制定评分标准", "协同推进评测体系落地"],
      output: "评测体系框架",
      isPrimary: false
    },
    { 
      title: "评测集建设", 
      goal: "构建多场景、多难度真实用户评测集", 
      actions: ["筛选历史 Case", "执行 Prompt 工程改写"],
      output: "分层评测集",
      isPrimary: true
    },
    { 
      title: "标注规范与团队培训", 
      goal: "统一主观打分认知，消除理解偏差", 
      actions: ["编写标准化标注规范", "建立并维护 Q&A 库", "组织多轮规则培训", "通过案例对齐评分共识"],
      output: "标注 Guideline",
      isPrimary: true
    },
    { 
      title: "项目执行与质量管理", 
      goal: "管控标注进度与评测交付质量", 
      actions: ["组织小规模试标跑通流程", "主导 Diff 差异分析", "对齐 Waterline 水位标准", "完成二轮抽检，保证数据质量"],
      output: "质量抽检报告",
      isPrimary: true
    },
    { 
      title: "数据分析与可视化", 
      goal: "清洗原始数据，提炼核心结论", 
      actions: ["汇总处理多维评测数据", "输出可视化数据看板", "收录相关 Badcase"],
      output: "Dashboard 看板",
      isPrimary: true
    },
    { 
      title: "评测报告与优化建议", 
      goal: "撰写深度竞品分析，明确优化方向", 
      actions: ["定位模型核心能力短板", "量化模型竞品差距", "形成可执行的优化建议"],
      output: "竞品评测报告",
      isPrimary: true
    },
    { 
      title: "知识沉淀与复盘", 
      goal: "将项目经验固化为团队复用资产", 
      actions: ["撰写项目复盘", "沉淀评测 SOP", "更新知识库"],
      output: "评测方法论SOP",
      isPrimary: false
    }
  ],
  responsibilities: {
    summary: "我负责连接算法团队、项目经理、评测团队与供应商团队，协助推动评测项目从需求拆解到结果交付完整落地。",
    items: [
      {
        title: "1. 需求理解与方案拆解",
        points: [
          "对接算法团队评测需求",
          "协助确认模型版本与竞品范围",
          "明确项目评测目标与交付物"
        ]
      },
      {
        title: "2. 评测体系与评测集建设",
        points: [
          "拆分二级能力指标",
          "参与制定评分标准",
          "协同推进评测体系落地"
        ]
      },
      {
        title: "3. 规则文档与培训",
        points: [
          "编写标准化标注规范",
          "建立并维护 Q&A 库",
          "组织多轮规则培训",
          "通过案例对齐评分共识"
        ]
      },
      {
        title: "4. 项目执行管理",
        points: [
          "组织小规模试标跑通流程",
          "评估并监控标注人力",
          "跟踪整体生产进度",
          "统筹资源与排期预估"
        ]
      },
      {
        title: "5. 质量管理与问题对齐",
        points: [
          "主导 Diff 差异分析",
          "对齐 Waterline 水位标准",
          "完成二轮抽检，保证数据质量",
          "收录相关 Badcase"
        ]
      },
      {
        title: "6. 数据分析与报告输出",
        points: [
          "汇总处理多维评测数据",
          "输出可视化数据看板",
          "定位模型核心能力短板",
          "形成可执行的优化建议"
        ]
      }
    ]
  },
  framework: {
    principles: "从真实用户体验出发，将文生视频能力拆解为：可观察、可评分、可归因三个层次，建立统一、可执行的模型评测标准。",
    dimensions: [
      {
        id: "prompt",
        title: "Prompt遵循",
        enTitle: "Instruction Following",
        flow: [
          { name: "主体", desc: "人物、动物、商品等主体是否正确生成" },
          { name: "动作", desc: "主体动作是否符合 Prompt 要求" },
          { name: "环境", desc: "场景是否符合描述" },
          { name: "镜头", desc: "运镜是否正确执行" },
          { name: "风格", desc: "风格是否一致" },
          { name: "细节", desc: "服饰、道具、颜色等细节是否正确" }
        ],
        color: "indigo"
      },
      {
        id: "visual",
        title: "画面质量",
        enTitle: "Visual Quality & Aesthetics",
        priorities: [
          { level: "Priority 1", name: "图像结构", desc: "主体结构完整，空间关系合理，不出现明显形变", tags: ["主体结构", "空间关系", "形变控制"] },
          { level: "Priority 2", name: "清晰度", desc: "主体细节清晰，边缘锐利，无明显模糊", tags: ["主体细节", "边缘", "纹理"] },
          { level: "Priority 3", name: "美观度", desc: "综合评价整体视觉品质与艺术完成度", tags: ["光影", "色彩", "构图", "风格完成度"] },
          { level: "Priority 4", name: "丰富度", desc: "画面层次丰富，元素合理，信息密度适中", tags: ["层次", "元素", "信息密度"] },
          { level: "Bonus", name: "美学表现", desc: "优秀艺术表现可作为额外加分项", tags: ["艺术表现力", "镜头语言", "视觉感染力"] }
        ],
        color: "emerald"
      },
      {
        id: "motion",
        title: "运动质量",
        enTitle: "Motion Quality",
        priorities: [
          { level: "Priority 1", name: "运动合理性", desc: "主体动作符合物理规律，运动逻辑自然" },
          { level: "Priority 2", name: "稳定性", desc: "视频整体稳定，无抖动、闪烁、跳帧等问题" },
          { level: "Priority 2", name: "多主体一致性", desc: "多主体运动协调，无身份漂移、穿插错误" },
          { level: "Priority 3", name: "动态表现力", desc: "动作幅度、速度变化、运动节奏具有表现力" },
          { level: "Priority 4", name: "连贯性", desc: "动作衔接自然，时间连续性合理" }
        ],
        color: "amber"
      }
    ],
    scoring: [
      { score: 1, label: "严重失败" },
      { score: 2, label: "明显问题" },
      { score: 3, label: "基本可用" },
      { score: 4, label: "整体良好" },
      { score: 5, label: "高质量完成" }
    ],
    gbs: {
      title: "GBS竞品对比法（Good · Same · Bad）",
      subtitle: "用于横向比较 MuseSteamer 2.0 Turbo 与竞品模型在同一 Prompt 下的生成表现。",
      description: "Absolute Score（1~5分）用于评价模型绝对能力；GBS 用于评价模型相对竞争力。两套评价体系互不影响，共同组成完整的 AI 模型评测体系。",
      levels: [
        { label: "Good", title: "领先竞品", desc: "MuseSteamer 2.0 Turbo 在主体质量、运动表现或指令遵循等方面整体优于竞品。", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
        { label: "Same", title: "能力接近", desc: "MuseSteamer 2.0 Turbo 与竞品整体表现相近，没有明显优劣差异。", color: "text-gray-500", bg: "bg-gray-50", border: "border-gray-200" },
        { label: "Bad", title: "落后竞品", desc: "MuseSteamer 2.0 Turbo 相较竞品存在明显能力差距，需要进一步优化。", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" }
      ]
    }
  },
  dataset: {
    hero: {
      title: "评测集建设",
      enTitle: "Building a Real-world T2V Evaluation Benchmark",
      desc: "摒弃脱离实际的实验室数据，从真实用户交互与高频失败案例中，提炼出覆盖全场景、多难度梯度的多模态评测基准。"
    },
    philosophy: [
      { title: "Real User Scenario", name: "真实用户场景", desc: "基于真实用户 Query 分布构建，确保评测结果反映真实体感" },
      { title: "Failure-driven Mining", name: "失败案例驱动", desc: "挖掘历史高频 Badcase，精准打击模型能力盲区" },
      { title: "Capability Coverage", name: "能力全量覆盖", desc: "系统性映射模型能力树，消除评测盲点" },
      { title: "Difficulty Calibration", name: "难度科学定标", desc: "引入 Easy / Medium / Hard 梯度，精准测量能力边界" }
    ],
    pipeline: [
      "真实用户 Query",
      "失败案例挖掘",
      "场景建模",
      "能力映射",
      "难度梯度设计",
      "Prompt 强化改写",
      "评测集验证"
    ],
    transformationCase: {
      original: "一个女孩在街上",
      enhanced: "特写镜头，一个赛博朋克风格的年轻女孩走在霓虹闪烁的东京雨夜街道上，水坑倒影出霓虹灯光，女孩转身看向镜头，头发随风飘动",
      target: ["人物细节", "复杂光影(霓虹/倒影)", "转身动作连贯性", "运镜执行"]
    },
    matrix: {
      scenes: ["人物", "动物", "自然风光", "城市建筑", "二次元/3D", "奇幻脑洞"],
      capabilities: ["画面清晰度", "主体一致性", "物理规律", "复杂动作", "镜头语言", "多主体交互"]
    }
  },
  execution: {
    team: [
      { role: "标注团队", count: "11人" },
      { role: "质检团队", count: "5人" },
      { role: "AI项目助理", count: "项目协调、进度管理、质量管理" }
    ],
    phases: [
      { 
        title: "01 规则验证", 
        goal: "验证标注规则覆盖度与可执行性",
        items: ["质检人员试标", "发现规则漏洞", "补充边界Case", "完善Q&A"],
        outputs: ["规则优化版本", "Q&A V1"]
      },
      { 
        title: "02 规则培训", 
        goal: "统一团队标注认知",
        items: ["讲解评分规则", "展示正反案例", "统一标注理解"]
      },
      { 
        title: "03 小规模试标", 
        goal: "验证生产流程与产能",
        items: ["统计标注人效", "评估任务耗时", "识别执行风险", "制定排期Buffer"]
      },
      { 
        title: "04 正式评测", 
        goal: "全量数据标注与质量监控",
        items: ["进度跟踪", "Diff分析", "Q&A维护", "Waterline水位拉齐", "Badcase收集"]
      },
      { 
        title: "05 二轮抽检", 
        goal: "保障最终交付数据质量",
        items: ["检查漏标", "检查错标", "异常评分识别", "标签规范校验"]
      }
    ],
    qcLoop: [
      "规则验证", "规则培训", "试标", "Diff分析", "Q&A更新", "Waterline拉齐", "抽检", "规则优化"
    ]
  },
  deliverables: [
    { title: "T2V评测方案", desc: "项目整体规划与执行方案", type: "Plan" },
    { title: "T2V评测体系", desc: "三大维度与打分细则", type: "Framework" },
    { title: "T2V评测集", desc: "多场景多难度测试用例", type: "Dataset" },
    { title: "场景分类体系", desc: "细粒度视频场景分类树", type: "Taxonomy" },
    { title: "能力覆盖矩阵", desc: "测试用例分布矩阵", type: "Matrix" },
    { title: "标注规则文档", desc: "供应商执行标准SOP", type: "Guideline" },
    { title: "标注Q&A文档", desc: "动态问题解答库", type: "Q&A" },
    { title: "Badcase案例库", desc: "典型失败案例与归因", type: "Database" },
    { title: "数据分析Dashboard", desc: "可视化数据看板", type: "Dashboard" },
    { title: "可视化图表", desc: "各维度能力对比图", type: "Charts" },
    { title: "MuseSteamer 2.0 Turbo T2V竞品评测报告", desc: "核心分析产出", type: "Report" },
    { title: "项目复盘文档", desc: "经验教训与流程优化", type: "Reflection" },
    { title: "AI Project Knowledge Base", desc: "沉淀的项目知识资产", type: "Knowledge Base" }
  ],
  reflection: {
    intro: "这个项目不仅完成了一次文生视频模型横向竞品评测，也沉淀了一套覆盖评测体系设计、评测集建设、规则培训、项目执行、质量控制、数据分析、报告输出和知识管理的完整AI模型评测方法论。",
    points: [
      "将模糊算法需求拆解为可执行评测方案",
      "从真实用户场景出发构建评测集",
      "通过规则、试标、Diff分析和水位拉齐控制评测质量",
      "使用数据和Badcase定位模型能力短板",
      "协调多角色团队推动项目按期交付",
      "将项目经验沉淀为可复用流程和知识资产"
    ]
  }
};