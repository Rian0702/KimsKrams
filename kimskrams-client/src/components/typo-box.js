import React from "react"
import PropTypes from "prop-types"

function typoBox({ headline, bodyText, imageUrl }) {
  return (
    <div
      className="typo-box-wrapper"
      style={{
        position: "relative",
      }}
    >
      <div className="typo-box-image">
        <img src={imageUrl} style={{ maxWidth: "250px" }} alt="kimmi" />
      </div>
      <div
        className="typo-box-text"
        style={{
          backgroundColor: "white",
          position: "absolute",
          top: "15px",
          left: "15%",
          padding: "1rem",
          boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.4)",
        }}
      >
        <h3
          className="typo-box-text-headline"
          style={{
            color: "#9acdce",
          }}
        >
          {headline}
        </h3>
        <div
          className="typo-box-text-body"
          dangerouslySetInnerHTML={{
            __html: bodyText,
          }}
        ></div>
      </div>
    </div>
  )
}

typoBox.propTypes = {
  headline: PropTypes.string,
  bodyText: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default typoBox
