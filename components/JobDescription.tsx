import { FunctionComponent } from "react";
import IJobDescription from "types/JobDescriptionProps";
import SectionTitle from "./SectionTitle";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline, mdiBriefcaseOutline } from "@mdi/js";
import Button from "./Button";
import SmartLink from "./SmartLink";
import Link from "next/link";
import { useEffect, useState } from "react";
import IJobOpportunityCardProps from "types/JobOpportunityCardProps";
import Markdown from "./Markdown";

const JobDescription: FunctionComponent<IJobDescription> = ({ ...props }) => {

  const [job, setJob] = useState<IJobOpportunityCardProps | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch(`/api/get-role?id=${props.id}`);
      const json = await res.json();
      setJob(json);
    }

    fetchJobs();
  }, [props.id]);


  if (!job) {
    return null;
  }

  return (
    <div data-cy="jobDescription" className="w-full max-w-6xl p-4 m-auto">
      <SectionTitle sectionTitle={job.role} mode={props.mode} />

      <div className="flex flex-col">
        <div className="flex mb-5 md:mt-10 md:mb-8">
          <div className="w-6 h-6 md:h-10 md:w-10">
            <Icon
              path={mdiBriefcaseOutline}
              color="disabled"
              className="pr-1 fill-primary-orange"
            />
          </div>
          <p className="font-normal md:text-sm text-mobsm">{job.journey}</p>
        </div>
        <div className="flex md:mb-16 mb-7">
          <div className="w-6 h-6 md:h-10 md:w-10">
            <Icon
              path={mdiMapMarkerOutline}
              color="disabled"
              className="pr-1 fill-primary-orange"
            />
          </div>
          <p className="font-normal md:text-sm text-mobsm">
            {job.modality}, {job.country}
          </p>
        </div>
      </div>

      <div>
        <div className="mb-8 md:mb-11">
          <p className="font-semibold md:text-base text-mobh3">
            Sobre a Sharpy:
          </p>
          <p className="font-normal md:text-xs text-mobsm">
            {props.companyDescription}
          </p>
        </div>

        <div className="mb-8 md:mb-11">
          <article className="prose-sm prose md:prose-lg prose-p:text-black">
            <Markdown content={job.description} />
          </article>
        </div>
      </div>
      <Link href={`/apply/${job.id}`}>
        <Button label={props.label} primary={props.primary} />
      </Link>
    </div>
  );
};

export default JobDescription;
