import { useEffect, useState, type ReactNode } from "react";

const WHATSAPP_NUMBER = "5518997002040";
const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const navigationLinks = [
  { href: "#colecao", label: "Coleção" },
  { href: "#sabores", label: "Sabores" },
  { href: "#encomendas", label: "Encomendas" },
];

const products = [
  {
    name: "Casinha com pote",
    detail: "Casinha presenteável + pote de 140 ml",
    price: "R$ 22,90",
    image: publicAsset("catalogo/casinha-de-natal.jpg"),
    position: "50% 49%",
    category: "Presentes",
  },
  {
    name: "Caixinha Coração",
    detail: "9 brigadeiros de 20 g",
    price: "R$ 35,00",
    image: publicAsset("catalogo/caixinha-coracao.png"),
    position: "50% 50%",
    category: "Brigadeiros",
  },
  {
    name: "Caixinha Árvore",
    detail: "6 brigadeiros de 20 g",
    price: "R$ 25,00",
    image: publicAsset("catalogo/caixinha-arvore.png"),
    position: "50% 50%",
    category: "Brigadeiros",
  },
  {
    name: "Caixinha (4 unidades)",
    detail: "4 brigadeiros de 20 g",
    price: "R$ 18,00",
    image: publicAsset("catalogo/caixinha-quatro-unidades.png"),
    position: "50% 50%",
    category: "Brigadeiros",
  },
  {
    name: "Árvore na Caixinha Temática",
    detail: "Chocolate recheado • 90 g",
    price: "R$ 24,90",
    image: publicAsset("catalogo/arvore-caixinha-tematica.png"),
    position: "50% 50%",
    category: "Árvores",
  },
  {
    name: "Árvore de Chocolate",
    detail: "Chocolate artesanal • 95 g",
    price: "R$ 19,90",
    image: publicAsset("catalogo/arvore-chocolate.png"),
    position: "50% 50%",
    category: "Chocolates",
  },
  {
    name: "Barra Papai Noel",
    detail: "Chocolate recheado • 260 g",
    price: "R$ 44,90",
    image: publicAsset("catalogo/barra-papai-noel.png"),
    position: "50% 50%",
    category: "Chocolates",
  },
  {
    name: "Guirlanda de Chocolate",
    detail: "Chocolate recheado • 310 g",
    price: "R$ 54,90",
    image: publicAsset("catalogo/guirlanda-chocolate.png"),
    position: "50% 50%",
    category: "Chocolates",
  },
];

const orderInfo = [
  { title: "Pedidos", text: "Até 20/12", icon: <CalendarIcon /> },
  { title: "Entregas", text: "Até 24/12, conforme combinado", icon: <TruckIcon /> },
  { title: "Reserva", text: "50% do valor do pedido", icon: <PercentIcon /> },
  { title: "Pagamento", text: "Pix, dinheiro, débito ou crédito", icon: <CardIcon /> },
];

function whatsappLink(product?: string) {
  const message = product
    ? `Olá! Vi o catálogo de Natal e gostaria de encomendar: ${product}.`
    : "Olá! Vi o catálogo de Natal e gostaria de fazer uma encomenda.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Icon({
  children,
  className = "",
  viewBox = "0 0 24 24",
}: {
  children: ReactNode;
  className?: string;
  viewBox?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox={viewBox}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M20.4 11.8a8.4 8.4 0 0 1-12.4 7.4L3.4 20.5l1.3-4.4A8.4 8.4 0 1 1 20.4 11.8Z" />
      <path d="M8.1 7.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4l.8 2c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.7 2.1 3 2.7.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.5.3.5.5 0 .2-.2 1.2-.8 1.7-.5.5-1.3.8-2.1.7-1.1-.2-2.5-.7-4.2-2.2-2.2-1.9-3.5-4.3-3.6-5.6 0-.7.2-1 .4-1.3Z" />
    </Icon>
  );
}

