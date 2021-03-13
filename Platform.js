import React from 'react'
import {
  PlatformCode,
  PlatformCode1,
  PlatformCode2

} from "./PlatStyle"

import img from "../img/21st-century-coding-teal.png"


function Platform() {
  return (
    <div>
      <center>
        <PlatformCode>
          <PlatformCode1>
            <img src={img} style={{ width: "100%", height: "100%" }} />
          </PlatformCode1>
          <PlatformCode2>
            <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
              <h1>The #1 coding Platform for kids</h1>
            </div>
            <div style={{ marginTop: "-30px" }}>
              <p>
                Tynker provides everything needed to learn computer programming in a fun way. Tynker powers the
                creativity of over 60 million kids and serves thousands of schools and educators worldwide.
            </p>
              <p>
                With 40+ award-winning block & text-based courses, over 3,700 learning modules, and access to popular
                coding languages, there’s a learning path for every kid, no matter their age or level.
            </p>
            </div>
          </PlatformCode2>



        </PlatformCode>

      </center>


    </div>
  )
}

export default Platform
