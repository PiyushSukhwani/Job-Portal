import { getApplications } from '@/api/apiApplications';
import useFetch from '@/hooks/useFetch';
import { useUser } from '@clerk/clerk-react';
import React, { useEffect } from 'react'
import { BarLoader } from 'react-spinners';
import ApplicationCard from './applicationCard';

const CreatedApplications = () => {
    const { user } = useUser();

    const {
      loading: loadingApplications,
      fn: fnApplications,
      data: dataApplications,
    } = useFetch(getApplications, {
      user_id: user.id,
    });
  
    useEffect(() => {
      fnApplications();
    }, []);
  
    if (loadingApplications) {
      return <BarLoader width={"100%"} color="#36b7b7" className="mb-4" />;
    }
  
    return (
      <div className="flex flex-col gap-2">
        {dataApplications?.map((application) => {
          return (
            <ApplicationCard
              key={application.id}
              application={application}
              isCandidate
            />
          );
        })}
      </div>
    );
}

export default CreatedApplications