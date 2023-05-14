import { useCallback, useState } from "react";
import Input from "../components/Input"
import logo from './../assets/images/logo.png'


const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currenVariant) => currenVariant === 'login' ? 'register' : 'login');
    }, []);

    // const handleLogin = useCallback(() => {
    //     try {

    //     } catch (error) {
    //         console.log(error);
    //     }
    // },[email,password]);

    return (
        <div>
            <div className=" 
                absolute
                h-full w-full 
                md:bg-[url('https://cdn.mos.cms.futurecdn.net/98GnqFKaUMYU3GG5HxhLWZ.jpg')] 
                bg-no-repeat 
                bg-center 
                bg-fixed 
                bg-cover
                ">
                <div className="bg-black w-full h-full md:bg-opacity-50">
                    <nav className="px-12 py-5">
                        <img src={logo} alt="logo" className="h-12" />
                    </nav>
                    <div className="flex justify-center">
                        <div className="
                        bg-black 
                        bg-opacity-70 
                        px-16 py-16 
                        self-center 
                        mt-2 
                        lg:w-2/5 lg:max-w-md 
                        w-[360px]
                        sm">
                            <h2 className="text-white text-4xl mb-8 font-semibold">
                                {variant === 'login' ? 'Sign In' : 'Sign Up'}
                            </h2>
                            <div className="flex flex-col gap-4">
                                {variant === 'register' && (
                                    <Input
                                        id="name"
                                        label="Username"
                                        value={name}
                                        onChange={(ev: any) => setName(ev.target.value)}
                                    />
                                )}
                                <Input
                                    id="email"
                                    type="email"
                                    label="Email"
                                    value={email}
                                    onChange={(ev: any) => setEmail(ev.target.value)}
                                />
                                <Input
                                    id="password"
                                    type="password"
                                    label="Password"
                                    value={password}
                                    onChange={(ev: any) => setPassword(ev.target.value)}
                                />
                            </div>
                            <button onClick={() => console.log(`email: ${email} password: ${password}`)}
                                className="
                                bg-green-500 
                                py-3 
                                text-white 
                                rounded-md 
                                w-full 
                                mt-10 
                                hover:bg-green-600  
                                transition">
                                {variant === 'login' ? 'Sign In' : 'Sign Up'}
                            </button>
                            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                                <div className="
                                w-10
                                h-10
                                bg-white
                                rounded-full
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                hover:opacity-80
                                transition
                                ">
                                    {/* <FcGoogle size={30} /> */}
                                </div>
                                <div
                                    // onClick={() => signIn('github', { callbackUrl: '/' })}
                                    className="
                                w-10
                                h-10
                                bg-white
                                rounded-full
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                hover:opacity-80
                                transition
                                ">
                                    {/* <FaGithub size={30} /> */}
                                </div>
                            </div>
                            <p className="text-neutral-500 mt-12">
                                {variant === 'login' ? 'New to Netflix?' : 'Already registered? Please'}
                                <span
                                    onClick={toggleVariant}
                                    className="text-white ml-1 hover:underline cursor-pointer">
                                    {variant === 'login' ? 'Sign up now.' : 'Sign In'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login