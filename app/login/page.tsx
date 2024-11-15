// pages/signin.tsx
"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { FiMail, FiLock } from "react-icons/fi";
import { useRouter } from "next/navigation";

import { Spinner } from "@/components/ui/spinner";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const authUsername: any = "debasish@gmail.com";
  const authPassword: any = "debasish2004";

  const handleSignin = async () => {
    try {
      const payload: any = {
        username: email,
        password: password,
      };
      let success: boolean = false;
      if (email === authUsername && password === authPassword) {
        success = true;
      }
      if (success) {
        localStorage.setItem("token", "authorized");
      } else {
        alert("invalid credintials!");
      }
      router.push("/");
    } catch (error: any) {
      alert("Error signing in: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-[#1E2140] text-white">
      <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center mt-1">
                <FiMail className="text-gray-400 mr-2" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="flex items-center mt-1">
                <FiLock className="text-gray-400 mr-2" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Button className="w-full" onClick={handleSignin}>
            {loading ? <Spinner /> : "Sign in"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signin;
