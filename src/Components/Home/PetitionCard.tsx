// framework
import React from "react";

// models
import { petition_info } from "../../Models/petitions_meta";

// lib
import { post_event, request } from "../../Lib/mediator";

// fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    IconName,
    faBuildingColumns,
    faRotateRight,
    faTrashCan,
    faFileInvoice,
    faRepeat,
    faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faBuildingColumns,
    faRotateRight,
    faTrashCan,
    faFileInvoice,
    faRepeat,
    faUserGraduate,
);


interface pet_card_props {
    pet_info: petition_info,
};

const PetitionCard: React.FC<pet_card_props> = ({ pet_info }) => {
    // event handlers
    function pet_card_click(pet_name: string) {
        post_event('modal_show', {
            modal_title: 'Sample Modal',
            modal_body: `Petition Modal: ${pet_name}`,
        });

        console.log(request('modal_form_val', {}));
    }

    return <div className="pet_card" style={{ border: `2px solid ${pet_info.color}` }} onClick={() => pet_card_click(pet_info.name)}>
        <div className="count_holder" style={{ backgroundColor: pet_info.color }}>{pet_info.in_count}</div>
        <FontAwesomeIcon icon={`fa-solid ${pet_info.icon}` as IconName} style={{ color: pet_info.color }} />
        <span style={{ color: pet_info.color }}>{pet_info.name}</span>
    </div >;
};

export default PetitionCard;