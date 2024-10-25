import React from "react";
import { Icon } from "@mdi/react";
import { mdiPlus } from "@mdi/js";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="flex items-center mt-10 mr-10 hover"
      >
        <p>Add a magazine</p>
        <Icon path={mdiPlus} size={2} />
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none text-white bg-black">
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Add a magazine</h3>
              </div>
              <div className="relative p-6 flex-auto">
                <div>
                  <p>Title</p>
                  <input
                    type="text"
                    placeholder="Title..."
                    className="rounded-sm h-10"
                  />
                </div>
                <div>
                  <p>Picture</p>
                  <input
                    type="text"
                    placeholder="Cover..."
                    className="rounded-sm h-10"
                  />
                </div>
                <div>
                  <p>Description</p>
                  <input
                    type="text"
                    placeholder="Description..."
                    className="rounded-sm h-10"
                  />
                </div>
                <div>
                  <p>Character (optional)</p>
                  <input
                    type="text"
                    placeholder="Character..."
                    className="rounded-sm h-10"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-white bg-red-500 px-6 py-2 w-1/2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-green-500 text-white active:bg-emerald-600 text-sm px-6 py-2 w-1/2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
