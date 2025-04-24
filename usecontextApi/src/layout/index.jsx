import { Outlet } from 'react-router';
import Navbar from '../components/navBar';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
