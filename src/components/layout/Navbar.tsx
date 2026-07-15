import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          TYK<span className="text-gradient">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#4f46e5] transition-colors">首页</Link>
          <Link href="/about" className="hover:text-[#4f46e5] transition-colors">关于我</Link>
          <Link href="/t2v-eval" className="hover:text-[#4f46e5] transition-colors">T2V文生视频评测</Link>
          <Link href="/vlm-eval" className="hover:text-[#4f46e5] transition-colors">VLM视觉理解评测</Link>
          <Link href="/image-caption" className="hover:text-[#4f46e5] transition-colors">图片Caption描述</Link>
        </div>
        {/* Mobile menu button could go here */}
        <button className="md:hidden p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
