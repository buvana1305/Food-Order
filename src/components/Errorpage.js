import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="w-8/12 my-6 m-auto">
      <h1 className="my-4 h-20  text-center text-2xl font-semibold">OOPS</h1>

      <p className="my-4 h-20  text-center text-2xl font-semibold">
        {err.status}: {err.statusText}
      </p>
    </div>
  );
};
export default ErrorPage;
