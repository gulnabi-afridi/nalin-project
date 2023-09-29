import React from "react";

interface Props {
  closeModal: () => void;
}

const Modal = ({ closeModal }: Props) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          style={{ maxWidth: "500px", height: "180px" }}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex justify-start items-center">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-black sm:mx-0 sm:h-10 sm:w-10">
                👋
              </div>
              <div className=" text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Hi!
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={closeModal}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-5 py-2 bg-yellow-main text-[18px] text-black font-incon font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
