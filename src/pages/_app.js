import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from "../../components/DashBoard/DashboardLayout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div>
      <SessionProvider session={session}>
        <DashboardLayout>
          <ToastContainer />
          <Component {...pageProps} />
        </DashboardLayout>
      </SessionProvider>
    </div>
  );
}
