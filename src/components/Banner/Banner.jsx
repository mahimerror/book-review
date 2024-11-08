const Banner = () => {
    return (
        <div className="w-11/12 mx-auto bg-[#F3F3F3] rounded-2xl mb-8">
            <div className="flex flex-col-reverse md:flex-row items-center p-16 gap-10">
                <div className="left-banner md:w-2/3">
                    <h2 className="font-bold text-5xl">Books to freshen up<br></br>your bookshelf</h2>
                    <button className="btn mt-8 text-white bg-green-700 hover:text-green-700">View The List</button>
                </div>
                <div className="right-banner md:w-1/3">
                    <img src="https://i.ibb.co.com/KD6nJQJ/pngwing-1.png" alt="pngwing-1" border="0"></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;