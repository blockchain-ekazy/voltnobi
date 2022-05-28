import React from "react";
import "./Home.css";

import Img1 from "../Images/1.png";
import Img2 from "../Images/2.png";
import Img3 from "../Images/Line2.png";
import Img4 from "../Images/4.png";
import Img5 from "../Images/5.png";
import Img6 from "../Images/11.png";
import Img7 from "../Images/12.png";
import Img8 from "../Images/13.png";
import Img9 from "../Images/14.png";
import Img10 from "../Images/15.png";
import Img11 from "../Images/16.png";
import Img12 from "../Images/Logo.png";

import Mintbtn from "./mintbtn";

export default function Home() {
  return (
    <div>
      <div className="container-fluid AAA">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                  <img className="w-100" src={Img12} />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse "
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mx-auto ">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">
                        Home <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#use">
                        Use Case
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#pro">
                        Progress
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#mil">
                        Milestones
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#our">
                        Our Dao
                      </a>
                    </li>
                  </ul>
                  {/* <div>
                    <button className="whii">Get Whitelist</button>
                  </div> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row acc align-items-center">
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-6 text-left p-0 m-0">
              {/* <button className="whi"></button> */}
              <Mintbtn />
            </div>
            {/* <div className="col-md-6 text-left p-0 m-0">
              <h1 className="coll">
                Collection Of
                <br />
                1000 Unique
                <br />
                Ninjas
              </h1>
              <p className="val pt-2">
                Give direct access to our lightning lotto provided
                <br />
                by the Raijin Vault. They form an integral part of
                <br />
                the voltnobi ecosystem and will be utilised in our
                <br />
                up-and-coming game.
              </p>
              <div className="row pt-5">
                <div className="col-md-6">
                  <button className="whi">Get Whitelist</button>
                </div>
                <div className="col-md-6 mob">
                  <button className="whi1  ">Contact Us</button>
                </div>
              </div>
              
            </div> */}
            <div className="col-md-6 text-left p-0 m-0">
              <img className="w-100 alie" src={Img1} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid BBB">
        <div className="container">
          <div className="row align-items-center  cvc pb-5">
            <div className="col-md-6 text-left">
              <h1 className="intro">Introduction</h1>
              <p className="val pt-5">
                Ninjas of Kojiki is Voltnobi’s unique collection of 1000 3D
                ninjas. They form an integral part of the Voltnobi ecosystem.
                <br />
                Each NFT holder gains direct access to the Voltnobi treasury and
                it’s lightning lottery.
                <br />
                They will also be used as playable characters for our MOBA game
                currently in development.
                <br />
              </p>
              {/* <div className="pt-5">
                <button className="whi2">Get Whitelist</button>
              </div> */}
            </div>
            <div className="col-md-6">
              <img className="w-100 " src={Img2} />
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <a id="use"></a>
        <div className="container-fluid CCC">
          <div className="container">
            <div className="row align-items-center  csd">
              <div className="col-md-6 text-left">
                <img className="w-100 dao " src={Img4} />
              </div>
              <div className="col-md-6 text-right">
                <h1 className="intro">Use Case DAO</h1>
                <p className="val pt-5">
                  In an effort to be completely decentralised our community will
                  have full control over the funds of the treasury once our DAO
                  is formed. Access to the benefits of this is inclusive of both
                  our NFT holders and Voltnobi token holders. Decisions not
                  limited to; Lightning lottery giveaways, Voltnobi buy back &
                  burns, sweeping our NFT floor and philanthropy work.
                  <br></br>
                </p>
                {/* <div className="pt-5">
                  <button className="whi2">Get Whitelist</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="pro"></a>
      <div className="container-fluid BBB">
        <div className="container">
          <div className="row pro">
            <div className="col-md-12 text-left">
              <h1 className="intro">Progress</h1>
            </div>
          </div>
          <div className="row erw">
            <div className="col-md-6">
              <div className="row">
                <div className="col-2">
                  <img className="w-75" src={Img11} />
                </div>
                <div className="col-10 text-left">
                  <h1 className="hg">25% Minted</h1>
                  <p className="vall pt-0 pt-sm-5">
                    At 25% sold we will be giving one lucky holder 2 eth.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <img className="w-75" src={Img11} />
                </div>
                <div className="col-10 text-left">
                  <h1 className="hg">50% Minted</h1>
                  <p className="vall pt-0 pt-sm-5">
                    At 50% sold one lucky holder will win 4 eth, second prize of
                    2 eth.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <img className="w-75" src={Img11} />
                </div>
                <div className="col-10 text-left">
                  <h1 className="hg">75% Minted</h1>
                  <p className="vall pt-0 pt-sm-5">
                    At 75% sold we will be giving one lucky holder a Rolex
                    submariner, or cash equivalent.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <img className="w-75" src={Img11} />
                </div>
                <div className="col-10 text-left">
                  <h1 className="hg">100% Minted</h1>
                  <p className="vall pt-0 pt-sm-5">
                    Once completely sold out we will be giving one lucky holder
                    the grand prize of 10eth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img className="w-100 ftr" src={Img5} />
            </div>
          </div>
        </div>
      </div>
      <div className="tyt">
        <a id="mil"></a>
        <div className="container-fluid DDD">
          <div className="container">
            <div className="row gft">
              <div className="col-md-12 text-center">
                <h1 className="intro">Milestones</h1>
              </div>
            </div>
            <div className="row mkl">
              <div className="col-md-2"></div>
              <div className="col-md-10">
                <img className="w-75 uiy" src={Img6} />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-10">
                <img className="w-75 uiy" src={Img7} />
              </div>
              <div className="col-md-2"></div>
            </div>
            <div className="row pt-5">
              <div className="col-md-2"></div>
              <div className="col-md-10">
                <img className="w-75 uiy" src={Img8} />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-10">
                <img className="w-75 uiy" src={Img9} />
              </div>
              <div className="col-md-2"></div>
            </div>
            <div className="row pt-5">
              <div className="col-md-2"></div>
              <div className="col-md-10">
                <img className="w-75 uiy" src={Img10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid FFF">
        <a id="our"></a>
        <div className="container">
          <div className="row fyt">
            <div className="col-md-12 text-center">
              <h1 className="intro">Join Our Community</h1>
              <p className="valll ">
                Our mission statement for Voltnobi has always been clear. We’re
                not trying to reinvent the wheel but we are trying to improve
                it, this also is true for Ninjas of Kojiki.<br></br>
                Holders of our NFTS will gain access to the Voltnobi ecosystem
                and all the benefits that brings, with the ultimate goal to
                provide wealth to all in our community.<br></br>
                Our NFT’s will be heavily utilised in our game being developed
                by an AAA team giving our NFT’s a real tangible use case.
              </p>
            </div>
          </div>
          <div className="row  ">
            {/* <div className="col-md-2"></div>
            <div className="col-md-5 text-center">
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="YOUR EMAIL"
                />
              </div>
            </div> */}
            <div className="col-md-12 text-center">
              <a href="https://voltnobi.com/" target={"_blank"}>
                <button className="whii">Voltnobi</button>
              </a>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer">
        <div className="row dfa">
          <div className="col-md-4"></div>
          <div
            className="col-md-4 text-center
          "
          >
            <p className="pri">© 2022, PRIVACY POLICY</p>
          </div>
          <div className="col-md-4 text-center">
            <i class="gds px-2 fa-brands fa-facebook"></i>
            <i class="gds px-2 fa-brands fa-twitter"></i>
            <i class="gds px-2 fa-brands fa-instagram  pb-3"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
