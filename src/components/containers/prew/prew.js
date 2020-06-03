import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./prew.scss";
// import prew1 from "../prew/prew.png";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Prew = () => (
  <div className="prew-store">
    <AutoplaySlider play={true} cancelOnInteraction={true} interval={5000}>
      {/* <div className="header-prew"></div> */}
      <div
        className="slide-item"
        data-src="https://static.wixstatic.com/media/f265e02b3d2d4ba99f58f93d017dd12b.jpg/v1/fit/w_2500,h_1330,al_c/f265e02b3d2d4ba99f58f93d017dd12b.jpg"
      >
        <h1 className="slide-name">
          ДИВАН,
          <br />
          ХОРОШАЯ КНИГА,
          <br />И ТЫ.
        </h1>
      </div>
      <div
        className="slide-item"
        data-src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a8abee27739805.56369f98e6cda.jpg"
      >
        <h1 className="slide-name">
          Книги — хороший способ поговорить с тем,
          <br />
          с кем разговор невозможен.
          <br />
          <p>
            <i>
              <small>Фредерик Бегбедер.</small>
            </i>
          </p>
        </h1>
      </div>
      <div
        className="slide-item"
        data-src="https://bulmedia.net/wp-content/uploads/2019/11/opredeliha-naj-dobrite-universiteti-v-sveta_5dddb50f73a8a-scaled.jpeg"
      >
        <h1 className="slide-name">
          Книга, которая хороша написана,
          <br />
          всегда кажется мне слишком короткой.
          <br />
          <p>
            <i>
              <small>Джейн Остин</small>
            </i>
          </p>
        </h1>
      </div>
    </AutoplaySlider>
  </div>
);

export default Prew;
