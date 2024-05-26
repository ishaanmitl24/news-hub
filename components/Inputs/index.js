import { Box } from "@mui/material";
import classes from "./index.module.css";

const Inputs = (props) => {
  const { label, name, type, onChange } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignSelf: type === "checkbox" ? "center" : "",
      }}
    >
      {type !== "checkbox" && (
        <label className={classes.label} forHtml={name}>
          {label}
        </label>
      )}
      <input
        onChange={onChange}
        className={type === "checkbox" ? "" : classes.input}
        type={type}
        name={name}
      />
    </Box>
  );
};

export default Inputs;
