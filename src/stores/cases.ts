import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCases = defineStore('cases', () => {
    const boxs = ref<any>([
        {
            id: 1,
            title: "Multicast",
            img: "/public/cases/caseOne.png",
            price: 50,
            bonus: 7,
            filling: ['Throe', 'Yonex\'s Rage', 'Blackened Edge of the Bladekeeper', 'Pauldron of the Fiend Cleaver', 'Totem of Deep Magma', 'Arcanic Resonance Beam', 'Prominence', 'Glare of the Tyrant ', 'Dark Maw Inhibitor', 'Golden Dread Requisition', 'Twilight Schism', 'Zeal of Omoz Arkosh', 'Primal Peacemaker', 'Maraxiform\'s Ire', 'Malefic Drake\'s Strike']
        },
        {
            id: 2,
            title: "DMC",
            img: "/public/cases/caseTwo.png",
            price: 990,
            bonus: 49,
            filling: ['Chaos Fulcrum', 'Maw of Eztzhok', 'Wyrmwrought Flare', 'Golden Crucible of Rile', 'Edge of the Lost Order', 'Phantom Concord', 'Scavenging Guttleslug', 'Transversant Soul', 'The Barren Crown', 'Atomic Ray Thrusters', 'Arms of Desolation', 'World Chasm Artifact', 'Demon Eater', 'The King\'s New Journey', 'Padda\'pon of Ribbi\'tar']

        },
        {
            id: 3,
            title: "True Ghoul",
            img: "/public/cases/caseThree.png",
            price: 4990,
            bonus: 249,
            filling: ['Peregrine Flight', 'The Lightning Orchid', 'Jewel of Aeons', 'Razzil\'s Midas Knuckles', 'Golden Shadow Masquerade', 'Concord Dominion', 'Bracers of Aeons', 'Blistering Shade', 'Magus Accord', 'Masque of Awaleb', 'Masque of Awaleb Bundle', 'Lash of the Lizard Kin', 'Blade of Tears', 'Eternal Radiance Blades', 'Sullen Harvest']
        },
        {
            id: 4,
            title: "Support",
            img: "/public/cases/caseFoure.png",
            price: 1090,
            bonus: 10,
            filling: ['Avowance of the Veiled Ones', 'Sylvan Vedette', 'Golden Ripper\'s Reel', 'Desert Burn', 'Vigil Triumph', 'Crimson First of the Flood', 'Frost Avalanche', 'Feast of Abscession', 'Blades of Voth Domosh', 'Bladeform Legacy', 'Tempest Helm of the Thundergod', 'Flockheart\'s Gamble', 'The Magus Cypher', 'Dragonclaw Hook', 'Shadow in the Deep']
        },
        {
            id: 5,
            title: "Double Damage Rune",
            img: "/public/cases/caseFifti.png",
            price: 5500,
            bonus: 1110,
            filling: ["Mulctant Pall of the Crimson Witness", "Dam'arakan Muzzle of the Crimson Witness", "Golden Dread Requisition", "Maraxiform's Fate", "Rampant Outrage", "Maraxiform's Ire", "Crimson Cyrridae", "Span of Black Nihility", "Shearing Deposition", "Orb of Deliverance", "Golden Profane Union", "The Spoils of Dezun", "Fin King's Charm", "Ripper's Reel", "Razzil's Midas Knuckles"]
        }
    ])

    return { boxs }
})
