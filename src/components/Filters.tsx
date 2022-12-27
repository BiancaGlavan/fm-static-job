import { Button, Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

interface IPropsFilters {
  role: string;
  level: string;
  languages: string[];
  tools: string[];
  onRemoveFilter: (type: string, value: string) => void;
  onClearFilter: () => void;
}

const StyledFilters = styled(Container)`
    margin-top: 10px;

  .paper {
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  .btn {
    background-color: hsl(180, 31%, 95%);
    text-transform: lowercase;
  }

  .btn-clear {
    text-transform: lowercase;
    margin-left: auto;

    &: hover {
      text-decoration: underline;
      background: none;
    }
  }

  .icon {
    background-color: hsl(180, 29%, 50%);
    color: #fff;

    &: hover {
      background-color: hsl(180, 14%, 20%);
      color: #fff;
    }
  }
`;

const Filters = ({ role, level, languages, tools, onRemoveFilter, onClearFilter }: IPropsFilters) => {
  return (
    <StyledFilters>
      <Paper className="paper">
        {role ? (
          <Button className="btn" endIcon={<CloseIcon onClick={() => onRemoveFilter("role", role)} className="icon" />}>
            {role}
          </Button>
        ) : null}
        {level ? (
          <Button
            className="btn"
            endIcon={<CloseIcon onClick={() => onRemoveFilter("level", level)} className="icon" />}
          >
            {level}
          </Button>
        ) : null}
        {languages.map((language, idx) =>
          language ? (
            <Button
              className="btn"
              endIcon={<CloseIcon onClick={() => onRemoveFilter("language", language)} className="icon" />}
            >
              {language}
            </Button>
          ) : null
        )}
        {tools.map((tool, idx) =>
          tool ? (
            <Button
              className="btn"
              endIcon={<CloseIcon onClick={() => onRemoveFilter("tool", tool)} className="icon" />}
            >
              {tool}
            </Button>
          ) : null
        )}

        <Button onClick={() => onClearFilter()} className="btn-clear">Clear</Button>
      </Paper>
    </StyledFilters>
  );
};

export default Filters;
