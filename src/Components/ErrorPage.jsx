import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();


  return (
    <div id="error-page">

        <div id="error-page" className="w-full h-72 flex justify-center items-center flex-col">
                <h1 className="font-semibold text-xl text-[#7e8ffe]">Oops!</h1>
                <p className="font-semibold text-xl text-[#8494fd]"> 404 page not found.</p>
        </div>
        
    </div>
  );
}

