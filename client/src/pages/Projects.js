import React from "react";
import projectData from "../ressources/projectData";
import { connect } from "react-redux";

import Layout from "../components/Layout";

const Projects = ({languageActif})=>{
    const transalte = require(`../translations/${languageActif}/projects.json`);
    const renderProjectData=()=>{
        return projectData.map((item, index)=>{
            let key = Date.now()+'-'+Math.round(Math.random()*1000)+'-'+index;
            return(
                <div key={key}>
                    <div className="relative border-2 rounded border-gray-100">
                        <img src={item.image} alt={item.title} className="w-full h-60 text-center" />
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute top-0 bottom-0 left-0 right-0 rounded cursor-pointer flex flex-col items-center justify-center opacity-0 hover:opacity-90 hover:bg-theme">
                            <h2 className="text-white font-semibold text-4xl sm:text-2xl md:text-4xl mb-4 px-2">{item.title}</h2>
                        </a> 
                    </div>
                    <p className="lg:text-xl">{languageActif==='fr'?item.description.fr:item.description.en}</p>
                </div>
            )
        });
    };
    return(
        <Layout>
            <div className="font-montserrat">
                <div className="relative bg-primary pt-4">
                    <h1 className="text-4xl text-center font-bold my-5">{ transalte.intro.title }</h1>
                    <p className="text-xl lg:text-2xl mt-3 p-5 text-center">{ transalte.intro.subtitle }</p>
                    <div className="absolute bottom-34 left-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FCC86E" fillOpacity="1" d="M0,96L40,106.7C80,117,160,139,240,128C320,117,400,75,480,74.7C560,75,640,117,720,117.3C800,117,880,75,960,80C1040,85,1120,139,1200,144C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                    </div>
                </div>
                <div className="grid mt-20 sm:mt-28 lg:mt-36 xl:mt-44 2xl:mt-52 grid-cols-1 sm:grid-cols-3 justify-center mx-2 sm:mx-10 gap-20 min-h-1/2">
                    {renderProjectData()}
                </div>
            </div>
        </Layout>
    );
};
const mapStateToProps=(state)=>{
    return{
        languageActif: state.languageActif
    }
}

export default connect(mapStateToProps)(Projects);