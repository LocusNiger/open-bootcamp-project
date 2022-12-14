import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/login.scss";

export default function LoginForm2() {
  return (
    <div className="p-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 border backdrop-blur-sm form-container">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm">Sign in to access your account</p>
        </div>
        <form noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline pw">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button className="w-full px-8 py-3 font-semibold rounded-md">Sign in</button>
            </div>
            <p className="px-6 text-sm text-center">
              Don't have an account yet?
              <br></br>
              <Link href="/login" className="hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
