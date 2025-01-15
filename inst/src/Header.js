const Header = () => {
  return (
    <>
      <style>
        {`
          /* Default logo size on larger screens */
          .header-logo-left, .header-logo-right {
            max-height: 40px;
            width: auto; /* Maintain aspect ratio */
            max-width: 15%; /* Set width to 15% for larger screens */
          }

          .header-logo-right {
            max-height: 60px;
            width: auto; /* Maintain aspect ratio */
            max-width: 15%; /* Set width to 15% for larger screens */
          }

          /* Smaller logos on tablets */
          @media screen and (max-width: 768px) {
            .header-logo-left {
              max-height: 30px;
              max-width: 20%; /* Set width to 20% on tablets */
            }

            .header-logo-right {
              max-height: 45px;
              max-width: 20%; /* Set width to 20% on tablets */
            }
          }

          /* Further reduced logos on mobile devices */
          @media screen and (max-width: 480px) {
            .header-logo-left {
              max-height: 25px;
              max-width: 30%; /* Set width to 30% on mobile */
            }

            .header-logo-right {
              max-height: 40px;
              max-width: 30%; /* Set width to 30% on mobile */
            }
          }
        `}
      </style>
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
          src={process.env.PUBLIC_URL + "/Instant.png"}
          alt="Left Logo"
          style={{
            marginBottom: "10px",
          }}
          className="header-logo-left"
        />
        <h1 style={{ textAlign: "center", flex: "1", fontSize: "1.5em" }}>
          Newsletters
        </h1>
        <img
          src={process.env.PUBLIC_URL + "/XP logo.png"}
          alt="Right Logo"
          style={{
            marginBottom: "10px",
          }}
          className="header-logo-right"
        />
      </header>
    </>
  );
};

export default Header;
