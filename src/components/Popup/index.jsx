import React from "react";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";
import { Button } from "../Button";

Popup.propTypes = {
  loading: PropTypes.bool,
  show: PropTypes.bool,
  children: PropTypes.node,
  onHide: PropTypes.func,
  onSubmit: PropTypes.func,
};

export function Popup({ loading, show, children, onHide, onSubmit }) {
  return (
    <>
      {show ? (
        <>
          <div className="fixed z-50 block w-full h-full top-0 left-0">
            <div
              className="bg-white rounded-md border shadow-lg w-auto mx-auto my-14"
              style={{ maxWidth: 500 }}
            >
              <div className="flex flex-col w-full">
                <div className="flex justify-between py-2 px-3 border-b border-gray-200">
                  <div className="font-semibold">Tile</div>
                  <button className="focus:outline-none" onClick={onHide}>
                    <MdClose />
                  </button>
                </div>
                <div className="py-2 px-3">{children}</div>
                <div className="flex justify-end py-2 px-3">
                  <Button onClick={onHide}>Hủy</Button>
                  <Button loading={loading} type="primary" onClick={onSubmit}>
                    Lưu
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-black opacity-40 z-40" />
        </>
      ) : null}
    </>
  );
}
