import React, { useState } from "react";

const Unos = ({ saljiPoruku }) => {
    const [tekstPoruke, setTekstPoruke] = useState("");

    const unosTeksta = (e) => {
        setTekstPoruke(e.target.value.toString());
    };

    const posaljiPoruku = (e) => {
        e.preventDefault();
        if (tekstPoruke.toString().trim() !== "") {
            saljiPoruku(tekstPoruke);
            setTekstPoruke("");
        }
    };

    return (
        <form className="form-Input" onSubmit={posaljiPoruku}>
            <input
                onChange={unosTeksta}
                value={tekstPoruke}
                type="text"
                placeholder="Unesite poruku"
            />
            <button>POŠALJI</button>
        </form>
    );
};

export default Unos;