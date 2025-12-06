import Footer from "./Footer";
import Header from "./Header";
import { ComponentsProps } from "@/interfaces";

const Layout: React.FC<ComponentsProps> = ({ children }) => {
    return(
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    )
}

export default Layout;