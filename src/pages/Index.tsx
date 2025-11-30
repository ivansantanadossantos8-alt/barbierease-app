import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LayoutDashboard, CalendarCheck, ShoppingCart } from "lucide-react";
import ageniooLogo from "@/assets/agenioo-logo.jpg";

// Android Icon Component
const AndroidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"/>
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <img 
              src={ageniooLogo} 
              alt="AGENIOO Logo" 
              className="h-7 sm:h-10 w-auto object-contain"
            />
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-xs sm:text-sm font-semibold px-4 py-2 h-9"
            >
              Baixar App
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  O App de Agendamento que Todo Barbeiro{" "}
                  <span className="text-primary">Precisa!</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  O sistema de agendamento perfeito para barbeiros que querem mais profissionalismo e zero complicação.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-sm sm:text-base font-semibold px-6 sm:px-8 py-5 sm:py-6 h-auto bg-primary hover:bg-primary/90 glow-primary transition-all hover:scale-105"
                >
                  <AndroidIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                  Baixar para Android
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-sm sm:text-base font-semibold px-6 sm:px-8 py-5 sm:py-6 h-auto border-primary text-primary hover:bg-primary/10 transition-all hover:scale-105"
                >
                  <AppleIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                  Baixar para iOS
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
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <Card className="p-6 sm:p-8 card-gradient border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-2xl group">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <LayoutDashboard className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Controle Total</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Gerencie todos os seus agendamentos, clientes e serviços em um único lugar. Simples e intuitivo.
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 sm:p-8 card-gradient border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-2xl group">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <CalendarCheck className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Agendamento Fácil</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Seus clientes podem agendar direto pelo link que você gerar dentro do app, reduzindo faltas e otimizando sua agenda.
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 sm:p-8 card-gradient border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-2xl group">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Loja Integrada</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Venda produtos da sua barbearia direto pelo app — pomadas, cremes, pós-barba, shampoos e muito mais — e aumente seu faturamento sem esforço.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Baixe Agora e Teste o AGENIOO
            </h2>
            
            <div className="inline-block">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold bg-primary/10 border border-primary/30 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 glow-primary">
                Experimente o AGENIOO por <span className="text-primary">14 dias grátis!</span> Sem compromisso.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="text-sm sm:text-base font-semibold px-6 sm:px-8 py-5 sm:py-6 h-auto bg-primary hover:bg-primary/90 glow-primary transition-all hover:scale-105"
              >
                <AndroidIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                Baixar para Android
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm sm:text-base font-semibold px-6 sm:px-8 py-5 sm:py-6 h-auto border-primary text-primary hover:bg-primary/10 transition-all hover:scale-105"
              >
                <AppleIcon className="mr-2 h-5 w-5 flex-shrink-0" />
                Baixar para iOS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <p className="text-center sm:text-left">© 2024 AGENIOO. Todos os direitos reservados.</p>
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
