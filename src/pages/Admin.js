import AdminUser from "../components/admin/AdminUser";

export default function Admin() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black ">
      <div>
        <div className="grid content-center text-2xl text-white h-14 bg-cyan-700">
          <p className="ml-10">ADMIN PAGE</p>
        </div>
        <div className="flex content-center text-sm text-white bg-cyan-800">
          <p className="pt-2 pb-2 ml-10 hover:text-cyan-400">회원 관리</p>
          <p className="pt-2 pb-2 ml-10 hover:text-cyan-400">게시물 관리</p>
        </div>
        <div className="" style={{ width: "90%", margin: "auto" }}>
          <div>
            <AdminUser />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
