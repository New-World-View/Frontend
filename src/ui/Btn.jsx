import { Button } from "@mui/material";

export const Btn = ({ text, onClick, disabled }) => {
  return (
    <Button
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
      onClick={onClick}
      disabled={disabled}
      type="submit"  // Ensure button is for form submission
    >
      {text}
    </Button>
  );
};
