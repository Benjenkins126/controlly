const LoadingBar = () => {
    return (
        <div className="relative w-full mt-4 bg-black/20 rounded-full h-1.5">
            <div className="absolute rounded-ful h-1.5 loadBar shim-purple top-0 w-full"></div>
        </div>
    );
}

export default LoadingBar;