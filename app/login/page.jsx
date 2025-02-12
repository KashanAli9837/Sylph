import LoginForm from "@/components/login/LoginForm";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#FFF6EF] w-full p-6 flex justify-between items-center">
      {/* Left Section: Image */}
      <div className="hidden w-1/2 h-full rounded-lg md:flex justify-center items-center">
        <Image
          src="/login/boy.png"
          alt="A boy enjoying music"
          width={400}
          height={400}
          className="w-[400px] h-[400px]"
          priority
        />
      </div>

      <LoginForm />
    </div>
  );
};

export default Login;
