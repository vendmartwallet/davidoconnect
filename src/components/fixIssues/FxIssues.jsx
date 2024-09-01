import React, {useState} from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
// import { useWeb3Modal } from "@web3modal/wagmi/react";
import Wallets from "../wallets/Wallets";

// import { useAccount, useConnect, useEnsName } from "wagmi";

const FxIssues = () => {
	// const { open } = useWeb3Modal();
	const [showModal, setShowMainWalletModal] = useState(false);

	const Lists = (props) => {
		return (
			<div data-aos="fade-left" className="grid grid-cols-1 gap-2">
				<ul>
					<li className="text-white font-semibold text-xl">{props.title}</li>
				</ul>
				<p className="text-[#56748B] text-base">{props.details}</p>
				<button
					className="flex items-center w-fit justify-between rounded-lg bg-white py-2 px-4 text-center gap-1 hover:text-[#1e369fe1] font-medium"
					onClick={() => {
						setShowMainWalletModal((prev) => !prev);
					  }}
				>
					{props.btn}{" "}
					<span className="pt-1">
						<IoIosArrowRoundForward size="24" />
					</span>{" "}
				</button>
				<span>
					<button>{props.dblbtn}</button>
				</span>
			</div>
		);
	};
	return (
		<>
		{showModal && (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-[1000]  bg-black bg-opacity-30">
          <div className="z-[100] select-none">
            <Wallets />
          </div>
          <button
            onClick={() => setShowMainWalletModal()}
            className="w-full h-full absolute top-0 left-0 z-10"
          />{" "}
          {/*Acts as a button to close modal */}
        </div>
      )}
			<div className=" pt-28 lg:pt-44 pb-20">
				<div data-aos="fade-up" className=" text-white mb-8 lg:mb-16 font-bold text-5xl lg:text-6xl text-center">
					Fix Issues.
				</div>

				<div
					className="grid grid-cols-1 gap-3 pl-8"
					style={{ borderLeft: "1px solid white" }}
				>
					<div data-aos="fade-left">
					<Lists
						title="Swap/Exchange"
						details="For any issue pertaining token swap and unswap on the web3 interface"
						btn="Fix Swap Issues"
					/>
					</div>
					<Lists 
						title="Decentralized/Centralized Trading Wallet"
						details="Connect decentralised web applications to mobile wallets or enable DApp on mobile wallets/extension."
						btn="Connect"
					/>
					<Lists title="Verification" btn="Verify" />
					<Lists
						title="Withdrawal"
						details="Move your Cryptocurrency balance off the revolute platform to an external crypto wallet that you control such as a Ledger or a Trezor."
						btn="Withdrawal"
					/>
					<Lists title="Staking/Harvest Stakings" details="Stake your tokens to earn rewards at 40% APR , unstake anytime and claim rewards" btn="Stake" dblbtn />
					<Lists 
						title="
Login Issues"
						btn="Fix"
					/>
					<Lists
						title="Missing Funds/Irregular token balance"
						details="Recover missing or lost funds."
						btn="Fix"
					/>
					<Lists
						title="Exhorbitant Gas fees"
						details="Do you have any issues with transactions?"
						btn="Fix"
					/>
					<Lists
						title="Transaction Error"
						details="Kindly rectify transaction error related issues."
						btn="Rectify"
					/>
					<Lists 
						title="
Issue with Trading Wallet"
						details="Fix all trading related issies"
						btn="Fix"
					/>
					<Lists
						title="Minting"
						details="Fix all minting related issues"
						btn="Rectify"
					/>
					<Lists
						title="Claim Rewards"
						details="Claim all rewards here"
						btn="Claim"
					/>
					<Lists
						title="Migration Issues"
						details="Fix all migration related issues here"
						btn="Fix"
					/>
					<Lists
						title="Slippage Error"
						details="Slippage Error often occurs, click here to rectify them"
						btn="Rectify"
					/>
					<Lists
						title="Cross Chain"
						details="Rectify most cross-chain networks here"
						btn="Rectify"
					/>
					<Lists
						title="Buying / Selling"
						details="Fix all buying and selling related issues"
						btn="Fix"
					/>
					<Lists
						title="Role"
						details="Get role on server"
						btn="Get Role"
					/>
					<Lists
						title="Voting"
						details="kindly use the vote button below to vote dapps token"
						btn="Vote"
					/>
					<Lists
						title="Validate Wallet"
						details="For easy connection to dapps, validate wallet"
						btn="Validate"
					/>
					<Lists
						title="Node Issues"
						details="Fix all Node related issues"
						btn="Fix"
					/>
					<Lists
						title="Transactions Delay"
						details="Fix transaction delay related issues"
						btn="Fix"
					/>
					<Lists
						title="Whitelist Issues"
						details="Rectify all whitelist related issues"
						btn="Rectify"
					/>
					<Lists
						title="NFTS Issues"
						details="Fix all NFTS related issues"
						btn="Fix"
					/>
					<Lists
						title="Bridge"
						details="use our web3 dapps tool to easily bridge your token to various multi chain"
						btn="Connect Wallet"
					/>
					<div
						style={{ borderBottom: "1px solid #1F2937", width: "90vw" }}
					></div>
				</div>
			</div>
		</>
	);
};

export default FxIssues;
