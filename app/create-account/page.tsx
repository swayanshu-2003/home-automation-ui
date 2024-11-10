// // pages/signup.tsx
// "use client"
// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
// import { signUp } from "@/database/db";
// import { Spinner } from "@/components/ui/spinner";
// import { useRouter } from "next/navigation";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const handleSignup = async () => {
//     setLoading(true);
//     try {
//       const user: any = await signUp(name, email, password);
//       await localStorage.setItem("user", JSON.stringify(user));
//       alert("Sign-up successful!");
//       router.push("/");
//     } catch (error: any) {
//       alert("Error signing up: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
//       <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
//         <CardHeader>
//           <CardTitle className="text-center text-2xl font-semibold">
//             Sign Up
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {/* Name Field */}
//             <div>
//               <Label htmlFor="name">Name</Label>
//               <div className="flex items-center mt-1">
//                 <FiUser className="text-gray-400 mr-2" />
//                 <Input
//                   id="name"
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email Field */}
//             <div>
//               <Label htmlFor="email">Email</Label>
//               <div className="flex items-center mt-1">
//                 <FiMail className="text-gray-400 mr-2" />
//                 <Input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e: any) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <Label htmlFor="password">Password</Label>
//               <div className="flex items-center mt-1">
//                 <FiLock className="text-gray-400 mr-2" />
//                 <Input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e: any) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter className="pt-4">
//           <Button className="w-full" onClick={handleSignup}>
//             {loading ? <Spinner /> : "Sign Up"}
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Signup;
