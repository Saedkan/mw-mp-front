import Header from 'features/Header'
import { Suspense } from 'react'
import { Footer } from './App.styled'
import PublicRoutes from 'routes/PublicRoutes'
import { AppStyles } from './App.styled'

export const App = () => {
    return <>
        <AppStyles />    

        <Header />

        <Suspense fallback={'Loading...'}>
            <PublicRoutes />
            {/* <PrivateRoutes /> */}
        </Suspense>

        <Footer>
            <div>@ Маркетплейс MW</div>
        </Footer>
    </>
}

export default App