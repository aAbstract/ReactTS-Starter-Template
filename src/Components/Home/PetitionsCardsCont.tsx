// framework
import React from "react";

import '../../Styles/Home/PetitionsCardsCont.css';

// UI components
import PetitionCard from "./PetitionCard";

// models
import { petitions_cat } from "../../Models/petitions_meta";

interface pet_cards_cont_props {
    pet_cats: petitions_cat[],
};

const PetittionsCardsCont: React.FC<pet_cards_cont_props> = ({ pet_cats }) => {
    return <div id="petitions_cards_cont">
        {
            pet_cats.map((cat, cat_index) =>
                <div className="pet_cards_sec_cont" key={cat_index}>
                    <span className="sec_header">{cat.name}</span>
                    <div className="pet_cards_cont">
                        {
                            cat.petitions.map((pet, pet_index) =>
                                <PetitionCard pet_info={pet} key={pet_index} />
                            )
                        }
                    </div>
                </div>
            )
        }
    </div>;
};

export default PetittionsCardsCont;