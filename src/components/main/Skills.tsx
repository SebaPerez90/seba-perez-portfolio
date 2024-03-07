import { useEffect, useRef, useState } from 'react';

import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import addSvgIcon from '@/data/addSvgIcon';

import Image from 'next/image';
import lg_icon from '@/assets/images/lg-icon.webp';
import UI_dark from '@/assets/images/UI-dark.webp';
import UI_light from '@/assets/images/UI-light.webp';
import devs_team from '@/assets/images/devs-team.png';

import { IoMdHome } from 'react-icons/io';
import { IoChevronBackOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { HiWifi } from 'react-icons/hi';
import { MdBattery50 } from 'react-icons/md';
import { FaSignal } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

interface Skills {
  title: string;
  skills: string[];
}

const Skills = () => {
  const { engLanguageActive } = useStore();

  const [weatherData, setWeatherData]: any = useState({});

  const [theme, setTheme]: any = useState();

  const dateRef = useRef<HTMLTimeElement>(null);

  //! CHEKEAR ESTO ,  Y PONER UNA CONDICION CORRECTA PARA Q ACTUALIZE BLA BLA BLA
  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, [theme]);

  useEffect(() => {
    const getData = async () => {
      const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=berazategui&units=metric&appid=${APIkey}`
      );
      const res = await data.json();

      setWeatherData({
        city: res.city.name,
        country: res.city.country,
        temperature: res.list[0].main.temp.toFixed(0),
      });
    };
    getData();
  }, []);

  setInterval(() => {
    const date = new Date();
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    if (dateRef.current) {
      dateRef.current.innerHTML = `${hours}:${minutes}`;
    }
  }, 1000);

  const skills: Skills[] = [
    {
      title: 'FRONT-END',
      skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Javascript', 'Sass'],
    },
    {
      title: 'BACK-END',
      skills: ['Node.js', 'Express.js', 'SQLite'],
    },
    {
      title: 'LEARNING',
      skills: ['TypeScript', 'Next.js', 'MongoDB'],
    },
  ];

  return (
    <section
      id='skills-section'
      className='mt-32 w-[100%] bg-gradient-to-b from-[#dedede] via-light-200 to-[#dedede] flex flex-col justify-center items-center'>
      <h1
        className='text-3xl [letter-spacing:10px] text-[#313131] text-center'
        style={roboto.style}>
        {engLanguageActive ? 'SKILLS & SERVICES' : 'HABILIDADES Y SERVICIOS '}🤓
      </h1>

      <article className='py-40 w-full h-full'>
        <h1 className='text-center text-3xl mb-44 font-bold text-light-400'>
          {engLanguageActive
            ? 'What can I offer for you? ...'
            : '¿Qué puedo ofrecerte? ...'}
          <span className='italic text-2xl text-[#333333cb] font-light'>
            {' '}
            {engLanguageActive
              ? 'let me show you some of my services.'
              : 'Permíteme mostrarte algunos de mis servicios.'}
          </span>
        </h1>
        <div className='grid grid-cols-3 grid-rows-[repeat(2,min-max(100px,auto))] gap-y-[11em] relative w-[80%] m-[0_auto]'>
          <div className='w-full flex justify-around flex-wrap row-span-1 col-span-full'>
            <div className='relative w-[12em] h-[25rem] flex flex-col justify-between border-[10px] border-[#252525] bg-white rounded-[25px] before:absolute before:w-full before:h-5 before:rounded-[50%] before:left-0 before:bottom-[-3em] before:bg-[#3737378f] before:z-50'>
              <div className='py-1 rounded-[13px_13px_0_0] w-full bg-[#4a4a4a] px-2 text-white flex justify-between items-center'>
                <FaWhatsapp className='text-green-400 scale-110' />
                <span className='rounded-full h-[9px] w-[9px] border-black border-4 bg-[#b6b4b4]'></span>
                <div className='flex'>
                  <HiWifi />
                  <FaSignal />
                  <MdBattery50 />
                </div>
              </div>

              <article className='before:absolute before:left-0 before: top-0 before:w-full before:h-full before:bg-[#0000004b] before:z-20 relative flex overflow-hidden flex-col items-center justify-center bg-white h-full'>
                <Image
                  src={theme === 'dark' ? UI_dark : UI_light}
                  alt='background-image'
                  priority
                  className='w-auto h-auto object-cover absolute z-10 [aspect-ratio:1/2] aaaa'
                />
                <span className='z-30 text-[#ffffffb5] text-5xl font-extrabold relative bottom-4'>
                  {weatherData.temperature}°C
                </span>
                <div className='z-30 text-white flex gap-1 items-center bg-[#ffffff33] [backdrop-filter:blur(5px)] rounded-sm p-1'>
                  <span className='text-xs'>{weatherData.country}</span>
                  <h1 className='text-base'>{weatherData.city}</h1>
                </div>
                <time
                  className='z-30 text-white text-lg [letter-spacing:2px] font-bold'
                  ref={dateRef}></time>
                <div className='z-30 flex w-[70%] translate-y-[1.5em]'>
                  <span className='bg-indigo-700 p-1 w-max text-[0.6em] rounded-[0.5em_0_0_0.5em]'>
                    🔎
                  </span>
                  <span className='w-full bg-[#ffffff91] [backdrop-filter:blur(1px)] rounded-[0_0.5em_0.5em_0]'></span>
                </div>
              </article>
              <div className='rounded-[0_0_13px_13px] text-xl w-full bg-[#4a4a4a] py-2 font-black text-white flex justify-around'>
                <IoChevronBackOutline />
                <IoMdHome />
                <FaBars />
              </div>
            </div>
            <article className='w-1/2 flex flex-col items-center justify-center gap-8'>
              <h1 className='text-2xl font-bold text-[#333333c0]'>
                {engLanguageActive
                  ? `Mobile application design`
                  : 'Diseño de aplicaciones moviles'}
              </h1>
              <div className='text-sm font-medium text-[#3333339e] border-l-8 border-light-800 bg-[#ececec39] pl-4 pr-2 py-6 '>
                <p>
                  {engLanguageActive
                    ? `Hey there! Looking for a mobile app that captivates your users from the get-go? You're in the right place! I'm a frontend developer specialized in bringing your ideas to life in the digital world. Every detail of your app will be meticulously crafted to ensure it's visually appealing and user-friendly.`
                    : '¡Hola! ¿Quieres una app móvil que enamore a tus usuarios desde el primer momento? ¡Estás en el lugar adecuado! Soy un desarrollador frontend especializado en dar vida a tus ideas en el mundo digital. Cada detalle de tu app será cuidadosamente trabajado para asegurar que sea visualmente atractiva y fácil de usar.'}
                </p>
                <p className='mt-3'>
                  {engLanguageActive
                    ? `Ready to stand out in the mobile world? Let's talk and turn your idea into a digital reality!`
                    : '¿Listo para destacar en el mundo móvil? ¡Hablemos y convirtamos tu idea en una realidad digital!'}{' '}
                  🤯
                </p>
              </div>
            </article>
          </div>

          <div className='w-full flex justify-around flex-wrap row-span-2 col-span-full flex-row-reverse'>
            <div className='flex flex-col justify-center items-center'>
              <div className='h-[13em] w-[22em] rounded-[0.5em_0.5em_0_0] bg-white aaaa border-[1.5em] border-[#2d2d2d] border-b-0'></div>
              <div className='flex items-center relative h-8 w-[22em] rounded-[0_0_0.5em_0.5em] bg-[#2d2d2d]'>
                <div className='absolute left-[45%] text-sm text-white font-black flex items-center gap-1'>
                  <Image src={lg_icon} alt='lg_icon' width={18} height={18} />
                  <span>LG</span>
                </div>
                <FaPowerOff className='absolute right-8 text-white text-lg' />
              </div>
              <div className='h-8 w-8 bg-[#2d2d2d]'></div>
              <div className='h-4 w-[15em] bg-[#2d2d2d] rounded-[0.5em_0.5em_0_0]'></div>
            </div>
            <article className='w-1/2 flex flex-col items-center justify-center gap-8'>
              <h1 className='text-2xl font-bold text-[#333333c0]'>
                {engLanguageActive
                  ? `Applications and landing pages`
                  : 'Aplicaciones y Landing pages'}
              </h1>
              <div className='text-sm font-medium text-[#3333339e] border-l-8 border-light-800 bg-[#ececec39] pl-4 pr-2 py-6'>
                <p>
                  {engLanguageActive
                    ? `Hello! Looking to take your business to the next level online? You're in the right place! I'm a frontend web developer specialized in creating landing pages, websites, and desktop applications that propel your business forward. I turn your ideas into tangible, visually stunning results that captivate your users.`
                    : '¡Hola! ¿Quieres llevar tu negocio al siguiente nivel en línea? ¡Estás en el lugar indicado! Soy un desarrollador web frontend especializado en crear landing pages, páginas web y aplicaciones de escritorio que impulsan tu negocio. Convertí tus ideas en resultados tangibles y visualmente impactantes que cautiven a tus usuarios.'}
                </p>
                <p className='mt-3'>
                  {engLanguageActive
                    ? `Ready to take the digital leap? Let's talk and bring your ideas to life together!`
                    : '¿Listo para dar el salto digital? ¡Hablemos y hagamos realidad tus ideas juntos! '}
                  🚀
                </p>
              </div>
            </article>
          </div>
          <div className='w-[60%] m-[0_auto] rounded-md row-span-3 col-span-full p-8 bg-[#ececec4f] [backdrop-filter:blur(30px)]'>
            <Image
              src={devs_team}
              alt='devs_team_image'
              className='w-auto h-auto '
            />
            <h1 className='text-sm text-center font-extrabold text-[#333333c0]'>
              {engLanguageActive
                ? `DESARROLLADOR FULLSTACK`
                : 'FULLSTACK DEVELOPER'}{' '}
              🤩
            </h1>
            <p className='px-2 text-[0.85em] mt-4 font-medium text-[#3333339e]'>
              {engLanguageActive
                ? `I'm a versatile web developer, experienced in both frontend and backend. My goal is to enhance your project with my skills and expertise. Let's talk and see how I can contribute to your team's success.`
                : 'Soy un desarrollador web versátil, con experiencia tanto en el frontend como en el backend. Mi objetivo es potenciar tu proyecto con mis habilidades y experiencia. Hablemos y veamos cómo puedo contribuir al éxito de tu equipo.'}
            </p>
          </div>
        </div>
      </article>

      <section className='max-[830px]:gap-16 max-[830px]:flex-wrap gap-8 w-[90%] flex justify-evenly'>
        {skills.map((item, index) => (
          <div
            className='bg-white p-[2em_2.5em] gap-12 flex flex-col justify-start w-auto shadow-[14px_30px_20px_-10px_#0000004f] rounded-md'
            key={index}>
            <h1 className='w-max text-[#333333ac] [letter-spacing:5px] text-2xl font-extrabold text-center'>
              {item.title}
            </h1>
            <ul className='h-[10em] flex-wrap flex flex-col justify-between items-start gap-4'>
              {item.skills.map((skill, index) => (
                <li
                  className='text-xs cursor-default font-semibold text-[#3333339e] h-[3em] gap-2 flex items-center'
                  key={index}>
                  {/* Insert dynamically the icon corresponding to the value of item.skill */}
                  {addSvgIcon(skill)}
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Skills;
