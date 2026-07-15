'use client';

import FadeIn from "@/components/animations/FadeIn";
import { t2vProjectData } from "@/data/t2vProject";

export default function ResponsibilityGrid() {
  const { responsibilities } = t2vProjectData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">我的角色与职责</h2>
          <p className="text-xl text-indigo-600 font-medium text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {responsibilities.summary}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsibilities.items.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-colors group">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 group-hover:border-indigo-100 transition-colors">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start text-gray-600">
                      <span className="text-indigo-400 mr-3 text-lg leading-none mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}