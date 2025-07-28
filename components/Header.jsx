export default function Header() {
  return (
    <>
      <header className="header-container" style={{backgroundColor: "#98694D"}}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">KS Countries Info</a>
          </h2>
          <p className="theme-changer">
            <i className="fa-regular fa-moon" />
            &nbsp;&nbsp;Dark Mode
          </p>
          <i className="fa-solid fa-sun" id="light" />
        </div>
      </header>
    </>
  );
}
