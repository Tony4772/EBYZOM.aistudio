import React from 'react';
import { PageId } from '../components/Header';

interface CaseStudiesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: 'android' | 'web' | 'erp' | 'cloud') => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const cases = [
    {
      id: 'logistica-andina',
      title: 'App Móvil Nativa Android para Despacho Logístico & Control de Rutas',
      client: 'Distribuidora de Alimentos & Bebidas (Lima y Provincias)',
      category: 'Mobile Android (Kotlin)',
      results: [
        { metric: '+18,000', label: 'Despachos mensuales procesados' },
        { metric: '0%', label: 'Extravíos de mercadería en ruta' },
        { metric: '99.98%', label: 'Disponibilidad offline en carreteras' },
      ],
      description:
        'Desarrollo de aplicación Android nativa para 65 transportistas y choferes de reparto. Opera con captura de firma digital, tracking GPS de bajo consumo y emisión de Guía de Remisión Electrónica vinculada a SUNAT.',
      tech: ['Kotlin', 'Jetpack Compose', 'Room SQLite', 'Firebase FCM', 'Google Maps SDK'],
      serviceKey: 'android' as const,
    },
    {
      id: 'erp-ferretero',
      title: 'ERP Contable & Facturación Electrónica Masiva OSE/SUNAT',
      client: 'Corporación Ferretera con 5 Almacenes y Sede Central',
      category: 'Sistemas ERP & Cloud',
      results: [
        { metric: '45,000', label: 'Comprobantes emitidos al mes' },
        { metric: '0.18s', label: 'Tiempo medio de respuesta OSE' },
        { metric: '100%', label: 'Trazabilidad de Kardex valorizado' },
      ],
      description:
        'Migración integral de sistema heredado a arquitectura web modular en Docker y PostgreSQL. Unificación de inventario de 14,000 SKUs con facturación electrónica simultánea en múltiples cajas y roles.',
      tech: ['Node.js', 'PostgreSQL', 'Docker', 'AWS ECS', 'React', 'SOAP SUNAT'],
      serviceKey: 'erp' as const,
    },
    {
      id: 'ecommerce-retail',
      title: 'Plataforma E-commerce Jamstack de Ultra Alta Conversión',
      client: 'Marca Peruana de Retail Textil & Calzado',
      category: 'Desarrollo Web Next.js',
      results: [
        { metric: '0.7s', label: 'Tiempo de carga promedio LCP' },
        { metric: '+64%', label: 'Crecimiento de ventas online' },
        { metric: '14,000', label: 'Usuarios concurrentes en Cyber WOW' },
      ],
      description:
        'Rediseño completo de tienda online con arquitectura Jamstack, pasarela omnicanal (Niubiz, Yape QR, Plin y Stripe) e integración automatizada con WhatsApp Cloud API para notificación de compras.',
      tech: ['Next.js', 'Tailwind CSS', 'Niubiz API', 'WhatsApp Cloud API', 'Cloudflare'],
      serviceKey: 'web' as const,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-24 border-b border-[#dce9ff]">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl">
          <div className="flex flex-col gap-space-sm max-w-3xl">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary/10 text-primary font-code text-code border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              IMPACTO CUANTIFICABLE EN PRODUCCIÓN
            </div>
            <h1 className="font-display text-display text-on-surface tracking-tight">
              Proyectos que transforman las operaciones de nuestros clientes
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Casos reales de ingeniería aplicada. Entregamos soluciones tecnológicas que resuelven cuellos de botella
              complejos y multiplican la rentabilidad empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies list */}
      <section className="w-full py-space-xl lg:py-24 bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl flex flex-col gap-space-xl">
          {cases.map((c) => (
            <div
              key={c.id}
              className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-3xl shadow-md border border-[#dce9ff] flex flex-col lg:flex-row gap-space-xl justify-between items-center group hover:-translate-y-0.5 transition-all"
            >
              <div className="lg:max-w-2xl flex flex-col gap-space-md">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-primary font-code border border-[#dce9ff]">
                    {c.category}
                  </span>
                  <span className="text-xs text-on-surface-variant font-code">· {c.client}</span>
                </div>

                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                  {c.title}
                </h2>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {c.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {c.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-surface-container rounded-md font-code text-xs text-on-surface"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuoteModal(c.serviceKey)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-container transition-colors cursor-pointer"
                  >
                    Cotizar solución similar <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Metrics block */}
              <div className="w-full lg:w-80 bg-surface-container-low p-6 rounded-2xl border border-[#dce9ff] flex flex-col gap-4 flex-shrink-0">
                <span className="font-code text-xs text-on-surface-variant uppercase font-bold tracking-wider">
                  Métricas Verificadas
                </span>
                <div className="space-y-4">
                  {c.results.map((r, idx) => (
                    <div key={idx} className="border-b border-[#e5eeff] last:border-0 pb-3 last:pb-0">
                      <span className="font-display text-2xl font-bold text-primary block leading-none">
                        {r.metric}
                      </span>
                      <span className="text-xs text-on-surface-variant mt-1 block">
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Trust Box */}
          <div className="bg-inverse-surface text-inverse-on-surface p-space-xl rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
            <div className="max-w-xl">
              <h3 className="font-headline-sm text-headline-sm font-bold">
                ¿Tu empresa requiere un proyecto con requerimientos específicos o licitación?
              </h3>
              <p className="font-body-md text-body-md text-inverse-on-surface/80 mt-1">
                EBYZOM E.I.R.L. con RUC 20614121042 emite propuestas técnicas detalladas con cronograma y desglose de
                costos en menos de 24 horas.
              </p>
            </div>
            <a
              href="https://wa.me/51906591037?text=Hola%20EBYZOM,%20requiero%20una%20propuesta%20técnica%20formal%20para%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="px-space-xl py-3.5 bg-primary text-white font-title-md rounded-xl hover:bg-primary-container transition-all cursor-pointer whitespace-nowrap shadow-lg"
            >
              Hablar con un Ingeniero
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
