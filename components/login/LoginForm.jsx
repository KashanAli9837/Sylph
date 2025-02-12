import LoginBtn from "./LoginBtn";

const LoginForm = () => {
  return (
    <div className="w-full md:w-1/2 h-full rounded-lg flex flex-col justify-center items-center">
      {/* Heading */}
      <h1 className="font-semibold text-4xl md:text-3xl lg:text-4xl mb-2">
        Welcome to Sylph!
      </h1>
      <h3 className="text-lg md:text-base lg:text-lg mb-8">
        Let's turn up the volume
      </h3>

      {/* Login Button */}
      <LoginBtn />
    </div>
  );
};

export default LoginForm;
