import React from "react";

function Links({linkedin, github}) {
    return (
        <div>
    <h3>Links</h3>
      <a href={linkedin}>LinkedIn</a>
      <a href={github}>GitHub</a>
      </div>
    )
}

export default Links