import React from 'react';

const PrikazPoruka = ({ poruke, korisnik }) => {
    const filtriranePoruke = poruke.filter(
        (poruka, index, self) =>
            index === self.findIndex((p) => p.text === poruka.text)
    );
    return (
        <ul className="spremnikPoruka">
            {filtriranePoruke.map((poruka, index) => {
                const { member, text } = poruka;
                if (member.clientData.imeKorisnika === korisnik.imeKorisnika) {
                    return (
                        <li key={index} className="poruka-align-right poruka">
                            <div className="sadrzaj">
                                <h4>{member.clientData.imeKorisnika}</h4>
                                <p>{text}</p>
                            </div>
                        </li>
                    );
                } else {
                    return (
                        <li key={index} className="poruka-align-left poruka">
                            <div className="sadrzaj">
                                <h4>{member.clientData.imeKorisnika}</h4>
                                <p>{text}</p>
                            </div>
                        </li>
                    );
                }
            })}
        </ul>
    );
};

export default PrikazPoruka;





