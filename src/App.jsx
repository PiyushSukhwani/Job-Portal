import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import { Route } from "lucide-react";
import AppLayout from "./components/layouts/app-layout";
import LandingPage from "./components/pages/Landing";
import Onboarding from "./components/pages/Onboarding";
import JobListing from "./components/pages/job-listing";
import JobPage from "./components/pages/job";
import PostJob from "./components/pages/post-jobs";
import SavedJob from "./components/pages/saved-jobs";
import MyJobs from "./components/pages/my-jobs";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/onboarding",
          element: <Onboarding />
        },
        {
          path: "/jobs",
          element: <JobListing />
        },
        {
          path: "/jobs/:id",
          element: <JobPage />
        },
        {
          path: "/post-job",
          element: <PostJob />
        },
        {
          path: "/saved-job",
          element: <SavedJob />
        },
        {
          path: "/my-jobs",
          element: <MyJobs />
        },
      ],
    },
  ]);


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )

}

export default App;
