import Image from "next/image";
import { FaFacebookF, FaTwitter, FaGoogle, FaUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from 'next/link';
export default function Signin() {

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-blue-500 to-white-500">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-5/6 max-w-2xl">
          <div className="w-4/5 p-5">
            <div className="py-10">
              <div className="text- font-bold">
                <span className="text-blue-300">Fashion</span>Fusion
              </div>

              <h2 className="text-3xl font-bold text-blue-300 mb-2">
                Reset password
              </h2>

              
              <div className="text-gray-400 my-3">

                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="enter new password"
                      name="enter new password"
                      placeholder="Enter new password"
                      className="bg-gray-200 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-200 w-64 p-2 flex items-center">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="confirm new password"
                      name="confirm new password"
                      placeholder="Confirm new Password"
                      className="bg-gray-200 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex justify-between w-64 mb-5">
                   
                  </div>
                  <Link
                    href="/Sign in"
                    className="border-2 border-blue-500  text-blue-500 rounded-full px-12 py-2 font-semibold hover:bg-blue-300 hover:text-white"
                  >
                    Reset Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

