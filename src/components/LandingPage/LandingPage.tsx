import React, { LegacyRef, useEffect, useRef, useState } from "react";
import "./LandingPage.scss";

function LandingPage() {
  const layer1: any = [useRef(""), useRef(""), useRef("")];
  const layer2: any = [useRef("")];
  const layer3: any = [useRef("")];
  const layer4: any = [useRef(""), useRef(""), useRef("")];
  const layer5: any = [useRef("")];

  let [screenNumber, setScreenNumber] = useState(1);
  let [isScrolling, setIsScrolling] = useState(false);

  console.log(screenNumber);

  const triggerFrameChange = (mode: string) => {
    if (mode === "up") {
      if (screenNumber > 1) {
        setScreenNumber(screenNumber - 1);
      }
    } else if (mode === "down") {
      setScreenNumber(screenNumber + 1);
    }
  };

  const handleScroll = (event: any) => {
    console.log(event);
    event.stopPropagation();
    if (isScrolling) {
      return;
    }
    if (event.deltaY > 0) {
      console.log("scrolling down");
      triggerFrameChange("down");
    }
    if (event.deltaY < 0) {
      console.log("scrolling up");
      triggerFrameChange("up");
    }
    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const handleMove = (event: any) => {
    handleLayer1(event);
    handleLayer2(event);
    handleLayer3(event);
    handleLayer4(event);
    handleLayer5(event);
  };

  const handleLayer1 = (event: any) => {
    const x0 = -15 + event.clientX / 400;
    const x1 = 24 + event.clientX / 400;
    const x2 = -6 + event.clientX / 300;

    const y0 = 38 - event.clientY / 400;
    const y1 = 45 - event.clientY / 400;
    const y2 = 54 - event.clientY / 300;

    layer1[0].current.style.right = x0 + "rem";
    layer1[1].current.style.right = x1 + "rem";
    layer1[2].current.style.right = x2 + "rem";

    layer1[0].current.style.top = y0 + "rem";
    layer1[1].current.style.top = y1 + "rem";
    layer1[2].current.style.top = y2 + "rem";
  };

  const handleLayer2 = (event: any) => {
    const x0 = 32 - event.clientX / 1050;

    const y0 = 34 - event.clientY / 1050;

    if (!layer2[0].current) {
      return;
    }

    layer2[0].current.style.left = x0 + "rem";

    layer2[0].current.style.top = y0 + "rem";
  };

  const handleLayer3 = (event: any) => {
    const x0 = 0 + event.clientX / 800;

    const y0 = 0 - event.clientY / 800;

    layer3[0].current.style.right = x0 + "rem";

    layer3[0].current.style.top = y0 + "rem";
  };

  const handleLayer4 = (event: any) => {
    const x0 = 20 + event.clientX / 3500;
    const x1 = 24 + event.clientX / 3500;
    const x2 = 2 + event.clientX / 3500;

    const y0 = -6 - event.clientY / 3500;
    const y1 = 2 - event.clientY / 3500;
    const y2 = -5 - event.clientY / 3500;

    layer4[0].current.style.right = x0 + "rem";
    layer4[1].current.style.right = x1 + "rem";
    layer4[2].current.style.right = x2 + "rem";

    layer4[0].current.style.top = y0 + "rem";
    layer4[1].current.style.top = y1 + "rem";
    layer4[2].current.style.top = y2 + "rem";
  };

  const handleLayer5 = (event: any) => {
    const x0 = 0 + event.clientX / 1000;

    const y0 = 0 - event.clientY / 1000;

    layer5[0].current.style.right = x0 + "rem";

    layer5[0].current.style.top = y0 + "rem";
  };

  return (
    <div
      className="main-container"
      onMouseMove={handleMove}
      onWheelCapture={handleScroll}
    >
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>About Natous
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>Your benfits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="header">
        <div className="header__logo-box">
          <span className="header__logo">Dinesh SanaLa</span>
        </div>
        <div className="row">
          <div className="col-1-of-4">
            <div className="header__text-box">
              {screenNumber === 1 && (
                <h1 className="heading-primary main-title">
                  <span className="heading-primary--main">
                    DineSh <br />
                    SanaLa
                  </span>
                  <div className="red-line-seperation">
                    <span className="red-line"></span>
                    <span className="red-line2"></span>
                  </div>
                  <span className="heading-primary--sub">
                    Web Developer / <br /> FrontEnd Engineer.
                  </span>
                </h1>
              )}
              {screenNumber === 2 && (
                <h1 className="heading-primary main-title">
                  <span className="heading-primary--main font-size-6">
                    Previous <br />
                    Works
                  </span>
                  <div className="red-line-seperation">
                    <span className="red-line"></span>
                    <span className="red-line2"></span>
                  </div>
                  <span className="heading-primary--sub">
                    Projects / <br /> Web Applications.
                  </span>
                </h1>
              )}
            </div>
          </div>
          <div className="col-3-of-4">
            <div className="moon">
              <div className="circle-1" ref={layer3[0]}>
                <div className="circle-2 circle-it">
                  <div className="circle-3 circle-it">
                    <div className="circle-4 circle-it">
                      <div className="circle-5 circle-it">
                        {screenNumber === 1 && (
                          <div className="circle-6 circle-it">
                            <div className="moon-white">
                              <div className="crate-1"></div>
                              <div className="crate-2"></div>
                              <div className="crate-3"></div>
                            </div>
                            <div className="cloud-4" ref={layer4[0]}></div>
                            <div className="cloud-5" ref={layer4[1]}></div>
                            <div className="cloud-6" ref={layer4[2]}></div>
                          </div>
                        )}
                        {screenNumber === 2 && (
                          <div className="circle-6 circle-it">
                            <div className="row section2">
                              <div className="col-1-of-2">Test 1</div>
                              <div className="col-1-of-2">Test 2</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {screenNumber === 1 && (
                <h1 className="heading-primary--red" ref={layer2[0]}>
                  PORTFOLIO
                </h1>
              )}
              {screenNumber === 1 && (
                <>
                  <div className="cloud-1" ref={layer1[0]}></div>
                  <div className="cloud-2" ref={layer1[1]}></div>
                  <div className="cloud-3" ref={layer1[2]}></div>
                </>
              )}
              {screenNumber === 1 && (
                <>
                  <div className="dots-container" ref={layer5[0]}>
                    <div className="dots dot-1"></div>
                    <div className="dots dot-2"></div>
                    <div className="dots dot-3"></div>
                    <div className="dots dot-4"></div>
                    <div className="dots dot-5"></div>
                    <div className="dots dot-6"></div>
                    <div className="dots dot-7"></div>
                    <div className="dots dot-8"></div>
                    <div className="dots dot-9"></div>
                    <div className="dots dot-10"></div>
                    <div className="dots dot-11"></div>
                    <div className="dots dot-12"></div>
                    <div className="dots dot-13"></div>
                    <div className="dots dot-14"></div>
                    <div className="dots dot-15"></div>
                    <div className="dots dot-16"></div>
                    <div className="dots dot-17"></div>
                    <div className="dots dot-18"></div>
                    <div className="dots dot-19"></div>
                    <div className="dots dot-20"></div>
                    <div className="dots dot-21"></div>
                    <div className="dots dot-22"></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;
