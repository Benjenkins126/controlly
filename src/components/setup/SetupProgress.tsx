interface SetupProgressProps {
    currentProgress: string;
}

const SetupProgress = (props: SetupProgressProps) => {
    return (
        <div className="w-48 h-1.5 rounded-full bg-black/20 float-right mt-5">
            <div className={`${props.currentProgress} rounded-full h-1.5 bg-purpleControlly`}></div>
        </div>
    );
}

export default SetupProgress;