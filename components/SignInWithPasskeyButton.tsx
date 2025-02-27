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
  return <button onClick={signInWithPasskey}>Sign in with a passkey</button>;
}
