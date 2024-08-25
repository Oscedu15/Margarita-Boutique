// import { FaShippingFast } from "react-icons/fa";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaCircleDollarToSlot, FaRegStar } from "react-icons/fa6";
import { IoLogoWhatsapp, IoEarthOutline } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import { TfiHandPointDown } from "react-icons/tfi";
import Logo from "../public/margarita.png";
import Social from "./components/Social";

const additionalInfo = [
  {
    id: 1,
    title: "Compras Por Whatsapp Colombia",
    description:
      "Enjoy Free Shipping On All Orders - No Minimum Purchase Required.",
    icon: <IoLogoWhatsapp size={30} />,
    href: "https://wa.me//+573142322163",
  },

  {
    id: 3,
    title: "E-commerce",
    description: "We Offer A 100% Money-Back Guarantee For Your Satisfaction.",
    icon: <FaCircleDollarToSlot size={30} />,
    href: "https://www.mercadolibre.com.co/",
  },
  {
    id: 4,
    title: "Soporte Tecnico",
    description:
      "Our Team Is Available 24/7 To Help With Any Questions Or Concerns.",
    icon: <MdOutlineMarkUnreadChatAlt size={30} />,
    href: "https://wa.me//+584244982754",
  },
  {
    id: 2,
    title: "Compras Por Whatsapp Mexico",
    description:
      "Our Team Is Available 24/7 To Help With Any Questions Or Concerns.",
    icon: <ImWhatsapp  size={30} />,
    href: "https://wa.me//+573163750319",
  },
  // {
  //   id: 5,
  //   title: "MONEY BACK",
  //   description: "We Offer A 100% Money-Back Guarantee For Your Satisfaction.",
  //   icon: <FaShippingFast size={30} />,
  //   href: "https://wa.me//+5492235365483",
  // },
];

function App() {
  return (
    <>
      <section className="container mt-12 lg:mt-14 overflow-x-hidden">
        <div className=" flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="w-40 h-40 flex ">
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-bold text-[30px] flex gap-x-1 text-gray-600 italic">Margarita <span className="text-gray-400">Boutique</span><span className="text-yellow-300">
              <FaRegStar size={25}/>
              </span> </h2>
            <h3 className="flex gap-x-1 text-[25px] font-semibold text-gray-600 capitalize">Envios a Todo el mundo 
              <span className="text-blue-400">
                <IoEarthOutline size={25}/>
                </span></h3>
            <h4 className="flex gap-x-1 text-[20px] font-thin capitalize text-gray-600 italic">Para compras, haz Click Aqui 
              <span className="text-yellow-500"><TfiHandPointDown size={25}/></span> </h4>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row flex-wrap">
            {additionalInfo?.map((info) => (
              <a href={info.href} key={info.id} target="_blank" rel="noopener">
                <div className="flex items-center justify-around lg:justify-between text-center gap-3 bg-white/50 rounded-lg border p-2
                transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-black hover:bg-white/100
                hover:translate-x-2 border-gray-300 outline-none">
                  <div className="text-green-500">{info.icon}</div>
                  {/* <p className="mt-2">{info.description}</p> */}
                  <h3 className="text-[15px] font-medium text-gray-600 font-sans cursor-pointer">{info.title}</h3>
                </div>
              </a>
            ))}
          </div>
          <p className="font-serif flex italic max-w-6xl text-wrap text-[18px] text-gray-500">“La moda no es algo que solo exista en los vestidos. La moda está en el cielo, en las calles. La moda tiene que ver con las ideas, con la forma en que vivimos, con lo que está sucediendo”.</p>
          <span className="italic font-semibold text-gray-600 text-[20px]">Coco Channel.</span>
          <Social/>
        </div>
      </section>
    </>
  );
}

export default App;
