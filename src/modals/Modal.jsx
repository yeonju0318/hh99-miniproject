import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

function Modal({
  title,
  body,
  actionLabel,
  isOpen,
  onClose,
  onSubmit,
  icon: Icon,
}) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none bg-neutral-800/70 z-50 ">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto  ">
        {/* CONTENT */}
        <div
          className={`translate duration-300 h-full  
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100 " : "opacity-0"}
          `}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
            {/* HEADER */}
            <div className=" flex items-center p-6 rounded-t justify-center relative border-b-[1px] ">
              <button
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 translation absolute left-9"
              >
                <IoMdClose size={18} />
              </button>
              <div className="telt-lg font-semibold">{title}</div>
            </div>

            {/* BODY */}
            <div className="relative flex-auto p-6">{body} </div>

            {/* Footer */}
            <div className="flex flex-col gap-2 p-6">
              <div className="flex w-full flex-row items-center gap-4">
                
                {/* Button */}
                <button
                  onClick={onSubmit}
                  className="relative w-full rounded-lg transition hover:opacity-80 bg-blue-500 border-blue-500 text-white py-3 text-md font-semibold border-2"
                >
                  {Icon && <Icon size={24} className="absolute left-4 top-3" />}
                  {actionLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
