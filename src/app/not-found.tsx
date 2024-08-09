import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 flex-shrink-0">
      <img src='/images/404.jpeg' className='h-[400px]' alt='not_found' />
      <h1 className='text-5xl font-bold'>404</h1>
      <span className="font-bold text-xl sm:text-3xl capitalize text-gray-500">This page could not be found.</span>
      <Link href={'/'} className='w-fit h-fit px-5 py-2 rounded-full text-white bg-primary duration-300 hover:border-2 hover:border-primary hover:text-primary hover:bg-white'>
        back to home page
      </Link>
    </div>
  );
}