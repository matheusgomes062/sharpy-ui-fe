import { FunctionComponent } from "react";
import IJobFormProps from "types/JobFormProps";
import SectionTitle from "./SectionTitle";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline, mdiBriefcaseOutline } from "@mdi/js";
import Input from "./Input";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";
import SmartLink from "./SmartLink";
import Button from "./Button";
import IJobOpportunityCardProps from "types/JobOpportunityCardProps";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import FileUploader from "../middlewares/FileUploader";

interface IFormState {
  name: string | undefined;
  surname: string | undefined;
  email: string | undefined;
  acceptedPrivacyPolitics: boolean | undefined;
  roleId: number | undefined;
  cv: string | undefined | null;
  coverLetter: string | undefined;
}

const JobForm: FunctionComponent<IJobFormProps> = ({
  id,
  href,
  textAreaPlaceholder,
  inputEmailPlaceholder,
  inputNamePlaceholder,
  inputSurnamePlaceholder,
  label,
  mode,
  policyAcceptanceText,
  type,
  underline,
  primary,
}) => {
  const router = useRouter();

  const [job, setJob] = useState<IJobOpportunityCardProps | null>(null);

  const [file, setFile] = useState<File | null>(null);

  const [isFormValid, setIsFormValid] = useState(false);

  const [formValues, setFormValues] = useState<IFormState>({
    acceptedPrivacyPolitics: undefined,
    cv: undefined,
    email: undefined,
    name: undefined,
    surname: undefined,
    coverLetter: undefined,
    roleId: undefined,
  });

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch(`/api/get-role?id=${id}`);

      const json = await res.json();

      setJob(json);

      typeof id === 'string' && setFormValues((prevState) => ({
        ...prevState,
        roleId: parseInt(id),
      }));
    }

    id !== undefined && fetchJobs();
  }, [id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && e.target.files.length > 0 && setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return;

    const url = await FileUploader(file, 'cv');

    setFormValues((prevState) => {
      return {
        ...prevState,
        cv: url,
      };
    });
  };

  const createNewProspect = async () => {
    await uploadFile();

    setIsFormValid(true);
  }

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const element = e.target;
    const value = element.type === "checkbox" ? (element as HTMLInputElement).checked : element.value;
    setFormValues((prevState) => ({
      ...prevState,
      [element.name]: value,
    }));
  };

  useEffect(() => {
    const uploadProspect = async () => {
      if (formValues.cv !== null && isFormValid) {
        const res = await fetch("/api/create-prospect", {
          body: JSON.stringify(formValues),
          method: "POST",
        }).then(() => {
          router.push("/");
        });
      }
    }

    uploadProspect();
  }, [formValues, isFormValid]);

  if (!job) {
    return null;
  }

  return (
    <div data-cy="job-form" className="w-full max-w-6xl p-4 m-auto">
      <SectionTitle sectionTitle={job.role} mode={mode} />
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

      <div className="flex flex-col">
        <div className="flex flex-wrap justify-between md:space-x-8 md:flex-nowrap">
          <div className="w-full mb-4 md:mb-8">
            <Input
              placeholder={inputNamePlaceholder}
              type="text"
              icon="none"
              name="name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="w-full mb-4 md:mb-8">
            <Input
              placeholder={inputSurnamePlaceholder}
              type="text"
              icon="none"
              name="surname"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between md:space-x-8 md:flex-nowrap">
          <div className="w-full mb-4 md:mb-8">
            <Input
              placeholder={inputEmailPlaceholder}
              type="email"
              icon="none"
              name="email"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="w-full mb-4 md:mb-8">
            <Input
              placeholder="CV"
              type="file"
              icon="trayArrowUp"
              name="file"
              onChange={(e) => handleFileChange(e)}
            />
          </div>
        </div>
        <TextArea
          textAreaPlaceholder={textAreaPlaceholder}
          name="coverLetter"
          onChange={(e) => handleInputChange(e)}
        />
        <div className="flex my-8 space-x-3 md:my-12">
          <CheckBox
            value=""
            onChange={(e) => handleInputChange(e)}
            name="acceptedPrivacyPolitics"
          />
          <div className="flex space-x-1">
            <span className="md:text-[20px] sm:text-[15px] my-auto">
              {policyAcceptanceText}
            </span>
            <SmartLink
              href={href}
              label={label}
              mode={mode}
              type={type}
              underline={underline}
            />
          </div>
        </div>
        <div>
          <Button
            label="Aplicar"
            primary={primary}
            onClick={createNewProspect}
          />
        </div>
      </div>
    </div>
  );
};

export default JobForm;
