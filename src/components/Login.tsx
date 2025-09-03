import React, { useState } from "react";
import { User } from "../types";
import { staticUsers, credentials } from "../data";

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (credentials[username as keyof typeof credentials]) {
      if (credentials[username as keyof typeof credentials] === password) {
        const user = staticUsers.find((u) => u.username === username);
        if (user) {
          onLogin(user);
        } else {
          setError("User data not found");
        }
      } else {
        setError("Invalid password");
      }
    } else {
      setError("Invalid username");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-slate-900 mb-1">
              Welcome back
            </h1>
            <p className="text-slate-500 text-sm">Sign in to continue</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-0 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all duration-200 text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-0 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all duration-200 text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-xs px-4 py-3 rounded-2xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 px-4 rounded-2xl font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-all duration-200 text-sm">
              Sign in
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-500 text-center mb-3">
              Admin Access
            </p>
            <div className="text-center text-xs text-slate-600">
              <div className="flex justify-between">
                <span>admin</span>
                <span className="text-slate-400">admin123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
