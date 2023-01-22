import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Single.css";
import {
  AiFillTwitterCircle,
  AiFillLike,
  AiFillStar,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function SinglePage() {
  const [obj, setobj] = useState({});
  const [loading, setLoading] = useState(true);
  const { _id } = useParams();
  console.log(_id);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://naughty-pear-bream.cyclic.app/furniture/product/${_id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setobj(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <div className="speacer"></div>
      <div className="bannerSectionRecipe">
        <img src={obj} alt="img" />
        <div>
          <img src={obj.img[0]} alt="img" />
          <div>
            <div>
              <p>{obj.brand}</p>
              <p>{obj.followers} Followers</p>
            </div>
            <div>
              <button>+ Follow Member</button>
              <button>Contact Member</button>
            </div>
          </div>
        </div>
      </div>
      <div className="recipeimgdiscontainer">
        <p className="recipeimgheading">{obj.name}</p>
        <div className="recipeimgdis">
          <div>
            <img src={obj.img} alt="" />
          </div>
          <div>
            <div className="grid4">
              <div>
                <p>Time</p>
                <span>{obj.time}</span>
              </div>
              <div>
                <p>Servings</p>
                <span>{obj.servings}</span>
              </div>
              <div>
                <p>
                  Diet Restriction &nbsp;{" "}
                  <AiFillQuestionCircle color="#898989" />
                </p>
                <p>---</p>
              </div>
              <div>
                <p>Rating</p>
                <p>
                  <AiFillStar color="#ececec" />
                  <AiFillStar color="#ececec" />
                  <AiFillStar color="#ececec" />
                  <AiFillStar color="#ececec" />
                  <AiFillStar color="#ececec" />
                </p>
                <p>1 Vote</p>
              </div>
            </div>
            <div>
              <p>
                <AiFillLike color="blue" /> <span>MarionSeow likes this</span>
              </p>
              <p>
                <MdOutlineFacebook color="#3b5998" />
                <AiFillTwitterCircle color="#00aced" />
              </p>
            </div>
          </div>
        </div>
        <div className="fullrecepi">
          <div>
            <h2>Secret </h2>
            {obj.ingredients &&
              obj.ingredients.map((ele, i) => (
                <p type="number" key={ele}>
                  {i + 1}. {ele}
                </p>
              ))}
          </div>
          <div>
            <h2>Directions</h2>
            {obj.directions &&
              obj.directions.map((ele, i) => (
                <p type="number" key={ele}>
                  {i + 1}. {ele}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="CandRecip">
        <div>
          <h2>Rate This Recipe</h2>
          <p>What do you think </p>
          <p>
            <AiFillStar className="recipesreting" />
            <AiFillStar className="recipesreting" />
            <AiFillStar className="recipesreting" />
            <AiFillStar className="recipesreting" />
            <AiFillStar className="recipesreting" />
          </p>
          <button>Submit Rating</button>
        </div>
        <div>
          <h2>Comments</h2>
          <p>
            Be the first to comment on this delicious recipe{" "}
            <span>No Comments</span>{" "}
          </p>
          <input type="text" name="" id="" placeholder="Enter comment.." />
          <br />
          <button>Comment</button>
        </div>
      </div>

      <img className="bannerII" src={obj.bannerII} alt="" />
    </>
  );
}
