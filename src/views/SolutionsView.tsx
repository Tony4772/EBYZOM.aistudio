import React from 'react';
import { PageId } from '../components/Header';

interface SolutionsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: 'android' | 'web' | 'erp' | 'cloud') => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const solutions = [
    {
      id: 'logistica',
      icon: 'local_shipping',
      badge: 'Solución Especializada',
      title: 'Logística, Rutas & Gestión de Flotas en Campo',
      description:
        'Aplicaciones móviles Android de grado industrial para transportistas y cuadrillas de entrega. Diseñadas para operar en carreteras y almacenes sin señal con sincronización offline-first.',
      features: [
        'Geolocalización GPS continua con consumo de batería optimizado',
        'Almacenamiento local en SQLite Room y sincronización automática',
        'Captura de firma digital de recepción y fotografía de comprobante',
        'Hoja de ruta dinámica con integración a Google Maps y Waze',
        'Generación de Guía de Remisión Electrónica Remitente (SUNAT)',
      ],
      impact: '-42% en tiempos de despacho y 0% de extravíos',
      tech: ['Kotlin', 'Android Jetpack', 'Firebase', 'AWS DynamoDB'],
      serviceKey: 'android' as const,
    },
    {
      id: 'erp-mayorista',
      icon: 'warehouse',
      badge: 'Gestión Integral',
      title: 'ERP Contable & Distribución Mayorista SUNAT',
      description:
        'Plataforma integral web para empresas de comercialización masiva. Centralice pedidos, cotizaciones, cobranzas y stock de múltiples almacenes en una única arquitectura cloud impenetrable.',
      features: [
        'Facturación electrónica oficial SUNAT (Facturas, Boletas, Notas, Guías)',
        'Kardex valorizado en tiempo real bajo método PEPS / Promedio Ponderado',
        'Listas de precios personalizadas por categoría de cliente o volumen',
        'Módulo de Cuentas por Cobrar con alertas de morosidad y límites de crédito',
        'Segregación estricta de roles de usuarios (RBAC) con registro de auditoría',
      ],
      impact: '+300% de velocidad en emisión de comprobantes y cierre de caja diario',
      tech: ['PostgreSQL', 'Node.js', 'Docker', 'Amazon S3', 'React'],
      serviceKey: 'erp' as const,
    },
    {
      id: 'ecommerce',
      icon: 'shopping_bag',
      badge: 'Alto Tráfico',
      title: 'E-commerce B2B/B2C de Alto Rendimiento Jamstack',
      description:
        'Tiendas virtuales ultrarrápidas construidas para superar picos de Cyber Days sin caídas. Catálogos interactivos con pagos instantáneos por QR Yape, Plin y tarjetas de crédito.',
      features: [
        'Carga instantánea en menos de 1 segundo (Jamstack SSG/SSR)',
        'Pasarelas de cobro nativas: Niubiz, Izipay, Yape QR, Plin y Mercado Pago',
        'Integración directa con WhatsApp Cloud API para aviso de compras',
        'Arquitectura SEO optimizada con Schema markup para posicionamiento',
        'Panel autogestionable para promociones, banners y cupones de descuento',
      ],
      impact: 'Score 99/100 PageSpeed y tasa de conversión superior a la media',
      tech: ['Next.js', 'Tailwind CSS', 'Stripe/Niubiz', 'Cloudflare CDN'],
      serviceKey: 'web' as const,
    },
    {
      id: 'clinicas',
      icon: 'medical_services',
      badge: 'Salud & Citas',
      title: 'Sistemas para Clínicas & Consultorios Médicos',
      description:
        'Software de agendamiento de citas, telemedicina y expediente clínico electrónico adaptado a la legislación de salud peruana y protección de datos sensibles.',
      features: [
        'Agenda médica inteligente por especialista con confirmación por WhatsApp',
        'Historias clínicas electrónicas con firma digital de profesionales',
        'Facturación de consultas y procedimientos médicos con SUNAT',
        'Portal para pacientes con consulta de recetas y resultados de laboratorio',
        'Cifrado de grado médico para almacenamiento de diagnósticos',
      ],
      impact: '-60% de inasistencias por recordatorios automatizados',
      tech: ['Python/FastAPI', 'PostgreSQL', 'WhatsApp API', 'React'],
      serviceKey: 'erp' as const,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-24 border-b border-[#dce9ff]">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl">
          <div className="flex flex-col gap-space-sm max-w-3xl">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary/10 text-primary font-code text-code border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              SOLUCIONES EMPRESARIALES DE ALTO IMPACTO
            </div>
            <h1 className="font-display text-display text-on-surface tracking-tight">
              Software diseñado para los desafíos reales de tu sector
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              No creemos en soluciones genéricas. Desarrollamos herramientas que se adaptan a las particularidades
              tributarias, geográficas y operacionales de las organizaciones peruanas.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards Grid */}
      <section className="w-full py-space-xl lg:py-24 bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl flex flex-col gap-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {solutions.map((sol) => (
              <div
                key={sol.id}
                className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-2xl shadow-sm border border-[#dce9ff] flex flex-col justify-between gap-space-lg hover:-translate-y-1 transition-all group"
              >
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[28px]">{sol.icon}</span>
                    </div>
                    <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-primary font-code border border-[#dce9ff]">
                      {sol.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {sol.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-2 pt-2 border-t border-[#e5eeff]">
                    <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold block">
                      Capacidades Clave:
                    </span>
                    <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                      {sol.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 flex-shrink-0">
                            check_circle
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact box */}
                  <div className="p-3 bg-surface-container-low rounded-xl border border-[#dce9ff]">
                    <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider block">
                      Resultado Típico de Implementación:
                    </span>
                    <span className="font-title-md text-sm font-bold text-on-surface">{sol.impact}</span>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {sol.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-surface-container rounded-md font-code text-[11px] text-on-surface-variant"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-space-md border-t border-[#e5eeff] flex items-center justify-between">
                  <button
                    onClick={() => onOpenQuoteModal(sol.serviceKey)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-container transition-colors cursor-pointer"
                  >
                    Cotizar esta solución <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                  <a
                    href={`https://wa.me/51906591037?text=Hola%20EBYZOM,%20deseo%20consultar%20sobre%20la%20solución%20de%20${encodeURIComponent(sol.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-secondary hover:underline flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom custom solution callout */}
          <div className="bg-gradient-to-r from-surface-container-high to-surface-container p-space-xl rounded-2xl border border-[#dce9ff] flex flex-col md:flex-row items-center justify-between gap-space-lg">
            <div className="max-w-xl">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                ¿Tu industria tiene flujos particulares o hardware especializado?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Conectamos lectores biométricos, impresoras térmicas Bluetooth de tickets, balanzas electrónicas y
                dispositivos POS industriales.
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteModal('erp')}
              className="px-space-xl py-3.5 bg-primary text-white font-title-md rounded-lg shadow-md hover:bg-primary-container transition-all cursor-pointer whitespace-nowrap"
            >
              Consultar Factibilidad Técnica
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
