import { motion } from 'framer-motion';
import GitHubStats from "../components/GithubStats.jsx";
import { useState } from "react";
import SpotifyMusic from "../components/SpotifyMusic.jsx";
import Chart from "../components/Chart.jsx";
import data from "../data/chartData.json";
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations, useHobbiesData } from '../locales/translations';

const About = () => {
  const [hobbiesOpen1, setHobbiesOpen1] = useState(false);
  const [hobbiesOpen2, setHobbiesOpen2] = useState(false);
  const { language } = useLanguage();
  const t = useTranslations(language);
  const hobbies = useHobbiesData(language);

  const skills = [
    'JavaScript (ES6+)',
    'HTML5+',
    'React',
    'Node.js',
    'Tailwind CSS',
    'CSS3',
    'Ngrok',
    'Git',
    'Chart JS',
    'D3 JS',
    'GraphQL',
    'Webpack',
    'Google Forms',
    'Postman',
    'Excel',
    'Bootstrap',
    'Bootstrap React',
    'Bitbucket',
    'Docker',
    'WSL',
    'MongoDB',
    'Github API',
    'Axios',
    'APIs',
  ];



  return (
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.5}}
          >
            <h2 className="text-3xl font-bold mb-8">{t.about.title}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-textSecondary">
                <p className="mb-4">
                  {t.about.description.p1}
                </p>
                <p className="mb-4">
                  {t.about.description.p2}
                </p>
                <p className="mb-4">
                  {t.about.description.p3}
                </p>
                <p className="mb-4 font-bold">
                  {t.about.description.p4}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{t.about.skillsTitle}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                      <div
                          key={index}
                          className="flex items-center gap-1 text-textSecondary"
                      >
                        <span className="text-secondary">▹</span>
                        {skill}
                      </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold transition-colors mb-2">
                {t.about.cvTitle}
              </h3>
              <div>
                <div>
                  <a
                      href="/assets/CV%20Vladimirov%20Vladimir.pdf"
                      download="CV_Vladimirov_Vladimir.pdf"
                      className="text-md font-bold hover:text-secondary transition-colors"
                  >
                    {t.about.cvDownload.en}
                  </a>
                </div>
                <div>
                  <a
                      href="/assets/Резюме%20Владимиров%20Владимир.pdf"
                      download="Резюме_Владимиров_Владимир.pdf"
                      className="text-md font-bold hover:text-secondary transition-colors"
                  >
                    {t.about.cvDownload.ru}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                  onClick={() => setHobbiesOpen1(!hobbiesOpen1)}
                  className="w-full text-left bg-primary border border-secondary p-4 rounded-lg shadow-lg transition-colors hover:text-white"
              >
                <h3 className="text-xl font-bold flex items-center">
                  {t.about.hobbies}
                  <span
                      className={`ml-2 transition-transform ${
                          hobbiesOpen1 ? "rotate-180" : ""
                      }`}
                  >
                  ▼
                </span>
                </h3>
              </button>
              {hobbiesOpen1 && (
                  <motion.div
                      initial={{opacity: 0, height: 0}}
                      animate={{opacity: 1, height: "auto"}}
                      exit={{opacity: 0, height: 0}}
                      transition={{duration: 0.5}}
                  >
                    <ul className="list-disc list-inside mt-4 pl-6 space-y-2 text-textSecondary">
                      {hobbies.map((hobby, index) => (
                          <li key={index}>{hobby}</li>
                      ))}
                    </ul>
                    <SpotifyMusic/>
                  </motion.div>
              )}
            </div>

            <div className="mt-10">
              <GitHubStats/>
            </div>

            <div className="mt-10">
              <button
                  onClick={() => setHobbiesOpen2(!hobbiesOpen2)}
                  className="w-full text-left bg-primary border border-secondary p-4 rounded-lg shadow-lg transition-colors hover:text-white"
              >
                <h3 className="text-xl font-bold flex items-center">
                  {t.about.chartTitle}
                  <span
                      className={`ml-2 transition-transform ${
                          hobbiesOpen2 ? "rotate-180" : ""
                      }`}
                  >
                  ▼
                </span>
                </h3>
              </button>
              {hobbiesOpen2 && (
                  <motion.div
                      initial={{opacity: 0, height: 0}}
                      animate={{opacity: 1, height: "auto"}}
                      exit={{opacity: 0, height: 0}}
                      transition={{duration: 0.5}}
                  >

                    <Chart data={data}/>
                  </motion.div>
              )}
            </div>

            <h4 className="text-sm font-bold flex items-center">{t.about.note}</h4>
          </motion.div>
        </div>
      </div>
  );
};

export default About;
