import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import { Parallax } from "react-parallax";
import CloseButton from "../pictures/EveryComponents/All_Icons/cancel.svg";
import Calendar from "./Calendar";

const PicRoomItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Parallax
                bgImage={props.img}
                bgImageAlt="Rooms"
                strength={150}
                className="parallax"
            >
                <div class="inside">
                    <img
                        src={props.roomType}
                        width="110px"
                        height="110px"
                    ></img>
                    <p>{props.title}</p>
                    <p>{props.desc}</p>
                    <button onClick={() => setIsOpen(true)}>DISCOVER</button>
                </div>
            </Parallax>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="modal-wrapper"
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div
                    class="modal"
                    /*style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translateX(-50%) translateY(-50%)",
                        width: "900px",
                        height: "550px",
                    }}*/
                >
                    <div class="boxUp">
                        <div>
                            <img
                                src={props.roomType}
                                width="100px"
                                height="100px"
                            ></img>
                            <p>{props.roomName}</p>
                            <br></br>
                            <p>{props.roomName2}</p>
                            <div class={`line ${isOpen ? "opened" : ""}`}></div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${props.modal_img_01})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <img
                                src={CloseButton}
                                width="25px"
                                height="25px"
                                onClick={() => setIsOpen(false)}
                            ></img>
                        </div>
                    </div>
                    <div class="boxDown">
                        <div
                            style={{
                                backgroundImage: `url(${props.modal_img_02})`,
                                backgroundSize: "cover",
                                backgroundPositionY: "-30px",
                            }}
                        ></div>
                        <div>
                            <div class="box1" style={{ marginLeft: "20px" }}>
                                <p>ARRIVAL</p>
                                <div class="date-selector">
                                    <Calendar />
                                </div>
                            </div>
                            <div class="box1">
                                <p>DEPARTURE</p>
                                <div class="date-selector">
                                    <Calendar />
                                </div>
                            </div>
                            <div class="box2">
                                <p>People</p>
                                <input type="number"></input>
                            </div>
                            <div class="box4">
                                <a href="/booking">BOOK YOUR STAY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default PicRoomItem;
