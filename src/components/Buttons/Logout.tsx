import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";


const Logout: React.FC = () => {
	const router = useRouter();
	const [signOut, loading, error] = useSignOut(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
    //const type = useRecoilValue(authModalState).type;
	//const isOpen = useRcoilValu(authModalState).isOpen
	

	
	const handleLogoutClick = () => {
		router.push("/auth")
		setAuthModalState((prev) => ({
			...prev,
			isOpen: true,
			type: "logout",
		  }));
		  
		signOut()
		
		
	  };
		
	
	return (
		
		
		<button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange'
		onClick={handleLogoutClick} 
		>
			<FiLogOut />
		</button>
	  
	  
	);
};
export default Logout;
