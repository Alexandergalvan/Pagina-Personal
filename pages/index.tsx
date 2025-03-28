import Head from 'next/head'
import { FC } from 'react'
import { FaGraduationCap, FaEnvelope, FaLinkedin, FaBriefcase, FaAward, FaUserGraduate, FaChalkboardTeacher, FaLaptop, FaUsers } from 'react-icons/fa'

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <Head>
        <title>Irasema Sarahi Alvarez Vazquez - Portafolio Personal</title>
        <meta name="description" content="Portafolio profesional de Irasema Sarahi Alvarez Vazquez - Estudiante de Mercadotecnia y Administración, especializada en estrategias de marketing digital y gestión empresarial" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex space-x-8 justify-center">
            <li><a href="#inicio" className="text-gray-600 hover:text-primary-600 transition-colors">Inicio</a></li>
            <li><a href="#biografia" className="text-gray-600 hover:text-primary-600 transition-colors">Biografía</a></li>
            <li><a href="#logros" className="text-gray-600 hover:text-primary-600 transition-colors">Logros</a></li>
            <li><a href="#contacto" className="text-gray-600 hover:text-primary-600 transition-colors">Contacto</a></li>
            <li><a href="#blog" className="text-gray-600 hover:text-primary-600 transition-colors">Blog</a></li>
            <li><a href="#proyectos" className="text-gray-600 hover:text-primary-600 transition-colors">Proyectos</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Sección de Inicio */}
        <section id="inicio" className="mb-16 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Irasema Sarahi Alvarez Vazquez
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Mi nombre es Irasema Sarahi Alvarez Vazquez, soy estudiante de Mercadotecnia y Administración, especializada en estrategias de marketing digital y gestión empresarial.
                </p>
                  <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">Educación Superior</span>
                  <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">Investigación Educativa</span>
                  <span className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">Desarrollo Académico</span>
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 p-8">
                <div className="h-80 bg-white/10 rounded-lg flex items-center justify-center">
                  <img 
                    src="/foto.jpg" 
                    alt="Irasema Sarahi Alvarez Vazquez" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Biografía */}
        <section id="biografia" className="mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Biografía</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="prose lg:prose-xl mx-auto">
              <p className="text-gray-600 leading-relaxed">
                Naci el 22 de mayi del 2003 en la ciudad de Valle Hermoso, Tamaulipas, Tengo 21 años, soy la menor de 3 hermanas.
                </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Mi familia es muy importante para mi, me encanta pasar tiempo con ellos.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Actualmente estoy cursando la carrera de Mercadotecnia y Administración en la Universidad Multidisciplinaria Valle Hermoso (UAMVH), donde he desarrollado habilidades en estrategias de marketing digital, análisis de mercado y gestión empresarial. Mi pasión por el marketing me ha llevado a participar en diversos proyectos académicos y extracurriculares que han enriquecido mi formación profesional.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Habilidades Principales</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Marketing Digital</li>
                    <li>Gestión de Proyectos</li>
                    <li>Análisis de Mercado</li>
                    <li>Desarrollo de Estrategias</li>
                  </ul>
                </div>
                <div className="border-l-4 border-secondary-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Áreas de Interés</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Marketing Digital</li>
                    <li>Gestión de Proyectos</li>
                    <li>Análisis de Mercado</li>
                    <li>Desarrollo de Estrategias</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Logros */}
        <section id="logros" className="mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Logros Académicos</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaUserGraduate className="text-4xl text-primary-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Preparatoria</h3>
                  <p className="text-gray-600">Universidad Multidisciplinaria Valle Hermoso (UAMVH)</p>
                  <p className="text-gray-600">Mercadotecnia y Administración</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaUserGraduate className="text-4xl text-primary-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Licenciatura</h3>
                  <p className="text-gray-600">Universidad Multidisciplinaria Valle Hermoso (UAMVH)</p>
                  <p className="text-gray-600">Mercadotecnia y Administración</p>
                </div>
              </div>
              </div>
          </div>
        </section>

        {/* Sección de Blog */}
        <section id="blog" className="mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Innovación en Metodologías de Enseñanza</h3>
                <p className="text-gray-600 mb-4">Un análisis profundo de las últimas tendencias en metodologías educativas y su impacto en el aprendizaje. Explorando nuevas formas de enseñanza y evaluación.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Educación</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Innovación</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Evaluación del Aprendizaje</h3>
                <p className="text-gray-600 mb-4">Estrategias efectivas para la evaluación del aprendizaje en educación superior. Incluye casos de estudio y herramientas prácticas para la evaluación.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Evaluación</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">Educación Superior</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Proyectos */}
        <section id="proyectos" className="mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Investigación Educativa</h3>
                <p className="text-gray-600 mb-4">Estudio sobre la efectividad de diferentes metodologías de enseñanza en educación superior.</p>
                <ul className="text-gray-600 list-disc list-inside text-sm">
                  <li>Análisis de metodologías innovadoras</li>
                  <li>Evaluación de resultados de aprendizaje</li>
                  <li>Recomendaciones para la práctica docente</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Desarrollo Curricular</h3>
                <p className="text-gray-600 mb-4">Diseño e implementación de programas académicos innovadores en educación superior.</p>
                <ul className="text-gray-600 list-disc list-inside text-sm">
                  <li>Diseño de planes de estudio</li>
                  <li>Integración de tecnologías educativas</li>
                  <li>Evaluación de programas académicos</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Plan de Negocios E-commerce</h3>
                <p className="text-gray-600 mb-4">Desarrollo de un plan de negocios completo para una startup de e-commerce en el sector de moda sostenible.</p>
                <ul className="text-gray-600 list-disc list-inside text-sm">
                  <li>Análisis de viabilidad financiera</li>
                  <li>Estrategia de penetración de mercado</li>
                  <li>Plan de marketing digital integrado</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Contacto */}
        <section id="contacto" className="mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Contacto</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
              <a href="mailto:irasema.alvarez@email.com" className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors group">
                <FaEnvelope className="text-3xl group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium">Email</p>
                  <span className="text-sm">irasema.alvarez@email.com</span>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors group">
                <FaLinkedin className="text-3xl group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <span className="text-sm">Perfil Profesional</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Navegación</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="hover:text-primary-300 transition-colors">Inicio</a></li>
                <li><a href="#biografia" className="hover:text-primary-300 transition-colors">Biografía</a></li>
                <li><a href="#logros" className="hover:text-primary-300 transition-colors">Logros</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaEnvelope />
                  <span>irasema.alvarez@email.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-primary-300 transition-colors"><FaLinkedin /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Irasema Sarahi Alvarez Vazquez. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home 