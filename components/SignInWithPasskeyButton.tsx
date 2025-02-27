import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export function SignInWithPasskeyButton() {
  const { signIn } = useSignIn();
  const router = useRouter();
  const signInWithPasskey = async () => {
    try {
      const signInAttempt = await signIn?.authenticateWithPasskey({
        flow: "discoverable",
      });
      if (signInAttempt?.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };
  return <button onClick={signInWithPasskey} 
  className="flex w-full items-center justify-center gap-x-3 rounded-md bg-neutral-700 px-3.5 py-1.5 text-sm font-medium text-white shadow-[0_1px_0_0_theme(colors.white/5%)_inset,0_0_0_1px_theme(colors.white/2%)_inset] outline-none hover:bg-gradient-to-b hover:from-white/5 hover:to-white/5 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gradient-to-b active:from-black/20 active:to-black/20 active:text-white/70"
  >Sign in with a passkey</button>;
}
function setActive(arg0: { session: string | null; }) {
  throw new Error("Function not implemented.");
}

