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
    fetch(`https://naughty-pear-bream.cyclic.app/furniture/product/${_id}`)
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
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1CaJnOGX-lqcPmJl_g42us4zrOuLrklCXw&usqp=CAU"
          alt="img"
        />
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
          <div style={{ display: "flex" }}>
            <img
              src={obj.img[2]}
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
            <img
              src={obj.img[1]}
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
            <img
              src={obj.img[2]}
              alt=""
              style={{ width: "200px", height: "200px" }}
            />

            <img
              src={obj.img[1]}
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div>
            <div className="grid4">
              <div>
                <p>Time</p>
                <span>{"10m to 8pm"}</span>
              </div>
              <div>
                <p>Servings</p>
                <span>{obj.servings}</span>
              </div>
              <div>
                <p>{obj.type}</p>
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
            <h2>Price {obj.price} </h2>
            <h3>Discount Price{obj.discountPrice}</h3>
            <h2>Cash Back {obj.cashback}</h2>
          </div>
          <div>
            <h2>Warranty</h2>
            {obj.warranty} Months
          </div>
        </div>
      </div>
      <div className="CandRecip">
        <div>
          <h2>Rate This Prodct</h2>
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
          <h2>Commment</h2>
          <p>
            Be the first to comment on this delicious recipe{" "}
            <span>No Comments</span>{" "}
          </p>
          <input type="text" name="" id="" placeholder="Enter comment.." />
          <br />
          <button>Comment</button>
        </div>
      </div>

      <img className="bannerII" src="https://w7.pngwing.com/pngs/500/482/png-transparent-creative-welcome-banner-purple-ribbon-text.png" alt="" />
    </>
  );
}
