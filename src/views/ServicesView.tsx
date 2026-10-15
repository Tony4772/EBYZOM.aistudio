import React, { useState } from 'react';
import { PageId } from '../components/Header';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: 'android' | 'web' | 'erp' | 'cloud') => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  // Terminal log simulator state
  const [terminalStep, setTerminalStep] = useState(3);
  const [isProcessingDoc, setIsProcessingDoc] = useState(false);

  const triggerXmlSignSimulation = () => {
    setIsProcessingDoc(true);
    setTerminalStep(1);
    setTimeout(() => setTerminalStep(2), 600);
    setTimeout(() => setTerminalStep(3), 1200);
    setTimeout(() => {
      setTerminalStep(4);
      setIsProcessingDoc(false);
    }, 1800);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Macro Section: Header & Value Banner */}
      <section className="relative w-full overflow-hidden bg-surface-container-low px-margin-mobile md:px-margin py-space-xl lg:py-28 border-b border-[#dce9ff]">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1320px] mx-auto w-full relative z-10 flex flex-col gap-space-lg">
          <div className="flex items-center gap-space-sm">
            <span className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary/10 text-primary font-code text-code border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              CATÁLOGO TÉCNICO V3.4 • RUC: 20614121042
            </span>
            <span className="hidden sm:inline-block font-code text-code text-on-surface-variant">
              / INGENIERÍA PERUANA CERTIFICADA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-headline-lg text-headline-lg md:font-display md:text-display text-on-surface tracking-tight">
                Servicios de <span className="text-primary">Ingeniería de Software</span> & Desarrollo Tecnológico
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Soluciones integrales de software diseñadas para generar tracción, optimizar operaciones y multiplicar
                ventas con estándares de nivel bancario y alta disponibilidad.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-[#dce9ff]">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
                Resumen de Capacidad
              </span>
              <div className="grid grid-cols-2 gap-space-md pt-space-xs">
                <div>
                  <span className="font-headline-lg text-headline-lg text-on-surface block leading-none">99.9%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">SLA Operativo Cloud</span>
                </div>
                <div>
                  <span className="font-headline-lg text-headline-lg text-secondary block leading-none">SUNAT</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Conexión API Oficial</span>
                </div>
              </div>
              <div className="pt-space-sm flex items-center justify-between text-on-surface-variant font-code text-code border-t border-[#e5eeff]">
                <span>Latencia Base: &lt;140ms</span>
                <span className="text-primary font-semibold">Ready-to-Deploy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Macro Section: Deep Dive Modules (Bento & Detailed Engineering Views) */}
      <section className="max-w-[1320px] mx-auto w-full px-margin-mobile md:px-margin py-space-xl lg:py-24 flex flex-col gap-28">
        {/* Service Module 01: Android Development */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-lg">
            <div className="flex items-center gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">smartphone</span>
              </div>
              <span className="font-code text-code text-primary uppercase font-bold tracking-wider">
                MÓDULO 01 • MOBILE ENGINEERING
              </span>
            </div>

            <div className="flex flex-col gap-space-xs">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Desarrollo de Apps Android Nativas e Híbridas
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Construimos aplicaciones móviles de rendimiento implacable para el ecosistema corporativo y comercial
                peruano, orientadas a escalabilidad masiva y latencia cero.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-[#dce9ff]">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">architecture</span>
                  <span className="font-title-md text-title-md font-bold">Arquitectura Limpia</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Patrones MVVM y MVI desacoplados para mantenimiento ágil, pruebas unitarias robustas y estabilidad total
                  en updates continuos.
                </p>
              </div>

              <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-[#dce9ff]">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                  <span className="font-title-md text-title-md font-bold">Pasarelas de Pago</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Cobros directos con Niubiz, integración QR Yape & Plin en tiempo real, Stripe e Izipay bajo estándares
                  PCI-DSS.
                </p>
              </div>

              <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-[#dce9ff]">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">fingerprint</span>
                  <span className="font-title-md text-title-md font-bold">Seguridad Biométrica</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Autenticación FaceID, huella digital local, keystore cifrado y detección de dispositivos vulnerados
                  (root).
                </p>
              </div>

              <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-[#dce9ff]">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">near_me</span>
                  <span className="font-title-md text-title-md font-bold">Geolocalización & Push</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Tracking GPS continuo con consumo ultrabajo de batería y mensajería push segmentada mediante Firebase
                  Cloud Messaging.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-space-xs pt-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                Stack Tecnológico Central:
              </span>
              <div className="flex flex-wrap gap-space-xs">
                <span className="px-space-md py-1 bg-surface-container rounded-full font-code text-code text-on-surface flex items-center gap-1.5 border border-[#dce9ff]">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>Kotlin
                </span>
                <span className="px-space-md py-1 bg-surface-container rounded-full font-code text-code text-on-surface flex items-center gap-1.5 border border-[#dce9ff]">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>Jetpack Compose
                </span>
                <span className="px-space-md py-1 bg-surface-container rounded-full font-code text-code text-on-surface flex items-center gap-1.5 border border-[#dce9ff]">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>Flutter (Cross-platform)
                </span>
                <span className="px-space-md py-1 bg-surface-container rounded-full font-code text-code text-on-surface flex items-center gap-1.5 border border-[#dce9ff]">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>Firebase Ecosystem
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-surface-container border border-[#dce9ff]">
              <img
                className="w-full h-[480px] object-cover"
                alt="Desarrollo Mobile Android en EBYZOM"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3j7rS4ABEN6Eo25cgeFhXjEvAVb5L67R8YU2pND2s6j75aBu4EOw8EzUpLm_2UWvB62TicyUH4GHesspOL55B53GkllVO8uU34eAQNUjOVBk47FrsSXmAQ3Ulq9g_VuckJ3AeLzbPxq053WwuSx_UkcMamSOPpbhznSRH97S2Uv_3KLu7CddqyopOkIajiKTz1u8kc6welvhiaH62hVYTvEumwKZUkId2UoBeWjmedTNTR7mCoCUnYA"
              />
              <div className="absolute bottom-0 inset-x-0 p-space-lg bg-surface/95 backdrop-blur-md flex flex-col gap-space-xs border-t border-[#dce9ff]">
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    Publicación & ASO Integral
                  </span>
                  <span className="px-space-sm py-0.5 rounded bg-primary text-on-primary font-code text-label-sm font-bold">
                    100% Aprobado
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Nos encargamos del trámite de homologación en Google Play Store Console, optimización de palabras clave
                  y métricas de retención.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuoteModal('android')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline cursor-pointer"
                  >
                    Cotizar desarrollo Android <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Module 02: High-Performance Web & Jamstack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-surface-container border border-[#dce9ff]">
              <img
                className="w-full h-[480px] object-cover"
                alt="Sitios Web y Plataformas Jamstack"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjSrrVGjHaZl2XmkWJY-fGInHaCFe2oTcaao9Uf3sbBV8PZcHkhTv7F_gV6jiJfaqfqDXHwbg2e461ljaRdBgXVVrJ1mBZTssdHk0B5i-3yPjpyxHX2Dv3WLfLo60DN7oHc6eoID_NKsY9H-8hixaXDCQ2OPvyDDC3ydBSaCfAIUAjkyizfzWm6YxvAcKi50PagAglJ0CenTEbkT-WpFgAwPX8VjE8nqK08G6kV7Wv7MexnWjox2TAiQ"
              />
              <div className="absolute bottom-0 inset-x-0 p-space-lg bg-surface/95 backdrop-blur-md flex flex-col gap-space-xs border-t border-[#dce9ff]">
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    Target Score Google Lighthouse
                  </span>
                  <span className="px-space-sm py-0.5 rounded bg-secondary text-on-secondary font-code text-label-sm font-bold">
                    Score: 98/100
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Tiempos de carga menores a 0.8 segundos para máxima retención publicitaria y conversión garantizada de
                  prospectos inbound.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuoteModal('web')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline cursor-pointer"
                  >
                    Cotizar plataforma Web <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-space-lg">
            <div className="flex items-center gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[28px]">desktop_mac</span>
              </div>
              <span className="font-code text-code text-secondary uppercase font-bold tracking-wider">
                MÓDULO 02 • MODERN WEB ARCHITECTURE
              </span>
            </div>

            <div className="flex flex-col gap-space-xs">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Sitios Web Corporativos y Plataformas Web
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Portales de alta conversión y soluciones web diseñadas para firmas que demandan posicionar su liderazgo
                corporativo, generar prospectos B2B calificados y dominar Google Search.
              </p>
            </div>

            <div className="flex flex-col gap-space-md">
              <div className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded-xl border border-[#dce9ff]">
                <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">bolt</span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    Arquitectura Jamstack & Next.js
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Generación estática híbrida (SSG) y renderizado por servidor (SSR) que entrega velocidad brutal y
                    máxima seguridad sin servidores expuestos.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded-xl border border-[#dce9ff]">
                <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">search_insights</span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    Ingeniería SEO Técnico Profundo
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Schema markup estructurado JSON-LD, sitemaps dinámicos optimizados, OpenGraph automático e indexación
                    prioritaria para motores de búsqueda.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded-xl border border-[#dce9ff]">
                <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">inventory_2</span>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    Catálogos Digitales & CMS a Medida
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Paneles administrativos intuitivos donde su equipo gestionará productos, cotizadores dinámicos,
                    servicios y blogs sin depender de un programador.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-space-md rounded-xl bg-primary/10 flex items-center justify-between border border-primary/20">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[24px]">verified_user</span>
                <span className="font-title-md text-title-md text-on-surface font-semibold">¿Para quién está diseñado?</span>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-bold">
                Empresas B2B / Prospección Corporativa
              </span>
            </div>
          </div>
        </div>

        {/* Service Module 03: Enterprise Management Software (ERP/CRM) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <div className="flex items-center gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">hub</span>
              </div>
              <span className="font-code text-code text-primary uppercase font-bold tracking-wider">
                MÓDULO 03 • ENTERPRISE CORE SYSTEMS
              </span>
            </div>

            <div className="flex flex-col gap-space-xs">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Sistemas de Gestión y Software Empresarial (ERP / CRM)
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Plataformas a medida orientadas al control operacional absoluto: unificamos finanzas, ventas, logística y
                sucursales en un solo núcleo cloud impenetrable.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="p-space-lg bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-[#dce9ff]">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-primary text-[24px]">receipt_long</span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary font-code text-label-sm rounded font-bold">
                    Oficial SUNAT
                  </span>
                </div>
                <span className="font-title-md text-title-md text-on-surface font-bold">Facturación Electrónica</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Emisión directa de facturas, boletas, notas de crédito/débito y guías de remisión remitente con
                  validación OSE/SUNAT en microsegundos.
                </p>
              </div>

              <div className="p-space-lg bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-[#dce9ff]">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-primary text-[24px]">warehouse</span>
                  <span className="px-2 py-0.5 bg-secondary/10 text-secondary font-code text-label-sm rounded font-bold">
                    Kardex PEPS
                  </span>
                </div>
                <span className="font-title-md text-title-md text-on-surface font-bold">Almacenes y Stock Multi-Sede</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Trazabilidad por lotes, control de series, transferencias entre sucursales y alertas automatizadas de
                  quiebre de inventario.
                </p>
              </div>

              <div className="p-space-lg bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-[#dce9ff]">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-primary text-[24px]">badge</span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary font-code text-label-sm rounded font-bold">
                    RBAC Roles
                  </span>
                </div>
                <span className="font-title-md text-title-md text-on-surface font-bold">Permisos Granulares</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Asignación precisa de accesos: Administrador, Cajero, Auditor o Logístico con bitácora forense de cada
                  movimiento realizado.
                </p>
              </div>

              <div className="p-space-lg bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-[#dce9ff]">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-primary text-[24px]">monitoring</span>
                  <span className="px-2 py-0.5 bg-secondary/10 text-secondary font-code text-label-sm rounded font-bold">
                    BI Reports
                  </span>
                </div>
                <span className="font-title-md text-title-md text-on-surface font-bold">Reportes Ejecutivos & Data</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Dashboards financieros en vivo con métricas de rentabilidad, exportación a Excel dinámico, PDF sellado
                  y conexión con PowerBI.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-space-md pt-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">Infraestructura Base:</span>
              <div className="flex items-center gap-space-xs font-code text-code text-on-surface-variant">
                <span>Node.js</span> • <span>Python</span> • <span>PostgreSQL</span> • <span>Docker</span> •{' '}
                <span>AWS Cloud</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {/* Interactive Micro Metric Terminal Card */}
            <div className="bg-inverse-surface text-inverse-on-surface p-space-lg rounded-2xl shadow-xl flex flex-col gap-space-md border border-slate-700">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error"></span>
                  <span className="w-3 h-3 rounded-full bg-primary-fixed"></span>
                  <span className="w-3 h-3 rounded-full bg-secondary-fixed"></span>
                </div>
                <span className="font-code text-label-sm text-inverse-on-surface/60">ebyzom-erp-engine: v4.1</span>
              </div>

              <div className="font-code text-code text-inverse-on-surface/90 flex flex-col gap-1 min-h-[110px]">
                <p className="text-primary-fixed">&gt; CONNECTING OSE PERU [PORT 443]... OK</p>
                {terminalStep >= 2 && (
                  <p className="text-inverse-on-surface/80">&gt; SIGNING XML WITH DIGITAL CERTIFICATE... DONE</p>
                )}
                {terminalStep >= 3 && (
                  <p className="text-inverse-on-surface/80">&gt; CDR RESPONSE: &quot;0 - FACTURA ACEPTADA&quot;</p>
                )}
                {terminalStep >= 4 && (
                  <p className="text-secondary-fixed-dim">&gt; SYNCING INVENTORY REAL-TIME (SEDE_LIMA_01)... DONE</p>
                )}
              </div>

              <div className="pt-space-sm flex flex-col gap-space-xs">
                <div className="flex justify-between font-label-sm text-label-sm text-inverse-on-surface/80">
                  <span>Procesamiento de Comprobantes</span>
                  <span className="text-primary-fixed">0.18s Promedio</span>
                </div>
                <div className="w-full bg-surface-variant/20 rounded-full h-2 overflow-hidden">
                  <div className="bg-primary-fixed h-full w-[94%]"></div>
                </div>
              </div>

              <button
                onClick={triggerXmlSignSimulation}
                disabled={isProcessingDoc}
                className="mt-1 w-full py-2 bg-white/10 hover:bg-white/20 text-xs font-code text-inverse-on-surface rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">sync</span>
                {isProcessingDoc ? 'Procesando XML con SUNAT...' : 'Ejecutar Prueba de Transmisión OSE'}
              </button>
            </div>

            <div className="p-space-lg rounded-2xl bg-surface-container-high flex items-center gap-space-md border border-[#dce9ff]">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                <span className="material-symbols-outlined text-[28px]">cloud_sync</span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface font-bold">
                  Arquitectura Sin Fricción
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Migramos sus hojas de Excel obsoletas o bases de datos Access existentes sin pérdida de registros
                  contables.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Module 04: Cloud APIs, Microservices & WhatsApp Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-space-md">
            <div className="p-space-lg bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col gap-space-md border border-[#dce9ff]">
              <div className="flex items-center justify-between">
                <span className="font-title-md text-title-md text-on-surface font-bold">WhatsApp Cloud API</span>
                <span className="px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-code text-label-sm font-semibold">
                  Meta Verified
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Dispare notificaciones transaccionales automáticas al WhatsApp de sus clientes: confirmación de compras,
                links de tracking de pedidos y recordatorios de pago inmediatos.
              </p>
              <div className="p-space-md bg-surface-container-low rounded-lg flex items-center gap-space-sm border border-[#dce9ff]">
                <span className="material-symbols-outlined text-primary text-[24px]">chat_bubble</span>
                <span className="font-code text-code text-on-surface">906 591 037: Tu pedido #4920 fue enviado.</span>
              </div>
            </div>

            <div className="p-space-lg bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col gap-space-md border border-[#dce9ff]">
              <span className="font-title-md text-title-md text-on-surface font-bold">
                Webhooks & Event-Driven Architecture
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Conectores seguros con Shopify, WooCommerce, Mercado Pago, bancos locales y software contable como Concar
                o Siigo.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-space-lg">
            <div className="flex items-center gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[28px]">api</span>
              </div>
              <span className="font-code text-code text-secondary uppercase font-bold tracking-wider">
                MÓDULO 04 • CLOUD INTEGRATION & MICROSERVICES
              </span>
            </div>

            <div className="flex flex-col gap-space-xs">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Integración de APIs & Microservicios Cloud
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Conectamos sus sistemas con el mundo digital exterior. Diseñamos middlewares robustos que sincronizan
                flujos de negocio automáticos, eliminando la digitación manual y los errores operativos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-[#dce9ff]">
                <div className="flex items-center gap-space-xs text-secondary">
                  <span className="material-symbols-outlined text-[20px]">security</span>
                  <span className="font-title-md text-title-md font-bold">Autenticación OAuth 2.0</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Single Sign-On (SSO) corporativo con Azure AD, Google Workspace o tokenización JWT con rotación
                  automática de llaves secretas.
                </p>
              </div>

              <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs border border-[#dce9ff]">
                <div className="flex items-center gap-space-xs text-secondary">
                  <span className="material-symbols-outlined text-[20px]">cloud_queue</span>
                  <span className="font-title-md text-title-md font-bold">Microservicios Desacoplados</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Implementación en contenedores Docker y serverless AWS Lambda que escalan automáticamente según la
                  demanda del usuario.
                </p>
              </div>
            </div>

            <div className="p-space-md bg-surface-container rounded-xl flex items-center justify-between border border-[#dce9ff]">
              <span className="font-label-md text-label-md text-on-surface">Capacidad de Integración Externa:</span>
              <span className="font-code text-code text-secondary font-bold">RESTful • GraphQL • gRPC • WebSockets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Macro Section: Package Comparison & Deliverables Matrix */}
      <section className="w-full bg-surface-container-low py-space-xl lg:py-24 px-margin-mobile md:px-margin border-t border-[#dce9ff]">
        <div className="max-w-[1320px] mx-auto w-full flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs text-center items-center max-w-3xl mx-auto">
            <span className="px-space-md py-1 bg-surface-container rounded-full font-code text-code text-primary uppercase font-bold border border-[#dce9ff]">
              ESTRUCTURA DE IMPLEMENTACIÓN
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Comparativa de Paquetes y Planes de Desarrollo
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Entregables definidos con precisión milimétrica, sin costos ocultos y con código fuente de su propiedad
              exclusiva.
            </p>
          </div>

          {/* Pricing & Deliverables 3-Column Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
            {/* Package 1: Starter Web */}
            <div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col justify-between gap-space-xl relative border border-[#dce9ff]">
              <div className="flex flex-col gap-space-md">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="font-code text-code text-secondary font-bold uppercase tracking-wider">PLAN 01</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Starter Web Corporativo</h3>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[28px]">web</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Diseñado para pymes y empresas en fase de posicionamiento que requieren presencia digital rápida,
                  elegante y de alta conversión.
                </p>
                <div className="py-space-sm">
                  <span className="font-headline-md text-headline-md text-on-surface font-display">Desde S/ 1,490</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">
                    Pago en hitos / Entrega en 10-14 días hábiles
                  </span>
                </div>
                <div className="flex flex-col gap-space-sm pt-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider">
                    Entregables Claros:
                  </span>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Hasta 5 secciones personalizadas (Jamstack)</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Integración directa con WhatsApp & Formularios</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Optimización SEO y Google Analytics 4</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Certificado SSL y Dominio .pe configurado</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Entrega de código en repositorio Git</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => onOpenQuoteModal('web')}
                className="w-full py-space-md px-space-lg rounded-xl bg-surface-container font-label-md text-label-md text-on-surface text-center hover:bg-surface-container-high transition-colors cursor-pointer border border-[#dce9ff]"
              >
                Cotizar Starter Web
              </button>
            </div>

            {/* Package 2: App Pyme (Featured) */}
            <div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-lg flex flex-col justify-between gap-space-xl relative border-2 border-primary/30">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-space-md py-0.5 bg-primary text-on-primary rounded-full font-label-sm text-label-sm font-bold uppercase tracking-wide">
                Más Solicitado
              </div>
              <div className="flex flex-col gap-space-md">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="font-code text-code text-primary font-bold uppercase tracking-wider">PLAN 02</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">App Pyme Comercial</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[28px]">install_mobile</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Aplicación móvil completa para delivery, gestión de clientes, ecommerce en vivo o servicios en campo.
                </p>
                <div className="py-space-sm">
                  <span className="font-headline-md text-headline-md text-on-surface font-display">Desde S/ 3,850</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">
                    Pago escalonado por hitos / Entrega en 3-5 semanas
                  </span>
                </div>
                <div className="flex flex-col gap-space-sm pt-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider">
                    Entregables Claros:
                  </span>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>App Android en Kotlin o Flutter nativo</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Integración Niubiz, Yape & Plin</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Panel Web administrativo de pedidos</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Notificaciones push segmentadas</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Publicación oficial en Google Play Store</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => onOpenQuoteModal('android')}
                className="w-full py-space-md px-space-lg rounded-xl bg-primary text-on-primary font-label-md text-label-md text-center hover:bg-primary-container transition-colors shadow-md cursor-pointer"
              >
                Iniciar Proyecto App
              </button>
            </div>

            {/* Package 3: Sistema Enterprise a Medida */}
            <div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col justify-between gap-space-xl relative border border-[#dce9ff]">
              <div className="flex flex-col gap-space-md">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="font-code text-code text-secondary font-bold uppercase tracking-wider">PLAN 03</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Sistema Enterprise a Medida</h3>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[28px]">corporate_fare</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Arquitectura de software dedicada para medianas y grandes empresas con automatización total de procesos
                  y SUNAT.
                </p>
                <div className="py-space-sm">
                  <span className="font-headline-md text-headline-md text-on-surface font-display">A Medida</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">
                    Cotización post-análisis técnico / Sprint Scrum
                  </span>
                </div>
                <div className="flex flex-col gap-space-sm pt-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider">
                    Entregables Claros:
                  </span>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Facturación SUNAT ilimitada sin cobro por doc</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Control de múltiples almacenes, stock y transferencias</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Gestión de roles de seguridad (RBAC)</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Despliegue Cloud en Amazon Web Services</span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Capacitación ejecutiva presencial/virtual + Manuales</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => onOpenQuoteModal('erp')}
                className="w-full py-space-md px-space-lg rounded-xl bg-surface-container font-label-md text-label-md text-on-surface text-center hover:bg-surface-container-high transition-colors cursor-pointer border border-[#dce9ff]"
              >
                Agendar Sesión Técnica
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Macro Section: Guarantee & Technical SLA Protocol */}
      <section className="max-w-[1320px] mx-auto w-full px-margin-mobile md:px-margin py-space-xl lg:py-24">
        <div className="bg-surface-container-lowest p-space-xl md:p-14 rounded-3xl shadow-sm flex flex-col gap-space-xl border border-[#dce9ff]">
          <div className="flex flex-col lg:flex-row justify-between gap-space-lg items-start lg:items-end">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-code text-code text-primary uppercase font-bold tracking-wider">
                COMPROMISO CONTRACTUAL
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Garantía de Software & SLA Técnico EBYZOM E.I.R.L.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Respaldamos legal y técnicamente cada línea de código que entregamos. La estabilidad de su negocio es
                nuestra responsabilidad primaria.
              </p>
            </div>
            <div className="flex items-center gap-space-sm bg-surface-container px-space-lg py-space-sm rounded-xl border border-[#dce9ff]">
              <span className="material-symbols-outlined text-primary text-[28px]">verified</span>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface font-bold">RUC: 20614121042</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Empresa Peruana Constituida</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg pt-space-md">
            <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl border border-[#dce9ff]">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-space-xs">
                <span className="material-symbols-outlined text-[22px]">bug_report</span>
              </div>
              <span className="font-title-md text-title-md text-on-surface font-bold">Garantía Bug-Free</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                6 meses de cobertura absoluta para subsanación inmediata de cualquier incidencia o error técnico posterior
                a entrega sin costo adicional.
              </p>
            </div>

            <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl border border-[#dce9ff]">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-space-xs">
                <span className="material-symbols-outlined text-[22px]">timer</span>
              </div>
              <span className="font-title-md text-title-md text-on-surface font-bold">SLA de Respuesta &lt; 2h</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Atención prioritaria para contingencias críticas en sistemas de cobro, facturación y despliegues
                productivos.
              </p>
            </div>

            <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl border border-[#dce9ff]">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-space-xs">
                <span className="material-symbols-outlined text-[22px]">code</span>
              </div>
              <span className="font-title-md text-title-md text-on-surface font-bold">Propiedad Intelectual</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Usted es dueño del 100% del código fuente, repositorios y credenciales de infraestructura. Sin
                dependencias forzadas.
              </p>
            </div>

            <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl border border-[#dce9ff]">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-space-xs">
                <span className="material-symbols-outlined text-[22px]">security_update_good</span>
              </div>
              <span className="font-title-md text-title-md text-on-surface font-bold">Backup Automático</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Políticas de copias de seguridad diarias automatizadas en diferentes zonas geográficas de AWS y
                Cloudflare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Macro Section: Direct Technical Conversion CTA */}
      <section className="w-full bg-surface-container py-space-xl lg:py-24 px-margin-mobile md:px-margin border-t border-[#dce9ff]">
        <div className="max-w-[1320px] mx-auto w-full bg-inverse-surface rounded-3xl p-space-xl md:p-16 text-inverse-on-surface relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="flex flex-col gap-space-md max-w-2xl text-center lg:text-left">
              <span className="px-space-md py-1 bg-surface-variant/20 text-primary-fixed rounded-full font-code text-code self-center lg:self-start">
                INICIE SU DESPLIEGUE HOY
              </span>
              <h2 className="font-headline-lg text-headline-lg md:font-display md:text-display font-bold leading-tight">
                ¿Listo para construir su próxima ventaja tecnológica?
              </h2>
              <p className="font-body-lg text-body-lg text-inverse-on-surface/80">
                Hable directamente con un ingeniero de soluciones. Evaluamos los requerimientos de su sistema en menos de
                24 horas hábiles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-space-md w-full lg:w-auto flex-shrink-0">
              <a
                className="inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all shadow-lg shadow-primary/20"
                href="https://wa.me/51906591037?text=Hola%20EBYZOM,%20deseo%20iniciar%20un%20proyecto%20de%20desarrollo."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>WhatsApp: 906 591 037</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md bg-surface-container-high/20 text-inverse-on-surface rounded-xl font-label-md text-label-md hover:bg-surface-container-high/30 transition-all border border-slate-700"
                href="mailto:contacto@ebyom.com"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
                <span>contacto@ebyom.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Fast Trigger */}
      <aside aria-label="Contacto Rápido" className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          className="flex items-center gap-space-sm bg-primary text-on-primary px-space-lg py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          href="https://wa.me/51906591037?text=Hola%20EBYZOM,%20tengo%20una%20consulta%20técnica%20sobre%20sus%20servicios."
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[24px]">chat</span>
          <span className="font-label-md text-label-md font-bold hidden sm:inline">Hablar con un Ingeniero</span>
        </a>
      </aside>
    </div>
  );
};
