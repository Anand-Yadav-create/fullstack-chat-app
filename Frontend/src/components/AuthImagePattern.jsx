import React from 'react'

// const AuthImagePattern = ({title,subtitle}) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 mt-8">
//         <div className="max-w-md text-center">
//             <div className="grid grid-cols-3 gap-3 mb-8">
//                 {
//                     [...Array(9)].map((_,i)=>(
//                         <div key={i} className={`aspect-square rounded-2xl bg-primary/10 ${i%2===0?"animate-pulse":""}`}/>
//                     ))
//                 }
//             </div>

//             <h2 className="text-2xl font-bold mb-4">{title}</h2>
//             <p className="text-base-content/60">{subtitle}</p>
//         </div>
      
//     </div>
//   )
// }

// export default AuthImagePattern
// const AuthImagePattern = ({ title = "Start a Conversation", subtitle = "Select a chat to begin talking", loading = false }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 mt-8 rounded-3xl shadow-lg">
//       <div className="max-w-md text-center">
        
//         {/* Chat Avatar/Placeholder Grid */}
//         <div className="grid grid-cols-3 gap-4 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-xl bg-primary/20 
//               ${loading && i % 2 === 0 ? "animate-pulse" : ""}`}
//             />
//           ))}
//         </div>

//         {/* Title */}
//         <h2 className="text-3xl font-bold text-primary mb-3">
//           {title}
//         </h2>

//         {/* Subtitle */}
//         <p className="text-base-content/70 text-lg leading-relaxed">
//           {subtitle}
//         </p>


//       </div>


//       <MessageCircle className="w-6 h-6 text-primary" />
// <Send className="w-6 h-6 text-success" />
// <User className="w-6 h-6 text-base-content" />
// <Phone className="w-6 h-6 text-blue-500" />
// <Video className="w-6 h-6 text-red-500" />
//     </div>
//   );
// };



import { MessageCircle, Send, User, Phone, Video } from "lucide-react";

const AuthImagePattern = ({title,subtitle}) => {
  // Define the icon components in an array (repeat to fill 9)
  const icons = [
    <MessageCircle className="w-8 h-8 text-primary" />,
    <Send className="w-8 h-8 text-success" />,
    <User className="w-8 h-8 text-base-content" />,
    <Phone className="w-8 h-8 text-blue-500" />,
    <Video className="w-8 h-8 text-red-500" />,
    <MessageCircle className="w-8 h-8 text-primary/60" />,
    <Send className="w-8 h-8 text-success/60" />,
    <User className="w-8 h-8 text-base-content/60" />,
    <Phone className="w-8 h-8 text-blue-400/60" />,
  ];

  return (
    <div className="flex items-center justify-center bg-base-200 p-12 mt-8 rounded-3xl shadow-lg">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {icons.map((Icon, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-primary/10 flex items-center justify-center"
            >
              {Icon}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-primary mb-3">Start a Conversation</h2>
        <p className="text-base-content/70 text-lg leading-relaxed">
          Choose a contact or create a new chat
        </p>
      </div>
    </div>
  );
};




export default AuthImagePattern;