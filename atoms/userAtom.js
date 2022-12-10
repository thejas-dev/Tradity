import { atom } from 'recoil';


export const RevealState = atom({
	key:"RevealState",
	default:false,
})

export const currentUserState = atom({
	key:"currentUserState",
	default:''
})


export const adminState = atom({
	key:"adminState",
	default:false
})