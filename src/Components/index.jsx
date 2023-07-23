import React from "react";
import { useState } from "react";
import * as S from "./style.jsx";
import marvel from "../assets/marvel.svg";
import spider from "../assets/spider.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import iuri from "../assets/iuricode.png";
import search from "../assets/search.svg";
import logo from "../assets/logo.svg";
import play from "../assets/play.svg";
import closeX from "../assets/teia voltar.png";

function Index() {
  const [modalVideo, setModalVideo] = useState(false);
  return (
    <>
      <S.Header>
        <S.LogoMarvelBox>
          <img src={marvel} alt="" />
        </S.LogoMarvelBox>
        <S.LogoSpiderBox>
          <img src={spider} alt="" />
        </S.LogoSpiderBox>
        <S.NavBar>
          <ul>
            <li>home</li>
            <li>sinopse</li>
            <li>elenco</li>
          </ul>
        </S.NavBar>
      </S.Header>
      <S.SideBar>
        <S.FirstSectionSideBar>
          <img src={iuri} alt="iuri" />
          <S.FirstSectionNavBar>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </S.FirstSectionNavBar>
        </S.FirstSectionSideBar>
        <S.SecondSectionSideBar>
          <a href="">
            <img src={search} alt="" />
          </a>
        </S.SecondSectionSideBar>
      </S.SideBar>
      <S.Main>
        <S.SectionMain>
          <img src={logo} alt="logo_spiderman" />

          <S.ButtonTrailer
            onClick={() => {
              setModalVideo(!modalVideo);
            }}
          >
            ASSISTA AO TRAILER
            <img src={play} alt="" />
          </S.ButtonTrailer>
        </S.SectionMain>

        {modalVideo && (
          <S.VideoBox>
            <S.CloseModalImage
              src={closeX}
              onClick={() => {
                setModalVideo(!modalVideo);
              }}
              alt=""
            />

            <iframe
              width="1100"
              height="600"
              src="https://www.youtube.com/embed/ApXoWvfEYVU?autoplay=1&controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="true"
              autohide="0"
              autoplay="true"
            ></iframe>
          </S.VideoBox>
        )}
      </S.Main>
    </>
  );
}

export default Index;
