// framework
import React, { useEffect, useState } from "react";

import '../Styles/Home/Home.css';

// UI components
import TopBar from "../Components/Common/TopBar/TopBar";
import PetittionsCardsCont from "../Components/Home/PetitionsCardsCont";
import LoadingScreen from "../Components/Common/LoadingScreen";
import CustModal from "../Components/Common/CustModal";

// models
import { petitions_cat } from "../Models/petitions_meta";

// API
import { get_fake_petitions_info } from "../API/petitions_info";

const Home: React.FC = () => {
    // state
    const [pet_cats, set_pet_cats] = useState<petitions_cat[]>([]);

    useEffect(() => {
        // on mounted or loaded
        get_fake_petitions_info().then((data) => {
            set_pet_cats(data);
        });

        return () => {
            // on destroy
        }
    }, []);

    return <div id="main_page_cont">
        <CustModal />
        <TopBar />
        {pet_cats.length == 0 ? <LoadingScreen /> : <PetittionsCardsCont pet_cats={pet_cats} />}
    </div>;
};

export default Home;