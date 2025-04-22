import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import { IoAlertCircle } from "react-icons/io5";
import exclusive from '../../assets/exclusive.png'

export default function CardItem({ image, title, description, spaNote, price, exclusiveExist }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-4 py-6 border-b border-gray-300"
    >
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img src={image} alt={title} className="w-full h-auto object-cover rounded" />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:justify-between w-full gap-6">
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-800 mt-1">
              {description}
              <span className="font-bold text-black cursor-pointer"> (Lire la suite)</span>
            </p>
          </div>
          <div className="flex items-center mt-4 text-sm text-gray-600 gap-2">
            <span className="text-xl"><IoAlertCircle /></span>
            <p>{spaNote}</p>
          </div>
        </div>
        <span className="text-xl flex items-center text-gray-900 font-semibold">{price}</span>
        {/* Right section */}
        <div className="flex flex-col items-end justify-between min-w-[100px]">
          <span></span>
          {exclusiveExist && <img src={exclusive} alt="" />}
          <button className="bg-secondary text-white font-bold px-4 py-2 text-sm mt-2 flex items-center  gap-3 rounded-xl"><FaShoppingBag /> OFFRIR</button>
        </div>
      </div>
    </motion.div>
  );
}
