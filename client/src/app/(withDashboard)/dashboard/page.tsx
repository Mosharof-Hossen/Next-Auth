import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.name}</h1>
      <h1 className="text-2xl text-center mt-10">Welcome To {session?.user?.email}</h1>
      <Image
        src={session?.user?.image}
        alt="User image"
        width={100}
        height={100}
        className="rounded-full border-4 mt-5 border-blue-600 mx-auto"
      ></Image>
    </div>
  );
};

export default DashboardPage;
