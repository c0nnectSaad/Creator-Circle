import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import FloatingActionButton from "@/components/FloatingActionButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <FloatingActionButton />
    </>
  )
}
