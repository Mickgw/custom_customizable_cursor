interface ListItem {
    project?: any;
    onMouseEnter?: void;
    onMouseLeave?: void;
}

const ListItem = ({ project, onMouseEnter, onMouseLeave }: any) => {
    return (
        <a
            href="/"
            className="px-10 h-[100px] border-b-[1px] text-black hover:text-slate-300 hover:px-12 border-black flex justify-between items-center transition-all duration-300 ease-in-out"
            onMouseEnter={() => {
                onMouseEnter();
            }}
            onMouseLeave={() => onMouseLeave()}
        >
            <h2 className="font-light">{project?.title}</h2>
            <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
            </svg>
        </a>
    );
};

export default ListItem;
