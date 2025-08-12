// Импорты компонентов для рендеринга
import ButtonLink from "../components/ButtonLink.jsx";
import Button from "../components/Button.jsx";
import ExampleLink from "../components/ExampleLink.jsx";
import ExampleTabs from "../components/ExampleTabs.jsx";
import ModalExample from "../components/ModalExample.jsx";
import ExampleTable from "../components/ExampleTable.jsx";

export const translations = {
  ru: {
    // Navigation
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      projects: 'Проекты',
      blog: 'Блог',
      components: 'Компоненты',
      contact: 'Контакты'
    },
    
    // Home page
    home: {
      greeting: 'Привет, меня зовут',
      name: 'Владимир Владимиров',
      subtitle: 'Я создаю веб-приложения.',
      description: 'Я frontend разработчик, специализирующийся на создании исключительного цифрового опыта. В настоящее время я сосредоточен на создании доступных, удобных продуктов с использованием React и современных веб-технологий.',
      buttons: {
        viewWork: 'Посмотреть мои работы',
        getInTouch: 'Связаться со мной'
      }
    },
    
    // About page
    about: {
      title: 'Обо мне',
      description: {
        p1: 'Привет! Я Владимир, frontend разработчик с страстью к созданию красивых и функциональных веб-приложений. Мой путь в веб-разработке начался в школьные годы, и с тех пор я увлечен этим.',
        p2: 'Я специализируюсь на React и его экосистеме, создавая отзывчивые и производительные веб-приложения. Мне нравится работать с современным JavaScript и быть в курсе последних веб-технологий.',
        p3: 'Когда я не пишу код, я всё ещё изучаю новые вещи в области разработки.',
        p4: '(Весь контент и функции, которые здесь отображаются, предназначены только для демонстрации и могут быть улучшены или изменены любым возможным способом.)'
      },
      skillsTitle: 'Навыки и технологии',
      cvTitle: 'Моё резюме в формате PDF, которое вы можете скачать',
      cvDownload: {
        en: 'Скачать резюме EN',
        ru: 'Скачать резюме RU'
      },
      hobbies: 'Хобби',
      chartTitle: 'Вот пример графика, созданного с помощью библиотеки d3 js',
      note: '(не знаю куда это поставить)'
    },
    
    // Blog page
    blog: {
      title: 'Блог',
      readTime: 'мин чтения',
      tags: 'Теги',
      backToBlog: '← Назад к блогу',
      postNotFound: 'Пост не найден'
    },
    
    // Contact page
    contact: {
      title: 'Связаться со мной',
      description: 'В настоящее время я открыт для фриланс возможностей и интересных проектов. Есть ли у вас вопрос или просто хотите поздороваться, я постараюсь ответить вам! (Просто заполните форму и нажмите кнопку ниже)',
      form: {
        name: 'Имя',
        email: 'Электронная почта',
        message: 'Сообщение',
        send: 'Отправить сообщение'
      },
      success: 'Сообщение отправлено успешно!',
      error: 'Не удалось отправить сообщение.'
    },
    
    // Components page
    components: {
      search: 'Поиск компонентов...',
      noResults: 'Компоненты не найдены',
      notFound: 'Компонент не найден',
      renderedComponent: 'Отображаемый компонент:'
    },
    
    // Projects page
    projects: {
      title: 'Мои Проекты',
      subtitle: 'Коллекция веб-приложений и проектов, демонстрирующих мои навыки в разработке современных интерфейсов с использованием React и других технологий.',
      filters: {
        all: 'Все проекты',
        featured: 'Избранные',
        completed: 'Завершенные',
        inProgress: 'В разработке'
      },
      status: {
        completed: 'Завершен',
        'in-progress': 'В разработке',
        planned: 'Запланирован'
      },
      noProjects: {
        title: 'Проекты скоро появятся!',
        description: 'Я работаю над добавлением новых интересных проектов. Следите за обновлениями!',
        button: 'Уведомить меня'
      },
      noResults: {
        title: 'Проекты не найдены',
        description: 'Попробуйте выбрать другой фильтр'
      },
      buttons: {
        demo: 'Демо',
        code: 'Код',
        viewProject: 'Посмотреть проект',
        sourceCode: 'Исходный код'
      }
    },
    
    // Common
    common: {
      loading: 'Загрузка...',
      error: 'Ошибка',
      comingSoon: 'Скоро',
      readMore: 'Читать далее',
      technologies: 'Технологии'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      components: 'Components',
      contact: 'Contact'
    },
    
    // Home page
    home: {
      greeting: 'Hi, my name is',
      name: 'Vladimir Vladimirov',
      subtitle: 'I build things for the web.',
      description: 'I\'m a frontend developer specializing in building exceptional digital experiences. Currently, I\'m focused on building accessible, human-centered products using React and modern web technologies.',
      buttons: {
        viewWork: 'View My Work',
        getInTouch: 'Get In Touch'
      }
    },
    
    // About page
    about: {
      title: 'About Me',
      description: {
        p1: 'Hello! I\'m Vladimir, a frontend developer with a passion for creating beautiful and functional web applications. My journey in web development began during my school years, and I\'ve been hooked ever since.',
        p2: 'I specialize in React and its ecosystem, building responsive and performant web applications. I love working with modern JavaScript and staying up-to-date with the latest web technologies.',
        p3: 'When I\'m not coding, I\'m still learning new things in the development field.',
        p4: '(All of the content and the functions that are displayed here are just for showcase and can be enhanced or changed in any possible way.)'
      },
      skillsTitle: 'Skills & Technologies',
      cvTitle: 'My CV in PDF Format that you can download',
      cvDownload: {
        en: 'Download My CV EN',
        ru: 'Download My CV RU'
      },
      hobbies: 'Hobbies',
      chartTitle: 'Here is an example of a chart created with d3 js library',
      note: '(idk where to put this)'
    },
    
    // Blog page
    blog: {
      title: 'Blog',
      readTime: 'min read',
      tags: 'Tags',
      backToBlog: '← Back to Blog',
      postNotFound: 'Post not found'
    },
    
    // Contact page
    contact: {
      title: 'Get In Touch',
      description: 'I\'m currently open for freelance opportunities and interesting projects. Whether you have a question or just want to say hi, I\'ll try my best to get back to you! (Just fill the form and press the button below)',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      },
      success: 'Message sent successfully!',
      error: 'Failed to send the message.'
    },
    
    // Components page
    components: {
      search: 'Search components...',
      noResults: 'No components found',
      notFound: 'Component not found',
      renderedComponent: 'Rendered Component:'
    },
    
    // Projects page
    projects: {
      title: 'My Projects',
      subtitle: 'A collection of web applications and projects showcasing my skills in developing modern interfaces using React and other technologies.',
      filters: {
        all: 'All projects',
        featured: 'Featured',
        completed: 'Completed',
        inProgress: 'In progress'
      },
      status: {
        completed: 'Completed',
        'in-progress': 'In progress',
        planned: 'Planned'
      },
      noProjects: {
        title: 'Projects coming soon!',
        description: 'I am working on adding new interesting projects. Stay tuned for updates!',
        button: 'Notify me'
      },
      noResults: {
        title: 'No projects found',
        description: 'Try selecting a different filter'
      },
      buttons: {
        demo: 'Demo',
        code: 'Code',
        viewProject: 'View project',
        sourceCode: 'Source code'
      }
    },
    
    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      comingSoon: 'Coming soon',
      readMore: 'Read more',
      technologies: 'Technologies'
    }
  }
};

