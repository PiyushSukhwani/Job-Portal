import CreatedApplications from "@/components/ui/created-applications";
import CreatedJobs from "@/components/ui/created-jobs";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { BarLoader } from "react-spinners";

const MyJobs = () => {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return <BarLoader width={"100%"} color="#36b7b7" className="mb-4" />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        {user?.unsafeMetadata?.role === "candidate"
          ? "My Applications"
          : "My Jobs"}
      </h1>

      {user?.unsafeMetadata?.role === "candidate" ? (
        <CreatedApplications />
      ) : (
        <CreatedJobs />
      )}
    </div>
  );
};

export default MyJobs;
