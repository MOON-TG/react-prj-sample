import { Link } from "react-router-dom";

export default function FindIdOutput() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto w-96">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-3 text-2xl">ㅇㅇㅇ님의 아이디는</h1>
          <div className="flex ">
            <p className="mt-2 mb-4 text-gray-400">sample@sample.com</p>
            <p className="mb-4 ml-2 text-2xl">입니다</p>
          </div>
          <Link to="/login">
            <input
              type="submit"
              className="w-full h-12 mt-5 text-white bg-blue-500 border-none rounded-lg hover:bg-blue-600 active:bg-blue-600"
              value="로그인 하기"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
