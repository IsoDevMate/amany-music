import React from 'react';

const Listbox = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }    

    return (
        <div className="">
            <div className="">
                {
                    props.items.map((item, idx) => 
                    <button key={idx}
                        onClick={clicked}
                        className=""
                        id={item.track.id}>
                            
                            {item.track.name}
                    </button>)
                }
            </div>
        </div>
        

    );
}

export default Listbox;