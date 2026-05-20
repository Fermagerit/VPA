(() => {
  const entries = [
    ["Voluntarios por Africa", "Voluntarios por África", "Volunteers for Africa"],
    ["Logo Voluntarios por Africa", "Logo Voluntarios por África", "Volunteers for Africa logo"],
    ["Logo Voluntarios por África", "Logo Voluntarios por África", "Volunteers for Africa logo"],
    ["Logo", "Logo", "Logo"],
    ["Inicio", "Inicio", "Home"],
    ["Noticias", "Noticias", "News"],
    ["Conocenos", "Conócenos", "About us"],
    ["Conócenos", "Conócenos", "About us"],
    ["Proyectos", "Proyectos", "Projects"],
    ["Eventos", "Eventos", "Events"],
    ["Contacto", "Contacto", "Contact"],
    ["Voluntariado", "Voluntariado", "Volunteering"],
    ["Donde intervenimos", "Dónde intervenimos", "Where we work"],
    ["Dónde intervenimos", "Dónde intervenimos", "Where we work"],
    ["Como nos financiamos", "Cómo nos financiamos", "How we are funded"],
    ["Cómo nos financiamos", "Cómo nos financiamos", "How we are funded"],
    ["Documentos", "Documentos", "Documents"],
    ["Nuestro equipo", "Nuestro equipo", "Our team"],
    ["Proyectos actuales", "Proyectos actuales", "Current projects"],
    ["Proyectos finalizados", "Proyectos finalizados", "Completed projects"],
    ["Viajes", "Viajes", "Trips"],
    ["Saber mas", "Saber más", "Learn more"],
    ["Saber más", "Saber más", "Learn more"],
    ["Ver todas las lineas de trabajo", "Ver todas las líneas de trabajo", "See all work areas"],
    ["Ver todas las líneas de trabajo", "Ver todas las líneas de trabajo", "See all work areas"],
    ["Ver detalles", "Ver detalles", "View details"],
    ["Colaborar", "Colaborar", "Get involved"],
    ["Contacto", "Contacto", "Contact"],
    ["Colabora", "Colabora", "Get involved"],
    ["Contactar", "Contactar", "Contact us"],
    ["Ver memorias", "Ver memorias", "View reports"],
    ["Hazte socio", "Hazte socio", "Become a member"],
    ["Hazte miembro", "Hazte miembro", "Become a member"],
    ["Haz un donativo", "Haz un donativo", "Make a donation"],
    ["Financiacion", "Financiación", "Funding"],
    ["Financiación", "Financiación", "Funding"],
    ["Resumen", "Resumen", "Overview"],
    ["Actuales", "Actuales", "Current"],
    ["Finalizados", "Finalizados", "Completed"],
    ["Todas", "Todas", "All"],
    ["Todos", "Todos", "All"],
    ["English", "English", "English"],
    ["Ingles", "Inglés", "English"],
    ["Inglés", "Inglés", "English"],
    ["Abrir menu", "Abrir menú", "Open menu"],
    ["Abrir menú", "Abrir menú", "Open menu"],
    ["Principal", "Principal", "Main"],
    ["Galeria principal", "Galería principal", "Main gallery"],
    ["Galería principal", "Galería principal", "Main gallery"],
    ["Accesos destacados", "Accesos destacados", "Featured links"],
    ["Proyecto actual", "Proyecto actual", "Current project"],
    ["Cabecera inicio", "Cabecera inicio", "Hero image"],
    ["Cabecera Voluntarios por Africa", "Cabecera Voluntarios por África", "Volunteers for Africa hero image"],
    ["Cabecera Voluntarios por África", "Cabecera Voluntarios por África", "Volunteers for Africa hero image"],
    ["Bienvenido", "Bienvenido", "Welcome"],
    ["Una organizacion cercana, clara y comprometida.", "Una organización cercana, clara y comprometida.", "A close, clear and committed organization."],
    ["Una organización cercana, clara y comprometida.", "Una organización cercana, clara y comprometida.", "A close, clear and committed organization."],
    ["Trabajamos para que la ayuda llegue con dignidad, continuidad y cercania. El tono visual de esta pagina es mas amable, pero el fondo sigue siendo el mismo: ayudar mejor.", "Trabajamos para que la ayuda llegue con dignidad, continuidad y cercanía. El tono visual de esta página es más amable, pero el fondo sigue siendo el mismo: ayudar mejor.", "We work so that help arrives with dignity, continuity and closeness. The visual tone of this site is friendlier, but the purpose remains the same: to help better."],
    ["Trabajamos para que la ayuda llegue con dignidad, continuidad y cercanía. El tono visual de esta página es más amable, pero el fondo sigue siendo el mismo: ayudar mejor.", "Trabajamos para que la ayuda llegue con dignidad, continuidad y cercanía. El tono visual de esta página es más amable, pero el fondo sigue siendo el mismo: ayudar mejor.", "We work so that help arrives with dignity, continuity and closeness. The visual tone of this site is friendlier, but the purpose remains the same: to help better."],
    ["Declarada como asociacion de utilidad publica por resolucion del ministerio del interior con fecha 12 de septiembre de 2019.", "Declarada como asociación de utilidad pública por resolución del Ministerio del Interior con fecha 12 de septiembre de 2019.", "Declared a public-interest association by resolution of the Ministry of the Interior on 12 September 2019."],
    ["Declarada como asociación de utilidad pública por resolución del Ministerio del Interior con fecha 12 de septiembre de 2019.", "Declarada como asociación de utilidad pública por resolución del Ministerio del Interior con fecha 12 de septiembre de 2019.", "Declared a public-interest association by resolution of the Ministry of the Interior on 12 September 2019."],
    ["ONG infantil con impacto real", "ONG infantil con impacto real", "Children's NGO with real impact"],
    ["Pequenas sonrisas, proyectos serios y una comunidad que acompana.", "Pequeñas sonrisas, proyectos serios y una comunidad que acompaña.", "Small smiles, serious projects and a community that stays close."],
    ["Pequeñas sonrisas, proyectos serios y una comunidad que acompaña.", "Pequeñas sonrisas, proyectos serios y una comunidad que acompaña.", "Small smiles, serious projects and a community that stays close."],
    ["Voluntarios por Africa es una Asociacion sin animo de lucro con el unico fin de combatir la pobreza, la exclusion social y facilitar la educacion y la sanidad a los colectivos mas desfavorecidos del continente Africano.", "Voluntarios por África es una asociación sin ánimo de lucro con el único fin de combatir la pobreza, la exclusión social y facilitar la educación y la sanidad a los colectivos más desfavorecidos del continente africano.", "Volunteers for Africa is a non-profit association whose sole aim is to fight poverty, social exclusion, and improve access to education and healthcare for the most disadvantaged communities on the African continent."],
    ["Voluntarios por África es una asociación sin ánimo de lucro con el único fin de combatir la pobreza, la exclusión social y facilitar la educación y la sanidad a los colectivos más desfavorecidos del continente africano.", "Voluntarios por África es una asociación sin ánimo de lucro con el único fin de combatir la pobreza, la exclusión social y facilitar la educación y la sanidad a los colectivos más desfavorecidos del continente africano.", "Volunteers for Africa is a non-profit association whose sole aim is to fight poverty, social exclusion, and improve access to education and healthcare for the most disadvantaged communities on the African continent."],
    ["Educacion y cuidado con cercania humana", "Educación y cuidado con cercanía humana", "Education and care with human closeness"],
    ["Educación y cuidado con cercanía humana", "Educación y cuidado con cercanía humana", "Education and care with human closeness"],
    ["La ayuda se mueve entre necesidades de hoy y logros que ya inspiran.", "La ayuda se mueve entre necesidades de hoy y logros que ya inspiran.", "Support moves between today's needs and achievements that already inspire."],
    ["Descubre cuales son los proyectos que tenemos en marcha ahora mismo.", "Descubre cuáles son los proyectos que tenemos en marcha ahora mismo.", "Discover which projects are currently underway."],
    ["Descubre cuáles son los proyectos que tenemos en marcha ahora mismo.", "Descubre cuáles son los proyectos que tenemos en marcha ahora mismo.", "Discover which projects are currently underway."],
    ["Conoce como puedes ayudarnos en nuestra labor y sumarte a iniciativas en desarrollo.", "Conoce cómo puedes ayudarnos en nuestra labor y sumarte a iniciativas en desarrollo.", "See how you can help our work and join projects already in progress."],
    ["Conoce cómo puedes ayudarnos en nuestra labor y sumarte a iniciativas en desarrollo.", "Conoce cómo puedes ayudarnos en nuestra labor y sumarte a iniciativas en desarrollo.", "See how you can help our work and join projects already in progress."],
    ["Proyectos que ya hemos terminado y que inspiran el futuro de la asociacion.", "Proyectos que ya hemos terminado y que inspiran el futuro de la asociación.", "Projects we have already completed and that inspire the future of the association."],
    ["Proyectos que ya hemos terminado y que inspiran el futuro de la asociación.", "Proyectos que ya hemos terminado y que inspiran el futuro de la asociación.", "Projects we have already completed and that inspire the future of the association."],
    ["Un recorrido por acciones completadas que muestran impacto, aprendizaje y continuidad.", "Un recorrido por acciones completadas que muestran impacto, aprendizaje y continuidad.", "A tour of completed actions that show impact, learning and continuity."],
    ["Hay muchas formas de acercarte: donar, hacerte miembro, viajar o apoyar la difusion.", "Hay muchas formas de acercarte: donar, hacerte miembro, viajar o apoyar la difusión.", "There are many ways to get involved: donate, become a member, travel or support outreach."],
    ["Hay muchas formas de acercarte: donar, hacerte miembro, viajar o apoyar la difusión.", "Hay muchas formas de acercarte: donar, hacerte miembro, viajar o apoyar la difusión.", "There are many ways to get involved: donate, become a member, travel or support outreach."],
    ["Escribenos para colaborar", "Escríbenos para colaborar", "Write to us to collaborate"],
    ["Escríbenos para colaborar", "Escríbenos para colaborar", "Write to us to collaborate"],
    ["Acercate al proyecto desde dentro", "Acércate al proyecto desde dentro", "Get close to the project from the inside"],
    ["Acércate al proyecto desde dentro", "Acércate al proyecto desde dentro", "Get close to the project from the inside"],
    ["Participa desde dentro", "Participa desde dentro", "Take part from within"],
    ["Conoce el terreno y acompana", "Conoce el terreno y acompaña", "Get to know the field and stay close"],
    ["Conoce el terreno y acompaña", "Conoce el terreno y acompaña", "Get to know the field and stay close"],
    ["Noticias y redes", "Noticias y redes", "News and social channels"],
    ["Tus visitas, tu apoyo y tu seguimiento tambien cambian vidas.", "Tus visitas, tu apoyo y tu seguimiento también cambian vidas.", "Your visits, support and follow-up also change lives."],
    ["Tus visitas, tu apoyo y tu seguimiento también cambian vidas.", "Tus visitas, tu apoyo y tu seguimiento también cambian vidas.", "Your visits, support and follow-up also change lives."],
    ["Este bloque reune noticias, redes y un resumen del viaje a Etiopia para que la informacion se entienda rapido.", "Este bloque reúne noticias, redes y un resumen del viaje a Etiopía para que la información se entienda rápido.", "This section brings together news, social channels and a trip summary so the information is easy to grasp."],
    ["Este bloque reúne noticias, redes y un resumen del viaje a Etiopía para que la información se entienda rápido.", "Este bloque reúne noticias, redes y un resumen del viaje a Etiopía para que la información se entienda rápido.", "This section brings together news, social channels and a trip summary so the information is easy to grasp."],
    ["Haz clic aqui", "Haz clic aquí", "Open news"],
    ["Haz clic aquí", "Haz clic aquí", "Open news"],
    ["Resumen del viaje a Etiopia", "Resumen del viaje a Etiopía", "Ethiopia trip summary"],
    ["Resumen del viaje a Etiopía", "Resumen del viaje a Etiopía", "Ethiopia trip summary"],
    ["Video destacado", "Vídeo destacado", "Featured video"],
    ["Vídeo destacado", "Vídeo destacado", "Featured video"],
    ["Redes sociales oficiales", "Redes sociales oficiales", "Official social channels"],
    ["Sigue el dia a dia", "Sigue el día a día", "Follow the day to day"],
    ["Sigue el día a día", "Sigue el día a día", "Follow the day to day"],
    ["Abrir pagina de Facebook", "Abrir página de Facebook", "Open Facebook page"],
    ["Abrir página de Facebook", "Abrir página de Facebook", "Open Facebook page"],
    ["Una imagen mas actual para una labor que sigue siendo la misma.", "Una imagen más actual para una labor que sigue siendo la misma.", "A more current image for work that remains the same."],
    ["Una imagen más actual para una labor que sigue siendo la misma.", "Una imagen más actual para una labor que sigue siendo la misma.", "A more current image for work that remains the same."],
    ["Encontraras fotos, textos esenciales, contenidos, documentos y acciones de colaboracion de la asociacion.", "Encontrarás fotos, textos esenciales, contenidos, documentos y acciones de colaboración de la asociación.", "You will find photos, essential texts, documents and ways to collaborate with the association."],
    ["Encontrarás fotos, textos esenciales, contenidos, documentos y acciones de colaboración de la asociación.", "Encontrarás fotos, textos esenciales, contenidos, documentos y acciones de colaboración de la asociación.", "You will find photos, essential texts, documents and ways to collaborate with the association."],
    ["Contacto | Voluntarios por Africa", "Contacto | Voluntarios por África", "Contact | Volunteers for Africa"],
    ["Telefonos, email y vias de contacto de Voluntarios por Africa.", "Teléfonos, email y vías de contacto de Voluntarios por África.", "Phone numbers, email and contact channels for Volunteers for Africa."],
    ["Telefonos, email y vias de contacto de Voluntarios por África.", "Teléfonos, email y vías de contacto de Voluntarios por África.", "Phone numbers, email and contact channels for Volunteers for Africa."],
    ["Telefonos, email y vías de contacto de Voluntarios por África.", "Teléfonos, email y vías de contacto de Voluntarios por África.", "Phone numbers, email and contact channels for Volunteers for Africa."],
    ["Encantados de ayudarte", "Encantados de ayudarte", "Happy to help"],
    ["Para cualquier duda o consulta, contacta con nosotros.", "Para cualquier duda o consulta, contacta con nosotros.", "For any question or enquiry, get in touch with us."],
    ["Llamanos al numero que mejor te venga, escribenos a VPA@voluntariosporafrica.org o usa el formulario de esta pagina como borrador de tu mensaje.", "Llámanos al número que mejor te venga, escríbenos a VPA@voluntariosporafrica.org o usa el formulario de esta página como borrador de tu mensaje.", "Call the number that suits you best, write to VPA@voluntariosporafrica.org or use the form on this page as a draft for your message."],
    ["Llámanos al número que mejor te venga, escríbenos a VPA@voluntariosporafrica.org o usa el formulario de esta página como borrador de tu mensaje.", "Llámanos al número que mejor te venga, escríbenos a VPA@voluntariosporafrica.org o usa el formulario de esta página como borrador de tu mensaje.", "Call the number that suits you best, write to VPA@voluntariosporafrica.org or use the form on this page as a draft for your message."],
    ["Sede central Madrid", "Sede central Madrid", "Madrid headquarters"],
    ["Delegacion Cantabria", "Delegación Cantabria", "Cantabria branch"],
    ["Delegación Cantabria", "Delegación Cantabria", "Cantabria branch"],
    ["Formulario", "Formulario", "Form"],
    ["Escribe tu consulta", "Escribe tu consulta", "Write your enquiry"],
    ["Escribe tu mensaje y preparalo para enviarlo por correo.", "Escribe tu mensaje y prepáralo para enviarlo por correo.", "Write your message and prepare it to be sent by email."],
    ["Escribe tu mensaje y prepáralo para enviarlo por correo.", "Escribe tu mensaje y prepáralo para enviarlo por correo.", "Write your message and prepare it to be sent by email."],
    ["Nombre", "Nombre", "Name"],
    ["Mensaje", "Mensaje", "Message"],
    ["Enviar", "Enviar", "Send"],
    ["Informacion directa y sin ruido.", "Información directa y sin ruido.", "Direct information without noise."],
    ["Información directa y sin ruido.", "Información directa y sin ruido.", "Direct information without noise."],
    ["La pagina conserva correo, sedes, telefonos y formulario de contacto.", "La página conserva correo, sedes, teléfonos y formulario de contacto.", "The page keeps together email, branches, phone numbers and the contact form."],
    ["La página conserva correo, sedes, teléfonos y formulario de contacto.", "La página conserva correo, sedes, teléfonos y formulario de contacto.", "The page keeps together email, branches, phone numbers and the contact form."],
    ["Nuestro equipo | Voluntarios por Africa", "Nuestro equipo | Voluntarios por África", "Our team | Volunteers for Africa"],
    ["Junta directiva, delegaciones y equipo de Voluntarios por Africa.", "Junta directiva, delegaciones y equipo de Voluntarios por África.", "Board members, branches and team of Volunteers for Africa."],
    ["Colaboradores", "Colaboradores", "Collaborators"],
    ["Orgullosos de nuestro equipo y de quienes sostienen el trabajo.", "Orgullosos de nuestro equipo y de quienes sostienen el trabajo.", "Proud of our team and of the people who sustain this work."],
    ["La pagina recoge junta directiva, delegaciones y responsables sobre el terreno.", "La página recoge junta directiva, delegaciones y responsables sobre el terreno.", "This page gathers the board, branches and local people responsible in the field."],
    ["La página recoge junta directiva, delegaciones y responsables sobre el terreno.", "La página recoge junta directiva, delegaciones y responsables sobre el terreno.", "This page gathers the board, branches and local people responsible in the field."],
    ["Junta directiva", "Junta directiva", "Board"],
    ["Direccion y seguimiento del proyecto.", "Dirección y seguimiento del proyecto.", "Project leadership and follow-up."],
    ["Dirección y seguimiento del proyecto.", "Dirección y seguimiento del proyecto.", "Project leadership and follow-up."],
    ["Delegaciones y terreno", "Delegaciones y terreno", "Branches and field team"],
    ["Apoyo regional y presencia local.", "Apoyo regional y presencia local.", "Regional support and local presence."],
    ["Marketing y comunicacion", "Marketing y comunicación", "Marketing and communication"],
    ["Marketing y comunicación", "Marketing y comunicación", "Marketing and communication"],
    ["Ambo - Gestion", "Ambo - Gestión", "Ambo - Management"],
    ["Ambo - Gestión", "Ambo - Gestión", "Ambo - Management"],
    ["Ambo - Transporte", "Ambo - Transporte", "Ambo - Transport"],
    ["Ambo - Medico", "Ambo - Médico", "Ambo - Medical"],
    ["Ambo - Médico", "Ambo - Médico", "Ambo - Medical"],
    ["Ambo - Construccion", "Ambo - Construcción", "Ambo - Construction"],
    ["Ambo - Construcción", "Ambo - Construcción", "Ambo - Construction"],
    ["Personas", "Personas", "People"],
    ["Una red pequena, visible y reconocible.", "Una red pequeña, visible y reconocible.", "A small, visible and recognisable network."],
    ["Una red pequeña, visible y reconocible.", "Una red pequeña, visible y reconocible.", "A small, visible and recognisable network."],
    ["Los perfiles y las imagenes muestran a las personas que sostienen el proyecto.", "Los perfiles y las imágenes muestran a las personas que sostienen el proyecto.", "The profiles and images show the people who sustain the project."],
    ["Los perfiles y las imágenes muestran a las personas que sostienen el proyecto.", "Los perfiles y las imágenes muestran a las personas que sostienen el proyecto.", "The profiles and images show the people who sustain the project."],
    ["Como nos financiamos | Voluntarios por Africa", "Cómo nos financiamos | Voluntarios por África", "How we are funded | Volunteers for Africa"],
    ["Origen de los fondos y uso de recursos de Voluntarios por Africa.", "Origen de los fondos y uso de recursos de Voluntarios por África.", "Where funds come from and how resources are used by Volunteers for Africa."],
    ["Transparencia", "Transparencia", "Transparency"],
    ["Asi buscamos fondos y asi los utilizamos.", "Así buscamos fondos y así los utilizamos.", "How we raise funds and how we use them."],
    ["Así buscamos fondos y así los utilizamos.", "Así buscamos fondos y así los utilizamos.", "How we raise funds and how we use them."],
    ["La ONG es totalmente independiente. Evalua libremente las necesidades, decide libremente la asistencia y destina integramente los fondos recibidos a sus proyectos, con una parte minima desde 2017 para administracion y captacion de recursos.", "La ONG es totalmente independiente. Evalúa libremente las necesidades, decide libremente la asistencia y destina íntegramente los fondos recibidos a sus proyectos, con una parte mínima desde 2017 para administración y captación de recursos.", "The NGO is fully independent. It freely assesses needs, freely decides the assistance to provide and allocates all received funds to its projects, with only a minimal share since 2017 devoted to administration and fundraising."],
    ["La ONG es totalmente independiente. Evalúa libremente las necesidades, decide libremente la asistencia y destina íntegramente los fondos recibidos a sus proyectos, con una parte mínima desde 2017 para administración y captación de recursos.", "La ONG es totalmente independiente. Evalúa libremente las necesidades, decide libremente la asistencia y destina íntegramente los fondos recibidos a sus proyectos, con una parte mínima desde 2017 para administración y captación de recursos.", "The NGO is fully independent. It freely assesses needs, freely decides the assistance to provide and allocates all received funds to its projects, with only a minimal share since 2017 devoted to administration and fundraising."],
    ["Financiacion ONG", "Financiación ONG", "NGO funding"],
    ["Origen", "Origen", "Source"],
    ["Uso", "Uso", "Use"],
    ["Rigor", "Rigor", "Rigour"],
    ["100% privado", "100% privado", "100% private"],
    ["Fondos a proyectos", "Fondos a proyectos", "Funds for projects"],
    ["Evaluacion directa", "Evaluación directa", "Direct assessment"],
    ["Evaluación directa", "Evaluación directa", "Direct assessment"],
    ["Los ingresos son de origen privado. No se trabaja condicionados por intereses ajenos al fin social de la organizacion.", "Los ingresos son de origen privado. No se trabaja condicionados por intereses ajenos al fin social de la organización.", "Income comes from private sources. The work is not conditioned by interests unrelated to the association's social purpose."],
    ["Los ingresos son de origen privado. No se trabaja condicionados por intereses ajenos al fin social de la organización.", "Los ingresos son de origen privado. No se trabaja condicionados por intereses ajenos al fin social de la organización.", "Income comes from private sources. The work is not conditioned by interests unrelated to the association's social purpose."],
    ["La asociacion no genera beneficios para si misma y destina los recursos a las necesidades detectadas sobre el terreno.", "La asociación no genera beneficios para sí misma y destina los recursos a las necesidades detectadas sobre el terreno.", "The association does not generate profit for itself and directs resources to the needs identified in the field."],
    ["La asociación no genera beneficios para sí misma y destina los recursos a las necesidades detectadas sobre el terreno.", "La asociación no genera beneficios para sí misma y destina los recursos a las necesidades detectadas sobre el terreno.", "The association does not generate profit for itself and directs resources to the needs identified in the field."],
    ["La captacion de fondos se basa en las necesidades que se van a cubrir, a partir de evaluaciones directas realizadas por la propia ONG.", "La captación de fondos se basa en las necesidades que se van a cubrir, a partir de evaluaciones directas realizadas por la propia ONG.", "Fundraising is based on the needs that will be addressed, starting from direct assessments carried out by the NGO itself."],
    ["La captación de fondos se basa en las necesidades que se van a cubrir, a partir de evaluaciones directas realizadas por la propia ONG.", "La captación de fondos se basa en las necesidades que se van a cubrir, a partir de evaluaciones directas realizadas por la propia ONG.", "Fundraising is based on the needs that will be addressed, starting from direct assessments carried out by the NGO itself."],
    ["Captacion", "Captación", "Fundraising"],
    ["Captación", "Captación", "Fundraising"],
    ["Eventos, socios y donaciones para sostener la independencia financiera.", "Eventos, socios y donaciones para sostener la independencia financiera.", "Events, members and donations to sustain financial independence."],
    ["Se organizan eventos anuales en las ciudades con delegacion y se impulsa la captacion de socios con el fin de alcanzar una base financiera estable. Las aportaciones de socios se destinan integramente a los proyectos en marcha.", "Se organizan eventos anuales en las ciudades con delegación y se impulsa la captación de socios con el fin de alcanzar una base financiera estable. Las aportaciones de socios se destinan íntegramente a los proyectos en marcha.", "Annual events are organised in cities with a branch office, and membership growth is encouraged to reach a stable financial base. Members' contributions are fully allocated to ongoing projects."],
    ["Se organizan eventos anuales en las ciudades con delegación y se impulsa la captación de socios con el fin de alcanzar una base financiera estable. Las aportaciones de socios se destinan íntegramente a los proyectos en marcha.", "Se organizan eventos anuales en las ciudades con delegación y se impulsa la captación de socios con el fin de alcanzar una base financiera estable. Las aportaciones de socios se destinan íntegramente a los proyectos en marcha.", "Annual events are organised in cities with a branch office, and membership growth is encouraged to reach a stable financial base. Members' contributions are fully allocated to ongoing projects."],
    ["Trazabilidad", "Trazabilidad", "Traceability"],
    ["La documentacion publica refuerza la confianza.", "La documentación pública refuerza la confianza.", "Public documentation strengthens trust."],
    ["La documentación pública refuerza la confianza.", "La documentación pública refuerza la confianza.", "Public documentation strengthens trust."],
    ["En la pagina de documentos estan disponibles memorias economicas y de actividad, estatutos, identificacion fiscal y otros documentos internos relevantes.", "En la página de documentos están disponibles memorias económicas y de actividad, estatutos, identificación fiscal y otros documentos internos relevantes.", "On the documents page you can find activity and financial reports, bylaws, tax identification and other relevant internal documents."],
    ["En la página de documentos están disponibles memorias económicas y de actividad, estatutos, identificación fiscal y otros documentos internos relevantes.", "En la página de documentos están disponibles memorias económicas y de actividad, estatutos, identificación fiscal y otros documentos internos relevantes.", "On the documents page you can find activity and financial reports, bylaws, tax identification and other relevant internal documents."],
    ["Abrir documentos", "Abrir documentos", "Open documents"],
    ["Fondos", "Fondos", "Funding"],
    ["Financiacion sencilla de entender y facil de contrastar.", "Financiación sencilla de entender y fácil de contrastar.", "Funding that is easy to understand and easy to verify."],
    ["Financiación sencilla de entender y fácil de contrastar.", "Financiación sencilla de entender y fácil de contrastar.", "Funding that is easy to understand and easy to verify."],
    ["Esta informacion se presenta en un formato breve y legible, con acceso directo a las memorias.", "Esta información se presenta en un formato breve y legible, con acceso directo a las memorias.", "This information is presented in a short, readable format with direct access to the reports."],
    ["Esta información se presenta en un formato breve y legible, con acceso directo a las memorias.", "Esta información se presenta en un formato breve y legible, con acceso directo a las memorias.", "This information is presented in a short, readable format with direct access to the reports."],
    ["Proyectos | Voluntarios por Africa", "Proyectos | Voluntarios por África", "Projects | Volunteers for Africa"],
    ["Vista general de los proyectos de Voluntarios por Africa.", "Vista general de los proyectos de Voluntarios por África.", "Overview of Volunteers for Africa projects."],
    ["Nuestra linea de trabajo", "Nuestra línea de trabajo", "Our line of work"],
    ["Nuestra línea de trabajo", "Nuestra línea de trabajo", "Our line of work"],
    ["Proyectos actuales y finalizados conectados por una misma idea: cubrir necesidades basicas con continuidad.", "Proyectos actuales y finalizados conectados por una misma idea: cubrir necesidades básicas con continuidad.", "Current and completed projects connected by the same idea: covering basic needs with continuity."],
    ["Proyectos actuales y finalizados conectados por una misma idea: cubrir necesidades básicas con continuidad.", "Proyectos actuales y finalizados conectados por una misma idea: cubrir necesidades básicas con continuidad.", "Current and completed projects connected by the same idea: covering basic needs with continuity."],
    ["La colaboracion comenzo en 2010 en Seven Guetto, una aldea ubicada a 7 km de Awaro. Desde entonces el trabajo ha crecido hacia salud, escolaridad, sostenibilidad, agua, vivienda y acogida de madres con ninos.", "La colaboración comenzó en 2010 en Seven Guetto, una aldea ubicada a 7 km de Awaro. Desde entonces el trabajo ha crecido hacia salud, escolaridad, sostenibilidad, agua, vivienda y acogida de madres con niños.", "The collaboration began in 2010 in Seven Guetto, a village located 7 km from Awaro. Since then, the work has grown into healthcare, schooling, sustainability, water access, housing and shelter for mothers with children."],
    ["La colaboración comenzó en 2010 en Seven Guetto, una aldea ubicada a 7 km de Awaro. Desde entonces el trabajo ha crecido hacia salud, escolaridad, sostenibilidad, agua, vivienda y acogida de madres con niños.", "La colaboración comenzó en 2010 en Seven Guetto, una aldea ubicada a 7 km de Awaro. Desde entonces el trabajo ha crecido hacia salud, escolaridad, sostenibilidad, agua, vivienda y acogida de madres con niños.", "The collaboration began in 2010 in Seven Guetto, a village located 7 km from Awaro. Since then, the work has grown into healthcare, schooling, sustainability, water access, housing and shelter for mothers with children."],
    ["Ver proyectos actuales", "Ver proyectos actuales", "See current projects"],
    ["Ver proyectos finalizados", "Ver proyectos finalizados", "See completed projects"],
    ["Asistencia medica en un contexto donde la sanidad no es gratuita y el coste de una visita y medicamentos supera la capacidad de muchas familias.", "Asistencia médica en un contexto donde la sanidad no es gratuita y el coste de una visita y medicamentos supera la capacidad de muchas familias.", "Medical assistance in a context where healthcare is not free and the cost of a consultation and medicines is beyond the reach of many families."],
    ["Asistencia médica en un contexto donde la sanidad no es gratuita y el coste de una visita y medicamentos supera la capacidad de muchas familias.", "Asistencia médica en un contexto donde la sanidad no es gratuita y el coste de una visita y medicamentos supera la capacidad de muchas familias.", "Medical assistance in a context where healthcare is not free and the cost of a consultation and medicines is beyond the reach of many families."],
    ["Visitar proyecto", "Visitar proyecto", "Visit project"],
    ["Compra de animales para crear sustento a traves de agricultura y ganaderia, vinculada a la mejora de autonomia familiar.", "Compra de animales para crear sustento a través de agricultura y ganadería, vinculada a la mejora de autonomía familiar.", "Purchase of animals to create income through farming and livestock, linked to improving family autonomy."],
    ["Compra de animales para crear sustento a través de agricultura y ganadería, vinculada a la mejora de autonomía familiar.", "Compra de animales para crear sustento a través de agricultura y ganadería, vinculada a la mejora de autonomía familiar.", "Purchase of animals to create income through farming and livestock, linked to improving family autonomy."],
    ["Rehabilitacion de casas para sustituir chozas derruidas por lluvia y avanzar hacia condiciones mas seguras y dignas.", "Rehabilitación de casas para sustituir chozas derruidas por lluvia y avanzar hacia condiciones más seguras y dignas.", "House rehabilitation to replace huts destroyed by rain and move toward safer and more dignified conditions."],
    ["Rehabilitación de casas para sustituir chozas derruidas por lluvia y avanzar hacia condiciones más seguras y dignas.", "Rehabilitación de casas para sustituir chozas derruidas por lluvia y avanzar hacia condiciones más seguras y dignas.", "House rehabilitation to replace huts destroyed by rain and move toward safer and more dignified conditions."],
    ["Ver resumen", "Ver resumen", "View summary"],
    ["Suministro de luz en Seven Guetto: desde linternas hasta paneles solares e instalaciones electricas que mejoraron seguridad y calidad de vida.", "Suministro de luz en Seven Guetto: desde linternas hasta paneles solares e instalaciones eléctricas que mejoraron seguridad y calidad de vida.", "Provision of light in Seven Guetto, from torches to solar panels and electrical installations that improved safety and quality of life."],
    ["Suministro de luz en Seven Guetto: desde linternas hasta paneles solares e instalaciones eléctricas que mejoraron seguridad y calidad de vida.", "Suministro de luz en Seven Guetto: desde linternas hasta paneles solares e instalaciones eléctricas que mejoraron seguridad y calidad de vida.", "Provision of light in Seven Guetto, from torches to solar panels and electrical installations that improved safety and quality of life."],
    ["Sistema de captacion de agua y regadio que transformo salud, cultivo, ganaderia y condiciones generales de vida en la aldea.", "Sistema de captación de agua y regadío que transformó salud, cultivo, ganadería y condiciones generales de vida en la aldea.", "Water collection and irrigation system that transformed health, farming, livestock and general living conditions in the village."],
    ["Sistema de captación de agua y regadío que transformó salud, cultivo, ganadería y condiciones generales de vida en la aldea.", "Sistema de captación de agua y regadío que transformó salud, cultivo, ganadería y condiciones generales de vida en la aldea.", "Water collection and irrigation system that transformed health, farming, livestock and general living conditions in the village."],
    ["Expansiones del modelo hacia aldeas y casas de acogida, combinando escolaridad, sostenibilidad, salud, formacion y apoyo a madres con ninos.", "Expansiones del modelo hacia aldeas y casas de acogida, combinando escolaridad, sostenibilidad, salud, formación y apoyo a madres con niños.", "Expansion of the model into villages and shelters, combining schooling, sustainability, health, training and support for mothers with children."],
    ["Expansiones del modelo hacia aldeas y casas de acogida, combinando escolaridad, sostenibilidad, salud, formación y apoyo a madres con niños.", "Expansiones del modelo hacia aldeas y casas de acogida, combinando escolaridad, sostenibilidad, salud, formación y apoyo a madres con niños.", "Expansion of the model into villages and shelters, combining schooling, sustainability, health, training and support for mothers with children."],
    ["Abrir proyectos actuales", "Abrir proyectos actuales", "Open current projects"],
    ["Una pagina puente para entender el conjunto.", "Una página puente para entender el conjunto.", "A bridge page to understand the whole picture."],
    ["Una página puente para entender el conjunto.", "Una página puente para entender el conjunto.", "A bridge page to understand the whole picture."],
    ["Desde aqui se accede a las dos areas clave del sitio: proyectos actuales y finalizados.", "Desde aquí se accede a las dos áreas clave del sitio: proyectos actuales y finalizados.", "From here you can reach the site's two key areas: current and completed projects."],
    ["Desde aquí se accede a las dos áreas clave del sitio: proyectos actuales y finalizados.", "Desde aquí se accede a las dos áreas clave del sitio: proyectos actuales y finalizados.", "From here you can reach the site's two key areas: current and completed projects."],
    ["Documentos | Voluntarios por Africa", "Documentos | Voluntarios por África", "Documents | Volunteers for Africa"],
    ["Documentacion, memorias economicas y otros PDFs de Voluntarios por Africa.", "Documentación, memorias económicas y otros PDFs de Voluntarios por África.", "Documents, financial reports and other PDFs from Volunteers for Africa."],
    ["Documentacion", "Documentación", "Documentation"],
    ["Todos los documentos de la asociacion reunidos en una sola vista.", "Todos los documentos de la asociación reunidos en una sola vista.", "All association documents gathered in one place."],
    ["Todos los documentos de la asociación reunidos en una sola vista.", "Todos los documentos de la asociación reunidos en una sola vista.", "All association documents gathered in one place."],
    ["Acceso a identificacion fiscal, utilidad publica, acta fundacional, memorias economicas y documentacion interna.", "Acceso a identificación fiscal, utilidad pública, acta fundacional, memorias económicas y documentación interna.", "Access to tax identification, public-interest declaration, founding deed, financial reports and internal documentation."],
    ["Acceso a identificación fiscal, utilidad pública, acta fundacional, memorias económicas y documentación interna.", "Acceso a identificación fiscal, utilidad pública, acta fundacional, memorias económicas y documentación interna.", "Access to tax identification, public-interest declaration, founding deed, financial reports and internal documentation."],
    ["Documentacion VPA", "Documentación VPA", "VFA documentation"],
    ["Documentos base", "Documentos base", "Core documents"],
    ["Tarjeta de identificacion fiscal", "Tarjeta de identificación fiscal", "Tax identification card"],
    ["Tarjeta de identificación fiscal", "Tarjeta de identificación fiscal", "Tax identification card"],
    ["Registro y declaracion de utilidad publica", "Registro y declaración de utilidad pública", "Registration and public-interest declaration"],
    ["Registro y declaración de utilidad pública", "Registro y declaración de utilidad pública", "Registration and public-interest declaration"],
    ["Acta fundacional", "Acta fundacional", "Founding deed"],
    ["Registro como asociacion civil extranjera en Etiopia", "Registro como asociación civil extranjera en Etiopía", "Registration as a foreign civil association in Ethiopia"],
    ["Registro como asociación civil extranjera en Etiopía", "Registro como asociación civil extranjera en Etiopía", "Registration as a foreign civil association in Ethiopia"],
    ["Estatutos de la asociacion", "Estatutos de la asociación", "Association bylaws"],
    ["Estatutos de la asociación", "Estatutos de la asociación", "Association bylaws"],
    ["Memorias", "Memorias", "Reports"],
    ["Actividades economicas", "Actividades económicas", "Financial activity"],
    ["Actividades económicas", "Actividades económicas", "Financial activity"],
    ["Otros documentos", "Otros documentos", "Other documents"],
    ["Gobernanza y voluntariado", "Gobernanza y voluntariado", "Governance and volunteering"],
    ["Codigo etico VPA", "Código ético VPA", "VFA code of ethics"],
    ["Código ético VPA", "Código ético VPA", "VFA code of ethics"],
    ["Integracion de perspectiva de genero", "Integración de perspectiva de género", "Gender perspective integration"],
    ["Integración de perspectiva de género", "Integración de perspectiva de género", "Gender perspective integration"],
    ["PDFs y memorias", "PDFs y memorias", "PDFs and reports"],
    ["Acceso directo a la parte mas administrativa del proyecto.", "Acceso directo a la parte más administrativa del proyecto.", "Direct access to the most administrative part of the project."],
    ["Acceso directo a la parte más administrativa del proyecto.", "Acceso directo a la parte más administrativa del proyecto.", "Direct access to the most administrative part of the project."],
    ["Consulta la documentacion administrativa y las memorias en un solo lugar.", "Consulta la documentación administrativa y las memorias en un solo lugar.", "Check the administrative documentation and reports in one place."],
    ["Consulta la documentación administrativa y las memorias en un solo lugar.", "Consulta la documentación administrativa y las memorias en un solo lugar.", "Check the administrative documentation and reports in one place."],
    ["Dónde intervenimos | Voluntarios por África", "Dónde intervenimos | Voluntarios por África", "Where we work | Volunteers for Africa"],
    ["Países, ciudades y zonas de trabajo de Voluntarios por África.", "Países, ciudades y zonas de trabajo de Voluntarios por África.", "Countries, cities and areas where Volunteers for Africa works."],
    ["Geografía del impacto", "Geografía del impacto", "Geography of impact"],
    ["Estos son los países y ciudades donde trabajamos.", "Estos son los países y ciudades donde trabajamos.", "These are the countries and cities where we work."],
    ["La acción principal se desarrolla en Etiopía, especialmente en Addis Abeba, Ambo, Chitu y Awaro. En España colaboramos con Mundo Justo en tareas logísticas y de apoyo a personas en riesgo o situación de exclusión social.", "La acción principal se desarrolla en Etiopía, especialmente en Addis Abeba, Ambo, Chitu y Awaro. En España colaboramos con Mundo Justo en tareas logísticas y de apoyo a personas en riesgo o situación de exclusión social.", "The main work takes place in Ethiopia, especially in Addis Ababa, Ambo, Chitu and Awaro. In Spain we work with Mundo Justo on logistics and support for people at risk of social exclusion."],
    ["El trabajo se concentra en zonas donde la necesidad es concreta y continuada.", "El trabajo se concentra en zonas donde la necesidad es concreta y continuada.", "The work is concentrated in areas where need is concrete and continuous."],
    ["Trabajamos en el continente africano, más concretamente en Etiopía. Las intervenciones se orientan a salud, escolaridad, sostenibilidad familiar y acceso a recursos básicos.", "Trabajamos en el continente africano, más concretamente en Etiopía. Las intervenciones se orientan a salud, escolaridad, sostenibilidad familiar y acceso a recursos básicos.", "We work on the African continent, more specifically in Ethiopia. Interventions focus on healthcare, schooling, family sustainability and access to basic resources."],
    ["Ambo es una ciudad del centro de Etiopía, en la región de Oromia. Awaro, a pocos kilómetros, alberga la aldea Seven Guetto y buena parte de los proyectos históricos de la asociación.", "Ambo es una ciudad del centro de Etiopía, en la región de Oromia. Awaro, a pocos kilómetros, alberga la aldea Seven Guetto y buena parte de los proyectos históricos de la asociación.", "Ambo is a town in central Ethiopia, in the Oromia region. Awaro, a few kilometres away, is home to the village of Seven Guetto and many of the association's historic projects."],
    ["Chitu está en Etiopía y forma parte de las zonas en las que se sostiene el acompañamiento a familias y el seguimiento de proyectos vinculados al territorio.", "Chitu está en Etiopía y forma parte de las zonas en las que se sostiene el acompañamiento a familias y el seguimiento de proyectos vinculados al territorio.", "Chitu is in Ethiopia and is one of the areas where support for families and follow-up of territory-linked projects is maintained."],
    ["En España se mantiene una colaboración estrecha con Mundo Justo, compartiendo logística y apoyo a personas en exclusión social.", "En España se mantiene una colaboración estrecha con Mundo Justo, compartiendo logística y apoyo a personas en exclusión social.", "In Spain we maintain a close collaboration with Mundo Justo, sharing logistics and support for people facing social exclusion."],
    ["Visitar Mundo Justo", "Visitar Mundo Justo", "Visit Mundo Justo"],
    ["Capital y enlace", "Capital y enlace", "Capital and coordination link"],
    ["Ciudad clave para la coordinación, las relaciones institucionales y parte del equipo sobre el terreno.", "Ciudad clave para la coordinación, las relaciones institucionales y parte del equipo sobre el terreno.", "A key city for coordination, institutional relations and part of the field team."],
    ["Centro operativo", "Centro operativo", "Operational centre"],
    ["Una parte importante de la atención médica, la escolaridad y los programas de apoyo se articulan desde esta zona.", "Una parte importante de la atención médica, la escolaridad y los programas de apoyo se articulan desde esta zona.", "A significant part of medical care, schooling and support programmes is organised from this area."],
    ["Seguimiento territorial", "Seguimiento territorial", "Territorial follow-up"],
    ["Zona etíope vinculada al acompañamiento cercano de familias y a la continuidad de varias intervenciones sobre el terreno.", "Zona etíope vinculada al acompañamiento cercano de familias y a la continuidad de varias intervenciones sobre el terreno.", "An Ethiopian area linked to close support for families and the continuity of several interventions in the field."],
    ["Origen del trabajo", "Origen del trabajo", "Where the work began"],
    ["Pequeña localidad próxima a Ambo donde nacieron varios de los primeros proyectos transformadores, especialmente en Seven Guetto.", "Pequeña localidad próxima a Ambo donde nacieron varios de los primeros proyectos transformadores, especialmente en Seven Guetto.", "A small settlement near Ambo where several of the first transformative projects were born, especially in Seven Guetto."],
    ["Territorio", "Territorio", "Territory"],
    ["Entender el lugar es parte del proyecto.", "Entender el lugar es parte del proyecto.", "Understanding the place is part of the project."],
    ["La información territorial se presenta por países y ciudades para facilitar la lectura.", "La información territorial se presenta por países y ciudades para facilitar la lectura.", "Territorial information is presented by country and city to make it easier to read."],
    ["Noticias | Voluntarios por Africa", "Noticias | Voluntarios por África", "News | Volunteers for Africa"],
    ["Archivo de noticias de Voluntarios por Africa.", "Archivo de noticias de Voluntarios por África.", "News archive of Volunteers for Africa."],
    ["Actualidad", "Actualidad", "Updates"],
    ["Archivo de noticias por anos y noticias destacadas.", "Archivo de noticias por años y noticias destacadas.", "News archive by year and featured stories."],
    ["Archivo de noticias por años y noticias destacadas.", "Archivo de noticias por años y noticias destacadas.", "News archive by year and featured stories."],
    ["Noticias organizadas por anos y accesos directos a cada etapa.", "Noticias organizadas por años y accesos directos a cada etapa.", "News organised by year with direct access to each period."],
    ["Noticias organizadas por años y accesos directos a cada etapa.", "Noticias organizadas por años y accesos directos a cada etapa.", "News organised by year with direct access to each period."],
    ["Noticias VPA", "Noticias VPA", "VFA news"],
    ["Entrega de reconocimientos a las organizaciones que colaboran con Envera y acceso a la noticia completa.", "Entrega de reconocimientos a las organizaciones que colaboran con Envera y acceso a la noticia completa.", "Awards ceremony for organisations collaborating with Envera, with access to the full story."],
    ["Abrir archivo", "Abrir archivo", "Open archive"],
    ["Resumen viaje a Etiopia y nuevo viaje tras casi un ano sin poder acudir al pais.", "Resumen viaje a Etiopía y nuevo viaje tras casi un año sin poder acudir al país.", "Trip summary in Ethiopia and a new trip after almost a year without being able to travel to the country."],
    ["Resumen viaje a Etiopía y nuevo viaje tras casi un año sin poder acudir al país.", "Resumen viaje a Etiopía y nuevo viaje tras casi un año sin poder acudir al país.", "Trip summary in Ethiopia and a new trip after almost a year without being able to travel to the country."],
    ["Video ayuda Gebisa-Chituu, utilidad publica y convenio de atencion sanitaria.", "Vídeo ayuda Gebisa-Chituu, utilidad pública y convenio de atención sanitaria.", "Gebisa-Chituu support video, public-interest declaration and healthcare agreement."],
    ["Vídeo ayuda Gebisa-Chituu, utilidad pública y convenio de atención sanitaria.", "Vídeo ayuda Gebisa-Chituu, utilidad pública y convenio de atención sanitaria.", "Gebisa-Chituu support video, public-interest declaration and healthcare agreement."],
    ["Viajes, material escolar, certificados de agradecimiento y campanas solidarias.", "Viajes, material escolar, certificados de agradecimiento y campañas solidarias.", "Trips, school materials, certificates of appreciation and solidarity campaigns."],
    ["Viajes, material escolar, certificados de agradecimiento y campañas solidarias.", "Viajes, material escolar, certificados de agradecimiento y campañas solidarias.", "Trips, school materials, certificates of appreciation and solidarity campaigns."],
    ["Solidaria TV, utilidad publica, prensa local y acciones de inclusion social.", "Solidaria TV, utilidad pública, prensa local y acciones de inclusión social.", "Solidaria TV, public-interest process, local press and social inclusion actions."],
    ["Solidaria TV, utilidad pública, prensa local y acciones de inclusión social.", "Solidaria TV, utilidad pública, prensa local y acciones de inclusión social.", "Solidaria TV, public-interest process, local press and social inclusion actions."],
    ["Archivo", "Archivo", "Archive"],
    ["Noticias organizadas por periodos y no por ruido visual.", "Noticias organizadas por periodos y no por ruido visual.", "News organised by period rather than visual clutter."],
    ["Consulta cada entrada desde su archivo correspondiente.", "Consulta cada entrada desde su archivo correspondiente.", "Open each entry from its corresponding archive."],
    ["Noticias 2017 | Voluntarios por Africa", "Noticias 2017 | Voluntarios por África", "2017 News | Volunteers for Africa"],
    ["Noticias 2018 | Voluntarios por Africa", "Noticias 2018 | Voluntarios por África", "2018 News | Volunteers for Africa"],
    ["Noticias 2019 | Voluntarios por Africa", "Noticias 2019 | Voluntarios por África", "2019 News | Volunteers for Africa"],
    ["Noticias 2020 | Voluntarios por Africa", "Noticias 2020 | Voluntarios por África", "2020 News | Volunteers for Africa"],
    ["Noticias 2023 | Voluntarios por Africa", "Noticias 2023 | Voluntarios por África", "2023 News | Volunteers for Africa"],
    ["Inicio de archivo publico y primeras acciones con alta visibilidad.", "Inicio de archivo público y primeras acciones con alta visibilidad.", "Launch of the public archive and early highly visible actions."],
    ["Inicio de archivo público y primeras acciones con alta visibilidad.", "Inicio de archivo público y primeras acciones con alta visibilidad.", "Launch of the public archive and early highly visible actions."],
    ["Este ano reune presencia en medios, tramites de utilidad publica y acciones sociales compartidas.", "Este año reúne presencia en medios, trámites de utilidad pública y acciones sociales compartidas.", "This year gathers media coverage, public-interest procedures and shared social actions."],
    ["Este año reúne presencia en medios, trámites de utilidad pública y acciones sociales compartidas.", "Este año reúne presencia en medios, trámites de utilidad pública y acciones sociales compartidas.", "This year gathers media coverage, public-interest procedures and shared social actions."],
    ["Leer mas", "Leer más", "Read more"],
    ["Leer más", "Leer más", "Read more"],
    ["Voluntarios por Africa junto a Mundo Justo en Solidaria TV.", "Voluntarios por África junto a Mundo Justo en Solidaria TV.", "Volunteers for Africa together with Mundo Justo on Solidaria TV."],
    ["Voluntarios por África junto a Mundo Justo en Solidaria TV.", "Voluntarios por África junto a Mundo Justo en Solidaria TV.", "Volunteers for Africa together with Mundo Justo on Solidaria TV."],
    ["Inicio del tramite para ser Asociacion de Utilidad Publica.", "Inicio del trámite para ser Asociación de Utilidad Pública.", "Start of the process to become a Public-Interest Association."],
    ["Inicio del trámite para ser Asociación de Utilidad Pública.", "Inicio del trámite para ser Asociación de Utilidad Pública.", "Start of the process to become a Public-Interest Association."],
    ["El Diario Montanes difunde el evento de Suances.", "El Diario Montañés difunde el evento de Suances.", "El Diario Montañés covers the Suances event."],
    ["El Diario Montañés difunde el evento de Suances.", "El Diario Montañés difunde el evento de Suances.", "El Diario Montañés covers the Suances event."],
    ["Brote de colera y contexto sanitario en Africa.", "Brote de cólera y contexto sanitario en África.", "Cholera outbreak and healthcare context in Africa."],
    ["Brote de cólera y contexto sanitario en África.", "Brote de cólera y contexto sanitario en África.", "Cholera outbreak and healthcare context in Africa."],
    ["Participacion en la I Feria de Inclusion Social.", "Participación en la I Feria de Inclusión Social.", "Participation in the 1st Social Inclusion Fair."],
    ["Participación en la I Feria de Inclusión Social.", "Participación en la I Feria de Inclusión Social.", "Participation in the 1st Social Inclusion Fair."],
    ["Archivo anual con hitos destacados.", "Archivo anual con hitos destacados.", "Annual archive with highlighted milestones."],
    ["Campanas solidarias, viajes y reconocimientos.", "Campañas solidarias, viajes y reconocimientos.", "Solidarity campaigns, trips and recognitions."],
    ["Campañas solidarias, viajes y reconocimientos.", "Campañas solidarias, viajes y reconocimientos.", "Solidarity campaigns, trips and recognitions."],
    ["Recoge las noticias principales de este ano.", "Recoge las noticias principales de este año.", "It gathers the main news of this year."],
    ["Recoge las noticias principales de este año.", "Recoge las noticias principales de este año.", "It gathers the main news of this year."],
    ["Proximo viaje a Etiopia y preparacion logistica.", "Próximo viaje a Etiopía y preparación logística.", "Upcoming trip to Ethiopia and logistics preparation."],
    ["Próximo viaje a Etiopía y preparación logística.", "Próximo viaje a Etiopía y preparación logística.", "Upcoming trip to Ethiopia and logistics preparation."],
    ["Furgoneta donada a los amigos de Mundo Justo.", "Furgoneta donada a los amigos de Mundo Justo.", "Van donated to our friends at Mundo Justo."],
    ["Apoyo y difusion del reto Camino por la Fibromialgia.", "Apoyo y difusión del reto Camino por la Fibromialgia.", "Support and outreach for the Camino for Fibromyalgia challenge."],
    ["Apoyo y difusión del reto Camino por la Fibromialgia.", "Apoyo y difusión del reto Camino por la Fibromialgia.", "Support and outreach for the Camino for Fibromyalgia challenge."],
    ["Certificado de reconocimiento a Voluntarios por Africa.", "Certificado de reconocimiento a Voluntarios por África.", "Certificate of recognition for Volunteers for Africa."],
    ["Certificado de reconocimiento a Voluntarios por África.", "Certificado de reconocimiento a Voluntarios por África.", "Certificate of recognition for Volunteers for Africa."],
    ["Actualizacion de proyectos tras el viaje a Etiopia.", "Actualización de proyectos tras el viaje a Etiopía.", "Project update after the Ethiopia trip."],
    ["Actualización de proyectos tras el viaje a Etiopía.", "Actualización de proyectos tras el viaje a Etiopía.", "Project update after the Ethiopia trip."],
    ["Campana solidaria Pequenas cosas, grandes cambios.", "Campaña solidaria Pequeñas cosas, grandes cambios.", "Solidarity campaign Small things, big changes."],
    ["Campaña solidaria Pequeñas cosas, grandes cambios.", "Campaña solidaria Pequeñas cosas, grandes cambios.", "Solidarity campaign Small things, big changes."],
    ["Archivo anual con foco en acciones y visibilidad.", "Archivo anual con foco en acciones y visibilidad.", "Annual archive focused on actions and visibility."],
    ["Utilidad publica, convenios sanitarios y apoyo a proyectos concretos.", "Utilidad pública, convenios sanitarios y apoyo a proyectos concretos.", "Public-interest declaration, healthcare agreements and support for specific projects."],
    ["Utilidad pública, convenios sanitarios y apoyo a proyectos concretos.", "Utilidad pública, convenios sanitarios y apoyo a proyectos concretos.", "Public-interest declaration, healthcare agreements and support for specific projects."],
    ["Este archivo recoge seis entradas destacadas de 2019.", "Este archivo recoge seis entradas destacadas de 2019.", "This archive gathers six featured entries from 2019."],
    ["Video ayuda Proyecto Gebisa-Chituu.", "Vídeo ayuda Proyecto Gebisa-Chituu.", "Gebisa-Chituu project support video."],
    ["Vídeo ayuda Proyecto Gebisa-Chituu.", "Vídeo ayuda Proyecto Gebisa-Chituu.", "Gebisa-Chituu project support video."],
    ["Voluntarios por Africa declarada Asociacion de Utilidad Publica.", "Voluntarios por África declarada Asociación de Utilidad Pública.", "Volunteers for Africa declared a Public-Interest Association."],
    ["Voluntarios por África declarada Asociación de Utilidad Pública.", "Voluntarios por África declarada Asociación de Utilidad Pública.", "Volunteers for Africa declared a Public-Interest Association."],
    ["Convenio de atencion sanitaria gratuita.", "Convenio de atención sanitaria gratuita.", "Agreement for free healthcare."],
    ["Convenio de atención sanitaria gratuita.", "Convenio de atención sanitaria gratuita.", "Agreement for free healthcare."],
    ["Proyecto Hirmee y negocio de Bekelu.", "Proyecto Hirmee y negocio de Bekelu.", "Hirmee project and Bekelu's business."],
    ["Premio Tomas Alvira para Torrevelo-Penalabra.", "Premio Tomás Alvira para Torrevelo-Peñalabra.", "Tomás Alvira Award for Torrevelo-Peñalabra."],
    ["Premio Tomás Alvira para Torrevelo-Peñalabra.", "Premio Tomás Alvira para Torrevelo-Peñalabra.", "Tomás Alvira Award for Torrevelo-Peñalabra."],
    ["Proximo viaje a Etiopia del 13 al 22 de marzo.", "Próximo viaje a Etiopía del 13 al 22 de marzo.", "Upcoming trip to Ethiopia from 13 to 22 March."],
    ["Próximo viaje a Etiopía del 13 al 22 de marzo.", "Próximo viaje a Etiopía del 13 al 22 de marzo.", "Upcoming trip to Ethiopia from 13 to 22 March."],
    ["Un ano de consolidacion institucional.", "Un año de consolidación institucional.", "A year of institutional consolidation."],
    ["Un año de consolidación institucional.", "Un año de consolidación institucional.", "A year of institutional consolidation."],
    ["Resumen de viaje y reactivacion del trabajo tras un ano complejo.", "Resumen de viaje y reactivación del trabajo tras un año complejo.", "Trip summary and renewed work after a difficult year."],
    ["Resumen de viaje y reactivación del trabajo tras un año complejo.", "Resumen de viaje y reactivación del trabajo tras un año complejo.", "Trip summary and renewed work after a difficult year."],
    ["Este archivo recoge dos entradas destacadas de 2020.", "Este archivo recoge dos entradas destacadas de 2020.", "This archive gathers two featured entries from 2020."],
    ["Resumen del viaje a Etiopia con agradecimiento a voluntarios y colaboradores.", "Resumen del viaje a Etiopía con agradecimiento a voluntarios y colaboradores.", "Summary of the Ethiopia trip with thanks to volunteers and collaborators."],
    ["Resumen del viaje a Etiopía con agradecimiento a voluntarios y colaboradores.", "Resumen del viaje a Etiopía con agradecimiento a voluntarios y colaboradores.", "Summary of the Ethiopia trip with thanks to volunteers and collaborators."],
    ["Nuevo viaje a Etiopia despues de casi un ano sin poder desplazarse.", "Nuevo viaje a Etiopía después de casi un año sin poder desplazarse.", "New trip to Ethiopia after almost a year without being able to travel."],
    ["Nuevo viaje a Etiopía después de casi un año sin poder desplazarse.", "Nuevo viaje a Etiopía después de casi un año sin poder desplazarse.", "New trip to Ethiopia after almost a year without being able to travel."],
    ["Archivo compacto y claro.", "Archivo compacto y claro.", "Compact and clear archive."],
    ["Reconocimiento por colaborar con el impacto en 11 ODS de la Agenda 2030.", "Reconocimiento por colaborar con el impacto en 11 ODS de la Agenda 2030.", "Recognition for contributing to the impact of 11 SDGs in the 2030 Agenda."],
    ["El 1 de diciembre Voluntarios por Africa recibio un reconocimiento de Envera en la sede de Iberia por su colaboracion con una entidad social que impacta en 11 de los 17 ODS.", "El 1 de diciembre Voluntarios por África recibió un reconocimiento de Envera en la sede de Iberia por su colaboración con una entidad social que impacta en 11 de los 17 ODS.", "On 1 December, Volunteers for Africa received recognition from Envera at Iberia's headquarters for collaborating with a social organisation that impacts 11 of the 17 SDGs."],
    ["El 1 de diciembre Voluntarios por África recibió un reconocimiento de Envera en la sede de Iberia por su colaboración con una entidad social que impacta en 11 de los 17 ODS.", "El 1 de diciembre Voluntarios por África recibió un reconocimiento de Envera en la sede de Iberia por su colaboración con una entidad social que impacta en 11 de los 17 ODS.", "On 1 December, Volunteers for Africa received recognition from Envera at Iberia's headquarters for collaborating with a social organisation that impacts 11 of the 17 SDGs."],
    ["Detalle", "Detalle", "Detail"],
    ["Entrega de reconocimientos a las organizaciones que colaboran con Envera.", "Entrega de reconocimientos a las organizaciones que colaboran con Envera.", "Awards ceremony for organisations collaborating with Envera."],
    ["El acto fue clausurado por Nadia Calvino e incluye el enlace externo a la noticia para ampliar informacion sobre la gala y el premio.", "El acto fue clausurado por Nadia Calviño e incluye el enlace externo a la noticia para ampliar información sobre la gala y el premio.", "The event was closed by Nadia Calviño and includes the external link to the story for more information about the ceremony and the award."],
    ["El acto fue clausurado por Nadia Calviño e incluye el enlace externo a la noticia para ampliar información sobre la gala y el premio.", "El acto fue clausurado por Nadia Calviño e incluye el enlace externo a la noticia para ampliar información sobre la gala y el premio.", "The event was closed by Nadia Calviño and includes the external link to the story for more information about the ceremony and the award."],
    ["Abrir noticia completa", "Abrir noticia completa", "Open full story"],
    ["Una sola entrada, tratada como pieza destacada.", "Una sola entrada, tratada como pieza destacada.", "A single entry treated as a featured piece."],
    ["Ver noticia", "Ver noticia", "Open story"],
    ["Eventos | Voluntarios por Africa", "Eventos | Voluntarios por África", "Events | Volunteers for Africa"],
    ["Archivo de eventos de Voluntarios por Africa.", "Archivo de eventos de Voluntarios por África.", "Events archive of Volunteers for Africa."],
    ["Archivo de eventos", "Archivo de eventos", "Events archive"],
    ["Encuentros solidarios que ayudaron a sostener proyectos y comunidad.", "Encuentros solidarios que ayudaron a sostener proyectos y comunidad.", "Solidarity events that helped sustain projects and community."],
    ["El archivo se divide en dos bloques principales, 2017 y 2018, con accesos claros y ejemplos destacados.", "El archivo se divide en dos bloques principales, 2017 y 2018, con accesos claros y ejemplos destacados.", "The archive is divided into two main sections, 2017 and 2018, with clear access points and featured examples."],
    ["Eventos VPA", "Eventos VPA", "VFA events"],
    ["Sagunto, Miraflores y Suances 2017 con acciones solidarias y encuentros de apoyo.", "Sagunto, Miraflores y Suances 2017 con acciones solidarias y encuentros de apoyo.", "Sagunto, Miraflores and Suances 2017 with solidarity actions and support gatherings."],
    ["Abrir archivo 2017", "Abrir archivo 2017", "Open 2017 archive"],
    ["Madrid 2018 y Suances 2018 como referentes del archivo de eventos.", "Madrid 2018 y Suances 2018 como referentes del archivo de eventos.", "Madrid 2018 and Suances 2018 as reference points in the events archive."],
    ["Abrir archivo 2018", "Abrir archivo 2018", "Open 2018 archive"],
    ["Archivo ligero, encuentros destacados.", "Archivo ligero, encuentros destacados.", "Light archive, featured events."],
    ["Consulta cada evento desde su enlace de detalle.", "Consulta cada evento desde su enlace de detalle.", "Open each event from its detail link."],
    ["Eventos 2017 | Voluntarios por Africa", "Eventos 2017 | Voluntarios por África", "2017 Events | Volunteers for Africa"],
    ["Eventos 2018 | Voluntarios por Africa", "Eventos 2018 | Voluntarios por África", "2018 Events | Volunteers for Africa"],
    ["Sagunto, Miraflores y Suances como hitos solidarios del ano.", "Sagunto, Miraflores y Suances como hitos solidarios del año.", "Sagunto, Miraflores and Suances as the year's solidarity milestones."],
    ["Sagunto, Miraflores y Suances como hitos solidarios del año.", "Sagunto, Miraflores y Suances como hitos solidarios del año.", "Sagunto, Miraflores and Suances as the year's solidarity milestones."],
    ["Acceso a cada cronica del evento.", "Acceso a cada crónica del evento.", "Access each event chronicle."],
    ["Acceso a cada crónica del evento.", "Acceso a cada crónica del evento.", "Access each event chronicle."],
    ["Ver detalle", "Ver detalle", "View detail"],
    ["Archivo anual resumido.", "Archivo anual resumido.", "Summarised annual archive."],
    ["Madrid y Suances como citas destacadas del archivo 2018.", "Madrid y Suances como citas destacadas del archivo 2018.", "Madrid and Suances as the standout events of the 2018 archive."],
    ["Dos entradas principales reunidas en un formato claro y enlazado.", "Dos entradas principales reunidas en un formato claro y enlazado.", "Two main entries gathered in a clear, linked format."],
    ["Fiesta Solidaria Etiopia 2018.", "Fiesta Solidaria Etiopía 2018.", "Ethiopia Solidarity Party 2018."],
    ["Fiesta Solidaria Etiopía 2018.", "Fiesta Solidaria Etiopía 2018.", "Ethiopia Solidarity Party 2018."],
    ["La solidaridad no tiene limites.", "La solidaridad no tiene límites.", "Solidarity knows no limits."],
    ["La solidaridad no tiene límites.", "La solidaridad no tiene límites.", "Solidarity knows no limits."],
    ["Proyectos actuales | Voluntarios por Africa", "Proyectos actuales | Voluntarios por África", "Current projects | Volunteers for Africa"],
    ["Listado de proyectos actuales de Voluntarios por Africa.", "Listado de proyectos actuales de Voluntarios por África.", "List of current projects from Volunteers for Africa."],
    ["Trabajo en marcha", "Trabajo en marcha", "Work in progress"],
    ["Proyectos actuales activos en salud, acogida, escolaridad y sostenibilidad.", "Proyectos actuales activos en salud, acogida, escolaridad y sostenibilidad.", "Current active projects in healthcare, shelter, schooling and sustainability."],
    ["Estas fichas presentan las imagenes y el acceso de detalle de cada proyecto con una lectura mas limpia y rapida.", "Estas fichas presentan las imágenes y el acceso de detalle de cada proyecto con una lectura más limpia y rápida.", "These cards present the images and detail access for each project in a cleaner, quicker format."],
    ["Estas fichas presentan las imágenes y el acceso de detalle de cada proyecto con una lectura más limpia y rápida.", "Estas fichas presentan las imágenes y el acceso de detalle de cada proyecto con una lectura más limpia y rápida.", "These cards present the images and detail access for each project in a cleaner, quicker format."],
    ["Proyecto actual", "Proyecto actual", "Current project"],
    ["Proyecto de medico para el pueblo surgido de una necesidad social observada en terreno.", "Proyecto de médico para el pueblo surgido de una necesidad social observada en terreno.", "Doctor-for-the-community project born from a social need observed in the field."],
    ["Proyecto de médico para el pueblo surgido de una necesidad social observada en terreno.", "Proyecto de médico para el pueblo surgido de una necesidad social observada en terreno.", "Doctor-for-the-community project born from a social need observed in the field."],
    ["Abrir detalle", "Abrir detalle", "Open detail"],
    ["Casa de acogida para madres con ninos, con alojamiento, manutencion, salud, escolaridad y formacion prelaboral.", "Casa de acogida para madres con niños, con alojamiento, manutención, salud, escolaridad y formación prelaboral.", "Shelter for mothers with children, including accommodation, support, healthcare, schooling and pre-employment training."],
    ["Casa de acogida para madres con niños, con alojamiento, manutención, salud, escolaridad y formación prelaboral.", "Casa de acogida para madres con niños, con alojamiento, manutención, salud, escolaridad y formación prelaboral.", "Shelter for mothers with children, including accommodation, support, healthcare, schooling and pre-employment training."],
    ["Mantenimiento de familias vulnerables en colaboracion con la Universidad de Ambo y acuerdos comunitarios.", "Mantenimiento de familias vulnerables en colaboración con la Universidad de Ambo y acuerdos comunitarios.", "Support for vulnerable families in collaboration with Ambo University and community agreements."],
    ["Mantenimiento de familias vulnerables en colaboración con la Universidad de Ambo y acuerdos comunitarios.", "Mantenimiento de familias vulnerables en colaboración con la Universidad de Ambo y acuerdos comunitarios.", "Support for vulnerable families in collaboration with Ambo University and community agreements."],
    ["Colaboracion comunitaria ligada a uno de los pilares de la ONG y al trabajo con la comunidad local.", "Colaboración comunitaria ligada a uno de los pilares de la ONG y al trabajo con la comunidad local.", "Community collaboration linked to one of the NGO's pillars and its work with the local community."],
    ["Colaboración comunitaria ligada a uno de los pilares de la ONG y al trabajo con la comunidad local.", "Colaboración comunitaria ligada a uno de los pilares de la ONG y al trabajo con la comunidad local.", "Community collaboration linked to one of the NGO's pillars and its work with the local community."],
    ["Acceso a material escolar para que los ninos puedan ejercer el derecho a la educacion.", "Acceso a material escolar para que los niños puedan ejercer el derecho a la educación.", "Access to school materials so children can exercise their right to education."],
    ["Acceso a material escolar para que los niños puedan ejercer el derecho a la educación.", "Acceso a material escolar para que los niños puedan ejercer el derecho a la educación.", "Access to school materials so children can exercise their right to education."],
    ["Atencion medica y acceso a salud para familias con dificultades de movilidad y recursos.", "Atención médica y acceso a salud para familias con dificultades de movilidad y recursos.", "Medical care and access to health services for families with mobility and financial difficulties."],
    ["Atención médica y acceso a salud para familias con dificultades de movilidad y recursos.", "Atención médica y acceso a salud para familias con dificultades de movilidad y recursos.", "Medical care and access to health services for families with mobility and financial difficulties."],
    ["El trabajo vivo de la asociacion.", "El trabajo vivo de la asociación.", "The living work of the association."],
    ["El trabajo vivo de la asociación.", "El trabajo vivo de la asociación.", "The living work of the association."],
    ["Cada proyecto cuenta con su acceso de detalle.", "Cada proyecto cuenta con su acceso de detalle.", "Each project has its own detail page."],
    ["Proyectos finalizados | Voluntarios por Africa", "Proyectos finalizados | Voluntarios por África", "Completed projects | Volunteers for Africa"],
    ["Listado de proyectos finalizados de Voluntarios por Africa.", "Listado de proyectos finalizados de Voluntarios por África.", "List of completed projects from Volunteers for Africa."],
    ["Aprendizajes e hitos", "Aprendizajes e hitos", "Lessons and milestones"],
    ["Proyectos finalizados que sirven de inspiracion para el futuro.", "Proyectos finalizados que sirven de inspiración para el futuro.", "Completed projects that serve as inspiration for the future."],
    ["Proyectos finalizados que sirven de inspiración para el futuro.", "Proyectos finalizados que sirven de inspiración para el futuro.", "Completed projects that serve as inspiration for the future."],
    ["Este archivo reune los proyectos completados con sus recursos y accesos de detalle.", "Este archivo reúne los proyectos completados con sus recursos y accesos de detalle.", "This archive gathers completed projects with their resources and detail links."],
    ["Este archivo reúne los proyectos completados con sus recursos y accesos de detalle.", "Este archivo reúne los proyectos completados con sus recursos y accesos de detalle.", "This archive gathers completed projects with their resources and detail links."],
    ["Proyecto finalizado", "Proyecto finalizado", "Completed project"],
    ["Uno de los proyectos ligados al origen mismo de la organizacion y a sus primeras razones de existencia.", "Uno de los proyectos ligados al origen mismo de la organización y a sus primeras razones de existencia.", "One of the projects linked to the organisation's very origin and first reasons for existing."],
    ["Uno de los proyectos ligados al origen mismo de la organización y a sus primeras razones de existencia.", "Uno de los proyectos ligados al origen mismo de la organización y a sus primeras razones de existencia.", "One of the projects linked to the organisation's very origin and first reasons for existing."],
    ["Suministro de luz y mejora de seguridad cotidiana en Seven Guetto.", "Suministro de luz y mejora de seguridad cotidiana en Seven Guetto.", "Lighting supply and improved everyday safety in Seven Guetto."],
    ["Sistema de captacion de agua y regadio con un impacto decisivo en salud y sostenibilidad.", "Sistema de captación de agua y regadío con un impacto decisivo en salud y sostenibilidad.", "Water collection and irrigation system with a decisive impact on health and sustainability."],
    ["Sistema de captación de agua y regadío con un impacto decisivo en salud y sostenibilidad.", "Sistema de captación de agua y regadío con un impacto decisivo en salud y sostenibilidad.", "Water collection and irrigation system with a decisive impact on health and sustainability."],
    ["Respuesta a una situacion social dramatica detectada junto a servicios sociales de Ambo.", "Respuesta a una situación social dramática detectada junto a servicios sociales de Ambo.", "Response to a dramatic social situation detected together with Ambo social services."],
    ["Respuesta a una situación social dramática detectada junto a servicios sociales de Ambo.", "Respuesta a una situación social dramática detectada junto a servicios sociales de Ambo.", "Response to a dramatic social situation detected together with Ambo social services."],
    ["Apoyo ligado a compra de animales y medios de vida para las familias.", "Apoyo ligado a compra de animales y medios de vida para las familias.", "Support linked to buying animals and livelihoods for families."],
    ["Archivo vivo de lo que ya funciono.", "Archivo vivo de lo que ya funcionó.", "A living archive of what has already worked."],
    ["Archivo vivo de lo que ya funcionó.", "Archivo vivo de lo que ya funcionó.", "A living archive of what has already worked."],
    ["Sirve como memoria y tambien como referencia para nuevas intervenciones.", "Sirve como memoria y también como referencia para nuevas intervenciones.", "It serves both as a record and as a reference for future interventions."],
    ["Sirve como memoria y también como referencia para nuevas intervenciones.", "Sirve como memoria y también como referencia para nuevas intervenciones.", "It serves both as a record and as a reference for future interventions."],
    ["Viajes | Voluntarios por Africa", "Viajes | Voluntarios por África", "Trips | Volunteers for Africa"],
    ["Resumen de viajes de Voluntarios por Africa a Etiopia.", "Resumen de viajes de Voluntarios por África a Etiopía.", "Summary of Volunteers for Africa trips to Ethiopia."],
    ["Cronologia", "Cronología", "Timeline"],
    ["Cronología", "Cronología", "Timeline"],
    ["Resumen de los viajes a Etiopia y de las personas que acompanaron cada visita.", "Resumen de los viajes a Etiopía y de las personas que acompañaron cada visita.", "Summary of the trips to Ethiopia and the people who joined each visit."],
    ["Resumen de los viajes a Etiopía y de las personas que acompañaron cada visita.", "Resumen de los viajes a Etiopía y de las personas que acompañaron cada visita.", "Summary of the trips to Ethiopia and the people who joined each visit."],
    ["Los viajes se organizan por ano y mes en una cronologia clara.", "Los viajes se organizan por año y mes en una cronología clara.", "Trips are organised by year and month in a clear timeline."],
    ["Los viajes se organizan por año y mes en una cronología clara.", "Los viajes se organizan por año y mes en una cronología clara.", "Trips are organised by year and month in a clear timeline."],
    ["Seguimiento de proyectos y firma del acuerdo para la llegada de la electricidad en Awaro.", "Seguimiento de proyectos y firma del acuerdo para la llegada de la electricidad en Awaro.", "Project follow-up and signing of the agreement to bring electricity to Awaro."],
    ["Viaje con apoyo medico y presencia de dos adolescentes, con firma de convenios y seguimiento de proyectos.", "Viaje con apoyo médico y presencia de dos adolescentes, con firma de convenios y seguimiento de proyectos.", "Trip with medical support and two teenagers present, including signing agreements and following up on projects."],
    ["Viaje con apoyo médico y presencia de dos adolescentes, con firma de convenios y seguimiento de proyectos.", "Viaje con apoyo médico y presencia de dos adolescentes, con firma de convenios y seguimiento de proyectos.", "Trip with medical support and two teenagers present, including signing agreements and following up on projects."],
    ["Desplazamiento con Javier Garcia y los voluntarios Juan Carlos Bogino y Diego Rodrigo.", "Desplazamiento con Javier García y los voluntarios Juan Carlos Bogino y Diego Rodrigo.", "Trip with Javier García and volunteers Juan Carlos Bogino and Diego Rodrigo."],
    ["Desplazamiento con Javier García y los voluntarios Juan Carlos Bogino y Diego Rodrigo.", "Desplazamiento con Javier García y los voluntarios Juan Carlos Bogino y Diego Rodrigo.", "Trip with Javier García and volunteers Juan Carlos Bogino and Diego Rodrigo."],
    ["Seguimiento de proyectos con participacion de Juan Carlos Bogino y Diego Rodrigo.", "Seguimiento de proyectos con participación de Juan Carlos Bogino y Diego Rodrigo.", "Project follow-up with the participation of Juan Carlos Bogino and Diego Rodrigo."],
    ["Seguimiento de proyectos con participación de Juan Carlos Bogino y Diego Rodrigo.", "Seguimiento de proyectos con participación de Juan Carlos Bogino y Diego Rodrigo.", "Project follow-up with the participation of Juan Carlos Bogino and Diego Rodrigo."],
    ["Viaje enfocado al proyecto Tena y a la revision del estado de los demas proyectos.", "Viaje enfocado al proyecto Tena y a la revisión del estado de los demás proyectos.", "Trip focused on the Tena project and on reviewing the status of the other projects."],
    ["Viaje enfocado al proyecto Tena y a la revisión del estado de los demás proyectos.", "Viaje enfocado al proyecto Tena y a la revisión del estado de los demás proyectos.", "Trip focused on the Tena project and on reviewing the status of the other projects."],
    ["Viaje con miembros de la organizacion y cuatro voluntarios, con actualizacion general de proyectos.", "Viaje con miembros de la organización y cuatro voluntarios, con actualización general de proyectos.", "Trip with members of the organisation and four volunteers, including a general update on projects."],
    ["Viaje con miembros de la organización y cuatro voluntarios, con actualización general de proyectos.", "Viaje con miembros de la organización y cuatro voluntarios, con actualización general de proyectos.", "Trip with members of the organisation and four volunteers, including a general update on projects."],
    ["Los desplazamientos cuentan tanto como los proyectos.", "Los desplazamientos cuentan tanto como los proyectos.", "Trips matter as much as the projects."],
    ["Son la base para evaluar necesidades, mantener vinculos y ajustar la ayuda sobre el terreno.", "Son la base para evaluar necesidades, mantener vínculos y ajustar la ayuda sobre el terreno.", "They are the basis for assessing needs, maintaining ties and adjusting support in the field."],
    ["Son la base para evaluar necesidades, mantener vínculos y ajustar la ayuda sobre el terreno.", "Son la base para evaluar necesidades, mantener vínculos y ajustar la ayuda sobre el terreno.", "They are the basis for assessing needs, maintaining ties and adjusting support in the field."],
    ["Voluntariado | Voluntarios por Africa", "Voluntariado | Voluntarios por África", "Volunteering | Volunteers for Africa"],
    ["Informacion sobre voluntariado y personas que han viajado con Voluntarios por Africa.", "Información sobre voluntariado y personas que han viajado con Voluntarios por África.", "Information about volunteering and people who have travelled with Volunteers for Africa."],
    ["Acompanarnos", "Acompañarnos", "Join us"],
    ["Acompañarnos", "Acompañarnos", "Join us"],
    ["Dos viajes al ano para seguir proyectos, convivir y evaluar nuevas necesidades.", "Dos viajes al año para seguir proyectos, convivir y evaluar nuevas necesidades.", "Two trips a year to follow up on projects, spend time together and assess new needs."],
    ["Dos viajes al año para seguir proyectos, convivir y evaluar nuevas necesidades.", "Dos viajes al año para seguir proyectos, convivir y evaluar nuevas necesidades.", "Two trips a year to follow up on projects, spend time together and assess new needs."],
    ["Cada ano Voluntarios por Africa realiza viajes a Etiopia en junio y noviembre. Si quieres acompanarnos y vivir la experiencia de ver in situ los proyectos, puedes escribir a vpa@voluntariosporafrica.org.", "Cada año Voluntarios por África realiza viajes a Etiopía en junio y noviembre. Si quieres acompañarnos y vivir la experiencia de ver in situ los proyectos, puedes escribir a vpa@voluntariosporafrica.org.", "Every year Volunteers for Africa organises trips to Ethiopia in June and November. If you want to join us and experience the projects first-hand, you can write to vpa@voluntariosporafrica.org."],
    ["Cada año Voluntarios por África realiza viajes a Etiopía en junio y noviembre. Si quieres acompañarnos y vivir la experiencia de ver in situ los proyectos, puedes escribir a vpa@voluntariosporafrica.org.", "Cada año Voluntarios por África realiza viajes a Etiopía en junio y noviembre. Si quieres acompañarnos y vivir la experiencia de ver in situ los proyectos, puedes escribir a vpa@voluntariosporafrica.org.", "Every year Volunteers for Africa organises trips to Ethiopia in June and November. If you want to join us and experience the projects first-hand, you can write to vpa@voluntariosporafrica.org."],
    ["Ver viajes", "Ver viajes", "See trips"],
    ["Enviar email", "Enviar email", "Send email"],
    ["Como participar", "Cómo participar", "How to take part"],
    ["Cómo participar", "Cómo participar", "How to take part"],
    ["Ver los proyectos, compartir espacio y ayudar con mirada humana.", "Ver los proyectos, compartir espacio y ayudar con mirada humana.", "See the projects, share space and help with a human perspective."],
    ["Aqui encontraras una explicacion del programa, el enlace a viajes y el listado de voluntarios que han viajado con la organizacion.", "Aquí encontrarás una explicación del programa, el enlace a viajes y el listado de voluntarios que han viajado con la organización.", "Here you will find an explanation of the programme, the link to trips and the list of volunteers who have travelled with the organisation."],
    ["Aquí encontrarás una explicación del programa, el enlace a viajes y el listado de voluntarios que han viajado con la organización.", "Aquí encontrarás una explicación del programa, el enlace a viajes y el listado de voluntarios que han viajado con la organización.", "Here you will find an explanation of the programme, the link to trips and the list of volunteers who have travelled with the organisation."],
    ["Voluntario", "Voluntario", "Volunteer"],
    ["Voluntaria", "Voluntaria", "Volunteer"],
    ["Una pagina orientada a accion y contexto.", "Una página orientada a acción y contexto.", "A page oriented toward action and context."],
    ["Una página orientada a acción y contexto.", "Una página orientada a acción y contexto.", "A page oriented toward action and context."],
    ["Encontraras el email de contacto, el enlace a viajes y el listado de voluntarios.", "Encontrarás el email de contacto, el enlace a viajes y el listado de voluntarios.", "You will find the contact email, the link to trips and the list of volunteers."],
    ["Encontrarás el email de contacto, el enlace a viajes y el listado de voluntarios.", "Encontrarás el email de contacto, el enlace a viajes y el listado de voluntarios.", "You will find the contact email, the link to trips and the list of volunteers."],
    ["Conocenos | Voluntarios por Africa", "Conócenos | Voluntarios por África", "About us | Volunteers for Africa"],
    ["Quienes somos, finalidad y trayectoria de Voluntarios por Africa.", "Quiénes somos, finalidad y trayectoria de Voluntarios por África.", "Who we are, purpose and trajectory of Volunteers for Africa."],
    ["Quienes somos", "Quiénes somos", "Who we are"],
    ["Quiénes somos", "Quiénes somos", "Who we are"],
    ["Una asociacion nacida de la cercania con Etiopia y del compromiso con la infancia.", "Una asociación nacida de la cercanía con Etiopía y del compromiso con la infancia.", "An association born from closeness to Ethiopia and a commitment to children."],
    ["Una asociación nacida de la cercanía con Etiopía y del compromiso con la infancia.", "Una asociación nacida de la cercanía con Etiopía y del compromiso con la infancia.", "An association born from closeness to Ethiopia and a commitment to children."],
    ["Somos un grupo de amigos que conocimos Etiopia por distintos caminos: adopcion, voluntariado o experiencias personales. Conocimos sus buenas gentes y sus ganas de vivir, pero tambien la pobreza que golpea con mas dureza a los ninos.", "Somos un grupo de amigos que conocimos Etiopía por distintos caminos: adopción, voluntariado o experiencias personales. Conocimos sus buenas gentes y sus ganas de vivir, pero también la pobreza que golpea con más dureza a los niños.", "We are a group of friends who came to know Ethiopia through different paths: adoption, volunteering and personal experiences. We discovered its generous people and their desire to live, but also the poverty that hits children hardest."],
    ["Somos un grupo de amigos que conocimos Etiopía por distintos caminos: adopción, voluntariado o experiencias personales. Conocimos sus buenas gentes y sus ganas de vivir, pero también la pobreza que golpea con más dureza a los niños.", "Somos un grupo de amigos que conocimos Etiopía por distintos caminos: adopción, voluntariado o experiencias personales. Conocimos sus buenas gentes y sus ganas de vivir, pero también la pobreza que golpea con más dureza a los niños.", "We are a group of friends who came to know Ethiopia through different paths: adoption, volunteering and personal experiences. We discovered its generous people and their desire to live, but also the poverty that hits children hardest."],
    ["Historia", "Historia", "History"],
    ["Finalidad", "Finalidad", "Purpose"],
    ["La asociacion", "La asociación", "The association"],
    ["La asociación", "La asociación", "The association"],
    ["Un poco mas de nosotros", "Un poco más de nosotros", "A little more about us"],
    ["Un poco más de nosotros", "Un poco más de nosotros", "A little more about us"],
    ["De una reaccion humana a una asociacion con proyectos amplios.", "De una reacción humana a una asociación con proyectos amplios.", "From a human reaction to an association with broad projects."],
    ["De una reacción humana a una asociación con proyectos amplios.", "De una reacción humana a una asociación con proyectos amplios.", "From a human reaction to an association with broad projects."],
    ["Un buen dia nos reunimos y decidimos hacer algo, por pequeno que fuese. Lo que al principio fue una reaccion espontanea se ha convertido en una asociacion con proyectos dirigidos a mejorar las condiciones de vida de muchas familias que luchan diariamente por mantener una vida digna.", "Un buen día nos reunimos y decidimos hacer algo, por pequeño que fuese. Lo que al principio fue una reacción espontánea se ha convertido en una asociación con proyectos dirigidos a mejorar las condiciones de vida de muchas familias que luchan diariamente por mantener una vida digna.", "One day we came together and decided to do something, however small. What began as a spontaneous reaction has become an association with projects aimed at improving the living conditions of many families who fight every day to maintain a dignified life."],
    ["Un buen día nos reunimos y decidimos hacer algo, por pequeño que fuese. Lo que al principio fue una reacción espontánea se ha convertido en una asociación con proyectos dirigidos a mejorar las condiciones de vida de muchas familias que luchan diariamente por mantener una vida digna.", "Un buen día nos reunimos y decidimos hacer algo, por pequeño que fuese. Lo que al principio fue una reacción espontánea se ha convertido en una asociación con proyectos dirigidos a mejorar las condiciones de vida de muchas familias que luchan diariamente por mantener una vida digna.", "One day we came together and decided to do something, however small. What began as a spontaneous reaction has become an association with projects aimed at improving the living conditions of many families who fight every day to maintain a dignified life."],
    ["Colabora con nosotros", "Colabora con nosotros", "Work with us"],
    ["La ayuda se disena para durar.", "La ayuda se diseña para durar.", "Support is designed to last."],
    ["La ayuda se diseña para durar.", "La ayuda se diseña para durar.", "Support is designed to last."],
    ["Nuestro enfoque no es asistencialista. Buscamos que cada intervencion tenga un horizonte de autonomia, sostenibilidad y acompanamiento real.", "Nuestro enfoque no es asistencialista. Buscamos que cada intervención tenga un horizonte de autonomía, sostenibilidad y acompañamiento real.", "Our approach is not welfare-based. We aim for every intervention to have a horizon of autonomy, sustainability and real support."],
    ["Nuestro enfoque no es asistencialista. Buscamos que cada intervención tenga un horizonte de autonomía, sostenibilidad y acompañamiento real.", "Nuestro enfoque no es asistencialista. Buscamos que cada intervención tenga un horizonte de autonomía, sostenibilidad y acompañamiento real.", "Our approach is not welfare-based. We aim for every intervention to have a horizon of autonomy, sustainability and real support."],
    ["Nuestra finalidad", "Nuestra finalidad", "Our purpose"],
    ["Atender necesidades basicas para construir autonomia y sostenibilidad.", "Atender necesidades básicas para construir autonomía y sostenibilidad.", "Address basic needs to build autonomy and sustainability."],
    ["Atender necesidades básicas para construir autonomía y sostenibilidad.", "Atender necesidades básicas para construir autonomía y sostenibilidad.", "Address basic needs to build autonomy and sustainability."],
    ["Objetivo", "Objetivo", "Objective"],
    ["Vida digna", "Vida digna", "Dignified life"],
    ["Atender necesidades basicas de poblaciones que no las tienen cubiertas mediante programas sanitarios, educativos, alimentarios, de infraestructura y autogestion.", "Atender necesidades básicas de poblaciones que no las tienen cubiertas mediante programas sanitarios, educativos, alimentarios, de infraestructura y autogestión.", "Address the basic needs of populations that do not have them covered through health, education, food, infrastructure and self-management programmes."],
    ["Atender necesidades básicas de poblaciones que no las tienen cubiertas mediante programas sanitarios, educativos, alimentarios, de infraestructura y autogestión.", "Atender necesidades básicas de poblaciones que no las tienen cubiertas mediante programas sanitarios, educativos, alimentarios, de infraestructura y autogestión.", "Address the basic needs of populations that do not have them covered through health, education, food, infrastructure and self-management programmes."],
    ["Metodo", "Método", "Method"],
    ["Método", "Método", "Method"],
    ["Autonomia", "Autonomía", "Autonomy"],
    ["Autonomía", "Autonomía", "Autonomy"],
    ["El objetivo final es que las comunidades ganen capacidad para sostenerse por si mismas, con intervenciones pensadas para no depender siempre de ayuda externa.", "El objetivo final es que las comunidades ganen capacidad para sostenerse por sí mismas, con intervenciones pensadas para no depender siempre de ayuda externa.", "The ultimate goal is for communities to gain the ability to sustain themselves, with interventions designed so they do not always depend on outside help."],
    ["El objetivo final es que las comunidades ganen capacidad para sostenerse por sí mismas, con intervenciones pensadas para no depender siempre de ayuda externa.", "El objetivo final es que las comunidades ganen capacidad para sostenerse por sí mismas, con intervenciones pensadas para no depender siempre de ayuda externa.", "The ultimate goal is for communities to gain the ability to sustain themselves, with interventions designed so they do not always depend on outside help."],
    ["Enfoque", "Enfoque", "Focus"],
    ["Infancia", "Infancia", "Childhood"],
    ["La proteccion de ninos, madres y familias vulnerables atraviesa toda la accion de la asociacion, desde la salud hasta la escolaridad.", "La protección de niños, madres y familias vulnerables atraviesa toda la acción de la asociación, desde la salud hasta la escolaridad.", "The protection of children, mothers and vulnerable families runs through the whole action of the association, from health to schooling."],
    ["La protección de niños, madres y familias vulnerables atraviesa toda la acción de la asociación, desde la salud hasta la escolaridad.", "La protección de niños, madres y familias vulnerables atraviesa toda la acción de la asociación, desde la salud hasta la escolaridad.", "The protection of children, mothers and vulnerable families runs through the whole action of the association, from health to schooling."],
    ["Necesidades basicas", "Necesidades básicas", "Basic needs"],
    ["Necesidades básicas", "Necesidades básicas", "Basic needs"],
    ["Las dimensiones humanas que guian el trabajo.", "Las dimensiones humanas que guían el trabajo.", "The human dimensions that guide the work."],
    ["Las dimensiones humanas que guían el trabajo.", "Las dimensiones humanas que guían el trabajo.", "The human dimensions that guide the work."],
    ["Participacion", "Participación", "Participation"],
    ["Participación", "Participación", "Participation"],
    ["Creacion", "Creación", "Creation"],
    ["Creación", "Creación", "Creation"],
    ["Libertad", "Libertad", "Freedom"],
    ["La colaboracion comenzo en 2010 a nivel particular con proyectos en Etiopia. El 15 de mayo de 2014 se constituyo oficialmente la asociacion y quedo registrada en el Registro General de Asociaciones Espanola con numero 605776 el 7 de julio de 2014.", "La colaboración comenzó en 2010 a nivel particular con proyectos en Etiopía. El 15 de mayo de 2014 se constituyó oficialmente la asociación y quedó registrada en el Registro General de Asociaciones Española con número 605776 el 7 de julio de 2014.", "Collaboration began in 2010 on a personal level with projects in Ethiopia. On 15 May 2014 the association was officially established and was entered in the Spanish General Register of Associations under number 605776 on 7 July 2014."],
    ["La colaboración comenzó en 2010 a nivel particular con proyectos en Etiopía. El 15 de mayo de 2014 se constituyó oficialmente la asociación y quedó registrada en el Registro General de Asociaciones Española con número 605776 el 7 de julio de 2014.", "La colaboración comenzó en 2010 a nivel particular con proyectos en Etiopía. El 15 de mayo de 2014 se constituyó oficialmente la asociación y quedó registrada en el Registro General de Asociaciones Española con número 605776 el 7 de julio de 2014.", "Collaboration began in 2010 on a personal level with projects in Ethiopia. On 15 May 2014 the association was officially established and was entered in the Spanish General Register of Associations under number 605776 on 7 July 2014."],
    ["La delegacion principal esta en Madrid, en C/ Sarre 17 - esc1 2B - 28032. Desde julio de 2017 constan nuevas delegaciones en Cantabria y Valencia.", "La delegación principal está en Madrid, en C/ Sarre 17 - esc1 2B - 28032. Desde julio de 2017 constan nuevas delegaciones en Cantabria y Valencia.", "The main branch is in Madrid, at C/ Sarre 17 - esc1 2B - 28032. Since July 2017, new branches have been registered in Cantabria and Valencia."],
    ["La delegación principal está en Madrid, en C/ Sarre 17 - esc1 2B - 28032. Desde julio de 2017 constan nuevas delegaciones en Cantabria y Valencia.", "La delegación principal está en Madrid, en C/ Sarre 17 - esc1 2B - 28032. Desde julio de 2017 constan nuevas delegaciones en Cantabria y Valencia.", "The main branch is in Madrid, at C/ Sarre 17 - esc1 2B - 28032. Since July 2017, new branches have been registered in Cantabria and Valencia."],
    ["Siguiente paso", "Siguiente paso", "Next step"],
    ["Conoce donde intervenimos, como nos financiamos y la documentacion publica.", "Conoce dónde intervenimos, cómo nos financiamos y la documentación pública.", "See where we work, how we are funded and the public documentation."],
    ["Conoce dónde intervenimos, cómo nos financiamos y la documentación pública.", "Conoce dónde intervenimos, cómo nos financiamos y la documentación pública.", "See where we work, how we are funded and the public documentation."],
    ["Diseno nuevo, misma base humana y mismos accesos utiles.", "Diseño nuevo, misma base humana y mismos accesos útiles.", "New design, same human foundation and same useful access points."],
    ["Diseño nuevo, misma base humana y mismos accesos útiles.", "Diseño nuevo, misma base humana y mismos accesos útiles.", "New design, same human foundation and same useful access points."],
    ["La informacion de esta pagina se ha reorganizado para hacerla mas clara sin cambiar su contenido esencial.", "La información de esta página se ha reorganizado para hacerla más clara sin cambiar su contenido esencial.", "The information on this page has been reorganised to make it clearer without changing its essential content."],
    ["La información de esta página se ha reorganizado para hacerla más clara sin cambiar su contenido esencial.", "La información de esta página se ha reorganizado para hacerla más clara sin cambiar su contenido esencial.", "The information on this page has been reorganised to make it clearer without changing its essential content."],
    ["Haz un donativo | Voluntarios por África", "Haz un donativo | Voluntarios por África", "Make a donation | Volunteers for Africa"],
    ["Información para realizar un donativo a Voluntarios por África por transferencia bancaria o PayPal.", "Información para realizar un donativo a Voluntarios por África por transferencia bancaria o PayPal.", "Information on how to make a donation to Volunteers for Africa by bank transfer or PayPal."],
    ["Ayúdanos a continuar con nuestras labores. Desde el 12 de septiembre de 2019, Voluntarios por África es una Asociación de Utilidad Pública, lo que supone un reconocimiento social a la labor de la organización y la posibilidad de acogerse a beneficios fiscales.", "Ayúdanos a continuar con nuestras labores. Desde el 12 de septiembre de 2019, Voluntarios por África es una Asociación de Utilidad Pública, lo que supone un reconocimiento social a la labor de la organización y la posibilidad de acogerse a beneficios fiscales.", "Help us continue our work. Since 12 September 2019, Volunteers for Africa has been recognised as a Public-Interest Association, a social acknowledgement of the organisation's work and a status that enables tax benefits."],
    ["Dos formas de hacer tu donativo", "Dos formas de hacer tu donativo", "Two ways to donate"],
    ["Elige la opción que mejor te venga.", "Elige la opción que mejor te venga.", "Choose the option that suits you best."],
    ["Transferencia bancaria", "Transferencia bancaria", "Bank transfer"],
    ["Ingreso por transferencia bancaria", "Ingreso por transferencia bancaria", "Donation by bank transfer"],
    ["Beneficiario:", "Beneficiario:", "Beneficiary:"],
    ["Número de cuenta:", "Número de cuenta:", "Account number:"],
    ["Si necesitas justificar la aportación o resolver cualquier duda, puedes escribirnos desde la página de contacto.", "Si necesitas justificar la aportación o resolver cualquier duda, puedes escribirnos desde la página de contacto.", "If you need proof of your donation or have any questions, you can write to us through the contact page."],
    ["PayPal", "PayPal", "PayPal"],
    ["Ingreso por PayPal", "Ingreso por PayPal", "Donation by PayPal"],
    ["Puedes realizar tu aportación desde PayPal utilizando ese correo como destinatario del donativo.", "Puedes realizar tu aportación desde PayPal utilizando ese correo como destinatario del donativo.", "You can make your contribution through PayPal using that email address as the donation recipient."],
    ["Esta vía permite realizar la aportación online utilizando el correo indicado como beneficiario.", "Esta vía permite realizar la aportación online utilizando el correo indicado como beneficiario.", "This option allows you to make the contribution online using the email shown as the beneficiary."],
    ["Abrir PayPal", "Abrir PayPal", "Open PayPal"],
    ["Beneficios fiscales", "Beneficios fiscales", "Tax benefits"],
    ["Asociación de Utilidad Pública", "Asociación de Utilidad Pública", "Public-Interest Association"],
    ["Desde el 12 de septiembre, Voluntarios por África es una Asociación de Utilidad Pública, BOE núm. 219, de 12 de septiembre de 2019. Esto permite acogerse a una serie de beneficios fiscales vinculados a cuotas y donaciones.", "Desde el 12 de septiembre, Voluntarios por África es una Asociación de Utilidad Pública, BOE núm. 219, de 12 de septiembre de 2019. Esto permite acogerse a una serie de beneficios fiscales vinculados a cuotas y donaciones.", "Since 12 September, Volunteers for Africa has been a Public-Interest Association, Official Gazette no. 219, dated 12 September 2019. This allows access to a number of tax benefits linked to fees and donations."],
    ["El cuadro de desgravaciones vigente se muestra en esta información para facilitar la consulta de cuotas y donaciones.", "El cuadro de desgravaciones vigente se muestra en esta información para facilitar la consulta de cuotas y donaciones.", "The current tax deduction table is shown here to make it easier to check fees and donations."],
    ["Desgravación", "Desgravación", "Tax relief"],
    ["Consulta el cuadro vigente", "Consulta el cuadro vigente", "See the current table"],
    ["Cuadro de desgravación de cuotas y donaciones", "Cuadro de desgravación de cuotas y donaciones", "Tax relief table for fees and donations"],
    ["12 de septiembre de 2019", "12 de septiembre de 2019", "12 September 2019"],
    ["Reconocimiento oficial", "Reconocimiento oficial", "Official recognition"],
    ["Resolución del Ministerio del Interior por la que la asociación queda declarada de utilidad pública.", "Resolución del Ministerio del Interior por la que la asociación queda declarada de utilidad pública.", "Resolution of the Ministry of the Interior declaring the association to be of public interest."],
    ["Donación directa", "Donación directa", "Direct donation"],
    ["Vía pensada para aportaciones bancarias con el beneficiario y el IBAN identificados con claridad.", "Vía pensada para aportaciones bancarias con el beneficiario y el IBAN identificados con claridad.", "A route designed for bank contributions with the beneficiary and IBAN clearly identified."],
    ["Donación online", "Donación online", "Online donation"],
    ["La vía digital indicada por la asociación se gestiona con el correo vpa@voluntariosporafrica.org.", "La vía digital indicada por la asociación se gestiona con el correo vpa@voluntariosporafrica.org.", "The digital route indicated by the association is managed through the email vpa@voluntariosporafrica.org."],
    ["Sigue la actividad de la asociación", "Sigue la actividad de la asociación", "Follow the association's activity"],
    ["Donativos", "Donativos", "Donations"],
    ["Colaborar también es sostener la continuidad de los proyectos.", "Colaborar también es sostener la continuidad de los proyectos.", "Supporting us also means sustaining the continuity of projects."],
    ["Aquí tienes reunidas las dos vías de aportación y la información fiscal necesaria para donar con claridad.", "Aquí tienes reunidas las dos vías de aportación y la información fiscal necesaria para donar con claridad.", "Here you have the two donation routes together with the tax information needed to donate clearly."],
    ["Escribenos", "Escríbenos", "Write to us"],
    ["Escríbenos", "Escríbenos", "Write to us"]
  ];

  const spanishMap = new Map(entries.map(([source, normalized]) => [source, normalized]));
  const englishMap = new Map(entries.map(([, normalized, english]) => [normalized, english]));
  const englishOnlyLinks = new Set(["English", "Inglés"]);
  const monthMap = new Map([
    ["enero", "January"],
    ["febrero", "February"],
    ["marzo", "March"],
    ["abril", "April"],
    ["mayo", "May"],
    ["junio", "June"],
    ["julio", "July"],
    ["agosto", "August"],
    ["septiembre", "September"],
    ["octubre", "October"],
    ["noviembre", "November"],
    ["diciembre", "December"]
  ]);

  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  const params = new URLSearchParams(window.location.search);
  const isEnglish = params.get("lang") === "en";

  function translateDynamicSpanish(value) {
    const yearlyNewsMatch = value.match(/^Noticias\s+(\d{4})$/i);
    if (yearlyNewsMatch) {
      return `${yearlyNewsMatch[1]} News`;
    }

    const yearlyEventsMatch = value.match(/^Eventos\s+(\d{4})$/i);
    if (yearlyEventsMatch) {
      return `${yearlyEventsMatch[1]} Events`;
    }

    const monthlyNewsMatch = value.match(/^Noticias\s+([A-Za-zÁÉÍÓÚáéíóúÑñ]+)\s+(\d{4})$/i);
    if (monthlyNewsMatch) {
      const month = monthMap.get(monthlyNewsMatch[1].toLowerCase()) || monthlyNewsMatch[1];
      return `${month} ${monthlyNewsMatch[2]} News`;
    }

    return value;
  }

  function localizeValue(value) {
    const normalized = spanishMap.get(value) || value;
    if (!isEnglish) {
      return normalized;
    }

    return englishMap.get(normalized) || translateDynamicSpanish(normalized);
  }

  function localizeTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }

        if (node.parentElement && ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    for (const node of nodes) {
      const original = node.nodeValue;
      const trimmed = original.trim();
      const localized = localizeValue(trimmed);
      if (localized !== trimmed) {
        node.nodeValue = original.replace(trimmed, localized);
      }
    }
  }

  function localizeAttributes() {
    const attributes = ["alt", "title", "placeholder", "aria-label", "content"];
    const elements = document.querySelectorAll("*");

    for (const element of elements) {
      for (const attribute of attributes) {
        if (!element.hasAttribute(attribute)) {
          continue;
        }

        const value = element.getAttribute(attribute);
        if (!value) {
          continue;
        }

        const localized = localizeValue(value);
        if (localized !== value) {
          element.setAttribute(attribute, localized);
        }
      }
    }

    document.title = localizeValue(document.title);
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", localizeValue(description.getAttribute("content") || ""));
    }
    document.documentElement.lang = isEnglish ? "en" : "es";
  }

  function localizeCustomContent() {
    if (!isEnglish) {
      return;
    }

    const customTextElements = document.querySelectorAll("[data-en]");
    for (const element of customTextElements) {
      element.textContent = element.getAttribute("data-en") || element.textContent;
    }

    const attributePairs = [
      ["data-en-alt", "alt"],
      ["data-en-title", "title"],
      ["data-en-placeholder", "placeholder"],
      ["data-en-aria-label", "aria-label"],
      ["data-en-content", "content"]
    ];

    for (const [sourceAttribute, targetAttribute] of attributePairs) {
      const elements = document.querySelectorAll(`[${sourceAttribute}]`);
      for (const element of elements) {
        element.setAttribute(targetAttribute, element.getAttribute(sourceAttribute) || "");
      }
    }
  }

  function addEnglishParam(href) {
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return href;
    }

    if (/^https?:/i.test(href)) {
      return href;
    }

    if (!href.includes(".html")) {
      return href;
    }

    const [path, hash] = href.split("#");
    const joiner = path.includes("?") ? "&" : "?";
    const localizedHref = path.includes("lang=en") ? path : `${path}${joiner}lang=en`;
    return hash ? `${localizedHref}#${hash}` : localizedHref;
  }

  function rewriteLinks() {
    const anchors = document.querySelectorAll("a[href]");
    const selfEnglishHref = `${currentFile}?lang=en`;

    for (const anchor of anchors) {
      const href = anchor.getAttribute("href") || "";
      const label = anchor.textContent.trim();

      if (href.includes("voluntariosporafrica.org/en/") || englishOnlyLinks.has(label)) {
        anchor.setAttribute("href", selfEnglishHref);
        anchor.removeAttribute("target");
        anchor.removeAttribute("rel");
        anchor.textContent = isEnglish ? "English" : "English";
        continue;
      }

      if (isEnglish) {
        const localizedHref = addEnglishParam(href);
        if (localizedHref !== href) {
          anchor.setAttribute("href", localizedHref);
        }
      }
    }
  }

  localizeTextNodes();
  localizeAttributes();
  localizeCustomContent();
  rewriteLinks();
})();