import React, { useState } from 'react';
import { MagicalParticles } from './components/MagicalParticles';
import { MusicBoxController } from './components/MusicBoxController';
import { Navbar } from './components/Navbar';
import { HeroSanctuary } from './components/HeroSanctuary';
import { IdentityAndTimeline } from './components/IdentityAndTimeline';
import { LoreGrimoireSection } from './components/LoreGrimoireSection';
import { ModelsEvolutionSection } from './components/ModelsEvolutionSection';
import { SagaRpSection } from './components/SagaRpSection';
import { RoyalDovecoteSection } from './components/RoyalDovecoteSection';
import { SkinsAtelierSection } from './components/SkinsAtelierSection';
import { EliksirkiAndPortalsSection } from './components/EliksirkiAndPortalsSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeOutfit, setActiveOutfit] = useState<'fantasy' | 'casual'>('fantasy');
  const [burstCounter, setBurstCounter] = useState<number>(0);

  const handleChangeOutfit = (nextOutfit: 'fantasy' | 'casual') => {
    setActiveOutfit(nextOutfit);
    setBurstCounter((prev) => prev + 1);
  };

  const handleToggleOutfit = () => {
    const next = activeOutfit === 'fantasy' ? 'casual' : 'fantasy';
    handleChangeOutfit(next);
  };

  return (
    <div className="min-h-screen bg-[#0b0611] text-[#f4effa] relative selection:bg-[#b56eff]/30 selection:text-[#f2c97d] sanctuary-grain">
      {/* Golden & Amethyst Spore Particles */}
      <MagicalParticles burstCounter={burstCounter} />

      {/* Top Gothic Navigation */}
      <Navbar activeOutfit={activeOutfit} onToggleOutfit={handleToggleOutfit} />

      {/* Main Content */}
      <main className="relative z-20">
        <HeroSanctuary
          activeOutfit={activeOutfit}
          onChangeOutfit={handleChangeOutfit}
        />
        <IdentityAndTimeline />
        <LoreGrimoireSection />
        <ModelsEvolutionSection onSelectHeroOutfit={handleChangeOutfit} />
        <SagaRpSection />
        <RoyalDovecoteSection />
        <SkinsAtelierSection />
        <EliksirkiAndPortalsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Alchemical Music Box with Autoplay */}
      <MusicBoxController />
    </div>
  );
}

export default App;
