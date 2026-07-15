'use client';

import ProjectHero from "@/components/t2v/ProjectHero";
import ProjectOverview from "@/components/t2v/ProjectOverview";
import LifecycleTimeline from "@/components/t2v/LifecycleTimeline";
import EvaluationFramework from "@/components/t2v/EvaluationFramework";
import DatasetPipeline from "@/components/t2v/DatasetPipeline";
import QualityControlLoop from "@/components/t2v/QualityControlLoop";
import T2VDataAnalysisSection from "@/components/t2v/T2VDataAnalysisSection";
import BadcaseShowcase from "@/components/t2v/BadcaseShowcase";
import BadcaseShowcase2 from "@/components/t2v/BadcaseShowcase2";
import DeliverableGrid from "@/components/t2v/DeliverableGrid";
import EvaluationReportSection from "@/components/t2v/EvaluationReportSection";
import ProjectReflection from "@/components/t2v/ProjectReflection";

export default function T2VEvalPage() {
  return (
    <div className="bg-white">
      {/* 1. Project Hero */}
      <ProjectHero />
      
      {/* 2. Project Overview */}
      <ProjectOverview />
      
      {/* 3. Project Lifecycle */}
      <LifecycleTimeline />
      
      {/* 5. Evaluation Framework */}
      <EvaluationFramework />
      
      {/* 6. Dataset Construction */}
      <DatasetPipeline />
      
      {/* 7. Project Execution & Quality Control */}
      <QualityControlLoop />
      
      {/* 8. Data Analysis & Visualization */}
      <T2VDataAnalysisSection />
      
      {/* 9. Badcase Case Study */}
      <BadcaseShowcase />
      <BadcaseShowcase2 />
      
      {/* 10. Evaluation Report Delivery */}
      <EvaluationReportSection />
      
      {/* 11. Project Deliverables */}
      <DeliverableGrid />
      
      {/* 12. Project Reflection */}
      <ProjectReflection />
    </div>
  );
}