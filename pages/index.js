import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-indigo-100 flex h-screen items-center justify-center px-16">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-2000"></div>
        <div className="absolute left-20 -bottom-8 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-90 animate-blob animation-delay-4000"></div>
        <div>
          <div className="transform hover:scale-110 duration-300 delay-75 backdrop-filter backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl rounded-xl relative flex flex-col m-5 p-10 cursor-ponter items-center cursor-pointer">
            <h1>Dummy text</h1>
          </div>
          <div className="transform hover:scale-110 duration-300 delay-75 backdrop-filter backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl rounded-xl relative flex flex-col m-5 p-10 cursor-ponter items-center cursor-pointer">
            <h1>Dummy text</h1>
          </div>
          <div className="transform hover:scale-110 duration-300 delay-75 backdrop-filter backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl rounded-xl relative flex flex-col m-5 p-10 cursor-ponter items-center cursor-pointer">
            <h1>Dummy text</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
