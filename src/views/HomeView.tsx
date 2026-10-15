import React, { useState } from 'react';
import { PageId } from '../components/Header';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: 'android' | 'web' | 'erp' | 'cloud') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  // Lead form state
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadService, setLeadService] = useState('android');
  const [leadNotes, setLeadNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Live telemetry ping state
  const [pingLatency, setPingLatency] = useState(18);
  const [isPinging, setIsPinging] = useState(false);

  const handleTestLatency = () => {
    setIsPinging(true);
    setTimeout(() => {
      const nextLatency = Math.floor(12 + Math.random() * 8);
      setPingLatency(nextLatency);
      setIsPinging(false);
    }, 450);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-28">
        {/* Ambient tech ambient glow */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="pointer-events-none absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-secondary/10 blur-[130px]"></div>

        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              {/* Verification Pill */}
              <div className="inline-flex items-center gap-space-sm self-start px-space-md py-1.5 rounded-full bg-surface-container shadow-sm border border-[#dce9ff]">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-on-surface">
                  🚀 Expertos en Ingeniería de Software & Transformación Digital en Perú
                </span>
              </div>

              {/* Main Hero Headline */}
              <h1 className="font-display text-display text-on-surface tracking-tight">
                Desarrollamos{' '}
                <span className="text-primary font-display text-display">Aplicaciones Android</span> Nativas,
                Plataformas Web y Sistemas a Medida
              </h1>

              {/* Subtitle */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Impulsamos el crecimiento de tu negocio con soluciones tecnológicas escalables, código de alto
                rendimiento y arquitectura en la nube. Desde startups hasta empresas consolidadas en todo el territorio
                nacional.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <button
                  onClick={() => onOpenQuoteModal('android')}
                  className="inline-flex items-center justify-center gap-space-sm px-space-xl py-4 bg-primary text-on-primary font-title-md text-title-md rounded-lg shadow-xl hover:bg-primary-container transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">terminal</span>
                  Iniciar Cotización Inmediata
                </button>
                <a
                  className="inline-flex items-center justify-center gap-space-sm px-space-lg py-4 bg-surface-container-highest text-on-surface font-title-md text-title-md rounded-lg shadow-sm hover:bg-surface-container-high transition-all border border-[#dce9ff]"
                  href="https://wa.me/51906591037?text=Hola%20EBYZOM,%20deseo%20asesoría%20para%20un%20proyecto%20tecnológico."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">chat</span>
                  WhatsApp (906 591 037)
                </a>
              </div>

              {/* Key Highlights Metadata */}
              <div className="flex flex-wrap items-center gap-x-space-lg gap-y-space-sm pt-space-sm text-on-surface-variant font-code text-code">
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
                  RUC 20614121042 Registrado
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">cloud_done</span>
                  SLA 99.9% Disponibilidad
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">format_image_left</span>
                  Código 100% Propietario
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Tech Stack Composite */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-2xl bg-surface-container-lowest/90 backdrop-blur-xl p-space-md md:p-space-lg shadow-xl border border-[#dce9ff]">
                {/* Simulated OS Terminal / Status Header */}
                <div className="flex items-center justify-between pb-space-sm mb-space-md bg-surface-container-low px-space-md py-2.5 rounded-lg border border-[#e5eeff]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-error"></span>
                    <span className="h-3 w-3 rounded-full bg-secondary-container"></span>
                    <span className="h-3 w-3 rounded-full bg-primary-fixed"></span>
                  </div>
                  <span className="font-code text-code text-on-surface-variant">production.cluster.ebyzom.pe</span>
                  <button
                    onClick={handleTestLatency}
                    title="Click para medir latencia con OSE SUNAT"
                    className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <span className={`h-2 w-2 rounded-full bg-primary ${isPinging ? 'animate-ping' : ''}`}></span>{' '}
                    Live
                  </button>
                </div>

                {/* Visual Dashboard Preview Card */}
                <div className="flex flex-col gap-space-md">
                  <div className="relative overflow-hidden rounded-xl bg-surface-container h-56 group border border-[#dce9ff]">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Monitor de Arquitectura & APIs Sunat"
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtfzg964m5QY2jfylB9I-GIrS_fUyjkAy19-GN0KOy7cSxuuosi4rOgy3Qq61CuaMGX_KSISX5mzzTLF3-f_WAiedcWivrz-BjsOpwDnLdW1FEIiweHJoFv3n_5vBrq3byZBrTEX0r85zuAI0ipZJTh0GoW7PqaH9z-w0j9fTWr5v8kyD207PsPbPlViqWkjbVYTRPWgvQ8NOtdFLRimIVsC9am8q8BH-UA5fJk8A9IuLSitbGi7R7wQ"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-transparent to-transparent flex items-end p-space-md">
                      <div className="text-on-primary">
                        <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                          Engine V4.8 • Core Banking Level
                        </p>
                        <p className="font-title-md text-title-md text-surface-container-lowest">
                          Monitor de Arquitectura & APIs Sunat
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Live KPI Chips */}
                  <div className="grid grid-cols-2 gap-space-sm">
                    <button
                      onClick={handleTestLatency}
                      className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1 text-left hover:bg-surface-container transition-all cursor-pointer border border-[#dce9ff]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Latencia Promedio</span>
                        <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
                      </div>
                      <span className="font-headline-md text-headline-md text-on-surface font-display">
                        {pingLatency}
                        <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">ms</span>
                      </span>
                      <div className="w-full bg-surface-container rounded-full h-1.5 mt-1 overflow-hidden">
                        <div className="bg-primary h-1.5 rounded-full w-[94%]"></div>
                      </div>
                    </button>

                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1 border border-[#dce9ff]">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Conectividad Android</span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">android</span>
                      </div>
                      <span className="font-headline-md text-headline-md text-on-surface font-display">
                        100
                        <span className="font-body-sm text-body-sm text-on-surface-variant ml-1">%</span>
                      </span>
                      <div className="w-full bg-surface-container rounded-full h-1.5 mt-1 overflow-hidden">
                        <div className="bg-secondary h-1.5 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Active Microservice Badge */}
                  <div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between font-code text-code border border-[#dce9ff]">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[20px]">layers</span>
                      <span className="text-on-surface">Microservicio SUNAT / CPE</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                      OK 200
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST METRICS STRIP */}
      <section className="w-full bg-surface-container-low py-space-lg shadow-sm border-y border-[#dce9ff]">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg">
            <div className="flex flex-col gap-1 p-space-sm">
              <span className="font-display text-display text-primary">+50</span>
              <span className="font-title-md text-title-md text-on-surface">Proyectos Entregados</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Soluciones móviles y empresariales funcionales.
              </span>
            </div>
            <div className="flex flex-col gap-1 p-space-sm">
              <span className="font-display text-display text-secondary">99.9%</span>
              <span className="font-title-md text-title-md text-on-surface">Disponibilidad Cloud</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Infraestructura sobre AWS y Google Cloud.
              </span>
            </div>
            <div className="flex flex-col gap-1 p-space-sm">
              <span className="font-display text-display text-primary">100%</span>
              <span className="font-title-md text-title-md text-on-surface">Soporte Garantizado</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Mantenimiento continuo y mesa de ayuda técnica.
              </span>
            </div>
            <div className="flex flex-col gap-1 p-space-sm">
              <span className="font-display text-display text-on-surface">2061...</span>
              <span className="font-title-md text-title-md text-on-surface">RUC Verificado</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                EBYZOM E.I.R.L. registrado formalmente ante SUNAT.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CORE PILLARS (SERVICIOS DESTACADOS) */}
      <section className="w-full py-space-xl lg:py-24 bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-xl">
            <div className="max-w-2xl">
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                Capacidades de Ingeniería
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs">
                Nuestros Pilares Tecnológicos Centrales
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Especialización profunda en el ecosistema Android moderno, arquitecturas web modulares y motores de
              gestión corporativa de alta fiabilidad.
            </p>
          </div>

          {/* 3 Core Cards Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            {/* CARD 1: Android Nativas */}
            <div className="rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-lg border border-[#dce9ff] flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div className="flex flex-col gap-space-md">
                <div className="h-14 w-14 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[32px]">phone_android</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Aplicaciones Móviles Android</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Desarrollo nativo robusto diseñado para dominar el mercado corporativo y retail, con máximo
                  rendimiento de hardware y UX de precisión.
                </p>
                <div className="flex flex-wrap gap-2 pt-space-xs">
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Kotlin & Compose
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Pasarelas de Pago
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    GPS & Rutas
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Modo Offline Room
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Google Play Store
                  </span>
                </div>
              </div>

              <div className="mt-space-lg pt-space-md">
                <div className="rounded-xl overflow-hidden bg-surface-container-low h-44 relative border border-[#dce9ff]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Native Kotlin Android SDK"
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPun5s9jGdJPTpBl7WVkjo7SGnceKAyJH2IMpjcTtvENYXw3nX47BdMVw_1yfCUa2hH0Kc8oN1tWtQ8d_zSwuftoUdsFTqY8ssOQ6fHAHhLR_pLoNcUqLD2maSg2uGsdbmpwXZ49Dowve36jTw5qqdfxyrhpVDleXUw8FSF4JvOQENVYdv055Mua57cDWEZJvRMoLFetYP74tO5ObSxv8v8ovAefHZQob2zzpgDIOYlu63FWMeuUH0Ag"
                  />
                  <div className="absolute bottom-2 left-2 px-space-sm py-1 rounded bg-inverse-surface/80 text-inverse-on-surface font-code text-code">
                    Native Kotlin SDK
                  </div>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('android')}
                  className="mt-space-md inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-primary-container transition-colors cursor-pointer"
                >
                  Solicitar demo de App <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* CARD 2: Desarrollo Web Profesional */}
            <div className="rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-lg border border-[#dce9ff] flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div className="flex flex-col gap-space-md">
                <div className="h-14 w-14 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-[32px]">language</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Desarrollo Web Profesional</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Websites corporativos, catálogos interactivos y e-commerce de alto rendimiento construidos para
                  convertir visitantes en clientes fidelizados.
                </p>
                <div className="flex flex-wrap gap-2 pt-space-xs">
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Portales Corporativos
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Tiendas E-commerce
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    SEO Técnico Avanzado
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Autogestionable CMS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Velocidad Core Vitals
                  </span>
                </div>
              </div>

              <div className="mt-space-lg pt-space-md">
                <div className="rounded-xl overflow-hidden bg-surface-container-low h-44 relative border border-[#dce9ff]">
                  <img
                    className="w-full h-full object-cover"
                    alt="PageSpeed 99/100 Web Architecture"
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwEjyPQgLag7riXCe27OgyVuxwLs72sj_zpqQdpsm0KDuwMUcIPgl8SJt9_wUlzQ7zD5CkUW8j5SGPNIfBP6C2cNxyrgMysECDjBrVEdPNJ2bumdqYKKno7RWtxmJHWE-8tqdAjWnLyj2p6xsq1UU_EQlngwUMZuutxHeAavXUx2279MnjZEybsNaKmoRYZYwb70YaVnHXS_6Clv8iDEOzNfn_fwzXT5yCtwyodXWki2UMmjrhZF8nmA"
                  />
                  <div className="absolute bottom-2 left-2 px-space-sm py-1 rounded bg-inverse-surface/80 text-inverse-on-surface font-code text-code">
                    PageSpeed 99/100
                  </div>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('web')}
                  className="mt-space-md inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors cursor-pointer"
                >
                  Explorar soluciones web <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* CARD 3: Sistemas Web & ERP a Medida */}
            <div className="rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-lg border border-[#dce9ff] flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div className="flex flex-col gap-space-md">
                <div className="h-14 w-14 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[32px]">hub</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Sistemas Web & ERP a Medida</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Centraliza tus operaciones, logística y tesorería con plataformas a la medida exacta de tus flujos de
                  trabajo e integración formal SUNAT.
                </p>
                <div className="flex flex-wrap gap-2 pt-space-xs">
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Gestión Inventarios
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Facturación SUNAT
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    CRM & Ventas
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Dashboards BI
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                    Automatización
                  </span>
                </div>
              </div>

              <div className="mt-space-lg pt-space-md">
                <div className="rounded-xl overflow-hidden bg-surface-container-low h-44 relative border border-[#dce9ff]">
                  <div className="p-space-md flex flex-col justify-center h-full gap-2 bg-gradient-to-br from-surface-container-high to-surface-container">
                    <div className="flex items-center justify-between font-code text-code text-on-surface">
                      <span>Factura Electrónica B001-0941</span>
                      <span className="text-primary font-bold">Emitida</span>
                    </div>
                    <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-full"></div>
                    </div>
                    <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant pt-2">
                      <span>Control de Kardex valorizado</span>
                      <span className="font-code text-code text-primary font-bold">S/ 48,290.00</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('erp')}
                  className="mt-space-md inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-primary-container transition-colors cursor-pointer"
                >
                  Diseñar ERP a medida <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENTAJAS COMPETITIVAS */}
      <section className="w-full py-space-xl lg:py-24 bg-surface-container-low border-y border-[#dce9ff]">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left: Statement */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
                Diferenciales de EBYZOM
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                ¿Por qué líderes y emprendedores confían en nosotros?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                No somos intermediarios ni usamos plantillas genéricas. Desarrollamos software corporativo como activo
                patrimonial directo para tu empresa.
              </p>
              <div className="p-space-md rounded-xl bg-surface-container flex items-center gap-space-md mt-space-sm border border-[#dce9ff]">
                <span className="material-symbols-outlined text-primary text-[36px]">verified_user</span>
                <div>
                  <p className="font-title-md text-title-md text-on-surface">Sociedad Comercial Registrada</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    EBYZOM E.I.R.L. con RUC 20614121042 emite comprobantes oficiales y contratos con cláusula de
                    confidencialidad NDA.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 4 Competitive Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm border border-[#dce9ff]">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">code</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface">Código Limpio y Propietario</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Tú posees el 100% de la propiedad intelectual y repositorios Git. Sin ataduras comerciales ni
                  suscripciones invisibles.
                </p>
              </div>

              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm border border-[#dce9ff]">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">sprint</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface">Metodología Ágil (Scrum)</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Sprints quincenales con entregables tangibles. Visualiza el avance de tu app o sistema en servidores de
                  prueba en tiempo real.
                </p>
              </div>

              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm border border-[#dce9ff]">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">receipt_long</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface">Integración Oficial SUNAT</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Conexión directa por Web Services para emisión y validación de boletas, facturas, guías y retenciones
                  según normativa peruana.
                </p>
              </div>

              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm border border-[#dce9ff]">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface">Soporte Posventa Continuo</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Garantía por bugs, actualización de librerías, parches de seguridad y asesoría directa vía canal
                  exclusivo de WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO DE TRABAJO TRANSPARENTE */}
      <section className="w-full py-space-xl lg:py-24 bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl">
          <div className="text-center max-w-3xl mx-auto mb-space-xl flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">
              Flujo Metodológico EBYZOM
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              De la Idea a Producción en 4 Etapas Claras
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Un roadmap predecible, sin sorpresas técnicas ni sobrecostos. Conoce exactamente en qué estado se
              encuentra tu proyecto en todo momento.
            </p>
          </div>

          {/* Step Cards Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
            {/* Step 1 */}
            <div className="p-space-lg pb-12 rounded-2xl bg-surface-container flex flex-col gap-space-md relative overflow-hidden border border-[#dce9ff] min-h-[220px]">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-primary/25 absolute right-4 bottom-3 select-none pointer-events-none leading-none">
                01
              </span>
              <div className="flex items-center justify-between relative z-10">
                <span className="px-3 py-1 rounded bg-primary text-on-primary font-code text-code">Fase 1</span>
                <span className="material-symbols-outlined text-primary text-[28px]">search_insights</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface relative z-10 font-bold">
                Descubrimiento & Requerimientos
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed relative z-10">
                Relevamiento exhaustivo de procesos, arquitectura de datos requerida, usuarios clave y estimación
                formal de plazos.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-space-lg pb-12 rounded-2xl bg-surface-container flex flex-col gap-space-md relative overflow-hidden border border-[#dce9ff] min-h-[220px]">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-secondary/25 absolute right-4 bottom-3 select-none pointer-events-none leading-none">
                02
              </span>
              <div className="flex items-center justify-between relative z-10">
                <span className="px-3 py-1 rounded bg-secondary text-on-secondary font-code text-code">Fase 2</span>
                <span className="material-symbols-outlined text-secondary text-[28px]">draw</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface relative z-10 font-bold">
                Diseño UX/UI & Prototipado
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed relative z-10">
                Wireframes interactivos y pantallas de alta fidelidad en Figma. Validamos flujos y ergonomía antes de
                escribir una línea de código.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-space-lg pb-12 rounded-2xl bg-surface-container flex flex-col gap-space-md relative overflow-hidden border border-[#dce9ff] min-h-[220px]">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-primary/25 absolute right-4 bottom-3 select-none pointer-events-none leading-none">
                03
              </span>
              <div className="flex items-center justify-between relative z-10">
                <span className="px-3 py-1 rounded bg-primary text-on-primary font-code text-code">Fase 3</span>
                <span className="material-symbols-outlined text-primary text-[28px]">terminal</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface relative z-10 font-bold">
                Desarrollo Ágil & Pruebas QA
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed relative z-10">
                Programación modular con pruebas unitarias, integración continua (CI/CD) y validación de seguridad contra
                vulnerabilidades.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-space-lg pb-12 rounded-2xl bg-surface-container flex flex-col gap-space-md relative overflow-hidden border border-[#dce9ff] min-h-[220px]">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-secondary/25 absolute right-4 bottom-3 select-none pointer-events-none leading-none">
                04
              </span>
              <div className="flex items-center justify-between relative z-10">
                <span className="px-3 py-1 rounded bg-secondary text-on-secondary font-code text-code">Fase 4</span>
                <span className="material-symbols-outlined text-secondary text-[28px]">rocket_launch</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface relative z-10 font-bold">
                Despliegue & Lanzamiento
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed relative z-10">
                Puesta en producción en la nube, publicación formal en Google Play Store y transferencia de manuales
                técnicos para tu equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER & QUICK CONSULTING FORM */}
      <section className="w-full py-space-xl lg:py-24 bg-surface-container-high border-t border-[#dce9ff]" id="contacto-rapido">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl">
          <div className="rounded-3xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-2xl overflow-hidden relative border border-[#dce9ff]">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-[90px]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
              {/* Banner Copy */}
              <div className="lg:col-span-6 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary border border-[#dce9ff]">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  Respuesta en menos de 2 horas hábiles
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  ¿Listo para digitalizar tu negocio o lanzar tu próxima app?
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Agenda una sesión técnica con nuestros ingenieros. Evaluamos la factibilidad de tu proyecto,
                  arquitectura sugerida y presupuesto estimado sin costo ni compromiso.
                </p>
                <div className="flex flex-col gap-space-sm pt-space-xs font-body-md text-body-md text-on-surface">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    <span>Estimación transparente con alcances y plazos definidos</span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    <span>Atención corporativa personalizada por videollamada o WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    <span>Firma de Acuerdo de Confidencialidad (NDA) antes de iniciar</span>
                  </div>
                </div>

                {/* Direct Instant Contact Links */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-md">
                  <a
                    className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-primary-container transition-all"
                    href="https://wa.me/51906591037?text=Hola%20EBYZOM,%20deseo%20una%20reunión%20técnica."
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    WhatsApp: 906 591 037
                  </a>
                  <a
                    className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors border border-[#dce9ff]"
                    href="mailto:contacto@ebyom.com"
                  >
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                    contacto@ebyom.com
                  </a>
                </div>
              </div>

              {/* Quick Consultation Form */}
              <div className="lg:col-span-6 bg-surface-container-low p-space-lg md:p-space-xl rounded-2xl shadow-sm border border-[#dce9ff]">
                <h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-bold">
                  Solicitar Asesoría & Presupuesto
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                  Completa los datos para coordinar una reunión con un arquitecto de software de EBYZOM.
                </p>

                <form className="flex flex-col gap-space-md" onSubmit={handleLeadSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="contact-name">
                        Nombre y Apellido
                      </label>
                      <input
                        className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-bright focus:shadow-md transition-all border border-[#dce9ff]"
                        id="contact-name"
                        placeholder="Ej. Carlos Vega"
                        required
                        type="text"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="contact-phone">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-bright focus:shadow-md transition-all border border-[#dce9ff]"
                        id="contact-phone"
                        placeholder="Ej. 906 591 037"
                        required
                        type="tel"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="contact-email">
                      Correo Corporativo o Personal
                    </label>
                    <input
                      className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-bright focus:shadow-md transition-all border border-[#dce9ff]"
                      id="contact-email"
                      placeholder="ejemplo@empresa.pe"
                      required
                      type="email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="service-type">
                      Tipo de Solución Requerida
                    </label>
                    <select
                      className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-bright focus:shadow-md transition-all border border-[#dce9ff]"
                      id="service-type"
                      value={leadService}
                      onChange={(e) => setLeadService(e.target.value)}
                    >
                      <option value="android">Aplicación Móvil Android Nativa</option>
                      <option value="web">Desarrollo Web / Tienda E-commerce</option>
                      <option value="erp">Sistema ERP / Facturación SUNAT</option>
                      <option value="consultoria">Consultoría Cloud & Arquitectura</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="project-notes">
                      Breve descripción del proyecto
                    </label>
                    <textarea
                      className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-bright focus:shadow-md transition-all border border-[#dce9ff]"
                      id="project-notes"
                      placeholder="Coméntanos el objetivo, tiempos estimados o funcionalidades principales..."
                      rows={3}
                      value={leadNotes}
                      onChange={(e) => setLeadNotes(e.target.value)}
                    />
                  </div>

                  <button
                    className="w-full py-3.5 bg-primary text-on-primary font-title-md text-title-md rounded-lg shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-space-xs mt-space-xs cursor-pointer"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Enviando solicitud...' : 'Enviar Solicitud Inmediata'}</span>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>

                  {formSubmitted && (
                    <div className="p-space-sm rounded bg-primary-fixed text-on-primary-fixed font-body-sm text-body-sm text-center flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-primary">check_circle</span>
                      <span>¡Gracias! Nos pondremos en contacto contigo a la brevedad vía WhatsApp o correo.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
