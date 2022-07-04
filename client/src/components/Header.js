import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeLanguage } from "../actions";

import { HiMenu } from "react-icons/hi";


const Header = ({ languageActif, changeLanguage }) => {
  const translate = require(`../translations/${languageActif}/header.json`);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileIconRef=useRef();
  const mobileNavRef=useRef()
  const menuItems = [
    {
      name: translate.home,
      path: "/",
    },
    {
      name: translate.projects,
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: translate.resume,
      path: "/files/cv_lou_tagliasco.pdf",
    },
    {
      name: "Languages",
      options: ["fr", "en"],
    },
  ];

  useEffect(()=>{
    const onBodyClick=(event)=>{
      if(!mobileNavRef?.current?.contains(event.target) && !mobileIconRef.current.contains(event.target)){
        setMobileMenu(false);
      }
    }
    if(mobileMenu) return document.body.addEventListener('click', onBodyClick);
    return ()=>{
      document.body.removeEventListener('click', onBodyClick);
    }
  },[mobileMenu])

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      let key =
        Date.now() + "-" + Math.round(Math.random() * 100) + "-" + index;

      if (item.name === "Languages") {
        return (
          <li key={key} className="mr-8 my-2 flex items-center">
            <span className="w-8">
              <img
                src={`/img/flags/${languageActif}.svg`}
                alt={languageActif}
                className="w-full"
              />
            </span>
            <select
              value={languageActif}
              onChange={(event) => changeLanguage(event.target.value)}
              className="p-1 block bg-theme font-semibold cursor-pointer"
            >
              {item.options.map((language) => {
                let lgKey = Date.now() + "-" + Math.round(Math.random() * 100);
                return (
                  <option key={lgKey} value={language}>
                    {language.toLocaleUpperCase()}
                  </option>
                );
              })}
            </select>
          </li>
        );
      } else {
        return (
          <li key={key} className="mr-8 my-2">
            <Link
              className={`p-1 block ${
                window.location.pathname === item.path
                  ? "bg-white text-black rounded"
                  : "hover:text-primary"
              } font-semibold`}
              to={item.path}
              download={item.name === "CV" || item.name==="Resume" ? true : false}
              target={item.name === "CV" || item.name==="Resume"  ? "_blank" : null}
            >
              {item.name}
            </Link>
          </li>
        );
      }
    });
  };

  return (
    <div className="font-montserrat bg-theme text-white p-2 shadow-lg fixed z-50 top-0 left-0 right-0 min-h-[4rem]">
      <div className="flex flex-wrap justify-between items-center">
        <div className="logo">
          <h1 className="text-4xl font-semibold">
            <Link to="/">LOU_TAG</Link>
          </h1>
        </div>
        <div ref={mobileIconRef} className="menu">
          <ul className="list-none sm:flex sm:flex-row hidden">
            {renderMenuItems()}
          </ul>
          <HiMenu
            size={30}
            className="block sm:hidden cursor-pointer font-bold"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>
        {mobileMenu && (
          <div ref={mobileNavRef} className="w-full block sm:hidden animate-appear">
            <ul className="list-none w-full flex flex-col">
              {renderMenuItems()}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    languageActif: state.languageActif,
  };
};

export default connect(mapStateToProps, { changeLanguage })(Header);
