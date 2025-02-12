import { signIn } from "@/auth";
import Image from "next/image";

export default function LoginBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button className="w-64 h-12 rounded-full border border-[#FDE2CF] hover:bg-[#FDE2CF] transition-all">
        <div className="w-full h-full flex items-center justify-center gap-2 text-sm">
          <span>Login With Github</span>
          <Image
            src="/login/github.png"
            alt="GitHub logo"
            width={20}
            height={20}
            className="w-5 h-5"
            priority
          />
        </div>
      </button>
    </form>
  );
}
