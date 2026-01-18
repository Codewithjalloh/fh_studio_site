'use client';

import Image from 'next/image';

const PortfolioHero = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-slate-50/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] rounded-full bg-blue-100 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[70%] rounded-full bg-indigo-100 blur-[100px]"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight text-slate-900">
          Engineering the <span className="text-primary">Future of AI</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          A delivery-focused showcase of our technical excellence in building complex, production-ready AI software systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="flex -space-x-3 overflow-hidden">
            <Image
              alt="team member"
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALr4ztGlxN9wJAgtzcYEik1NMbMoxN2meSdn8NjGNJj3awGtr5_gN3RKM8CO7m_IKLKQsZfR-gCSeC84J1XSu8GgeRPn29JcwhtOUKSwmck-GA7pLHg9k3xzBSAezPUrA1i7WFlodLmGZzbN6DRT795QGyPPmdHMV_8Z1N8eC2HXeWJRjirJrZ17YlhvGbitMUm4eYKwM3dDmq9EUWrPh7GCF4yvzQPemJ6EN3c6p_MOQ6M1756CxuSG21uvguMHgBMCPjUjnw-SA"
              width={40}
              height={40}
            />
            <Image
              alt="team member"
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM8yuYtSy77Co8ZX0ZeTdgN2hbLP8OMbOcZfxC_M0m_n-pQh_B79YIvf6WVo11HGxcYo9GlbafoNUpvW0kpeI3ZFgcvZOC7BjiIPBXGc6CKyDf4wIvtQMi3a1O9biCfKg_UJ6Eety6emyuo7kqc7QmpOd12d5Vr8461Ut7KPsRBxHR2luQNamdataQs9rncVQUtUhejXKrMMAt2m5hhTI81OeMxlEL_-JH8Yzr49xj26htXW7TuxWpsxu7JM7RDzS4cjfOqtU077w"
              width={40}
              height={40}
            />
            <Image
              alt="team member"
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD43Cum8F2-bwRtTqQNB48KC2xtfbWkw8Oi8LlbEYRwRlky0CXA53Zt9Bk3ZsNo_Fik0gH8nbrLWLuudeNLkigsLf4WIrkfmfrXsvaJ_Si5yQAViksdWPNk7tsBTm3Z5q6XKsEFv4XqD--d3GP-G7A3nBbvRNhIBbR9vAN3PMcx44DfHkpkYFMHn2H-h2h8pJRhR5dKDnG0jgkOvm7EBl4kBT0ES1R8ZfG66uVXmOyalH9R9MB1dB8TVwvo7BLbJjWsHfA3-NehW0"
              width={40}
              height={40}
            />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-500 text-center">Trusted by 50+ Enterprises</span>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
