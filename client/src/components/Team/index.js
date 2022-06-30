import React from "react";
import kevniPic from "../../assets/images/kevnipic.jpg"
import vaughnPic from "../../assets/images/vaughnpic.png"
import clintonPic from "../../assets/images/clintonpic.jpg"

const Team = () => {
    return (
        // meet the team container
        <section>
            <div class="teamMembers">
                {/* meet the team cards */}
                <div class="clinton">
                    <div>
                        <h3>Clinton "Otafu" Tarzia</h3>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>Role on Team</p>
                    </div>
                    <div>
                        <p>Mini Bio?</p>
                    </div>
                    <div>
                        <img class="clintonPic" src={clintonPic} alt="" />
                    </div>
                </div>

                <div class="kevni">
                    <div>
                        <h3>Kevni "Koney" Kica</h3>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>Role on Team</p>
                    </div>
                    <div>
                        <p>Mini Bio?</p>
                    </div>
                    <div>
                        <img class="kevniPic" src={kevniPic} alt="" />
                    </div>
                </div>

                <div class="vaughn">
                    <div>
                        <h3>Vaughn "Veez" Smith</h3>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p></p>
                    </div>
                    <div>
                        <p>Mini Bio?</p>
                    </div>
                    <div>
                        <img class="vaughnPic" src={vaughnPic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Team;