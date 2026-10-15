import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="w-full bg-surface-container-low text-on-surface border-t border-[#dce9ff]">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
            {/* Col 1: Identity & Legal */}
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center">
                <Logo size="md" />
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Ingeniería de software, arquitectura cloud y desarrollo de plataformas de alto impacto para organizaciones modernas en todo el Perú.
              </p>
              <div className="flex flex-col gap-space-xs pt-space-xs font-code text-code">
                <div className="flex items-center gap-space-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                  <span>RUC: <strong className="text-on-surface">20614121042</strong></span>
                </div>
                <div className="flex items-center gap-space-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px] text-primary">call</span>
                  <a
                    href="https://wa.me/51906591037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    WhatsApp: 906 591 037
                  </a>
                </div>
                <div className="flex items-center gap-space-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
                  <a
                    href="mailto:contacto@ebyom.com"
                    className="hover:text-secondary transition-colors"
                  >
                    contacto@ebyom.com
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Servicios Principales */}
            <div className="flex flex-col gap-space-md">
              <span className="font-title-md text-title-md text-on-surface font-bold">
                Servicios Principales
              </span>
              <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <button
                    onClick={() => handleLinkClick('servicios')}
                    className="hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    Apps Móviles Android Nativas (Kotlin)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('servicios')}
                    className="hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    Desarrollo Web & Jamstack (Next.js)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('servicios')}
                    className="hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    Sistemas ERP / Facturación SUNAT
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('servicios')}
                    className="hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    Integración de APIs & Microservicios Cloud
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Navegación */}
            <div className="flex flex-col gap-space-md">
              <span className="font-title-md text-title-md text-on-surface font-bold">
                Navegación
              </span>
              <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <button
                    onClick={() => handleLinkClick('inicio')}
                    className="hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('soluciones')}
                    className="hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    Soluciones Corporativas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('metodologia')}
                    className="hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    Metodología de Trabajo (Scrum)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('casos-de-exito')}
                    className="hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    Casos de Éxito
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('contacto')}
                    className="hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    Contacto & Cotizaciones
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Atención Inmediata */}
            <div className="flex flex-col gap-space-md">
              <span className="font-title-md text-title-md text-on-surface font-bold">
                Atención Inmediata
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Contáctanos directamente para consultorías técnicas de arquitectura, cotizaciones o nuevos proyectos de desarrollo.
              </p>
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-surface-container rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container-high hover:text-on-surface transition-all shadow-sm border border-[#dce9ff]"
                href="https://wa.me/51906591037?text=Hola%20EBYZOM,%20deseo%20coordinar%20una%20reunión%20técnica."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                Chatear por WhatsApp
              </a>
              <div className="text-xs text-on-surface-variant">
                <span>Horario: Lun - Sáb: 8:30 AM – 7:00 PM (Hora Perú)</span>
              </div>
            </div>
          </div>

          {/* Bottom Legal bar */}
          <div className="mt-space-xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface-container-lowest/70 p-space-md rounded-xl border border-[#dce9ff]/60">
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
              © {new Date().getFullYear()} EBYZOM E.I.R.L. Todos los derechos reservados. RUC 20614121042.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-space-lg font-label-sm text-label-sm text-on-surface-variant">
              <button
                onClick={() => setLegalModal('terminos')}
                className="hover:text-on-surface transition-colors cursor-pointer"
              >
                Términos y Condiciones
              </button>
              <button
                onClick={() => setLegalModal('privacidad')}
                className="hover:text-on-surface transition-colors cursor-pointer"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => setLegalModal('libro')}
                className="hover:text-on-surface transition-colors cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">menu_book</span>
                Libro de Reclamaciones
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Notice Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl flex flex-col gap-4 border border-[#e5eeff]">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-title-lg text-lg font-bold text-on-surface">
                {legalModal === 'terminos' && 'Términos y Condiciones de Servicio'}
                {legalModal === 'privacidad' && 'Política de Privacidad & Protección de Datos'}
                {legalModal === 'libro' && 'Libro de Reclamaciones Virtual - EBYZOM E.I.R.L.'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="text-sm text-on-surface-variant max-h-80 overflow-y-auto space-y-3 pr-2">
              {legalModal === 'terminos' && (
                <>
                  <p>
                    <strong>1. Razón Social:</strong> EBYZOM E.I.R.L., con RUC 20614121042, debidamente inscrita en los Registros Públicos de Lima, Perú.
                  </p>
                  <p>
                    <strong>2. Cesión de Propiedad Intelectual:</strong> Tras la liquidación final del proyecto, se transfiere formalmente el 100% de la propiedad patrimonial del código fuente y repositorios al cliente contratante.
                  </p>
                  <p>
                    <strong>3. Garantía Operativa:</strong> Todo desarrollo cuenta con 60 días naturales de garantía técnica posterior a la entrega en producción para corrección de anomalías sin costo adicional.
                  </p>
                  <p>
                    <strong>4. Facturación Electrónica:</strong> La emisión de comprobantes se realiza a través de OSE/SUNAT conforme a la normativa tributaria peruana vigente.
                  </p>
                </>
              )}
              {legalModal === 'privacidad' && (
                <>
                  <p>
                    En cumplimiento de la <strong>Ley N° 29733 (Ley de Protección de Datos Personales del Perú)</strong>, EBYZOM E.I.R.L. garantiza la estricta confidencialidad de la información comercial, credenciales y requerimientos proporcionados por nuestros clientes.
                  </p>
                  <p>
                    Previo al inicio de cualquier levantamiento técnico de procesos, se suscribe un <strong>Acuerdo de Confidencialidad bilateral (NDA)</strong> con validez jurídica.
                  </p>
                </>
              )}
              {legalModal === 'libro' && (
                <>
                  <p>
                    Conforme a lo establecido en el <strong>Código de Protección y Defensa del Consumidor (Ley N° 29571)</strong>, ponemos a su disposición este canal de atención directa de quejas o reclamos.
                  </p>
                  <div className="bg-[#eff4ff] p-3 rounded-lg text-xs space-y-1">
                    <p><strong>RUC:</strong> 20614121042</p>
                    <p><strong>Razón Social:</strong> EBYZOM E.I.R.L.</p>
                    <p><strong>Correo de Atención:</strong> reclamos@ebyom.com / contacto@ebyom.com</p>
                    <p><strong>Teléfono Directo:</strong> +51 906 591 037</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    Plazo de respuesta legal: Máximo 15 días hábiles conforme a la normativa de INDECOPI.
                  </p>
                </>
              )}
            </div>
            <button
              onClick={() => setLegalModal(null)}
              className="mt-2 w-full py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-container"
            >
              Entendido y Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
