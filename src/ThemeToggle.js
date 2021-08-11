const ThemeToggle = ({ theme, Click }) => {
  return <button className={`Theme_Toggle ${theme ? "Theme_Toggle_Moon" : "Theme_Toggle_Sun"}`} onClick={Click}></button>;
};

export default ThemeToggle;
