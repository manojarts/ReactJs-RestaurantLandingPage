import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData =[
        {
            Image: PickMeals,
            title:"Pick Meals",
            text:"Food is the ingredient that binds us together."
        },
        {
            Image: ChooseMeals,
            title:"Choose How Often",
            text:"Food is the ingredient that binds us together."
        },
        {
            Image: DeliveryMeals,
            title:"Fast Deliveries",
            text:"Food is the ingredient that binds us together."
        }
    ]
  return (
    <div className ="work-section-wrapper">
        <div className ="work-section-top">
            <p className ="primary-subheading">Work</p>
            <h1 className ="primary-heading">How it Works</h1>
            <p className ="primary-text">
                "A restaurant is a place where you can sit down and relax, and let someone else do the cooking for you." - Unknown
            </p>
        </div>
        <div className ="work-section-bottom">
            {workInfoData.map((data) => (
                <div className ="work-section-info">
                    <div className ="info-boxes-img-container">
                        <img src={data.Image} alt=""/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work