function CalendarIcon() {
  return (
    <Icon className="h-6 w-6">
      <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
    </Icon>
  );
}

function TruckIcon() {
  return (
    <Icon className="h-6 w-6">
      <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
    </Icon>
  );
}

function PercentIcon() {
  return (
    <Icon className="h-6 w-6">
      <path d="m7 17 10-10" />
      <circle cx="7.5" cy="7.5" r="2" />
      <circle cx="16.5" cy="16.5" r="2" />
    </Icon>
  );
}

function CardIcon() {
  return (
    <Icon className="h-6 w-6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </Icon>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <Icon className="h-5 w-5">
      {isOpen ? (
        <path d="m6 6 12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </Icon>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#inicio"
      className="group flex items-center gap-3"
      aria-label="Sabores da Alma — início"
    >
      <span
        className={`grid shrink-0 place-items-center rounded-full border border-gold/60 font-display italic text-gold transition-transform duration-500 group-hover:rotate-6 ${
          compact ? "h-10 w-10 text-lg" : "h-12 w-12 text-xl"
        }`}
      >
        SA
      </span>
      <span className="leading-none">
        <strong
          className={`block font-display font-medium tracking-[0.12em] text-cream ${compact ? "text-lg" : "text-xl"}`}
        >
          SABORES DA ALMA
        </strong>
        <small className="mt-1 block text-[9px] uppercase tracking-[0.3em] text-cream/60">
          Atelier de doces finos
        </small>
      </span>
    </a>
  );
}

function Welcome({
  onEnter,
  isClosing,
  onExitComplete,
}: {
  onEnter: () => void;
  isClosing: boolean;
  onExitComplete: () => void;
}) {
  return (
    <div
      className={`welcome fixed inset-0 z-[100] overflow-hidden bg-wine text-cream ${isClosing ? "welcome-leave" : ""}`}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && isClosing) onExitComplete();
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url("${publicAsset("catalogo/capa-natal.jpg")}")` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(44,4,9,.96)_0%,rgba(74,4,12,.78)_48%,rgba(44,4,9,.4)_100%)]" />
      <div className="light-string" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-full max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-16">
        <Logo />
        <div className="my-auto max-w-2xl py-16">
          <p className="welcome-in mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-10 bg-gold/70" />
            Catálogo especial
          </p>
          <h1 className="welcome-in delay-1 font-display text-6xl font-medium leading-[0.86] tracking-tight sm:text-8xl lg:text-[7rem]">
            O Natal mais
            <span className="mt-2 block font-script text-[1.14em] font-normal text-gold">
              doce começa aqui.
            </span>
          </h1>
          <p className="welcome-in delay-2 mt-8 max-w-lg text-base leading-relaxed text-cream/72 sm:text-lg">
            Presentes artesanais criados para transformar pequenos gestos em memórias inesquecíveis.
          </p>
          <button
            onClick={onEnter}
            className="welcome-in delay-3 mt-10 inline-flex items-center gap-4 rounded-full bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-wine transition-all duration-500 hover:-translate-y-1 hover:bg-cream hover:shadow-[0_16px_40px_rgba(0,0,0,.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Abrir catálogo
            <ChevronIcon className="h-4 w-4" />
          </button>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-cream/45">
          Natal feito à mão, com alma
        </p>
      </div>
    </div>
  );
}

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  return (
    <article className="reveal group overflow-hidden rounded-[1.75rem] border border-wine/10 bg-white shadow-[0_18px_55px_rgba(83,24,25,.09)]">
      <div className="relative h-72 overflow-hidden bg-white sm:h-80">
        <img
          src={product.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full scale-105 object-cover blur-md opacity-70 sm:scale-110 sm:blur-xl"
          style={{ objectPosition: product.position }}
          loading={index > 2 ? "lazy" : "eager"}
        />
        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          style={{ objectPosition: product.position }}
          loading={index > 2 ? "lazy" : "eager"}
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-wine/40 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 z-30 rounded-full border border-white/30 bg-wine/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          {product.category}
        </span>
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-[1.65rem] font-semibold leading-none text-wine">
              {product.name}
            </h3>
            <p className="mt-2 text-sm text-cocoa/60">{product.detail}</p>
          </div>
          <span className="shrink-0 font-display text-xl font-bold text-wine">{product.price}</span>
        </div>
        <a
          href={whatsappLink(product.name)}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center justify-between border-t border-wine/10 pt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-wine transition-colors hover:text-red"
          aria-label={`Pedir ${product.name} pelo WhatsApp`}
        >
          Quero encomendar
          <span className="grid h-9 w-9 place-items-center rounded-full bg-wine text-white transition-all duration-300 group-hover:bg-red">
            <WhatsAppIcon className="h-5 w-5" />
          </span>
        </a>
      </div>
    </article>
  );
}

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isWelcomeClosing, setIsWelcomeClosing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showWelcome ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showWelcome]);

  useEffect(() => {
    if (showWelcome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [showWelcome]);

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-cocoa">
      {showWelcome && (
        <Welcome
          onEnter={() => setIsWelcomeClosing(true)}
          isClosing={isWelcomeClosing}
          onExitComplete={() => setShowWelcome(false)}
        />
      )}

      <header className="absolute left-0 top-0 z-40 w-full border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Logo compact />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navigationLinks.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-gold/50 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-wine sm:px-5 md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Fale conosco</span>
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold transition-colors hover:bg-gold hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:hidden"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="absolute left-5 right-5 top-full z-50 mt-2 rounded-2xl border border-gold/30 bg-wine/95 p-3 shadow-xl backdrop-blur-md md:hidden"
            aria-label="Navegação para dispositivos móveis"
          >
            {navigationLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-white/10 hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-3 rounded-xl border-t border-white/10 px-4 py-4 text-xs font-bold uppercase tracking-[0.18em] text-gold"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Fale conosco
            </a>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative min-h-[760px] bg-wine text-cream lg:min-h-[850px]">
        <div
          className="absolute inset-0 bg-cover bg-[center_43%] opacity-30 lg:bg-[right_28%_center]"
          style={{ backgroundImage: `url("${publicAsset("catalogo/capa-natal.jpg")}")` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#3d050c_0%,rgba(70,5,14,.92)_40%,rgba(63,5,13,.25)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-wine to-transparent" />
        <div className="ornament ornament-one" aria-hidden="true" />
        <div className="ornament ornament-two" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-20 pt-32 sm:px-10 lg:min-h-[850px] lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-12 bg-gold" /> Edição especial de Natal
            </p>
            <h1 className="font-display text-6xl font-medium leading-[0.88] sm:text-8xl lg:text-[7.7rem]">
              Presentes que
              <span className="mt-1 block font-script font-normal text-gold">aquecem a alma.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-cream/68 sm:text-lg">
              Chocolates e brigadeiros artesanais em embalagens encantadoras, preparados para deixar
              sua celebração ainda mais especial.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#colecao" className="button-gold">
                Descobrir a coleção
                <ChevronIcon className="h-4 w-4" />
              </a>
              <a href="#encomendas" className="text-link">
                Como encomendar <span>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[8px] uppercase tracking-[0.3em] text-cream/40 md:flex">
          Descubra
          <ChevronIcon className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      <section id="colecao" className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-14 flex flex-col justify-between gap-8 border-b border-wine/15 pb-10 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Feitos para presentear</p>
              <h2 className="section-title">
                Escolha seu <span>doce momento</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-cocoa/60">
              Cada peça é produzida artesanalmente em pequenos lotes. Escolha seu favorito e faça o
              pedido diretamente pelo WhatsApp.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="sabores"
        className="relative bg-wine px-5 py-24 text-cream sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_center,#fff_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="reveal relative mx-auto w-full max-w-lg">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-gold/30" />
            <img
              src={publicAsset("catalogo/arvores-recheadas.jpg")}
              alt="Árvores de chocolate recheadas de Natal"
              className="relative aspect-[1169/1280] w-full rounded-[2rem] object-cover object-center shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-7 -right-2 rounded-2xl bg-gold p-5 text-wine shadow-xl sm:-right-7 sm:p-7">
              <strong className="block font-display text-4xl">5</strong>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                sabores especiais
              </span>
            </div>
          </div>
          <div className="reveal lg:pl-10">
            <p className="eyebrow text-gold">Recheios para todos os gostos</p>
            <h2 className="section-title text-cream">
              Difícil é escolher <span>um só.</span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-cream/60">
              Chocolate nobre, recheio cremoso e o cuidado de uma produção verdadeiramente
              artesanal.
            </p>
            <div className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
              {["Brigadeiro tradicional", "Ninho", "Maracujá", "Limão", "Prestígio"].map(
                (flavor, index) => (
                  <div key={flavor} className="group flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-sm text-gold/60">0{index + 1}</span>
                      <span className="font-display text-2xl text-cream transition-transform duration-300 group-hover:translate-x-2">
                        {flavor}
                      </span>
                    </div>
                    <span className="h-2 w-2 rounded-full border border-gold/70 transition-colors group-hover:bg-gold" />
                  </div>
                ),
              )}
            </div>
            <p className="mt-5 text-xs italic text-cream/45">
              Consulte a disponibilidade de sabores para cada produto.
            </p>
          </div>
        </div>
      </section>

      <section id="encomendas" className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="reveal text-center">
            <p className="eyebrow justify-center">Planeje seu Natal</p>
            <h2 className="section-title">
              Informações <span>importantes</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {orderInfo.map((item) => (
              <div
                key={item.title}
                className="reveal rounded-3xl border border-wine/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(83,24,25,.1)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-wine text-gold">
                  {item.icon}
                </span>
                <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.25em] text-red">
                  {item.title}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-wine">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
          <div className="reveal mt-5 rounded-[2rem] bg-gold px-7 py-10 text-wine sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em]">Retirada ou entrega</p>
              <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Combinada no momento do pedido.
              </h3>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-wine px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-cream transition-all hover:-translate-y-1 hover:bg-red lg:mt-0"
            >
              <WhatsAppIcon className="h-5 w-5" /> Tirar uma dúvida
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#3b050c] px-5 py-28 text-center text-cream sm:px-8 sm:py-36">
        <div
          className="absolute inset-0 bg-cover bg-[center_70%] opacity-15"
          style={{ backgroundImage: `url("${publicAsset("catalogo/capa-natal.jpg")}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b050c]/30 to-[#3b050c]" />
        <div className="reveal relative mx-auto max-w-4xl">
          <p className="eyebrow justify-center text-gold">Sua mesa merece esse carinho</p>
          <h2 className="font-display text-5xl leading-[0.95] sm:text-7xl">
            Vamos tornar seu Natal
            <span className="block font-script text-[1.12em] font-normal text-gold">
              ainda mais especial?
            </span>
          </h2>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="button-gold mt-10">
            <WhatsAppIcon className="h-5 w-5" />
            Fazer minha encomenda
          </a>
          <p className="mt-5 text-xs tracking-[0.18em] text-cream/50">(18) 99700-2040</p>
        </div>
      </section>

      <footer className="bg-[#280307] px-5 py-10 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 border-t border-cream/10 pt-10 sm:flex-row">
          <Logo compact />
          <p className="text-center text-[9px] uppercase tracking-[0.22em] text-cream/35">
            Doces que transformam momentos em memórias
          </p>
        </div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1f9d55] text-white shadow-[0_10px_30px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f9d55]"
        aria-label="Fazer pedido pelo WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </main>
  );
}
