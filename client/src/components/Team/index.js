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
                        <p>Backend API Integration/Server Setup</p>
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
                        <p>Frontend CSS Styling</p>
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
                        <p>Frontend React/Login/Bug Fixing/Deployment</p>
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