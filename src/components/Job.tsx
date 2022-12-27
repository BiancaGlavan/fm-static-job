import { Box, Button, Chip, Grid, Paper, Typography, useTheme, useMediaQuery, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IJob } from "./JobPage";

interface IPropsJob {
  job: IJob;
  onAddFilter: (type: string, value: string) => void;
}

const StyledJob = styled(Paper)`
    margin-bottom: 30px;
    padding: 10px;

    ${(props) => props.theme.breakpoints.down("md")} {
        margin-bottom: 50px;
    }

    .grid-container {
        align-items: center;
        justify-content: flex-start;

        ${(props) => props.theme.breakpoints.down("md")} {
            justify-content: center;
        }

        .details-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .divider {
            margin-top: 10px;
            width: 90%;
            height: 2px;
           
        }
    }

    .buttons {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    .btn {
        background-color: hsl(180, 31%, 95%);

        &: hover {
            background-color: hsl(180, 29%, 50%);
            color: #fff;
        }
    }

    .chips {
        display: flex;
        gap: 5px;
        align-items: center;

        .new {
            background-color: hsl(180, 29%, 50%);
            color: #fff;
            font-size: 10px;
        }

        .featured {
            background-color: hsl(180, 14%, 20%);
            color: #fff;
            font-size: 10px;
        }
    }

    .details {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .img-container {
        position: relative;
        margin-bottom: 20px;
    }

    .img {
        margin-left: 20px;

        ${(props) => props.theme.breakpoints.down("sm")} {
            width: 60px;
            height: 60px;
            position: absolute;
            top: -25px;
            left: 10px;
        }
    }

    .company {
        color: hsl(180, 29%, 50%);
        font-weight: 700;
    }

    .position {
        font-weight: 700;
    }

    .detail {
        color: hsl(180, 8%, 52%);
        font-weight: 700;
    }
`;

const Job = ({ job, onAddFilter }: IPropsJob) => {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledJob elevation={4} className="Job">
      <Grid className="grid-container" container spacing={2}>
        <Grid className="img-container" item xs={12} sm={12} md={2} lg={2}>
            <img className="img" src={job.logo} alt="" />
        </Grid>
        <Grid className="details-container" item xs={12} sm={12} md={5} lg={5}>
            <Box className="chips">
                <Typography className="company" variant="body2">{job.company}</Typography>
                {job.new ? <Chip size="small" className="new" label="NEW"/> : null}
                {job.featured ? <Chip size="small" className="featured" label="FEATURED"/> : null}
            </Box>
            <Typography className="position" variant="body1">{job.position}</Typography>
            <Box className="details">
                <Typography className="detail" variant="caption">{job.postedAt}</Typography>
                <Typography className="detail" variant="caption">{job.contract}</Typography>
                <Typography className="detail" variant="caption">{job.location}</Typography>
            </Box>
        </Grid>
        {isMobile && <Divider className="divider"/>}
        <Grid className="buttons" item xs={12} sm={12} md={5} lg={5}>
            <Button onClick={() => onAddFilter("role", job.role)} sx={{ textTransform: 'lowercase' }} className="btn">{job.role}</Button>
            <Button onClick={() => onAddFilter("level", job.level)} sx={{ textTransform: 'lowercase' }} className="btn">{job.level}</Button>
            {job.languages.map((language, idx) => <Button onClick={() => onAddFilter("language", language)} sx={{ textTransform: 'lowercase' }} className="btn" key={idx}>{language}</Button>)}
            {job.tools.map((tool, idx) => <Button onClick={() => onAddFilter("tool", tool)} sx={{ textTransform: 'lowercase' }} className="btn" key={idx}>{tool}</Button>)}
        </Grid>
      </Grid>
    </StyledJob>
  );
};

export default Job;
