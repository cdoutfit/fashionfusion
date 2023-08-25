import Image from "next/image";
import { FaFacebookF, FaTwitter, FaGoogle, FaUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from 'next/link';
export default function Signin() {

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-blue-500 to-white-500">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="py-10">
              <div className="text-left font-bold">
                <span className="text-blue-300">Fashion</span>Fusion
              </div>

              <h2 className="text-3xl font-bold text-blue-300 mb-2">
                Sign into Account
              </h2>

              <div className="border-2 w-10 border-blue-300 inline-block mb-2"></div>
              <div className="flex justify-center mb-2">
                <a
                  href="#"
                  className="border-2 border-blue-500 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-blue-500 rounded-full p-3 mx-1"
                >
                  <FaTwitter className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-blue-500 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <div className="text-gray-400 my-3">
                <p>or use your user id</p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                    <FaUser className="text-gray-400 m-2" />
                    <input
                      type="username"
                      name="username"
                      placeholder="Username"
                      className="bg-gray-200 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-200 w-64 p-2 flex items-center">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="bg-gray-200 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex justify-between w-64 mb-5">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />
                      Remember me
                    </label>
                    <a href="#" className="text-xs">
                      Forgot password?
                    </a>
                  </div>
                  <Link
                    href="/Homescreen"
                    className="border-2 border-blue-500  text-blue-500 rounded-full px-12 py-2 font-semibold hover:bg-blue-300 hover:text-white"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-blue-300 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Amigo!</h2>
            <h2 className="text-2xl font-bold mb-1">Welcome to Login</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">Don't have an account?</p>
           <Link href={'/Signup'}>Signup</Link>
          </div>
        </div>
      </main>
    </div>
  );
}


