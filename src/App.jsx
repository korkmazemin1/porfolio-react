// src/App.js
import React from "react";
import { Sparkles, Code2, ExternalLink, Github, BarChart3 } from "lucide-react";
import { siteData } from "./data";

// --- 1. Arka Plan Efekti Componenti ---
const BackgroundEffects = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute inset-0 space-bg" />
    <div className="floating-orb w-96 h-96 bg-primary/20" style={{ top: "10%", left: "5%", animationDelay: "0s" }} />
    <div className="floating-orb w-80 h-80 bg-secondary/20" style={{ top: "60%", right: "10%", animationDelay: "5s" }} />
    <div className="floating-orb w-64 h-64 bg-neon-pink/10" style={{ bottom: "20%", left: "30%", animationDelay: "10s" }} />
    <div className="absolute inset-0 opacity-[0.02]">
      <svg className="w-full h-full">
        <defs>
          <pattern id="bg-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-grid)" className="text-primary" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-60" />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-40" />
  </div>
);

// --- 2. Proje Kartı Componenti ---
const ProjectCard = ({ title, description, category, accentColor = "cyan" }) => {
  const colorClasses = {
    cyan: { text: "text-primary", bg: "bg-primary/10", glow: "neon-border-cyan" },
    purple: { text: "text-secondary", bg: "bg-secondary/10", glow: "neon-border-purple" },
    pink: { text: "text-neon-pink", bg: "bg-neon-pink/10", glow: "" },
  };
  const colors = colorClasses[accentColor] || colorClasses.cyan;

  return (
    <div className={`glass-panel p-4 md:p-6 group hover:scale-[1.02] transition-all duration-300 ${colors.glow}`}>
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-mono px-2 py-1 rounded ${colors.bg} ${colors.text}`}>
          {category}
        </span>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
           {/* Linkleri data.js'e eklersek buraya href olarak verebiliriz */}
          <button className="p-1.5 rounded-md bg-muted/50 hover:bg-muted transition-colors"><Github className="w-4 h-4 text-muted-foreground" /></button>
          <button className="p-1.5 rounded-md bg-muted/50 hover:bg-muted transition-colors"><ExternalLink className="w-4 h-4 text-muted-foreground" /></button>
        </div>
      </div>
      <h3 className={`font-display text-lg mb-2 ${colors.text}`}>{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-4 h-1 w-full bg-gradient-to-r from-transparent via-muted to-transparent rounded-full" />
    </div>
  );
};

// --- MAIN APP ---
function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <BackgroundEffects />
      
      {/* Ana Konteyner */}
      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        
        {/* GRID LAYOUT: Tüm paneller burada birleşiyor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* 1. HERO PANEL (Sol Üst - Geniş) */}
          <div className="glass-panel-glow p-8 md:p-10 col-span-1 md:col-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
            </div>
            <div className="scan-line opacity-20" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 animate-fade-in stagger-1">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-mono text-primary tracking-wider">{siteData.hero.welcomeText}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in stagger-2">
                <span className="gradient-text">{siteData.hero.nameFirst}</span>
                <br />
                <span className="text-foreground">{siteData.hero.nameLast}</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-in stagger-3">
                {siteData.hero.title}
                <span className="block mt-2 text-primary/80 text-sm md:text-base">
                  {siteData.hero.description}
                </span>
              </p>

              <div className="flex items-center gap-3 mt-6 animate-fade-in stagger-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">{siteData.hero.status}</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <span className="text-sm text-muted-foreground font-mono">{siteData.hero.version}</span>
              </div>
            </div>
          </div>

          {/* 2. STATS PANEL (Sağ Üst - Küçük) */}
          <div className="glass-panel p-4 md:p-6 col-span-1 flex flex-col justify-center">
             <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-secondary" />
                <span className="font-display text-sm text-secondary tracking-wider">STATS</span>
              </div>
              <div className="grid grid-cols-2 gap-3 h-full">
                {siteData.stats.map((stat, idx) => (
                  <div key={stat.id} className="flex flex-col items-center justify-center p-3 bg-muted/20 rounded-lg border border-border/30 hover:border-secondary/30 transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <stat.icon className="w-4 h-4 text-secondary mb-1" />
                    <span className="font-display text-lg text-foreground">{stat.value}</span>
                    <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
          </div>

          {/* 3. SKILLS PANEL (Orta Sol - Küçük) */}
          <div className="glass-panel p-4 md:p-6 col-span-1 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-display text-sm text-primary tracking-wider">TECH STACK</span>
            </div>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              {siteData.skills.map((skill, idx) => (
                <div key={skill.id} className="group relative flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground mt-1 group-hover:text-primary transition-colors">{skill.name}</span>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-primary/5" />
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground leading-relaxed font-mono">
                {siteData.skillsSummary}
              </p>
            </div>
          </div>

          {/* 4. PROJECTS PANEL (Orta Sağ - Geniş) - Grid içinde Grid */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteData.projects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title} 
                description={project.description} 
                category={project.category} 
                accentColor={project.accent} 
              />
            ))}
          </div>

          {/* 5. FOOTER PANEL (En Alt - Tam Genişlik) */}
          <div className="glass-panel p-4 md:p-6 col-span-1 md:col-span-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="font-display text-lg gradient-text mb-1">LET'S CONNECT</h3>
                <p className="text-sm text-muted-foreground">Available for freelance projects and collaborations</p>
              </div>
              <div className="flex items-center gap-4">
                {siteData.socials.map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className={`group relative p-3 rounded-xl bg-muted/30 border border-border/50 text-muted-foreground transition-all duration-300 ${social.color} hover:border-primary/50 animate-fade-in`}>
                    <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-mono bg-card border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/30 text-center">
              <p className="text-xs text-muted-foreground font-mono">{siteData.footerText}</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;