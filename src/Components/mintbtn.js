import React, { useState, useEffect } from "react";
import abi from "./abi.json";
import "./Home.css";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
require("dotenv").config();

const REACT_APP_CONTRACT_ADDRESS = "0xB47791E9F2D29ba753e7e3C2EcaB43d3a90456aF";
const SELECTEDNETWORK = "1";
const SELECTEDNETWORKNAME = "Ethereum Mainnet";
const nftquantity = 1000;

function Mintbtn() {
  const [errormsg, setErrorMsg] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalSupply, settotalSupply] = useState(0);
  const [walletConnected, setWalletConnected] = useState(0);
  // const [whitelistedUser, setWhitelistedUser] = useState(0);
  const [userAddress, setUserAddress] = useState("");
  const [maxallowed, setmaxallowed] = useState("0");

  useEffect(async () => {
    if (await detectEthereumProvider()) {
      // setProvider(true);
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);
        settotalSupply(await ct.methods.totalSupply().call());

        if (nftquantity - (await ct.methods.totalSupply().call()) == 0) {
          setErrorMsg("All NFTs minted, Sale has ended");
        }
      } else {
        // setProvider(false);
        setErrorMsg(
          'Enable "' + SELECTEDNETWORKNAME + '" and refresh to continue'
        );
      }
    } else {
      setErrorMsg(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
      // setProvider(false);
    }
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 10000);
    }

    function handleEthereum() {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        console.log("Ethereum successfully detected!");
        // setProvider(true);
      } else {
        setErrorMsg("Please install MetaMask!");
        // setProvider(false);
      }
    }
  }, []);

  async function loadWeb3() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      // Meta Mask Connected Account Address
      let metaMaskAccount = await web3.eth.getAccounts();
      metaMaskAccount = metaMaskAccount[0];

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);
        let current = await ct.methods.totalSupply().call();
        if (Number(current) === nftquantity) {
          console.log("Sold out");
          return;
        }

        let price = await ct.methods.getPrice().call(); //await ct.methods.getPrice().call();

        let alreadyMinted = await ct.methods.balanceOf(metaMaskAccount).call();
        let maxa = await ct.methods.MAX_PER_Address().call();

        if (Number(alreadyMinted) + Number(quantity) <= maxa) {
          await ct.methods.mint(quantity).send({
            from: metaMaskAccount,
            value: price * quantity,
          });
        } else {
          setErrorMsg("Already Minted Max");
        }

        settotalSupply(await ct.methods.totalSupply().call());
        setQuantity(1);
      } else {
        setErrorMsg(
          'Select "' +
            SELECTEDNETWORKNAME +
            '" network in your wallet to buy the nft'
        );
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // window.alert(
      //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
      // );
      {
        setErrorMsg(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }
  }

  async function connectWallet() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        let metaMaskAccount = await web3.eth.getAccounts();
        metaMaskAccount = metaMaskAccount[0];

        const WAddress = metaMaskAccount;
        metaMaskAccount =
          metaMaskAccount.substring(0, 15) +
          "........" +
          metaMaskAccount.substring(
            metaMaskAccount.length - 10,
            metaMaskAccount.length
          );

        setUserAddress(metaMaskAccount);

        // check status
        // if 1 check for whitelist
        // if 2 allow mint
        // if 0 error
        const Status = await ct.methods.getStatus().call();
        // const whitelist =await ct.methods.isWhitelisted(WAddress).call() ;

        // console.log(whitelist)
        if (Status == 0) {
          setErrorMsg("Sale Not started");
        }
        // else if (Status == 1) {
        //   console.log(setUserAddress)
        //    if ( whitelist) {
        //     setWalletConnected(1);
        //     // console.log("okok")
        //    } else {
        //     setErrorMsg("You Are Not Whitelisted")
        //    }
        // }
        else if (Status == 2) {
          //  <Mintbtn/>
          setWalletConnected(1);
        }

        let maxa = await ct.methods.MAX_PER_Transtion().call();
        setmaxallowed(maxa);
      }
    }
  }

  return (
    <div className="BtnDiv ">
      {/* <h6 className="text-center">{userAddress}</h6> */}
      {!errormsg ? (
        <div className="row align-items-center">
          {walletConnected == 0 ? (
            <div className="col-6 mx-auto d-block">
              <h1
                style={{ cursor: "pointer", fontSize: "20px" }}
                onClick={() => {
                  connectWallet();
                }}
                className="text-white whi text-center  w-100"
              >
                Connect
              </h1>
            </div>
          ) : (
            ""
          )}
          {walletConnected == 1 ? (
            <>
              <div className="col-sm-12 my-5">
                <h1 className="text-white text-center pb-4">Quantity</h1>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="count btn mx-4 "
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity == 1}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <h2 className="pt-2">
                    <span className="quantity text-white "> {quantity} </span>
                  </h2>
                  <button
                    className="count btn mx-3 "
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity == maxallowed}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
              <div className="col-sm-6 mx-auto pt-3 pt-sm-0">
                <h4
                  style={{ cursor: "pointer" }}
                  type="button"
                  className="connectbtn whi text-white d-block text-center"
                  onClick={() => loadWeb3()}
                >
                  Mint
                </h4>
              </div>
            </>
          ) : (
            ""
          )}
          {/* <p className="mt-3 text-white mx-auto mb-0 text-center">{nftquantity-totalSupply}/{nftquantity} Available</p> */}
        </div>
      ) : (
        <h5 className="mt-2 supplytext text-center">
          <b>{errormsg}</b>
        </h5>
      )}
    </div>
  );
}

export default Mintbtn;
