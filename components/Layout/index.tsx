import { FC, memo, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: FC = function (props) {
  return (
    <>
      <h1>Layout\index.tsx</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tables">tables</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </>
  );
};

export default memo(Layout);
