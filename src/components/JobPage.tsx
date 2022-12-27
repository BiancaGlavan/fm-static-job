import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import JobList from "./JobList";
import data from "../../data.json";
import { useState } from "react";
import Filters from "./Filters";

export interface IJob {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const StyledJobPage = styled(Box)`
  background: hsl(180, 52%, 96%);
  position: relative;

  .page-img {
    width: 100%;
    background: hsl(180, 29%, 50%);
  }
`;

const JobPage = () => {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [tools, setTools] = useState<string[]>([]);

  const jobs: IJob[] = data;

  const handleAddFilter = (type: string, value: string) => {
    if (type === "role") {
      setRole(value);
    }

    if (type === "level") {
      setLevel(value);
    }

    if (type === "language") {
      if (languages.includes(value)) {
      } else {
        const newLanguages = [...languages, value];
        setLanguages(newLanguages);
      }
    }

    if (type === "tool") {
      const newTools = [...tools, value];
      setTools(newTools);
    }
  };

  const handleRemoveFilter = (type: string, value: string) => {
    if (type === "role") {
      setRole("");
    }

    if (type === "level") {
      setLevel("");
    }

    if (type === "language") {
      const newLanguages = languages.filter((lang, idx) => lang !== value);
      setLanguages(newLanguages);
    }

    if (type === "tool") {
      const newTools = tools.filter((fil, idx) => fil !== value);
      setTools(newTools);
    }
  };

  const resetFilters = () => {
    setRole("");
    setLevel("");
    setLanguages([]);
    setTools([]);
  };

  const filterJobs = () => {
    let newJobs = [...jobs];
    if (role) {
      newJobs = newJobs.filter((job) => job.role === role);
    }

    if (level) {
      newJobs = newJobs.filter((job, idx) => job.level === level);
    }

    if (languages.length > 0) {
      languages.forEach((language, idx) => {
        newJobs = newJobs.filter((job, idx) => job.languages.includes(language));
      });
    }

    if (tools.length > 0) {
      tools.forEach((tool, idx) => {
        newJobs = newJobs.filter((job, idx) => job.tools.includes(tool));
      });
    }

    return newJobs;
  };

  return (
    <StyledJobPage>
      <img className="page-img" src="../images/bg-header-desktop.svg" alt="" />
     {role || level || languages.length > 0 || tools.length > 0 ?  <Filters
        role={role}
        level={level}
        languages={languages}
        tools={tools}
        onRemoveFilter={handleRemoveFilter}
        onClearFilter={resetFilters}
      /> : null}
      <JobList jobs={filterJobs()} onAddFilter={handleAddFilter} />
    </StyledJobPage>
  );
};

export default JobPage;
