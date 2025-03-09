import { Button } from "@mui/material";

export const Btn = ({ text, onClick, disabled }) => {
  return (
    <a
      href="https://wa.me/+996555102001"
      target="_blank"
      rel="noopener noreferrer"
    >
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
          transition: "all 0.3s ease",

          // Media query for devices below 640px
          "@media (max-width: 640px)": {
            width: "160px",
            height: "50px",
            fontSize: "16px",
          },

          // Media query for devices below 320px
          "@media (max-width: 320px)": {
            width: "120px",
            height: "45px",
            fontSize: "14px",
          },
        }}
        onClick={onClick}
        disabled={disabled}
        type="submit"
      >
        {text}
      </Button>
    </a>
  );
};
