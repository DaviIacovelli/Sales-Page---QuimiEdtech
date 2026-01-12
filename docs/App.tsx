import React from 'react';
import { 
  Atom, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  ShieldCheck, 
  GraduationCap, 
  Brain,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Accordion } from './components/Accordion';
import { Button } from './components/Button';
import { FaqItem, Testimonial } from './types';

const App: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials: Testimonial[] = [
    {
      name: "Lucas M.",
      role: "Estudante de Eng. Química - 3º Período",
      content: "Eu achei que era golpe por ser tão barato comparado aos livros, mas o conteúdo salvou meu semestre. Passei em Química Geral com 8,5 só estudando por aqui.",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      name: "Mariana S.",
      role: "Trabalha e Estuda",
      content: "Eu não tinha tempo de ler aquelas bíblias de química. O material vai direto ao ponto. Consegui estudar no ônibus voltando do trabalho. Vale cada centavo.",
      image: "https://picsum.photos/100/100?random=2"
    },
    {
      name: "João Pedro",
      role: "Engenharia de Produção",
      content: "A didática é incrível. Coisas que o professor levava 2 aulas pra explicar e eu não entendia, aqui entendi em 15 minutos de leitura.",
      image: "https://picsum.photos/100/100?random=3"
    }
  ];

  const faqs: FaqItem[] = [
    {
      question: "Para quem é este material?",
      answer: "É especificamente desenhado para estudantes de engenharia (Química, Produção, Civil, etc.) que precisam construir uma base sólida sem perder tempo com enrolação acadêmica."
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim! Utilizamos as maiores plataformas de pagamento do Brasil, com criptografia de ponta a ponta. Seus dados estão 100% protegidos."
    },
    {
      question: "Como recebo o acesso?",
      answer: "Assim que o pagamento for confirmado, você receberá um e-mail com seus dados de login para acessar nossa plataforma exclusiva de membros."
    },
    {
      question: "Tenho quanto tempo para acessar?",
      answer: "O acesso é VITALÍCIO. Você paga uma vez e o material é seu para sempre, podendo consultar inclusive nos períodos avançados do curso."
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem 7 dias de garantia incondicional. Se achar que o material não é para você, devolvemos 100% do seu dinheiro, sem perguntas."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      
      {/* 1. HERO SECTION */}
      <header className="relative bg-slate-900 text-white pt-20 pb-24 px-4 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <svg className="absolute -top-24 -right-24 w-96 h-96 text-brand-500" fill="currentColor" viewBox="0 0 200 200"><path d="M45,-76.3C58.9,-69.3,71.4,-59.1,81.1,-46.8C90.8,-34.5,97.6,-20.1,96.8,-6.1C96,8,87.6,21.7,77.5,33.5C67.4,45.3,55.6,55.2,42.9,62.5C30.2,69.8,16.6,74.5,2.7,70.8C-11.2,67.1,-25.4,55,-37.8,44.2C-50.2,33.4,-60.8,24,-66.6,11.8C-72.4,-0.4,-73.4,-15.4,-67.2,-28.6C-61,-41.8,-47.6,-53.2,-34.2,-60.5C-20.8,-67.8,-7.4,-71,3.2,-75.4C13.8,-79.8,27.6,-85.4,45,-76.3Z" transform="translate(100 100)" /></svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-brand-600/30 text-brand-300 font-semibold px-4 py-1 rounded-full text-sm mb-6 border border-brand-500/50">
            Exclusivo para Estudantes de Engenharia
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Domine a Química da Engenharia <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">Sem Queimar os Neurônios</span> (e Sem Reprovar)
          </h1>
          
          <h2 className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
            O método direto e objetivo que simplifica o conteúdo extenso e te faz entender a base de uma vez por todas — mesmo que você tenha odiado química no ensino médio.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToPricing} className="w-full sm:w-auto text-lg px-8 py-5">
              Quero Garantir Minha Aprovação
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <p className="mt-4 text-sm text-slate-400 flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" /> Acesso Imediato
            <span className="mx-2">•</span>
            <CheckCircle className="w-4 h-4 text-green-500" /> Compra Segura
          </p>
        </div>
      </header>

      {/* 2. PAS SECTION (Problem - Agitation - Solution) */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          {/* Problem */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-red-100 p-3 rounded-full shrink-0">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Você se sente assim?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Você abre o livro de Química Geral (aquele tijolo de 800 páginas), lê o primeiro parágrafo e parece que está escrito em grego. As fórmulas não fazem sentido, a estequiometria parece mágica negra e a prova está chegando.
                </p>
              </div>
            </div>
            
            {/* Agitation */}
            <div className="pl-4 border-l-4 border-red-200 ml-4 py-2">
              <p className="text-slate-700 italic font-medium">
                O pior não é apenas a nota baixa. É a sensação de que você escolheu o curso errado. É o medo de ficar para trás enquanto seus amigos avançam. É a ansiedade de ter que explicar para seus pais que você reprovou em uma matéria básica.
              </p>
            </div>
          </div>

          {/* Solution Bridge */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-brand-100 text-brand-700 w-12 h-12 rounded-full mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">A culpa não é sua. É do método tradicional.</h3>
            <p className="text-lg text-slate-600 mb-8">
              A maioria dos livros foi escrita para químicos, não para estudantes que precisam de praticidade. Você precisa de um mapa, não de uma enciclopédia.
            </p>
            <p className="text-xl font-bold text-brand-700">
              Apresentamos o Química Básica Volume 1.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
             {/* Book/Course Mockup placeholder */}
            <div className="relative aspect-[3/4] max-w-sm mx-auto bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl shadow-2xl flex items-center justify-center text-white p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="absolute inset-0 border-2 border-white/20 rounded-xl m-4"></div>
               <div className="text-center">
                 <Atom className="w-20 h-20 mx-auto mb-4 text-brand-200" />
                 <h3 className="text-3xl font-bold uppercase tracking-wider mb-2">Química Básica</h3>
                 <p className="text-brand-200 font-mono mb-8">Volume 1</p>
                 <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                   <p className="text-sm">Guia Essencial para Engenharia</p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              O Que Você Vai Encontrar Aqui?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Este não é apenas mais um PDF. É um sistema de aprendizado acelerado focado no que realmente cai nas provas e no que você vai usar na indústria.
            </p>
            
            <ul className="space-y-4">
              {[
                "Linguagem direta: Explicamos como se estivéssemos conversando com você.",
                "Foco no Essencial: Cortamos a 'gordura' acadêmica desnecessária.",
                "Exercícios Resolvidos Passo a Passo: Não pulamos etapas.",
                "Visualizações Claras: Diagramas que fazem sentido instantaneamente."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS (Transformation) */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Por que este material é diferente de tudo que você já viu?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors">
              <Clock className="w-12 h-12 text-brand-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Ganhe Tempo de Vida</h3>
              <p className="text-slate-400">
                Pare de perder horas decifrando livros complexos. Aprenda em 1 hora o que levaria uma semana estudando sozinho.
              </p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors">
              <Brain className="w-12 h-12 text-brand-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Destrave seu Raciocínio</h3>
              <p className="text-slate-400">
                Entenda a lógica por trás das fórmulas. Você vai parar de decorar e começar a *pensar* como engenheiro.
              </p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors">
              <GraduationCap className="w-12 h-12 text-brand-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Blindagem Contra Reprovação</h3>
              <p className="text-slate-400">
                Construa a base sólida necessária não só para passar agora, mas para as matérias específicas que virão depois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF */}
      <section className="py-20 px-4 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Quem estuda com a gente, aprova (e passa)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover bg-slate-200" />
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {"★★★★★"}
                </div>
                <p className="text-slate-600 italic">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OFFER & PRICING */}
      <section id="pricing" className="py-20 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-brand-600 text-white p-4 text-center font-bold tracking-wider text-sm uppercase">
              Oferta por tempo limitado
            </div>
            
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Acesso Vitalício ao Química Básica Vol. 1
              </h2>
              <p className="text-slate-500 mb-8">
                Todo o conteúdo, atualizações futuras e bônus inclusos.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="text-slate-400 line-through text-2xl">
                  R$ 197,90
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-bold text-sm">
                  -35% OFF
                </div>
              </div>

              <div className="mb-2">
                <span className="text-6xl font-extrabold text-slate-900">R$ 129,99</span>
              </div>
              <p className="text-brand-600 font-bold mb-8">
                Ou R$ 103,99 no PIX (20% Extra de Desconto)
              </p>

              <div className="max-w-md mx-auto space-y-4 mb-10 text-left">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-brand-500" />
                  <span>E-book Completo Alta Definição</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent-100 text-accent-700 text-xs px-2 py-0.5 rounded font-bold">BÔNUS</div>
                  <span>Lista de Exercícios Comentada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent-100 text-accent-700 text-xs px-2 py-0.5 rounded font-bold">BÔNUS</div>
                  <span>Mapa Mental dos Principais Tópicos</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-500" />
                  <span>Garantia de 7 Dias</span>
                </div>
              </div>

              <Button onClick={() => alert('Redirecionar para Checkout')} fullWidth className="text-xl py-6 animate-pulse hover:animate-none">
                SIM! Quero Dominar Química Agora
              </Button>
              
              <p className="mt-4 text-xs text-slate-400">
                Pagamento processado de forma 100% segura. Acesso enviado por e-mail imediatamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GUARANTEE */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="shrink-0">
            <img src="https://cdn-icons-png.flaticon.com/512/9513/9513755.png" alt="Garantia" className="w-32 h-32 opacity-90 drop-shadow-md grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Risco Zero: Garantia Incondicional de 7 Dias</h3>
            <p className="text-slate-600">
              Eu confio tanto na qualidade deste material que assumo o risco. Compre, use, estude. Se em 7 dias você achar que não valeu a pena, eu devolvo 100% do seu dinheiro. Basta um e-mail.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.question}>
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Atom className="w-8 h-8 text-brand-500" />
            <span className="text-xl font-bold text-white">Química Básica</span>
          </div>
          <p className="mb-6 text-sm">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
          <p className="mt-8 text-xs text-slate-600">
            © {new Date().getFullYear()} Química Básica EdTech. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA (Visible only on scroll/mobile typically, keeping it simple here) */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-200 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Button onClick={scrollToPricing} fullWidth className="py-4 text-lg">
          Quero Comprar com Desconto
        </Button>
      </div>

    </div>
  );
};

export default App;