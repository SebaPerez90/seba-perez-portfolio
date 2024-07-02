import projects from '@/utils/projects.json';
import { useStore } from '@/context/store';
import { Roboto } from 'next/font/google';
import { FaLink } from 'react-icons/fa6';
import { PiGithubLogoFill } from 'react-icons/pi';
import Link from 'next/link';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Proyects = () => {
  const { engLanguageActive } = useStore();
  return (
    <section
      id='projects-section'
      className='flex flex-col items-center gap-24'>
      <h1
        className='dark:text-slate-50 text-4xl font-black text-[#334155]'
        style={roboto.style}>
        {engLanguageActive ? 'Projects.' : 'Proyectos.'}
      </h1>
      <div className='flex-wrap flex flex-row justify-center w-[80%] gap-24'>
        {projects.map((element, index) => (
          <div key={index}>
            <div className='flex flex-col w-[22em] h-[18em] justify-evenly p-[1em_2em] rounded-md bg-white border border-slate-200 [box-shadow:7px_9px_9px_-3px_rgba(0,0,0,0.16)] dark:bg-theme_dark-main-bg dark:border-slate-700'>
              <div>
                <h1 className='font-bold text-center text-xl dark:text-theme_dark-sup-sky'>
                  {element.title}
                </h1>
                <span className='flex justify-center gap-4 mt-4'>
                  {element.skills.map((element, index) => (
                    <span
                      key={index}
                      className='border font-bold text-xs rounded-md p-1 border-slate-600 text-[#404040ce] dark:text-slate-400'>
                      {element}
                    </span>
                  ))}
                </span>
              </div>
              <p className='font-medium text-[#2f2f2fe3] text-sm dark:text-slate-50'>
                {engLanguageActive
                  ? element.descriptionEN
                  : element.descriptionES}
              </p>
              <div className='flex justify-center gap-12'>
                <Link
                  className='bg-light-500 p-3 text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-theme_dark-sup-sky flex items-center'
                  href={element.repository}
                  aria-label='code-link'>
                  <PiGithubLogoFill className='mr-1' />
                  Code
                </Link>
                <Link
                  className='bg-light-500 p-3 text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-theme_dark-sup-sky flex items-center'
                  href={element.deploy}
                  aria-label='deploy-link'>
                  <FaLink className='mr-1' />
                  Deploy
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyects;

// import Link from 'next/link';
// import Image from 'next/image';

// import { FiGithub } from 'react-icons/fi';
// import { FaLink } from 'react-icons/fa6';

// import projects from '@/data/projets.json';

// import { Roboto } from 'next/font/google';
// import { useStore } from '@/context/store';
// import { motion } from 'framer-motion';

// const roboto = Roboto({
//   weight: ['900'],
//   subsets: ['latin'],
// });

// const Proyects = () => {
//   const { engLanguageActive } = useStore();

//   return (
//     <section
//       id='projects-section'
//       className='mt-20 lg:w-[80%] md:w-[90%] w-full flex flex-col justify-center items-center'>
//       <h1
//         className='dark:text-slate-50 text-5xl font-black min-[500px]:[letter-spacing:10px] text-[#334155]'
//         style={roboto.style}>
//         {engLanguageActive ? 'PROJECTS' : 'PROYECTOS'}💻
//       </h1>

//       {projects.map((item, index) => (
//         <div
//           className='flex-col sm:flex-row flex mt-28 rounded-none md:rounded-md shadow-[14px_30px_20px_-10px_#0000004f]'
//           key={index}>
//           <article className='dark:bg-theme_dark-main-bg rounded-none md:rounded-[0.5em_0_0_0.5em] gap-6 flex flex-col justify-around items-center bg-white w-full pt-6 pb-8'>
//             <h2
//               className='dark:text-theme_dark-sup-sky px-2 text-4xl text-center font-black text-[#334155]'
//               style={roboto.style}>
//               {item.title}
//             </h2>
//             <motion.div
//               transition={{ delay: 0.2, staggerChildren: 0.3, duration: 1 }}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               className='relative flex flex-col items-center gap-2'>
//               <div className='flex justify-center gap-1'>
//                 {item.skills.map((skill, index) => (
//                   <p
//                     key={index}
//                     className='p-[0.6em_0.8em] text-xs bg-[#e8e8e8]  dark:bg-slate-700  text-[#334155] font-black dark:text-white rounded-md'>
//                     # {skill}
//                   </p>
//                 ))}
//               </div>

//               <div className='w-[90%] m-[0_auto]'>
//                 {engLanguageActive ? (
//                   <p className='bg-[#ececec] border dark:bg-theme_dark-box-second text-sm rounded dark:border-slate-500/30 py-5 pl-3 pr-1 dark:text-zinc-300 font-medium text-[#334155] ml-4'>
//                     {item.descriptionES}
//                   </p>
//                 ) : (
//                   <p className='bg-[#ececec] border dark:bg-theme_dark-box-second text-sm rounded dark:border-slate-500/30 py-5 pl-3 pr-1 dark:text-zinc-300 font-medium text-[#334155] ml-4'>
//                     {item.descriptionES}
//                   </p>
//                 )}
//               </div>
//               <ul className='absolute bottom-[-4.5em] sm:bottom-0 sm:relative flex sm:flex-col md:flex-row gap-4 items-center mt-4'>
//                 <li>
//                   <Link
//                     className='hover:translate-y-[-0.3rem] btn-light dark:btn-dark dark:bg-gradient-to-t dark:from-theme_dark-main-bg dark:to-theme_dark-main-bg dark:hover:border-theme_dark-sup-pink dark:border-2'
//                     href={item.code}>
//                     <FiGithub className='text-xl' />
//                     Code
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className='hover:translate-y-[-0.3rem] btn-light dark:btn-dark dark:bg-gradient-to-t dark:from-theme_dark-main-bg dark:to-theme_dark-main-bg dark:hover:border-theme_dark-sup-pink dark:border-2'
//                     href={item.deploy}>
//                     <FaLink className='text-xl' />
//                     Deploy
//                   </Link>
//                 </li>
//               </ul>
//             </motion.div>
//           </article>
//           <article className='dark:bg-theme_dark-main-bg pt-9 pb-0 sm:pt-0 sm:pb-0 w-full flex justify-center bg-gradient-to-l from-light-100 to-white items-center rounded-none md:rounded-[0_0.5em_0.5em_0] dark:from-transparent dark:to-transparent'>
//             <motion.div
//               transition={{ delay: 0.2, staggerChildren: 0.3, duration: 0.3 }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               className='custom-scrollbar-light dark:custom-scrollbar-dark  py-6 flex w-[90%] [scroll-snap-type:x_mandatory] overflow-x-auto my-4'>
//               {item.screen_shoots.map((item, index) => (
//                 <Image
//                   key={index}
//                   src={item}
//                   width={500}
//                   height={500}
//                   loading='lazy'
//                   alt='screen-shoot'
//                   className='sticky left-0 h-full w-full object-cover snap-center'
//                 />
//               ))}
//             </motion.div>
//           </article>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Proyects;
