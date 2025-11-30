import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scissors, CalendarCheck, ShoppingBag } from "lucide-react";
import ageniooLogo from "@/assets/agenioo-logo.jpg";

// Android Icon Component
const AndroidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"/>
  </svg>
);

// Razor Icon Component  
const RazorIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8 L18 8 L20 4 L4 4 Z"/>
    <path d="M6 8 L6 20 L8 22 L16 22 L18 20 L18 8"/>
    <line x1="10" y1="12" x2="14" y2="12"/>
    <line x1="10" y1="15" x2="14" y2="15"/>
  </svg>
);

// iOS/Apple Icon Component
const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-primary/30 barber-stripes">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <img 
              src={ageniooLogo} 
              alt="AGENIOO Logo" 
              className="h-7 sm:h-10 w-auto object-contain"
            />
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-xs sm:text-sm font-bold px-4 py-2 h-9 glow-primary"
            >
              BAIXAR APP
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 sm:pt-24 barber-stripes">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background pointer-events-none" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left relative z-10">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-3 vintage-badge rounded-full px-6 py-2 bg-background/50">
                  <Scissors className="h-5 w-5 text-gold" />
                  <span className="text-gold font-bold text-sm tracking-widest">PROFISSIONAL</span>
                  <RazorIcon className="h-5 w-5 text-gold" />
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-wider">
                  O APP DE AGENDAMENTO QUE TODO BARBEIRO{" "}
                  <span className="text-primary drop-shadow-[0_0_25px_rgba(249,115,22,0.5)]">PRECISA!</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 font-light">
                  Sistema completo de agendamento para barbeiros que buscam profissionalismo e praticidade. Gerencie sua barbearia com estilo.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-sm sm:text-base font-bold px-6 sm:px-8 py-5 sm:py-6 h-auto bg-primary hover:bg-primary/90 glow-primary transition-all hover:scale-105 tracking-wide"
                >
                  <AndroidIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                  BAIXAR PARA ANDROID
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-sm sm:text-base font-bold px-6 sm:px-8 py-5 sm:py-6 h-auto border-2 border-gold text-gold hover:bg-gold/10 transition-all hover:scale-105 tracking-wide glow-gold"
                >
                  <AppleIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                  BAIXAR PARA iOS
                </Button>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-sm animate-float">
                {/* Phone Mockup SVG */}
                <svg viewBox="0 0 300 600" className="w-full h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                  {/* Phone Frame */}
                  <rect x="10" y="10" width="280" height="580" rx="30" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
                  <rect x="20" y="20" width="260" height="560" rx="25" fill="#0a0a0a"/>
                  
                  {/* Screen Content */}
                  <rect x="20" y="20" width="260" height="560" rx="25" fill="#0d1117"/>
                  
                  {/* Header */}
                  <rect x="40" y="50" width="220" height="60" rx="12" fill="#f97316" opacity="0.9"/>
                  <text x="150" y="85" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">AGENIOO</text>
                  
                  {/* Calendar Icon Area */}
                  <rect x="40" y="130" width="100" height="100" rx="12" fill="#1a1a1a"/>
                  <circle cx="90" cy="160" r="15" fill="#f97316"/>
                  <rect x="75" y="180" width="30" height="3" rx="2" fill="#f97316"/>
                  <rect x="75" y="190" width="20" height="3" rx="2" fill="#666"/>
                  
                  {/* Service Card 1 */}
                  <rect x="150" y="130" width="110" height="100" rx="12" fill="#1a1a1a"/>
                  <rect x="160" y="145" width="30" height="3" rx="2" fill="#f97316"/>
                  <rect x="160" y="160" width="80" height="3" rx="2" fill="#666"/>
                  <rect x="160" y="175" width="60" height="3" rx="2" fill="#666"/>
                  <circle cx="240" cy="205" r="12" fill="#f97316" opacity="0.2"/>
                  <path d="M237 205 L240 208 L245 200" stroke="#f97316" strokeWidth="2" fill="none"/>
                  
                  {/* Service Card 2 */}
                  <rect x="40" y="250" width="220" height="80" rx="12" fill="#1a1a1a"/>
                  <circle cx="65" cy="290" r="20" fill="#f97316" opacity="0.2"/>
                  <rect x="95" y="270" width="80" height="4" rx="2" fill="#f97316"/>
                  <rect x="95" y="285" width="120" height="3" rx="2" fill="#666"/>
                  <rect x="95" y="295" width="90" height="3" rx="2" fill="#666"/>
                  
                  {/* Service Card 3 */}
                  <rect x="40" y="350" width="220" height="80" rx="12" fill="#1a1a1a"/>
                  <circle cx="65" cy="390" r="20" fill="#f97316" opacity="0.2"/>
                  <rect x="95" y="370" width="80" height="4" rx="2" fill="#f97316"/>
                  <rect x="95" y="385" width="120" height="3" rx="2" fill="#666"/>
                  <rect x="95" y="395" width="90" height="3" rx="2" fill="#666"/>
                  
                  {/* Bottom Action Button */}
                  <rect x="40" y="460" width="220" height="50" rx="25" fill="#f97316"/>
                  <text x="150" y="490" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">Novo Agendamento</text>
                  
                  {/* Bottom Navigation */}
                  <rect x="40" y="530" width="220" height="40" rx="20" fill="#1a1a1a"/>
                  <circle cx="80" cy="550" r="8" fill="#f97316"/>
                  <circle cx="150" cy="550" r="8" fill="#666"/>
                  <circle cx="220" cy="550" r="8" fill="#666"/>
                  
                  {/* Notch */}
                  <rect x="120" y="25" width="60" height="20" rx="10" fill="#0a0a0a"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 barber-stripes opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">
              FERRAMENTAS <span className="text-primary">PROFISSIONAIS</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 bg-gold"></div>
              <Scissors className="h-5 w-5 text-gold" />
              <div className="h-px w-12 bg-gold"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <Card className="p-6 sm:p-8 card-gradient hover:border-primary transition-all hover:scale-105 hover:shadow-2xl group bg-card/50 backdrop-blur">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors border border-primary/30">
                  <Scissors className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide">CONTROLE TOTAL</h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Gerencie agendamentos, clientes e serviços em um só lugar. Tenha controle profissional da sua barbearia.
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 sm:p-8 card-gradient hover:border-gold transition-all hover:scale-105 hover:shadow-2xl group bg-card/50 backdrop-blur">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors border border-gold/30">
                  <CalendarCheck className="h-6 w-6 sm:h-7 sm:w-7 text-gold" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide">AGENDA ONLINE</h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Clientes agendam direto pelo link. Reduza faltas, otimize horários e tenha agenda cheia todo dia.
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 sm:p-8 card-gradient hover:border-primary transition-all hover:scale-105 hover:shadow-2xl group bg-card/50 backdrop-blur">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors border border-primary/30">
                  <ShoppingBag className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide">LOJA INTEGRADA</h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Venda pomadas, cremes e produtos direto pelo app. Aumente o faturamento da barbearia sem esforço extra.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden barber-stripes">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-background to-background pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-radial from-gold/5 to-transparent" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-primary"></div>
              <RazorIcon className="h-6 w-6 text-primary" />
              <div className="h-px w-16 bg-primary"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider">
              TRANSFORME SUA BARBEARIA <span className="text-primary">HOJE</span>
            </h2>
            
            <div className="inline-block vintage-badge">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-primary/20 to-gold/20 rounded-2xl px-6 sm:px-8 py-4 sm:py-5">
                <span className="text-gold">14 DIAS GRÁTIS</span> • Teste completo sem compromisso
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="text-sm sm:text-base font-bold px-6 sm:px-8 py-5 sm:py-6 h-auto bg-primary hover:bg-primary/90 glow-primary transition-all hover:scale-105 tracking-wide"
              >
                <AndroidIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                BAIXAR PARA ANDROID
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm sm:text-base font-bold px-6 sm:px-8 py-5 sm:py-6 h-auto border-2 border-gold text-gold hover:bg-gold/10 transition-all hover:scale-105 tracking-wide glow-gold"
              >
                <AppleIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                BAIXAR PARA iOS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/30 py-6 sm:py-8 bg-secondary/50 barber-stripes">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Scissors className="h-4 w-4 text-gold" />
              <span className="text-gold font-bold tracking-widest">AGENIOO</span>
              <Scissors className="h-4 w-4 text-gold" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-foreground/60">
            <p className="text-center sm:text-left font-light">© 2024 AGENIOO. Todos os direitos reservados.</p>
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Suporte via WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
