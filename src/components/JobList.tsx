import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Job from "./Job";
import { IJob } from "./JobPage";


interface IPropsJobList {
    jobs: IJob[];
    onAddFilter: (type: string, value: string) => void;
}

const StyledJobList = styled(Container)`
 margin-top: 50px;
`;


const JobList = ({jobs, onAddFilter}: IPropsJobList) => {
  return (
    <StyledJobList className="JobList">
        {jobs.map((job, idx) => <Job onAddFilter={onAddFilter} job={job} key={idx} />)}
    </StyledJobList>
  )
}

export default JobList;