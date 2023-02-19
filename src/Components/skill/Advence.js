import React from "react";

const Advence = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__smallBox">
              <h3 className="skills__name">GoLang</h3>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__smallBox">
              <h3 className="skills__name">Gin</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__smallBox">
              <h3 className="skills__name">Gorilla/Mux</h3>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__smallBox">
              <h3 className="skills__name">GORM</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="skills__smallBox">
              <h3 className="skills__name">Next/api</h3>
            </div>
            {/* this group has one member add skills__data */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advence;
