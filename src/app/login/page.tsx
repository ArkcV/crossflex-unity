'use client';

import Image from 'next/image';

export default function Login() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-cf_white">
      <div className="relative flex flex-col m-2 space-y-8 bg-gray-cf_gray1 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-blue-cf_blue">Bem-Vindo</span>
          <span className="font-light text-gray-400 mb-8">
            Bem-vindo de volta!, Por favor insira seus dados.
          </span>
          <div className="py-4">
            <span className="mb-2 text-md font-bold text-blue-cf_blue">Email</span>
            <input
              type="text"
              name='email'
              className="w-full p-2 border-2 border-blue-cf_blue rounded-md placeholder:font-light placeholder:text-gray-500 focus:border-blue-cf_blue focus:outline-none"
              placeholder="Digite sua Email"
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
              <input
                type="checkbox"
                name='ch'
                className="mr-2"
              />
              <span className="text-md">Lembrar-me</span>
            </label>
            <span className="text-base cursor-pointer text-blue-cf_blue">Recuperar Senha?</span>
          </div>
          <button className="w-full bg-blue-cf_blue text-white-cf_white text-xl font-semibold p-2 rounded-xl mb-6 hover:bg-blue-950 
             disabled:bg-blue-cf_blue">
            Entrar
          </button>
        </div>
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
