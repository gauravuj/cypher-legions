"use client";
import Image from "next/image" 
import AuthForm from "./components/AuthForm"
import { useRouter } from "next/navigation";
import {HouseSimple} from "@phosphor-icons/react"

export default function Login() {
   const router = useRouter();
    return (
      <>
         <div style={{
            zIndex: -1, 
            position: "fixed",
            width: "100vw",
            height: "100vh"
         }}>

         <Image 
         alt="background"
         src="/images/background/bg7.jpg"
         fill
         style={{objectFit: "cover"}}
         className="transition-opacity opacity-0 duration-[2s]"
         onLoadingComplete={(image) => image.classList.remove("opacity-0")}
         /> </div>
     
     <div
        className="
           flex
           h-full
           flex-col
           justify-center
           py-12
           sm:px-6
           lg:px-8
         " >

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image 
               alt="Logo"
               height="200"
               width="200"
               className="mx-auto w-auto"
               src="/images/LogoWhite.png"
            />

        </div>
        <AuthForm />
        <button className="relative left-[50%] top-[17%] bg-white/10 shadow-lg text-sm text-white hover:bg-green-500 rounded-full px-2 py-2 w-fit"
                 onClick={() => router.push('/')}><HouseSimple size={20} color="white" alt="homepage"/></button>
        </div>
        
        </>
    )
  }
  