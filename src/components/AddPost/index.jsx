import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useInputText } from "../../hooks/useInputText";
import { Input } from "../Input";
import { Popup } from "../Popup";

export function AddPost() {
  const [inputText] = useInputText();
  const [inputText2] = useInputText();
  const [isShow, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(false);
    }, 5000);
  };

  return (
    <>
      <div className="flex items-center w-full bg-white py-2 px-4 rounded-md shadow mb-2">
        <FaUserCircle className="text-4xl text-blue-500" />
        <input
          type="text"
          className="bg-gray-200 w-full rounded-full py-1 px-4 ml-4 focus:outline-none"
          placeholder="Hôm nay bạn thế nào?"
          onClick={() => setShow(!isShow)}
        />
      </div>
      <Popup
        loading={loading}
        show={isShow}
        onHide={() => setShow(false)}
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <div className="w-1/2 mx-1">
            <label>Họ</label>
            <Input placeholder="Họ" {...inputText} />
          </div>
          <div className="w-1/2 mx-1">
            <label>Tên</label>
            <Input placeholder="Tên" {...inputText2} />
          </div>
        </div>
      </Popup>
    </>
  );
}
