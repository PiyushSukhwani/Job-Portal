import { getApplications } from "@/api/apiApplications";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import ApplicationCard from "./applicationCard";
import { BarLoader } from "react-spinners";
import { getMyJobs } from "@/api/apiJobs";
import JobCard from "./job-card";

const CreatedJobs = () => {
  const { user } = useUser();

  const {
    loading: loadingCreatedJobs,
    data: createdJobs,
    fn: fnCreatedJobs,
  } = useFetch(getMyJobs, {
    recruiter_id: user.id,
  });

  useEffect(() => {
    fnCreatedJobs();
  }, []);

  if (loadingCreatedJobs) {
    return <BarLoader width={"100%"} color="#36b7b7" className="mb-4" />;
  }

  return (
    <div>
      <div
        className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        width={"100%"}
        color="#36d7b7"
      >
        {createdJobs?.length ? (
          createdJobs.map((job) => {
            return (
              <JobCard
                key={job.id}
                job={job}
                onJobSaved={fnCreatedJobs}
                isMyJob
              />
            );
          })
        ) : (
          <div>No Jobs Found 😢</div>
        )}
      </div>
    </div>
  );
};

export default CreatedJobs;
