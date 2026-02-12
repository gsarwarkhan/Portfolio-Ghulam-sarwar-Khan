import Hero from '@/components/Hero';
import About from '@/components/About';
import LeadershipHighlights from '@/components/LeadershipHighlights';
import Experience from '@/components/Experience';
import AITechnology from '@/components/AITechnology';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <LeadershipHighlights />
      <Experience />
      <AITechnology />
      <Testimonials />

      {/* Basic Footer */}
      <footer id="contact" className="bg-slate-900 py-12 text-white">
        <div className="section-container border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between space-y-8 md:flex-row md:space-y-0">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Ghulam Sarwar Khan</h3>
              <p className="text-slate-400">Secretary General, Pakistan Tea Association</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-bold uppercase tracking-widest text-accent">Contact Information</p>
              <p className="text-slate-300">Email: sarwaronline@gmail.com</p>
              <p className="text-slate-300">Phone: +92 3232777272</p>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Ghulam Sarwar Khan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
