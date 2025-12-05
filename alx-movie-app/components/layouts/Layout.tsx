import Footer from "./Footer";
import Header from "./Header";
import { ReactComponentsProps } from "@/interfaces";

const Layout: React.FC<ReactComponentsProps> = ({ children }) => {
    return(
        <>
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;