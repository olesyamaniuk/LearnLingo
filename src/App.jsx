import Layout from './components/Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react';
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage.jsx'));
// const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage.jsx'));
// const Features = lazy(() => import("./components/Features/Features.jsx"));
// const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="teachers" element={<TeachersPage />} />
        {/* <Route path="catalog/:carsId" element={<DetailsPage />}> */}
          {/* <Route index element={<Features />} /> */}
          {/* <Route path="features" element={<Features />} /> */}
          {/* <Route path="reviews" element={<Reviews />} /> */}
        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
// const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
// // const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
// // const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage.jsx'));
// // const Features = lazy(() => import("./components/Features/Features.jsx"));
// // const Reviews = lazy(() => import("./components/Reviews/Reviews"));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<Layout />}> */}
//         <Route index element={<HomePage />} />
//         {/* <Route path="catalog" element={<CatalogPage />} /> */}
//         {/* <Route path="catalog/:carsId" element={<DetailsPage />}> */}
//         {/* <Route index element={<Features />} /> */}
//         {/* <Route path="features" element={<Features />} /> */}
//         {/* <Route path="reviews" element={<Reviews />} /> */}
//         {/* </Route> */}
//         <Route path="1" element={<NotFoundPage />} />
//         {/* </Route> */}
//       </Routes>
//     </Router>
//   );
// }