// Данные проектов с переводами
export const projectsData = {
  ru: [
    {
      title: 'E-Commerce Dashboard',
      description: 'Современная панель администратора для интернет-магазина с аналитикой продаж, управлением товарами и клиентами. Включает интерактивные графики и real-time уведомления.',
      tech: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js', 'Material-UI', 'Node.js'],
      github: 'https://github.com/username/ecommerce-dashboard',
      demo: 'https://ecommerce-dashboard-demo.vercel.app',
      image: '/sw.png',
      featured: true,
      status: 'completed'
    },
    {
      title: 'AI Chat Application',
      description: 'Умный чат-бот с интеграцией OpenAI API. Поддерживает контекстные диалоги, генерацию кода и изображений. Responsive дизайн с темной и светлой темами.',
      tech: ['React', 'Next.js', 'OpenAI API', 'Socket.io', 'Tailwind CSS', 'MongoDB'],
      github: 'https://github.com/username/ai-chat-app',
      demo: 'https://ai-chat-demo.vercel.app',
      image: '/pb.png',
      featured: true,
      status: 'in-progress'
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Трекер криптовалют с real-time данными, портфолио менеджером и алертами. Интеграция с CoinGecko API, интерактивные графики и детальная аналитика.',
      tech: ['React', 'Redux', 'D3.js', 'CoinGecko API', 'PWA', 'Firebase'],
      github: 'https://github.com/username/crypto-tracker',
      demo: 'https://crypto-tracker-demo.netlify.app',
      image: '/tr.png',
      featured: false,
      status: 'completed'
    },
    {
      title: 'Task Management System',
      description: 'Комплексная система управления задачами в стиле Kanban. Drag & drop, командная работа, временные метки, комментарии и файловые вложения.',
      tech: ['React', 'TypeScript', 'React DnD', 'Express.js', 'PostgreSQL', 'AWS S3'],
      github: 'https://github.com/username/task-management',
      demo: 'https://taskman-demo.herokuapp.com',
      image: '/td.png',
      featured: true,
      status: 'completed'
    },
    {
      title: 'Social Media Analytics',
      description: 'Платформа для анализа социальных сетей с метриками вовлеченности, трендами хэштегов и автоматическими отчетами. Интеграция с Instagram и Twitter API.',
      tech: ['Vue.js', 'Nuxt.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/username/social-analytics',
      demo: 'https://social-analytics-demo.vercel.app',
      image: '/naw.png',
      featured: false,
      status: 'in-progress'
    },
    {
      title: 'Weather Forecast App',
      description: 'Элегантное погодное приложение с 7-дневным прогнозом, геолокацией, анимированными иконками и push-уведомлениями. PWA с offline поддержкой.',
      tech: ['React', 'PWA', 'OpenWeather API', 'Framer Motion', 'Workbox', 'IndexedDB'],
      github: 'https://github.com/username/weather-app',
      demo: 'https://weather-forecast-pwa.netlify.app',
      image: '/aaw.png',
      featured: false,
      status: 'completed'
    },
    {
      title: 'Online Code Editor',
      description: 'Браузерный IDE с поддержкой множества языков программирования, автодополнением, live preview и совместным редактированием в реальном времени.',
      tech: ['React', 'Monaco Editor', 'WebRTC', 'Socket.io', 'Docker', 'Kubernetes'],
      github: 'https://github.com/username/code-editor',
      demo: 'https://online-ide-demo.vercel.app',
      image: '/cw.png',
      featured: true,
      status: 'planned'
    },
    {
      title: 'Fitness Tracker Dashboard',
      description: 'Персональный фитнес-трекер с мониторингом активности, планированием тренировок, отслеживанием прогресса и интеграцией с wearable устройствами.',
      tech: ['React Native', 'Expo', 'Redux', 'SQLite', 'Health API', 'Charts'],
      github: 'https://github.com/username/fitness-tracker',
      demo: 'https://fitness-app-demo.expo.dev',
      image: '/mhw.png',
      featured: false,
      status: 'in-progress'
    },
    {
      title: 'Recipe Sharing Platform',
      description: 'Социальная платформа для кулинаров с возможностью публикации рецептов, оценками, комментариями и планировщиком питания. Responsive веб-дизайн.',
      tech: ['React', 'GraphQL', 'Apollo Client', 'Node.js', 'MongoDB', 'Cloudinary'],
      github: 'https://github.com/username/recipe-platform',
      demo: 'https://recipe-sharing-demo.vercel.app',
      image: '/bw.png',
      featured: false,
      status: 'completed'
    }
  ],
  
  en: [
    {
      title: 'E-Commerce Dashboard',
      description: 'Modern admin panel for online store with sales analytics, product and customer management. Includes interactive charts and real-time notifications.',
      tech: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js', 'Material-UI', 'Node.js'],
      github: 'https://github.com/username/ecommerce-dashboard',
      demo: 'https://ecommerce-dashboard-demo.vercel.app',
      image: '/sw.png',
      featured: true,
      status: 'completed'
    },
    {
      title: 'AI Chat Application',
      description: 'Smart chatbot with OpenAI API integration. Supports contextual dialogues, code and image generation. Responsive design with dark and light themes.',
      tech: ['React', 'Next.js', 'OpenAI API', 'Socket.io', 'Tailwind CSS', 'MongoDB'],
      github: 'https://github.com/username/ai-chat-app',
      demo: 'https://ai-chat-demo.vercel.app',
      image: '/pb.png',
      featured: true,
      status: 'in-progress'
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Cryptocurrency tracker with real-time data, portfolio manager and alerts. CoinGecko API integration, interactive charts and detailed analytics.',
      tech: ['React', 'Redux', 'D3.js', 'CoinGecko API', 'PWA', 'Firebase'],
      github: 'https://github.com/username/crypto-tracker',
      demo: 'https://crypto-tracker-demo.netlify.app',
      image: '/tr.png',
      featured: false,
      status: 'completed'
    },
    {
      title: 'Task Management System',
      description: 'Comprehensive Kanban-style task management system. Drag & drop, team collaboration, timestamps, comments and file attachments.',
      tech: ['React', 'TypeScript', 'React DnD', 'Express.js', 'PostgreSQL', 'AWS S3'],
      github: 'https://github.com/username/task-management',
      demo: 'https://taskman-demo.herokuapp.com',
      image: '/td.png',
      featured: true,
      status: 'completed'
    },
    {
      title: 'Social Media Analytics',
      description: 'Social media analytics platform with engagement metrics, hashtag trends and automated reports. Instagram and Twitter API integration.',
      tech: ['Vue.js', 'Nuxt.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/username/social-analytics',
      demo: 'https://social-analytics-demo.vercel.app',
      image: '/naw.png',
      featured: false,
      status: 'in-progress'
    },
    {
      title: 'Weather Forecast App',
      description: 'Elegant weather app with 7-day forecast, geolocation, animated icons and push notifications. PWA with offline support.',
      tech: ['React', 'PWA', 'OpenWeather API', 'Framer Motion', 'Workbox', 'IndexedDB'],
      github: 'https://github.com/username/weather-app',
      demo: 'https://weather-forecast-pwa.netlify.app',
      image: '/aaw.png',
      featured: false,
      status: 'completed'
    },
    {
      title: 'Online Code Editor',
      description: 'Browser-based IDE with support for multiple programming languages, auto-completion, live preview and real-time collaborative editing.',
      tech: ['React', 'Monaco Editor', 'WebRTC', 'Socket.io', 'Docker', 'Kubernetes'],
      github: 'https://github.com/username/code-editor',
      demo: 'https://online-ide-demo.vercel.app',
      image: '/cw.png',
      featured: true,
      status: 'planned'
    },
    {
      title: 'Fitness Tracker Dashboard',
      description: 'Personal fitness tracker with activity monitoring, workout planning, progress tracking and wearable device integration.',
      tech: ['React Native', 'Expo', 'Redux', 'SQLite', 'Health API', 'Charts'],
      github: 'https://github.com/username/fitness-tracker',
      demo: 'https://fitness-app-demo.expo.dev',
      image: '/mhw.png',
      featured: false,
      status: 'in-progress'
    },
    {
      title: 'Recipe Sharing Platform',
      description: 'Social platform for cooking enthusiasts with recipe publishing, ratings, comments and meal planning. Responsive web design.',
      tech: ['React', 'GraphQL', 'Apollo Client', 'Node.js', 'MongoDB', 'Cloudinary'],
      github: 'https://github.com/username/recipe-platform',
      demo: 'https://recipe-sharing-demo.vercel.app',
      image: '/bw.png',
      featured: false,
      status: 'completed'
    }
  ]
};

// Хук для получения переводов
export const useTranslations = (language = 'ru') => {
  return translations[language] || translations.ru;
};

// Хук для получения данных проектов
export const useProjectsData = (language = 'ru') => {
  return projectsData[language] || projectsData.ru;
};

// Данные блога с переводами
export const blogData = {
  ru: [
    {
      title: 'Понимание React Hooks: Глубокое погружение',
      date: '15 марта 2024',
      excerpt: 'Подробный взгляд на React Hooks и то, как они могут упростить ваши React компоненты...',
      readTime: '5 мин чтения',
      tags: ['React', 'Hooks', 'JavaScript'],
      slug: 'understanding-react-hooks',
      content: `
# Понимание React Hooks: Глубокое погружение

React Hooks революционизировали то, как мы пишем React компоненты. В этом посте мы рассмотрим наиболее часто используемые хуки и их практическое применение.

## useState Hook

Хук useState является основным для управления состоянием в функциональных компонентах. Вот практический пример:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect Hook

useEffect помогает нам обрабатывать побочные эффекты в наших компонентах. Он идеально подходит для получения данных, подписок или ручного изменения DOM:

\`\`\`jsx
useEffect(() => {
  document.title = \`Счётчик: \${count}\`;
}, [count]);
\`\`\`

## Пользовательские Hooks

Создание пользовательских хуков позволяет нам извлекать логику компонентов в переиспользуемые функции:

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}
\`\`\`

## Лучшие практики

1. Всегда используйте ESLint правило exhaustive deps
2. Держите хуки на верхнем уровне
3. Называйте пользовательские хуки с префиксом 'use'
4. Избегайте сложного состояния когда это возможно

React Hooks предоставляют более прямой способ использования состояния и побочных эффектов в компонентах. Они помогают нам писать более поддерживаемый и переиспользуемый код, при этом снижая сложность наших компонентов.
      `
    },
    {
      title: 'Создание масштабируемых React приложений',
      date: '1 марта 2024',
      excerpt: 'Лучшие практики и паттерны для создания крупномасштабных React приложений...',
      readTime: '7 мин чтения',
      tags: ['React', 'Архитектура', 'Лучшие практики'],
      slug: 'scalable-react-applications',
      content: `
# Создание масштабируемых React приложений

Создание масштабируемых React приложений требует тщательного планирования и следования установленным паттернам. Давайте рассмотрим ключевые концепции и лучшие практики.

## Структура проекта

Хорошо организованная структура проекта критически важна для масштабируемости:

\`\`\`
src/
  ├── components/
  │   ├── common/
  │   └── features/
  ├── hooks/
  ├── pages/
  ├── services/
  ├── utils/
  └── context/
\`\`\`

## Паттерны проектирования компонентов

### Составные компоненты

\`\`\`jsx
const Select = ({ children }) => {
  const [value, setValue] = useState(null);
  return (
    <SelectContext.Provider value={{ value, setValue }}>
      {children}
    </SelectContext.Provider>
  );
};

Select.Option = ({ value, children }) => {
  // Реализация Option
};
\`\`\`

### Паттерн Render Props

\`\`\`jsx
const DataFetcher = ({ render }) => {
  const [data, setData] = useState(null);
  // Логика получения данных
  return render(data);
};
\`\`\`

## Управление состоянием

Выберите правильное решение для управления состоянием:

1. Локальное состояние для данных конкретного компонента
2. Context для общего состояния
3. Redux/MobX для сложного глобального состояния

## Оптимизация производительности

1. Используйте React.memo для чистых компонентов
2. Реализуйте ленивую загрузку
3. Оптимизируйте повторные рендеры с помощью useMemo и useCallback

Создание масштабируемых React приложений - это итеративный процесс. Сосредоточьтесь на поддерживаемости, переиспользуемости и производительности с самого начала.
      `
    },
    {
      title: 'Современные CSS техники',
      date: '20 февраля 2024',
      excerpt: 'Изучение современных CSS возможностей и их эффективное использование...',
      readTime: '4 мин чтения',
      tags: ['CSS', 'Веб-дизайн', 'Frontend'],
      slug: 'modern-css-techniques',
      content: `
# Современные CSS техники

CSS значительно эволюционировал в последние годы. Давайте рассмотрим некоторые современные техники, которые могут улучшить ваш рабочий процесс веб-разработки.

## CSS Grid Layout

CSS Grid предоставляет мощную двумерную систему компоновки:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## CSS пользовательские свойства (переменные)

Переменные делают ваши стили более поддерживаемыми:

\`\`\`css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background-color: var(--primary-color);
}
\`\`\`

## CSS анимации

Современные CSS анимации могут создавать плавные, производительные переходы:

\`\`\`css
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
\`\`\`

## Container Queries

Будущее отзывчивого дизайна:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
\`\`\`

Современный CSS предоставляет мощные инструменты для создания отзывчивых, поддерживаемых и производительных веб-приложений. Следите за последними возможностями, чтобы улучшить свой процесс разработки.
      `
    }
  ],
  en: [
    {
      title: 'Understanding React Hooks: A Deep Dive',
      date: 'March 15, 2024',
      excerpt: 'An in-depth look at React Hooks and how they can simplify your React components...',
      readTime: '5 min read',
      tags: ['React', 'Hooks', 'JavaScript'],
      slug: 'understanding-react-hooks',
      content: `
# Understanding React Hooks: A Deep Dive

React Hooks have revolutionized how we write React components. In this post, we'll explore the most commonly used hooks and their practical applications.

## useState Hook

The useState hook is fundamental for managing state in functional components. Here's a practical example:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect Hook

useEffect helps us handle side effects in our components. It's perfect for data fetching, subscriptions, or manually changing the DOM:

\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

## Custom Hooks

Creating custom hooks allows us to extract component logic into reusable functions:

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}
\`\`\`

## Best Practices

1. Always use the exhaustive deps ESLint rule
2. Keep hooks at the top level
3. Name custom hooks with 'use' prefix
4. Avoid complex state when possible

React Hooks provide a more direct way to use state and side effects in components. They help us write more maintainable and reusable code while reducing the complexity of our components.
      `
    },
    {
      title: 'Building Scalable React Applications',
      date: 'March 1, 2024',
      excerpt: 'Best practices and patterns for building large-scale React applications...',
      readTime: '7 min read',
      tags: ['React', 'Architecture', 'Best Practices'],
      slug: 'scalable-react-applications',
      content: `
# Building Scalable React Applications

Creating scalable React applications requires careful planning and following established patterns. Let's explore some key concepts and best practices.

## Project Structure

A well-organized project structure is crucial for scalability:

\`\`\`
src/
  ├── components/
  │   ├── common/
  │   └── features/
  ├── hooks/
  ├── pages/
  ├── services/
  ├── utils/
  └── context/
\`\`\`

## Component Design Patterns

### Compound Components

\`\`\`jsx
const Select = ({ children }) => {
  const [value, setValue] = useState(null);
  return (
    <SelectContext.Provider value={{ value, setValue }}>
      {children}
    </SelectContext.Provider>
  );
};

Select.Option = ({ value, children }) => {
  // Option implementation
};
\`\`\`

### Render Props Pattern

\`\`\`jsx
const DataFetcher = ({ render }) => {
  const [data, setData] = useState(null);
  // Fetching logic
  return render(data);
};
\`\`\`

## State Management

Choose the right state management solution:

1. Local state for component-specific data
2. Context for shared state
3. Redux/MobX for complex global state

## Performance Optimization

1. Use React.memo for pure components
2. Implement lazy loading
3. Optimize re-renders with useMemo and useCallback

Building scalable React applications is an iterative process. Focus on maintainability, reusability, and performance from the start.
      `
    },
    {
      title: 'Modern CSS Techniques',
      date: 'February 20, 2024',
      excerpt: 'Exploring modern CSS features and how to use them effectively...',
      readTime: '4 min read',
      tags: ['CSS', 'Web Design', 'Frontend'],
      slug: 'modern-css-techniques',
      content: `
# Modern CSS Techniques

CSS has evolved significantly in recent years. Let's explore some modern techniques that can enhance your web development workflow.

## CSS Grid Layout

CSS Grid provides a powerful two-dimensional layout system:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## CSS Custom Properties (Variables)

Variables make your styles more maintainable:

\`\`\`css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background-color: var(--primary-color);
}
\`\`\`

## CSS Animations

Modern CSS animations can create smooth, performant transitions:

\`\`\`css
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
\`\`\`

## Container Queries

The future of responsive design:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
\`\`\`

Modern CSS provides powerful tools for creating responsive, maintainable, and performant web applications. Stay updated with the latest features to improve your development workflow.
      `
    }
  ]
};

// Данные хобби с переводами
export const hobbiesData = {
  ru: [
    "Баскетбол",
    "Лыжный спорт", 
    "Компьютерные игры",
    "Настольные игры",
    "Конструкторы"
  ],
  en: [
    "Basketball",
    "Skiing",
    "Computer games", 
    "Board games",
    "Building blocks"
  ]
};

// Данные компонентов с переводами
export const componentsData = {
  ru: [
    {
      link: 'button-link',
      title: 'Ссылка-кнопка',
      render: ButtonLink,
      content: `

Компонент ButtonLink — это стилизованная ссылка, которая функционирует как кнопка.
Он использует компонент Link из React Router для навигации к маршруту "/projects" при нажатии. 
Ссылка имеет прозрачный фон, который меняется на вторичный цвет при наведении, 
обеспечивая визуальную подсказку пользователю.

## Пример кода

\`\`\`jsx
import { Link } from 'react-router-dom';

const ButtonLink = () => {
    return (
        <Link
            to="/projects"
            className="bg-transparent hover:bg-secondary text-secondary hover:text-primary border border-secondary 
            px-6 py-3 rounded transition-colors"
        >
            Посмотреть мои работы
        </Link>
    );
};

export default ButtonLink;
\`\`\`

      `
    },
    {
      link: 'button',
      title: 'Кнопка',
      render: Button,
      content: `

Компонент Button — это переиспользуемая, стилизованная кнопка, предназначенная для отправки форм. 
Она имеет тонкий эффект перехода при наведении, обеспечивая удобное взаимодействие с пользователем. 

По умолчанию имеет атрибут type="submit", что делает её идеальной для использования в формах.

## Пример кода

\`\`\`jsx
<button
  type="submit"
  className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded transition-colors"
>
  Отправить сообщение
</button>
\`\`\`
      `
    },
    {
      link: 'blogs-component',
      title: 'Компонент блогов',
      render: null,
      content: `

Компонент BlogPost и массив blogPosts, которыми вы поделились, работают вместе для отображения сводок блогов и их подробного содержания.

Вот краткое объяснение основных возможностей:

## Компонент BlogPost

## Свойства:

Компонент BlogPost принимает несколько свойств:

    >   title: Заголовок блогового поста, отображается как кликабельная ссылка.
    >   date: Дата публикации блогового поста.
    >   excerpt: Краткое резюме содержания блогового поста.
    >   readTime: Оценка времени чтения поста.
    >   tags: Массив тегов, связанных с блоговым постом, отображается как кликабельные значки.
    >   slug: Уникальный идентификатор блогового поста, используемый в URL.
    >   и также content: текст, код и всё что вы хотите туда поместить

## Вот пример кода
## Компонент BlogPost

\`\`\`jsx
import { Link } from 'react-router-dom';

const BlogPost = ({ title, date, excerpt, readTime, tags, slug }) => {
  return (
    <article className="border border-textSecondary/20 rounded-lg p-6 hover:border-secondary transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold hover:text-secondary transition-colors">
          <Link to={\`/blog//\${slug}\`}>{title}</Link>
        </h3>
        <span className="text-textSecondary text-sm">{date}</span>
      </div>
      <p className="text-textSecondary mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-secondary text-sm px-2 py-1 rounded-full border border-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-textSecondary text-sm">{readTime}</span>
      </div>
    </article>
    );
};
\`\`\`

## файл данных блоговых постов

\`\`\`jsx
export const blogPosts = [
  {
    title: 'Понимание React Hooks: Глубокое погружение',
    date: '15 марта 2024',
    excerpt: 'Подробный взгляд на React Hooks...',
    readTime: '5 мин чтения',
    tags: ['React', 'Hooks', 'JavaScript'],
    slug: 'understanding-react-hooks',
    content: некоторое содержание в //\`\`
\`\`\`
      `
    },
    {
      link: 'link',
      title: 'Ссылка',
      render: ExampleLink,
      content: `

Ссылка — это компонент, который отображает заголовок блогового поста.

Он использует компонент Link из react-router-dom для создания навигационной ссылки на детальное представление блогового поста.

## Пример кода

\`\`\`jsx
<h3 className="text-xl font-bold hover:text-secondary transition-colors">
          <Link to={\`/blog//\${slug}\`}>{title}</Link>
</h3>
\`\`\`

Slug снова является свойством из файла данных

\`\`\`jsx
slug: 'understanding-react-hooks',
\`\`\`
      `
    },
    {
      link: 'tabs',
      title: 'Вкладки',
      render: ExampleTabs,
      content: `

Этот компонент Tabs в React отображает набор вкладок с настраиваемыми стилями и динамическим содержанием. Вот разбор его функциональности: он принимает некоторые свойства, которые можно изменить, например tabs, activetab и т.д.

## Свойства:

    >   tabs: Массив объектов, каждый представляет вкладку. Каждый объект должен иметь name (уникальный идентификатор),
        label (отображаемый текст) и content (содержание для рендеринга когда активна).
    >   activeTab: Строка, представляющая выбранную в данный момент вкладку.
    >   onTabChange: Функция, которая вызывается при нажатии на вкладку, используется для обновления activeTab.
    >   styleType: Необязательно; управляет стилем вкладок. По умолчанию "primary".

## Пример кода

\`\`\`jsx
import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange, styleType = 'primary' }) => {
    const baseStyles = 'flex mb-4';
    const tabStyles = \`mr-1 py-2 px-4 transition-all flex items-center justify-center w-32 text-center rounded-lg\`;

    const styleTypes = {
        primary: 'bg-primary text-secondary hover:bg-secondary/10 border border-secondary',
        secondary: 'bg-secondary text-primary hover:bg-secondary/90',
        transparent: 'bg-transparent text-secondary border border-secondary hover:bg-secondary/10',
    };

    return (
        <div>
            <div className={baseStyles}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(tab.name)}
                        className=*****
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4 bg-primary text-textPrimary rounded-lg border border-secondary">
                {tabs.find(tab => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs;

\`\`\`

Вставьте код ниже в место *****
      `
    },
    {
      link: 'modal',
      title: 'Модальное окно',
      render: ModalExample,
      content: `

Этот компонент — переиспользуемое модальное диалоговое окно, созданное с использованием React и Framer Motion. 
Оно отображается, когда свойство isOpen равно true, и может быть закрыто нажатием на фон (вне модального окна) или
нажатием кнопки закрытия (✖). Компонент Modal принимает children для отображения своего содержания.

## Пример кода

\`\`\`jsx
import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-80 z-50"
            onClick={handleOverlayClick}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-primary text-textPrimary rounded-lg shadow-lg p-6 w-full max-w-md relative"
            >
                <button
                    className="absolute top-2 right-2 text-secondary hover:text-secondary/80 transition-colors"
                    onClick={onClose}
                >
                    ✖
                </button>
                {children}
            </motion.div>
        </div>
    );
};

export default Modal;

\`\`\`
      `
    },
    {
      link: 'table',
      title: 'Таблица',
      render: ExampleTable,
      content: `

Это самодостаточный, переиспользуемый компонент таблицы в React. Он отображает структурированные данные в табличном формате со стилизацией заголовков и строк, соответствующей основной цветовой схеме, аналогично стилизации модального компонента.

## Пример кода

\`\`\`jsx
import React from 'react';

const Table = ({ data, columns }) => {
    const baseStyles = 'min-w-full border border-primary';
    const headerStyles = 'bg-primary text-textPrimary text-left font-semibold p-4 border-b border-secondary';
    const rowStyles = 'p-4 border-b border-gray-300 hover:bg-primary/10';

    return (
        <table className={baseStyles}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} className={headerStyles}>
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowStyles}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex} className="p-4 text-textPrimary">
                                {row[column]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

\`\`\`
      `
    }
  ],
  en: [
    {
      link: 'button-link',
      title: 'Button-link',
      render: ButtonLink,
      content: `

The ButtonLink component is a styled link that functions like a button.
It uses the React Router Link component to navigate to the "/projects" route when clicked. 
The link features a transparent background that changes to a secondary color on hover, 
providing a visual cue to the user.

## Code Example

\`\`\`jsx
import { Link } from 'react-router-dom';

const ButtonLink = () => {
    return (
        <Link
            to="/projects"
            className="bg-transparent hover:bg-secondary text-secondary hover:text-primary border border-secondary 
            px-6 py-3 rounded transition-colors"
        >
            View My Work
        </Link>
    );
};

export default ButtonLink;
\`\`\`

      `
    },
         {
       link: 'button',
       title: 'Button',
       render: Button,
       content: `

The Button component is a reusable, styled button designed for submitting forms. 
It features a subtle transition effect on hover, providing a user-friendly interaction. 

By default, it has a type="submit" attribute, making it ideal for use in forms.

## Code Example

\`\`\`jsx
<button
  type="submit"
  className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded transition-colors"
>
  Send Message
</button>
\`\`\`
      `
    },
         {
       link: 'blogs-component',
       title: 'Blogs Component',
       render: null,
       content: `

The BlogPost component and the blogPosts array you've shared work together to display blog post summaries and their detailed content.

Here's a brief explanation of the main features:

## BlogPost Component

## Props:

The BlogPost component accepts several props:

    >   title: The title of the blog post, displayed as a clickable link.
    >   date: The publication date of the blog post.
    >   excerpt: A brief summary of the blog post's content.
    >   readTime: An estimate of how long it will take to read the post.
    >   tags: An array of tags associated with the blog post, displayed as clickable badges.
    >   slug: A unique identifier for the blog post used in the URL.
    >   and also content: text, code and whatever you want to put in there

## Here Is Code Example
## BlogPost Component

\`\`\`jsx
import { Link } from 'react-router-dom';

const BlogPost = ({ title, date, excerpt, readTime, tags, slug }) => {
  return (
    <article className="border border-textSecondary/20 rounded-lg p-6 hover:border-secondary transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold hover:text-secondary transition-colors">
          <Link to={\`/blog//\${slug}\`}>{title}</Link>
        </h3>
        <span className="text-textSecondary text-sm">{date}</span>
      </div>
      <p className="text-textSecondary mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-secondary text-sm px-2 py-1 rounded-full border border-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-textSecondary text-sm">{readTime}</span>
      </div>
    </article>
    );
};
\`\`\`

## blog post data file

\`\`\`jsx
export const blogPosts = [
  {
    title: 'Understanding React Hooks: A Deep Dive',
    date: 'March 15, 2024',
    excerpt: 'An in-depth look at React Hooks and how they can simplify your React components...',
    readTime: '5 min read',
    tags: ['React', 'Hooks', 'JavaScript'],
    slug: 'understanding-react-hooks',
    content: some content in //\`\`
\`\`\`
      `
    },
         {
       link: 'link',
       title: 'Link',
       render: ExampleLink,
       content: `

The Link is a component that displays a blog post title.

It utilizes the Link component from react-router-dom to create a navigable link to the blog post's detailed view.

## Code Example

\`\`\`jsx
<h3 className="text-xl font-bold hover:text-secondary transition-colors">
          <Link to={\`/blog//\${slug}\`}>{title}</Link>
</h3>
\`\`\`

Slug is again a prop from a data file

\`\`\`jsx
slug: 'understanding-react-hooks',
\`\`\`
      `
    },
         {
       link: 'tabs',
       title: 'Tabs',
       render: ExampleTabs,
       content: `

This Tabs component in React displays a set of tabs with customizable styles and dynamic content. Here's a breakdown of its functionality: it accepts some props that can be changed, for example tabs, activetab and e.t.

## Props:

    >   tabs: An array of objects, each representing a tab. Each object should have name (unique identifier),
        label (display text), and content (content to render when active).
    >   activeTab: A string representing the currently selected tab.
    >   onTabChange: A function that is called when a tab is clicked, used to update the activeTab.
    >   styleType: Optional; controls the style of the tabs. Defaults to "primary".

## Code Example

\`\`\`jsx
import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange, styleType = 'primary' }) => {
    const baseStyles = 'flex mb-4';
    const tabStyles = \`mr-1 py-2 px-4 transition-all flex items-center justify-center w-32 text-center rounded-lg\`;

    const styleTypes = {
        primary: 'bg-primary text-secondary hover:bg-secondary/10 border border-secondary',
        secondary: 'bg-secondary text-primary hover:bg-secondary/90',
        transparent: 'bg-transparent text-secondary border border-secondary hover:bg-secondary/10',
    };

    return (
        <div>
            <div className={baseStyles}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(tab.name)}
                        className=*****
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4 bg-primary text-textPrimary rounded-lg border border-secondary">
                {tabs.find(tab => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs;

\`\`\`

Insert code down below into ***** place
      `
    },
         {
       link: 'modal',
       title: 'Modal',
       render: ModalExample,
       content: `

This component is a reusable modal dialog created using React and Framer Motion. 
It displays when the isOpen prop is true, and can be closed by clicking the overlay (outside the modal) or
by pressing the close button (✖). The Modal component accepts children to display its content.

## Code Example

\`\`\`jsx
import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-80 z-50"
            onClick={handleOverlayClick}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-primary text-textPrimary rounded-lg shadow-lg p-6 w-full max-w-md relative"
            >
                <button
                    className="absolute top-2 right-2 text-secondary hover:text-secondary/80 transition-colors"
                    onClick={onClose}
                >
                    ✖
                </button>
                {children}
            </motion.div>
        </div>
    );
};

export default Modal;

\`\`\`
      `
    },
         {
       link: 'table',
       title: 'Table',
       render: ExampleTable,
       content: `

This is a self-contained, reusable table component in React. It displays structured data in a table format with header and row styling consistent with a primary color scheme, similar to a modal component's styling.

## Code Example

\`\`\`jsx
import React from 'react';

const Table = ({ data, columns }) => {
    const baseStyles = 'min-w-full border border-primary';
    const headerStyles = 'bg-primary text-textPrimary text-left font-semibold p-4 border-b border-secondary';
    const rowStyles = 'p-4 border-b border-gray-300 hover:bg-primary/10';

    return (
        <table className={baseStyles}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} className={headerStyles}>
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowStyles}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex} className="p-4 text-textPrimary">
                                {row[column]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

\`\`\`
      `
    }
  ]
};

// Хук для получения данных блога
export const useBlogData = (language = 'ru') => {
  return blogData[language] || blogData.ru;
};

// Хук для получения данных хобби
export const useHobbiesData = (language = 'ru') => {
  return hobbiesData[language] || hobbiesData.ru;
};

// Хук для получения данных компонентов
export const useComponentsData = (language = 'ru') => {
  return componentsData[language] || componentsData.ru;
};
 