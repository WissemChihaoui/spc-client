import { Star } from "lucide-react"; // or use any star icon you prefer (e.g., react-icons)

export default function ServiceCard({ details }) {
  // Round to nearest 0.5
  const roundedRating = Math.round(details.avgRating * 2) / 2;

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200 bg-white">
      <div className="flex mb-4">
        <img src={details?.logo} alt="" className="max-w-20 mr-2" />
        <div>
          <h4 className="font-semibold text-4xl">{details?.name}</h4>
          <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={18}
              fill={i <= roundedRating ? "#facc15" : i - 0.5 === roundedRating ? "#facc15" : "none"}
              stroke="#facc15"
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({details?.avgRating?.toFixed(1)})</span>
                </div>
        </div>
      </div>
      <p className="leading-base text-lg font-semibold max-h-48 overflow-y-scroll">
        {details?.description}
      </p>
    </div>
  );
}

// import React from 'react'

// export default function DetailsCard({details}) {
//   return (
//     <div className='bg-white p-8 rounded-2xl'>
//         <div className="flex mb-4">
//             <img src={details?.logo} alt="" className='max-w-20'/>
//             <h4 className="font-semibold text-4xl">{details?.name}</h4>
//         </div>
//         <p className='leading-base text-lg font-semibold max-h-48 overflow-y-scroll'>{details?.description}</p>
//     </div>
//   )
// }
