import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <>
            <div className="w-frll min-h-screen p-6 bg-indigo-200">
                <Header/>

                <main className="w-full max-w-screen-lg min-h-screen m-auto">
                    {props.children}
                </main>

                <Footer/>
            </div>
        </>
    )
}

export default Layout