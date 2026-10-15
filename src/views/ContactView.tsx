import React, { useState } from 'react';
import { PageId } from '../components/Header';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [projectType, setProjectType] = useState<'android' | 'web' | 'erp' | 'cloud'>('android');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('s2');
  const [deadline, setDeadline] = useState('1m');
  const [desc, setDesc] = useState('');
  const [ndaRequested, setNdaRequested] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleWhatsAppDirect = () => {
    const budgetMap: Record<string, string> = {
      s1: '< S/. 4,500 (Alcance Inicial)',
      s2: 'S/. 4,500 - S/. 12,000 (Estándar)',
      s3: 'S/. 12,000 - S/. 28,000 (Avanzado)',
      s4: '> S/. 28,000 (Enterprise)',
    };
    const text = `*SOLICITUD DE COTIZACIÓN TÉCNICA*%0A%0A` +
      `*Cliente:* ${name || 'Por especificar'}%0A` +
      `*Empresa/RUC:* ${company || 'No indicado'}%0A` +
      `*Tipo:* ${projectType.toUpperCase()}%0A` +
      `*Teléfono:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Rango Presupuesto:* ${budgetMap[budget] || budget}%0A` +
      `*Plazo Tentativo:* ${deadline}%0A` +
      `*NDA Solicitado:* ${ndaRequested ? 'SÍ' : 'NO'}%0A` +
      `*Requerimientos:* ${desc}`;

    window.open(`https://wa.me/51906591037?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-surface py-space-xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl relative z-10">
          <div className="flex flex-col gap-space-sm max-w-3xl">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container rounded-full w-fit border border-[#dce9ff]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-code text-code text-on-surface-variant uppercase tracking-wider font-semibold">
                Estimación Técnica Inmediata
              </span>
            </div>
            <h1 className="font-display text-display text-on-surface tracking-tight">Hablemos de tu Proyecto</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Cuéntanos tu idea o requerimiento y te entregamos una propuesta técnica y económica en menos de 24 horas.
            </p>
          </div>

          <div className="mt-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            {/* Left Column: Corporate Info & Guarantees */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md border border-[#dce9ff]">
                <div className="flex items-center justify-between pb-space-sm border-b border-[#e5eeff]">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
                    Identidad Corporativa
                  </span>
                  <span className="inline-flex items-center gap-1 text-primary font-code text-code bg-surface-container px-2 py-0.5 rounded border border-[#dce9ff]">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span> Verificado
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">EBYZOM E.I.R.L.</span>
                  <span className="font-code text-code text-on-surface-variant">RUC: 20614121042</span>
                </div>

                <div className="flex flex-col gap-space-sm pt-space-xs">
                  <a
                    className="group flex items-center justify-between p-space-md bg-surface-container-lowest rounded-lg hover:bg-surface-container transition-all border border-[#dce9ff]"
                    href="https://wa.me/51906591037?text=Hola%20EBYZOM,%20deseo%20hacer%20una%20consulta."
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">WhatsApp Oficial</span>
                        <span className="font-title-md text-title-md text-on-surface font-code font-bold">
                          +51 906 591 037
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>

                  <a
                    className="group flex items-center justify-between p-space-md bg-surface-container-lowest rounded-lg hover:bg-surface-container transition-all border border-[#dce9ff]"
                    href="mailto:contacto@ebyom.com"
                  >
                    <div className="flex items-center gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Correo Electrónico</span>
                        <span className="font-title-md text-title-md text-on-surface font-semibold">
                          contacto@ebyom.com
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>

                  <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-lg border border-[#dce9ff]">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Horario de Atención</span>
                      <span className="font-body-md text-body-md text-on-surface font-medium">
                        Lunes a Sábado: 8:30 AM – 7:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garantías Contractuales */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md border border-[#dce9ff]">
                <span className="font-title-lg text-title-lg text-on-surface font-bold">Garantías Contractuales</span>
                <div className="grid grid-cols-1 gap-space-md">
                  <div className="flex items-start gap-space-md">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface font-bold">
                        Facturación Formal SUNAT
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Emisión de factura electrónica oficial con RUC 20614121042 deduciendo 100% crédito fiscal legal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-md">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface font-bold">
                        Acuerdo de Confidencialidad (NDA)
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Protegemos tu modelo de negocio, bases de datos y propiedad intelectual antes del primer sprint.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-space-md">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">code</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface font-bold">
                        100% Cesión de Código Fuente
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Entrega de repositorios limpios, llaves de despliegue y documentación sin ataduras de permanencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banner Respuesta Veloz */}
              <div className="relative overflow-hidden rounded-xl bg-surface-container-high p-space-lg flex flex-col gap-space-sm border border-[#dce9ff]">
                <div className="flex items-center gap-space-sm text-primary font-bold">
                  <span className="material-symbols-outlined">bolt</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Respuesta Veloz</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface">
                  ¿Urgencia con un despliegue o licitación? Contacta a nuestra guardia técnica directamente.
                </p>
                <a
                  className="mt-space-xs inline-flex items-center justify-center gap-space-xs w-full py-space-sm px-space-md bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm"
                  href="https://wa.me/51906591037?text=Hola%2C%20requiero%20una%20reunion%20tecnica%20inmediata."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Chatear en WhatsApp</span>
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Right Column: Configuration Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-md relative border border-[#dce9ff]">
                <div className="flex flex-col gap-space-xs mb-space-lg">
                  <span className="font-headline-md text-headline-md text-on-surface">Configurar Cotización</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Selecciona el stack tecnológico y especifica las metas de tu organización.
                  </p>
                </div>

                {!submitted ? (
                  <form className="flex flex-col gap-space-lg" onSubmit={handleSubmit}>
                    {/* Project Type Selector */}
                    <div className="flex flex-col gap-space-sm">
                      <label className="font-label-md text-label-md text-on-surface font-bold">
                        Tipo de Proyecto Requerido
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                        {[
                          { id: 'android', label: 'App Móvil Android', icon: 'android' },
                          { id: 'web', label: 'Sitio Web Corporativo', icon: 'language' },
                          { id: 'erp', label: 'Sistema a Medida / ERP', icon: 'hub' },
                          { id: 'cloud', label: 'Otro / Consultoría Cloud', icon: 'cloud_sync' },
                        ].map((item) => (
                          <label
                            key={item.id}
                            className={`flex items-center gap-space-sm p-space-md rounded-lg cursor-pointer transition-all border ${
                              projectType === item.id
                                ? 'bg-primary/10 text-primary border-primary font-bold shadow-sm'
                                : 'bg-surface-container-low text-on-surface border-[#e5eeff] hover:bg-surface-container'
                            }`}
                          >
                            <input
                              type="radio"
                              name="project_type"
                              value={item.id}
                              checked={projectType === item.id}
                              onChange={() => setProjectType(item.id as any)}
                              className="sr-only"
                            />
                            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                            <span className="font-label-md text-label-md">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="contact-name">
                          Nombre Completo *
                        </label>
                        <input
                          className="w-full h-12 px-space-md bg-surface-container-low rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md border border-[#dce9ff]"
                          id="contact-name"
                          placeholder="Ej. Carlos Mendoza"
                          required
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="contact-company">
                          Empresa o RUC (Opcional)
                        </label>
                        <input
                          className="w-full h-12 px-space-md bg-surface-container-low rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md border border-[#dce9ff]"
                          id="contact-company"
                          placeholder="Ej. Corporación Andina S.A.C."
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="contact-email">
                          Correo Corporativo *
                        </label>
                        <input
                          className="w-full h-12 px-space-md bg-surface-container-low rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md border border-[#dce9ff]"
                          id="contact-email"
                          placeholder="carlos@empresa.com"
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="contact-phone">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          className="w-full h-12 px-space-md bg-surface-container-low rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md border border-[#dce9ff]"
                          id="contact-phone"
                          placeholder="+51 987 654 321"
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="contact-budget">
                          Presupuesto Estimado
                        </label>
                        <select
                          className="w-full h-12 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md cursor-pointer border border-[#dce9ff]"
                          id="contact-budget"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                        >
                          <option value="s1">&lt; S/. 4,500 (Alcance Inicial)</option>
                          <option value="s2">S/. 4,500 - S/. 12,000 (Estándar)</option>
                          <option value="s3">S/. 12,000 - S/. 28,000 (Avanzado)</option>
                          <option value="s4">&gt; S/. 28,000 (Enterprise / Multi-plataforma)</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="contact-deadline">
                          Fecha Tentativa de Entrega
                        </label>
                        <select
                          className="w-full h-12 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md cursor-pointer border border-[#dce9ff]"
                          id="contact-deadline"
                          value={deadline}
                          onChange={(e) => setDeadline(e.target.value)}
                        >
                          <option value="urgent">Urgente (&lt; 3 semanas)</option>
                          <option value="1m">1 a 2 Meses</option>
                          <option value="3m">3 a 4 Meses</option>
                          <option value="flex">Flexible / En Planeamiento</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-md text-label-md text-on-surface" htmlFor="contact-desc">
                        Descripción y Requerimientos Clave *
                      </label>
                      <textarea
                        className="w-full p-space-md bg-surface-container-low rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md resize-none border border-[#dce9ff]"
                        id="contact-desc"
                        placeholder="Describe brevemente los módulos principales, usuarios simultáneos, integraciones con terceros o requerimientos de hardware..."
                        required
                        rows={4}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </div>

                    <div className="flex items-center gap-space-sm pt-space-xs">
                      <input
                        className="w-4 h-4 rounded text-primary focus:ring-0 bg-surface-container-low cursor-pointer"
                        id="nda-request"
                        type="checkbox"
                        checked={ndaRequested}
                        onChange={(e) => setNdaRequested(e.target.checked)}
                      />
                      <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="nda-request">
                        Deseo recibir primero un Acuerdo de Confidencialidad (NDA) firmado por EBYZOM.
                      </label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        className="flex-1 h-14 bg-primary text-on-primary font-headline-sm text-headline-sm rounded-lg shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-space-sm active:scale-[0.99] cursor-pointer"
                        type="submit"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined animate-spin text-xl">refresh</span>
                            <span>Procesando requerimiento...</span>
                          </span>
                        ) : (
                          <>
                            <span>Solicitar Cotización Gratuita</span>
                            <span className="material-symbols-outlined">send</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="h-14 px-6 bg-surface-container-high text-on-surface rounded-lg font-title-md hover:bg-surface-container transition-all flex items-center justify-center gap-2 border border-[#dce9ff] cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-primary">chat</span>
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-space-lg bg-surface-container-high text-primary rounded-lg flex flex-col gap-space-sm border border-primary/20 animate-in fade-in">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[32px] text-primary">task_alt</span>
                      <div className="flex flex-col">
                        <span className="font-title-lg text-title-lg font-bold text-on-surface">
                          ¡Solicitud recibida correctamente!
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Nuestro equipo de arquitectura está procesando tus requerimientos. Recibirás respuesta en menos de
                          24 horas hábiles.
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg text-xs space-y-1 font-code text-on-surface mt-2 border border-[#dce9ff]">
                      <p><strong>Razón Social:</strong> EBYZOM E.I.R.L. (RUC 20614121042)</p>
                      <p><strong>Proyecto:</strong> {projectType.toUpperCase()} - {name}</p>
                      <p><strong>Canal de Coordinación:</strong> WhatsApp (+51 906 591 037)</p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-lg flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-sm">chat</span>
                        Abrir resumen en WhatsApp
                      </button>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-4 py-2.5 bg-surface-container text-on-surface text-xs font-semibold rounded-lg"
                      >
                        Nueva consulta
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCIA OPERATIVA (PREGUNTAS FRECUENTES) */}
      <section className="w-full py-space-xl bg-surface-container-low border-t border-[#dce9ff]">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                Transparencia Operativa
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Preguntas Frecuentes</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Conoce nuestra dinámica formal de entrega, garantías jurídicas y acompañamiento continuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm border border-[#dce9ff]">
              <div className="flex items-center gap-space-sm text-primary">
                <span className="material-symbols-outlined">payments</span>
                <span className="font-title-lg text-title-lg text-on-surface font-bold">¿Cómo es el esquema de pagos?</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Trabajamos bajo un modelo transparente por hitos verificables: 40% inicial de inicio de arquitectura,
                30% contra prototipo funcional navegable y 30% final previo al despliegue en producción tras control de
                calidad riguroso.
              </p>
            </div>

            <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm border border-[#dce9ff]">
              <div className="flex items-center gap-space-sm text-primary">
                <span className="material-symbols-outlined">key</span>
                <span className="font-title-lg text-title-lg text-on-surface font-bold">
                  ¿El código fuente me pertenecerá?
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Sí, 100%. Tras el cierre del proyecto se transfiere la titularidad patrimonial absoluta de los
                repositorios de software, configuraciones DevOps y scripts de despliegue sin cobros de licencias cautivas.
              </p>
            </div>

            <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm border border-[#dce9ff]">
              <div className="flex items-center gap-space-sm text-secondary">
                <span className="material-symbols-outlined">receipt</span>
                <span className="font-title-lg text-title-lg text-on-surface font-bold">
                  ¿Emiten factura legal ante SUNAT?
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Totalmente. Como EBYZOM E.I.R.L. con RUC 20614121042 emitimos facturas electrónicas oficiales en cada hito
                para que tu empresa pueda deducir tributariamente el gasto de desarrollo de software conforme a ley.
              </p>
            </div>

            <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm border border-[#dce9ff]">
              <div className="flex items-center gap-space-sm text-secondary">
                <span className="material-symbols-outlined">support_agent</span>
                <span className="font-title-lg text-title-lg text-on-surface font-bold">
                  ¿Brindan soporte pos-lanzamiento?
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Sí. Todo proyecto incluye 60 días de garantía sin costo para corrección de incidencias. Adicionalmente
                ofrecemos contratos mensuales SLA con soporte 24/7, monitoreo en nube y parches de seguridad evolutivos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
