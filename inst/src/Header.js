const Header = () => {
  return (
    <header
      style={{
        padding: "1em",
        background: "#282c34",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src="/Instant.png"
        alt="Left Logo"
        style={{ height: "40px", marginBottom: "10px" }}
      />
      <h1 style={{ textAlign: "center", flex: "1", fontSize: "1.5em" }}>
        Newsletters
      </h1>
      <img
        src="/XP logo.png"
        alt="Right Logo"
        style={{ height: "60px", marginBottom: "10px" }}
      />
    </header>
  );
};

export default Header;
