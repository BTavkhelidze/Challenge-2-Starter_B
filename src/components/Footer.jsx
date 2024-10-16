
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
const Footer = () => {
  return (
    <footer className='flex justify-center items-center py-6 sm:py-16 flex-col'>
      <div className='flex justify-center items-start md:flex-row mb-8 w-full'>
        <div className='flex-[1] flex flex-col justify-start mr-10'>
          <img
            src={logo}
            alt='bankLogo'
            className='w-[266px] h-[72.14px] object-contain'
          />
          <p className='font-poppinsfont-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]'>
            {' '}
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className='flex flex-col ss:my-0 my-4 min-w-[150px]'
            >
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white '>
                {footerlink.title}
              </h4>
              <ul className='list-none mt-4 gap-4 flex flex-col '>
                {footerlink.links.map((link) => (
                  <li
                    key={link.name}
                    className='font-poppins font-normal text-[16px] leading-6 text-dimWhite hover:text-secondary transition duration-200 cursor-pointer'
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins font-normal text-[18px] text-dimWhite text-center text-white leading-[27px]'>
          Copyright 2021 HooBank. All Rights Reserved.
        </p>
        <div className='flex flex-row mt-6 md:mt-0 gap-[30px]'>

          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}

              className='w-[21px] h-[21px] object-contain cursor-pointer '

            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
