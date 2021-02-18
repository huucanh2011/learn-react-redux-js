import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { useInputText } from "../../hooks/useInputText";

export default function LoginPage() {
  const [inputUsername] = useInputText();
  const [inputPassword] = useInputText();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username", inputUsername.value);
    console.log("Password", inputPassword.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="text-gray-600 text-lg my-6">Đăng nhập</div>
      <div className="flex flex-col w-6/12 mb-4">
        <label className="text-gray-600 mb-2">Tên đăng nhập</label>
        <input
          type="text"
          className="bg-white text-gray-500 py-1 px-4 rounded-md focus:outline-none"
          placeholder="Nhập tên đăng nhập"
          {...inputUsername}
        />
      </div>
      <div className="flex flex-col w-6/12 mb-2">
        <label className="text-gray-600 mb-2">Mật khẩu</label>
        <input
          type="password"
          className="bg-white text-gray-500 py-1 px-4 rounded-md focus:outline-none"
          placeholder="Nhập mật khẩu"
          {...inputPassword}
        />
      </div>
      <div className="w-6/12">
        <Link
          to="/forgot-password"
          className="float-right text-gray-600 underline"
        >
          Bạn quên mật khẩu?
        </Link>
      </div>
      <div className="flex justify-between items-center w-6/12 mt-8">
        <Link
          to="/register"
          className="text-blue-500 underline hover:text-blue-600"
        >
          Tạo tài khoản mới
        </Link>
        <Button type="primary" onClick={handleSubmit} loading={loading}>
          Đăng nhập
        </Button>
      </div>
    </form>
  );
}
