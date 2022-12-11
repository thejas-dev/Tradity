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

export const RevealState2 = atom ({
	key:"RevealState2",
	default:false
})

export const linkState = atom ({
	key:"linkState",
	default:''
})
export const revealState3 = atom ({
	key:"revealState3",
	default:false
})

export const imagesState = atom ({
	key:"imagesState",
	default:[]
})

export const imageIndexState = atom ({
	key:"imageIndexState",
	default:0
})