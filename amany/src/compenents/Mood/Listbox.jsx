import React from 'react';

const Listbox = props => {
    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }    

    return (
        <div className="flex justify-center items-center">
            <div className="gap-4">
                {
                    props.items.map((item, idx) => 
                        <div key={idx}>
                            <button
                                onClick={clicked}
                                className="block appearance-none w-full bg-white text-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                id={item.track.id}
                            >
                                {item.track.name}
                            </button>
                            <iframe 
                                className='rounded' 
                                src={`https://open.spotify.com/embed/track/${item.track.id}`} 
                                width="300" 
                                height="80" 
                                frameBorder="0" 
                                allowtransparency="true" 
                                allow="encrypted-media" 
                                loading="lazy">
                            </iframe>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Listbox;
