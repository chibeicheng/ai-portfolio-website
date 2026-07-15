'use client';

import FadeIn from "@/components/animations/FadeIn";
import Badge from "@/components/ui/Badge";
import { t2vProjectData } from "@/data/t2vProject";

export default function ProjectHero() {
  const { hero } = t2vProjectData;

  return (
    <section className="pt-[96px] pb-[80px] bg-[#fafafa] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn delay={0.1}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex-1 w-full lg:w-[65%]">
              <span className="inline-block text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-6">
                {hero.label}
              </span>
              
              <h1 
                className="font-extrabold text-gray-900 tracking-tight mb-4"
                style={{ fontSize: "clamp(48px, 5.5vw, 80px)", lineHeight: "1", letterSpacing: "-0.03em" }}
              >
                {hero.title}
              </h1>
              
              <h2 className="text-[28px] md:text-[34px] font-semibold text-gray-800 mb-8">
                {hero.subtitle}
              </h2>
              
              <p className="text-[20px] md:text-[22px] text-gray-600 leading-[1.7] mb-10 max-w-[760px]">
                {hero.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {hero.tags.map((tag, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="bg-white border-gray-200 text-gray-700 px-4 py-1.5 text-[15px] font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Right Project Info Card */}
            <div className="w-full lg:w-[35%] flex-shrink-0">
              <div className="bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                <div className="h-1 w-full bg-indigo-500"></div>
                <div className="p-8 md:p-10">
                  <h3 className="text-[15px] font-bold text-gray-400 mb-8 pb-3 border-b border-gray-100">
                    项目信息
                  </h3>
                  <dl className="space-y-6">
                    {hero.info.map((item, idx) => (
                      <div key={idx}>
                        <dt className="text-[14px] font-medium text-gray-500 mb-2">{item.label}</dt>
                        <dd className="text-[17px] font-semibold text-gray-900">
                          {item.type === 'text' && <span>{item.value}</span>}
                          
                          {item.type === 'list' && Array.isArray(item.value) && (
                            <div className="grid grid-cols-1 gap-2 mt-1">
                              {item.value.map((v, i) => (
                                <div key={i} className="flex items-center text-[16px] text-gray-800">
                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2 flex-shrink-0"></span>
                                  <span className="whitespace-nowrap">{v}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {item.type === 'tags' && Array.isArray(item.value) && (
                            <div className="flex flex-wrap gap-2 mt-1">
                              {item.value.map((v, i) => (
                                <span key={i} className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-md text-[14px] font-medium text-gray-700">
                                  {v}
                                </span>
                              ))}
                            </div>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}