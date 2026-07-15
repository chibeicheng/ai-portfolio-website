'use client';

import FadeIn from "@/components/animations/FadeIn";
import { t2vProjectData } from "@/data/t2vProject";
import { FileText, Database, LayoutDashboard, BarChart, BookOpen, ExternalLink } from "lucide-react";

export default function DeliverableGrid() {
  const { deliverables } = t2vProjectData;

  const getIcon = (type: string) => {
    switch (type) {
      case 'Plan':
      case 'Framework':
      case 'Guideline':
      case 'Q&A':
      case 'Report':
      case 'Reflection':
        return <FileText className="w-5 h-5 text-indigo-500" />;
      case 'Dataset':
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'Dashboard':
      case 'Matrix':
        return <LayoutDashboard className="w-5 h-5 text-amber-500" />;
      case 'Charts':
        return <BarChart className="w-5 h-5 text-purple-500" />;
      case 'Taxonomy':
      case 'Knowledge Base':
        return <BookOpen className="w-5 h-5 text-blue-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">项目交付成果</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {deliverables.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {getIcon(item.type)}
                  </div>
                  <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 rounded">
                    {item.type}
                  </span>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-500 mb-6 flex-1">
                  {item.desc}
                </p>
                
                <button className="flex items-center text-xs font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors w-max">
                  即将开放
                  <ExternalLink className="w-3 h-3 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}