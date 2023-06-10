import '@/styles/globals.css'
import Footer from '@/components/Landing/Footer'

export default function App({Component, pageProps}){

    return (
    <div>
        <div className = "mb-auto w-full" >
         <Component {... pageProps} />
        </div>
        <Footer/>
    </div>
)


}