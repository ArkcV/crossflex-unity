'use client'

import Image from 'next/image';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedRememberMe = localStorage.getItem("rememberMe");
    if (storedEmail && storedRememberMe === "true") {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingButton(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string ?? "",
      password: formData.get("password") as string ?? "",
    };

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", data.email);
      localStorage.setItem("rememberMe", "true");

    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberMe");
    }

    const result = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    setTimeout(() => {
      setLoadingButton(false);
    }, 3000);

    if (result?.ok) {
      toast.success("Login realizado com sucesso!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } else {
      toast.error("Erro ao fazer login: " + result?.error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-cf_white">
      <div className="relative flex flex-col m-2 space-y-8 bg-gray-cf_gray1 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <form onSubmit={handleLogin} className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-blue-cf_blue">Bem-Vindo</span>
          <span className="font-light text-gray-400 mb-8">
            Bem-vindo de volta!, Por favor insira seus dados.
          </span>
          <div className="py-4">
            <span className="mb-2 text-md font-bold text-blue-cf_blue">Email</span>
            <input
              type="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-2 border-blue-cf_blue rounded-md placeholder:font-light placeholder:text-gray-500 focus:border-blue-cf_blue focus:outline-none"
              placeholder="Digite seu Email"
              autoComplete='email'
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md font-bold text-blue-cf_blue">Password</span>
            <input
              type="password"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-2 border-blue-cf_blue rounded-md placeholder:font-light placeholder:text-gray-500 focus:border-blue-cf_blue focus:outline-none"
              placeholder="Digite sua Senha"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name='rememberMe'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <span className="text-md">Lembrar-me</span>
            </label>
            <span className="text-base cursor-pointer text-blue-cf_blue">Recuperar Senha?</span>
          </div>
          <button
            className={`w-full ${loadingButton ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-cf_blue'} text-white-cf_white text-xl font-semibold p-2 rounded-xl mb-6 hover:bg-blue-950 flex items-center justify-center`}
            disabled={loadingButton}
          >
            {loadingButton ? <FaSpinner className="animate-spin text-white-100" size={24} /> : 'Entrar'}
          </button>
        </form>
        <div className="relative hidden md:block">
          <Image
            src="/crossflex-logo.png"
            alt="Background"
            width={400}
            height={600}
            className="rounded-r-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}