import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">AWG</div>
            <div className="hidden md:flex space-x-4 items-center">
              <a href="#home" className="hover:text-gray-300 transition-colors whitespace-nowrap">Главная</a>
              <span className="text-gray-500">/</span>
              <a href="#clients" className="hover:text-gray-300 transition-colors whitespace-nowrap">Клиенты</a>
              <span className="text-gray-500">/</span>
              <a href="#achievements" className="hover:text-gray-300 transition-colors whitespace-nowrap">Достижения</a>
              <span className="text-gray-500">/</span>
              <a href="#technologies" className="hover:text-gray-300 transition-colors whitespace-nowrap">Технологии</a>
              <span className="text-gray-500">/</span>
              <a href="#process" className="hover:text-gray-300 transition-colors whitespace-nowrap">Этапы работы</a>
              <span className="text-gray-500">/</span>
              <a href="#team" className="hover:text-gray-300 transition-colors whitespace-nowrap">Команда</a>
              <span className="text-gray-500">/</span>
              <a href="#cases" className="hover:text-gray-300 transition-colors whitespace-nowrap">Кейсы</a>
              <span className="text-gray-500">/</span>
              <a href="#contacts" className="hover:text-gray-300 transition-colors whitespace-nowrap">Контакты</a>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(/img/a9c90a9f-37cc-4795-92ea-3a6d62696147.jpg)` }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="text-sm text-gray-400 mb-4">01</div>
          <div className="w-full h-px bg-white mb-8"></div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Next level IT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Разрабатываем и внедряем сложные проекты для крупного бизнеса
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-400 mb-4">02</div>
          <div className="w-full h-px bg-white mb-12"></div>
          <h2 className="text-2xl mb-16">Команда и проекты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-black p-8 rounded-lg">
              <div className="text-6xl font-bold mb-4 whitespace-nowrap">40+</div>
              <p className="text-gray-300">компаний из рейтинга РБК&nbsp;500</p>
            </div>
            <div className="bg-black p-8 rounded-lg">
              <div className="text-6xl font-bold mb-4 whitespace-nowrap">22&nbsp;000+</div>
              <p className="text-gray-300">ИТ-специалистов в партнерской сети SkillStaff из РФ и&nbsp;СНГ</p>
            </div>
            <div className="bg-black p-8 rounded-lg">
              <div className="text-6xl font-bold mb-4 whitespace-nowrap">400+</div>
              <p className="text-gray-300">реализованных проектов</p>
            </div>
            <div className="bg-black p-8 rounded-lg">
              <div className="text-6xl font-bold mb-4 whitespace-nowrap">10</div>
              <p className="text-gray-300">лет экспертизы ИТ в сфере ритейла</p>
            </div>
          </div>

          <p className="text-3xl md:text-4xl max-w-4xl">
            Разрабатываем и&nbsp;внедряем сложные проекты для&nbsp;крупного бизнеса.
          </p>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-600 mb-4">03</div>
          <div className="w-full h-px bg-black mb-12"></div>
          <h2 className="text-2xl mb-16">Сектора и клиенты</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4">Ритейл</h3>
              <h3 className="text-xl font-bold mb-4">Промышленность и производство</h3>
              <h3 className="text-xl font-bold mb-4">Финансовый</h3>
              <p className="text-gray-500">Страхование</p>
              <p className="text-gray-500">Транспорт и туризм</p>
            </div>
            <div>
              <p className="text-gray-500">IT-компании</p>
              <p className="text-gray-500">Недвижимость и строительство</p>
              <p className="text-gray-500">Банкинг</p>
              <p className="text-gray-500">Государственный</p>
              <p className="text-gray-500">Гостинично-ресторанный</p>
            </div>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-center font-bold">HOFF</div>
            <div className="bg-red-600 text-white px-4 py-2 rounded-full text-center font-bold">М.ВИДЕО</div>
            <div className="bg-gray-200 px-4 py-2 rounded-full text-center">Леруа Мерлен</div>
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-center font-bold">СБЕР</div>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-center font-bold">ВТБ</div>
            <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-center font-bold">DNS</div>
            <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-center font-bold">OZON</div>
            <div className="bg-red-600 text-white px-4 py-2 rounded-full text-center font-bold">МТС</div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-600 mb-4">04</div>
          <div className="w-full h-px bg-black mb-12"></div>
          <h2 className="text-2xl mb-16">Достижения</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4">
                <li>ТОП-5 премии Tagline Awards 2023 в пяти номинациях</li>
                <li>35 место в рейтинге CNews крупнейших поставщиков ИТ в розницу 2024</li>
                <li>ТОП-100 лучших ИТ-работодателей в рейтинге от HH.ru</li>
                <li>ТОП-15 рейтинга Хабр Карьера</li>
                <li>1 место рейтинга Рунета 2024 Диджитал-подрядчик крупнейших компаний по консалтингу</li>
                <li>1 место рейтинга Рунета 2024 Разработчик интернет-магазинов для отраслей «Украшения» и «Мебель»</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li>ТОП-5 рейтинга Рунета 2024 Поддержка и развитие сайтов в сфере электронной коммерции</li>
                <li>1 место конкурса «Золотой Сайт» Сервис, портал в области строительства и недвижимости</li>
                <li>2 место в Кубковом рейтинге диджитал-интеграторов 2024</li>
                <li>2 место премии Ruward Award 2025 Отраслевая экспертиза/электронная коммерция</li>
                <li>4-х кратный обладатель премии «Большой оборот»</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <ul className="space-y-4">
              <li>Член Российской ассоциации электронных коммуникаций</li>
              <li>Член Ассоциации менеджеров России</li>
              <li>Авторы ИТ-курсов Skillbox</li>
              <li>Аккредитация Минкомсвязи РФ</li>
              <li>Резидент Сколково</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-400 mb-4">09</div>
          <div className="w-full h-px bg-white mb-12"></div>
          <h2 className="text-2xl mb-16">Технология</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Icon name="Settings" size={40} className="mb-6 text-teal-400" />
              <h3 className="text-2xl mb-6">Процессы</h3>
              <p className="text-gray-300">
                Полное курирование со стороны AWG — на всех этапах. Формализуем бизнес-процессы с учетом специфики бизнеса. Комплексно подходим к анализу архитектуры. Настройка и управление всеми бизнес-процессами, связанными с разработкой ПО и ИТ-проектов.
              </p>
            </div>
            <div>
              <Icon name="Monitor" size={40} className="mb-6 text-teal-400" />
              <h3 className="text-2xl mb-6">Формат работы</h3>
              <p className="text-gray-300">
                Итеративный результат в процессе реализации проекта. Работа по гибридной модели в оптимальном сочетании аутстафа (на территории заказчика) и проектной работы. Возможна комбинация сотрудников заказчика и исполнителей с управлением на стороне AWG. Управление всеми проектами через Atlassian (JIRA+Confluence).
              </p>
            </div>
            <div>
              <Icon name="Users" size={40} className="mb-6 text-teal-400" />
              <h3 className="text-2xl mb-6">Обмен знаниями с клиентом</h3>
              <p className="text-gray-300">
                Обучение внутренних сотрудников клиента и передача им необходимых компетенций. Оценка знаний внутренних сотрудников и формирование ИПР для них.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-6xl font-bold mb-8">Гарантия на выполненные работы до 12 мес.</h3>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-black relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(/img/e5e03644-9e1b-41df-b16a-e360844f81f8.jpg)` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-sm text-gray-400 mb-4">07</div>
          <div className="w-full h-px bg-white mb-12"></div>
          <h2 className="text-6xl font-bold mb-16">Этапы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/80 p-8 rounded-lg backdrop-blur">
              <Icon name="FileText" size={40} className="mb-6 text-teal-400" />
              <h3 className="text-2xl mb-6">Входные данные</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Цели</li>
                <li>Бизнес-задачи</li>
                <li>Проблемы</li>
                <li>Бюджет</li>
                <li>Сроки</li>
                <li>Технологический стек</li>
                <li>Целевой результат</li>
              </ul>
            </div>
            <div className="bg-black/80 p-8 rounded-lg backdrop-blur">
              <Icon name="Search" size={40} className="mb-6 text-teal-400" />
              <h3 className="text-2xl mb-6">Подготовка</h3>
              <ul className="text-gray-300 space-y-2">
                <li>UX-аудит</li>
                <li>Аудит кода</li>
                <li>Аудит архитектуры</li>
                <li>Аудит процессов разработки</li>
                <li>Аудит компетенций</li>
                <li>Разработка дорожной карты</li>
                <li>Согласование</li>
              </ul>
            </div>
            <div className="bg-black/80 p-8 rounded-lg backdrop-blur">
              <Icon name="Code" size={40} className="mb-6 text-teal-400" />
              <h3 className="text-2xl mb-6">Реализация</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Переработка IT-архитектуры</li>
                <li>Разработка инициатив и задач</li>
                <li>Исправление ошибок</li>
                <li>Адаптация продукта под нагрузки</li>
                <li>Рефакторинг</li>
                <li>Отчетность</li>
                <li>Документация</li>
              </ul>
            </div>
            <div className="bg-black/80 p-8 rounded-lg backdrop-blur">
              <Icon name="Heart" size={40} className="mb-6 text-teal-400" />
              <h3 className="text-2xl mb-6">Сопровождение</h3>
              <ul className="text-gray-300 space-y-2">
                <li>SLA</li>
                <li>Поддержка 24/7</li>
                <li>Реагирование на проблемы</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-400 mb-4">16</div>
          <div className="w-full h-px bg-white mb-12"></div>
          <h2 className="text-2xl mb-16">Команда и проекты</h2>
          
          <div className="mb-16">
            <div className="text-6xl font-bold mb-8 max-w-4xl">
              "Мы всегда начинаем с погружения в бизнес клиента и предлагаем лучшие, работающие именно для него, решения"
            </div>
            <p className="text-xl text-gray-400">Никита Шабашкевич, совладелец AWG</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">Александр Хачиян</h3>
              <p className="text-gray-400 mb-4">Founder AWG</p>
              <p className="text-gray-400">+7 929 650 05 01</p>
              <p className="text-gray-400">a@awg.ru</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">Никита Шабашкевич</h3>
              <p className="text-gray-400 mb-4">Совладелец AWG</p>
              <p className="text-gray-400">+7 929 650 05 01</p>
              <p className="text-gray-400">nikita@awg.ru</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">Станислав Пятецкий</h3>
              <p className="text-gray-400 mb-4">CEO ИТ-интегратора AWG</p>
              <p className="text-gray-400">+7 929 650 05 01</p>
              <p className="text-gray-400">spyateckij@awg.ru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-400 mb-4">17</div>
          <div className="w-full h-px bg-white mb-12"></div>
          <h2 className="text-2xl mb-8">Кейсы и клиенты</h2>
          <h3 className="text-6xl font-bold mb-16">Основные кейсы и клиенты</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900"></div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-white">Лемана ПРО</h4>
                <p className="text-gray-400">35 сотрудников AWG работают на территории Лемана ПРО как аутстаф-специалисты</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-700 to-red-900"></div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-white">Альфа-банк</h4>
                <p className="text-gray-400">AWG сотрудничает с Альфа-банком последние 5 лет</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-700 to-blue-900"></div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-white">Спортмастер</h4>
                <p className="text-gray-400">Разработка нового интернет-магазина</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4 items-center opacity-60">
            <div className="text-white text-xs text-center">Леруа</div>
            <div className="text-white text-xs text-center">М.ВИДЕО</div>
            <div className="text-white text-xs text-center">ВТБ</div>
            <div className="text-white text-xs text-center">МТС</div>
            <div className="text-white text-xs text-center">СБЕР</div>
            <div className="text-white text-xs text-center">DNS</div>
            <div className="text-white text-xs text-center">HOFF</div>
            <div className="text-white text-xs text-center">OZON</div>
            <div className="text-white text-xs text-center">ВЭБ</div>
            <div className="text-white text-xs text-center">Аcer</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-400 mb-4">02</div>
          <div className="w-full h-px bg-white mb-12"></div>
          <h2 className="text-6xl font-bold mb-16">next level IT</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-3xl font-bold mb-2">Александр Хачиян</h3>
              <p className="text-gray-400 mb-6">Founder AWG</p>
              <p className="text-gray-400 mb-2">+7 929 650 05 01</p>
              <p className="text-gray-400">a@awg.ru</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-3xl font-bold mb-2">Никита Шабашкевич</h3>
              <p className="text-gray-400 mb-6">Совладелец AWG</p>
              <p className="text-gray-400 mb-2">+7 929 650 05 01</p>
              <p className="text-gray-400">nikita@awg.ru</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-3xl font-bold mb-2">Станислав Пятецкий</h3>
              <p className="text-gray-400 mb-6">CEO ИТ-интегратора AWG</p>
              <p className="text-gray-400 mb-2">+7 929 650 05 01</p>
              <p className="text-gray-400">spyateckij@awg.ru</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-400">
              <p>+7 495 278 07 08</p>
              <p>info@awg.ru</p>
              <p>Москва, Воздвиженка, 7/6с1</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}