import React from 'react';

const Footer = () => {
    return (
        <footer className={"border-t py-12"}>
            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0"}>
                <div>
                    <h3 className={"text-lg text-gray-800 mb-4"}>Newsletter</h3>
                    <p className={"text-gray-500 mb-4"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut culpa esse est eum, eveniet illo illum in ipsa laborum maxime nemo odit recusandae reiciendis repellat reprehenderit sit vitae voluptatibus.
                    </p>
                    <p>
                        Sign up and get 10% off your first
                    </p>

                    {/*Newsletter form*/}
                    <form>
                        <input
                            type="email"
                            placeholder={"Enter Your Email"}
                            className={"p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"}
                            required={true}
                        />
                    </form>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;