import { Link } from "react-router-dom";

export default function FindIdInput() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto w-96">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-4 text-2xl">아이디 찾기</h1>
          <p className="mb-4 text-gray-400">
            이름과 생년월일을 입력하여
            <br />
            아이디를 찾을 수 있습니다.
          </p>

          <p className="mb-2 text-sm">이름</p>
          <input
            type="text"
            className="w-full mb-3 bg-white border-b-2 border-gray-300"
            name="name"
            placeholder="이름을 입력해 주세요."
          />

          <p className="mb-2 text-sm">생년월일</p>
          <div className="flex">
            <input
              type="text"
              className="w-full mb-3 mr-2 bg-white border-b-2 border-gray-300"
              name="name"
              placeholder="생년(4자)"
            />
            <input
              type="text"
              className="w-full mb-3 mr-2 bg-white border-b-2 border-gray-300"
              name="name"
              placeholder="월(2자)"
            />
            <input
              type="text"
              className="w-full mb-3 bg-white border-b-2 border-gray-300"
              name="name"
              placeholder="일(2자)"
            />
          </div>
          <Link to="/findid/result">
            <input
              type="submit"
              className="w-full h-12 text-white bg-gray-400 border-none rounded-lg hover:bg-gray-500 active:bg-gray-500"
              value="아이디 찾기"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
