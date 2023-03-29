import { RiKakaoTalkFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl text-center text-primary">Login</h1>

          <input
            type="text"
            className="w-full p-3 mb-4 bg-white input input-primary"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="w-full p-3 mb-4 bg-white input input-primary"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full font-bold bg-blue-500 border-none btn btn-primary"
          >
            로그인
          </button>
          <button
            type="submit"
            className="w-full mt-3 font-bold text-black bg-yellow-300 border-none btn btn-warning"
          >
            <RiKakaoTalkFill className="mr-2 text-2xl" />
            카카오로 로그인
          </button>
          <div className="flex justify-end mt-3">
            <Link to="/findid">
              <p className="text-xs">아이디 찾기</p>
            </Link>
            <p className="ml-1 mr-1 text-xs text-gray-300">|</p>
            <Link to="/findpw">
              <p className="text-xs">비밀번호 찾기</p>
            </Link>
          </div>
        </div>

        <div className="flex mt-6 text-grey-dark">
          <p className="font-semibold ">회원이 아니신가요?</p>
          <p
            herf="#"
            className="ml-3 font-bold text-blue-700 underline underline-offset-2 hover:cursor-pointer"
          >
            <Link to="/signup/">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
