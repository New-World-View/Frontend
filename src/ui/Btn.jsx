import { CardActionArea } from "@mui/material";

export const Btn = ({ text }) => {
  return (
    <CardActionArea
      sx={{
        width: "200px",
        height: "56px",
        backgroundColor: "#9e3dff", 
        fontFamily: "Sen, sans-serif", 
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "24px",
        letterSpacing: "0px",
        color: "white",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",
      }}
    >
      {text}
    </CardActionArea>
  );
};
