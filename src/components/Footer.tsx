const Footer = () => {
    return (
        <footer className="h-[50px] pb-20">
            <div className="container flex items-center justify-between text-[15px]">
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
