// icons
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Social = () => {
  return (
    <div className="container mx-auto z-20 ">
      <div className="flex flex-col items-center justify-center gap-10">
        {/* social */}
        <ul className="flex text-white text-xl gap-4">
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] border bg-gradient-to-r from-[#e52d27] to-[#b31217] 
                    rounded-full flex items-center justify-center"
            >
              <FaYoutube size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] bg-gradient-to-r from-[#00c6ff] to-[#0072ff] border 
                    rounded-full flex items-center justify-center "
            >
              <FaFacebookF size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] border bg-gradient-to-r from-[#1DA1F2] to-[#009ffc]
                    rounded-full flex items-center justify-center "
            >
              <FaTwitter size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] border bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]
                    rounded-full flex items-center justify-center"
            >
              <FaInstagram size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] border text-white border-white/[0.15] 
                    rounded-full flex items-center justify-center bg-black"
            >
              <FaTiktok size={25} />
            </a>
          </li>
        </ul>
        {/* copyright */}
        <div
          className="border-t border-gray-300 text-[15px] text-gray-600
                font-light w-full flex flex-col items-center justify-center pb-3 lg:flex-row"
        >
          <p className="text-gray-400 text-[15px] text-wrap"> &#169; Copyright 2024 - Margarita Boutique. Todos los Derechos Reservados.</p>
          <span className="italic text-[15px] text-gray-500 pl-0 lg:pl-1 mt-2 lg:mt-0">Desarrollado por Oscar Garcia</span>
        </div>
      </div>
    </div>
  );
};

export default Social;
