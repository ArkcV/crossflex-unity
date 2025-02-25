'use client';

import Image from 'next/image';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
  
    console.log("Dados do formulário:", data);

    const result = await signIn("credentials", {
      ...data,
      redirect: false, 
    });

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      console.error("Erro ao fazer login", result?.error);
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
              className="w-full p-2 border-2 border-blue-cf_blue rounded-md placeholder:font-light placeholder:text-gray-500 focus:border-blue-cf_blue focus:outline-none"
              placeholder="Digite sua Senha"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <label className="flex items-center">
              <input type="checkbox" name='ch' className="mr-2" />
              <span className="text-md">Lembrar-me</span>
            </label>
            <span className="text-base cursor-pointer text-blue-cf_blue">Recuperar Senha?</span>
          </div>
          <button className="w-full bg-blue-cf_blue text-white-cf_white text-xl font-semibold p-2 rounded-xl mb-6 hover:bg-blue-950">
            Entrar
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
