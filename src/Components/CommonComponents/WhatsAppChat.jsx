// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const WhatsAppChat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasPlayed, setHasPlayed] = useState(false);

//   // Configuration
//   const phoneNumber = "911234567890";
//   const message =
//     "Hi Incorplus Venture, I have a query regarding your services.";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;

//   // Sound Function
//   const playNotification = () => {
//     if (!hasPlayed) {
//       const audio = new Audio(
//         "https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3"
//       );
//       audio.volume = 0.4;
//       audio
//         .play()
//         .catch((e) => console.log("Audio play blocked until interaction"));
//       setHasPlayed(true);
//     }
//   };

//   const handleToggle = () => {
//     if (!isOpen) playNotification();
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans transform-gpu">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             className="mb-4 w-72 md:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 will-change-transform"
//           >
//             {/* Header */}
//             <div className="bg-[#075e54] p-4 flex items-center gap-3">
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&h=100&auto=format&fit=crop"
//                   alt="Support"
//                   className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
//                 />
//                 <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#075e54] rounded-full"></span>
//               </div>
//               <div className="flex-1">
//                 <h4 className="text-white font-bold text-sm leading-tight">
//                   Incorplus Support
//                 </h4>
//                 <p className="text-white/80 text-[10px]">
//                   Online • Replies in minutes
//                 </p>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-1 text-white/50 hover:text-white transition-colors"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Chat Body */}
//             <div className="p-4 bg-[#e5ddd5] min-h-[100px] relative">
//               <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[90%] relative">
//                 <p className="text-gray-800 text-sm leading-relaxed">
//                   Hi there! 👋 <br />
//                   How can we help you today with your business registration or
//                   funding?
//                 </p>
//                 <span className="text-[9px] text-gray-400 mt-1 block text-right">
//                   {new Date().toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                   })}
//                 </span>
//               </div>
//             </div>

//             {/* Action Footer */}
//             <div className="p-3 bg-white">
//               <a
//                 href={whatsappUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128c7e] text-white font-bold py-3 px-4 rounded-xl transition-all text-sm shadow-md active:scale-95"
//               >
//                 <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                 </svg>
//                 Open WhatsApp
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main Trigger Button */}
//       <motion.button
//         onClick={handleToggle}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] z-50 border-2 border-white/10"
//       >
//         <AnimatePresence mode="wait">
//           {isOpen ? (
//             <motion.span
//               key="close"
//               initial={{ rotate: -90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: 90, opacity: 0 }}
//               className="text-white text-xl"
//             >
//               ✕
//             </motion.span>
//           ) : (
//             <motion.div
//               key="icon"
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0, opacity: 0 }}
//             >
//               <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//               </svg>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.button>
//     </div>
//   );
// };

// export default WhatsAppChat;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Configuration
  const phoneNumber = "919129134553";
  const message =
    "Hi Incorplus Venture, I have a query regarding your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Sound Function
  const playNotification = () => {
    if (!hasPlayed) {
      const audio = new Audio(
        "https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3"
      );
      audio.volume = 0.4;
      audio
        .play()
        .catch((e) => console.log("Audio play blocked until interaction"));
      setHasPlayed(true);
    }
  };

  const handleToggle = () => {
    if (!isOpen) playNotification();
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans transform-gpu">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-72 md:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 will-change-transform"
          >
            {/* Header */}
            <div className="bg-[#075e54] p-4 flex items-center gap-3">
              <div className="relative">
                {/* USER PROFILE ICON SVG */}
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#075e54] rounded-full"></span>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-sm leading-tight">
                  Incorplus Support
                </h4>
                <p className="text-white/80 text-[10px]">
                  Online • Replies in minutes
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-white/50 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#e5ddd5] min-h-[100px] relative">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[90%] relative">
                <p className="text-gray-800 text-sm leading-relaxed">
                  Hi there! 👋 <br />
                  How can we help you today with your business registration or
                  funding?
                </p>
                <span className="text-[9px] text-gray-400 mt-1 block text-right font-medium">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-3 bg-white">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128c7e] text-white font-bold py-3 px-4 rounded-xl transition-all text-sm shadow-md active:scale-95"
              >
                {/* WhatsApp Logo SVG */}
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Open WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] z-50 border-2 border-white/10"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="text-white text-xl"
            >
              ✕
            </motion.span>
          ) : (
            <motion.div
              key="icon"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default WhatsAppChat;
