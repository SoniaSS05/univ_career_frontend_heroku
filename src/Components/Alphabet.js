import React, {useState} from 'react';
import './Alphabet.css';

export default function Alphabet({setLetter}) {
   
    return(
        <div className="mleft">
            <button className="squareAlp" onClick={()=>setLetter('A')}>A</button>
            <button className="squareAlp" onClick={()=>setLetter('B')}>B</button>
            <button className="squareAlp" onClick={()=>setLetter('C')}>C</button>
            <button className="squareAlp" onClick={()=>setLetter('D')}>D</button>
            <button className="squareAlp" onClick={()=>setLetter('E')}>E</button>
            <button className="squareAlp" onClick={()=>setLetter('F')}>F</button>
            <button className="squareAlp" onClick={()=>setLetter('G')}>G</button>
            <button className="squareAlp" onClick={()=>setLetter('H')}>H</button>
            <button className="squareAlp" onClick={()=>setLetter('I')}>I</button>
            <button className="squareAlp" onClick={()=>setLetter('J')}>J</button>
            <button className="squareAlp" onClick={()=>setLetter('K')}>K</button>
            <button className="squareAlp" onClick={()=>setLetter('L')}>L</button>
            <button className="squareAlp" onClick={()=>setLetter('M')}>M</button>
            <button className="squareAlp" onClick={()=>setLetter('N')}>N</button>
            <button className="squareAlp" onClick={()=>setLetter('O')}>O</button>
            <button className="squareAlp" onClick={()=>setLetter('P')}>P</button>
            <button className="squareAlp" onClick={()=>setLetter('Q')}>Q</button>
            <button className="squareAlp" onClick={()=>setLetter('R')}>R</button>
            <button className="squareAlp" onClick={()=>setLetter('S')}>S</button>
            <button className="squareAlp" onClick={()=>setLetter('T')}>T</button>
            <button className="squareAlp" onClick={()=>setLetter('U')}>U</button>
            <button className="squareAlp" onClick={()=>setLetter('V')}>V</button>
            <button className="squareAlp" onClick={()=>setLetter('W')}>W</button>
            <button className="squareAlp" onClick={()=>setLetter('X')}>X</button>
            <button className="squareAlp" onClick={()=>setLetter('Y')}>Y</button>
            <button className="squareAlp" onClick={()=>setLetter('Z')}>Z</button>

        </div>
        
    )
}