const Footer = () => {
    return (
        <footer className="h-[100px] rounded-t-[50px] overflow-hidden drop-shadow-lg bg-white -mt-[50px]">
            <div className="h-full container flex items-center justify-between text-[15px]">
                <span className="font-light">{new Date().getFullYear()}</span>
                <a
                    href="https://github.com/Mickgw"
                    target="_blank"
                    className="font-light"
                >
                    <span className="!text-[11px] mr-1">©</span>
                    <span>mickgw</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
