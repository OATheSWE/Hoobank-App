import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
const LazyComponent1 = lazy(() => import('./components/Hero'));
const LazyComponent2 = lazy(() => import('./components/Stats'));
const LazyComponent3 = lazy(() => import('./components/Business'));
const LazyComponent4 = lazy(() => import('./components/Billing'));
const LazyComponent5 = lazy(() => import('./components/CardDeal'));
const LazyComponent6 = lazy(() => import('./components/Testimonials'));
const LazyComponent7 = lazy(() => import('./components/CTA'));
const LazyComponent8 = lazy(() => import('./components/Footer'));
const LazyComponent9 = lazy(() => import('./components/ScrollToTopButton'));








function App() {

  return(
    <div className="bg-primary w-full overflow-hidden z-10">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent1 />
        <LazyComponent2 />
        <LazyComponent3 />
        <LazyComponent4 />
        <LazyComponent5 />
        <LazyComponent6 />
        <LazyComponent7 />
        <LazyComponent8 />
        <LazyComponent9 />
      </Suspense>
    </div>
    
  )




  


  
  
}

export default App;