"use client";

export default function AnimatedBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-slate-50">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="absolute w-full h-full overflow-hidden">
                <div className="absolute w-[300px] h-[300px] top-[10%] left-[10%] rounded-full bg-gradient-to-br from-primary-light to-accent-light opacity-10 animate-float" />
                <div className="absolute w-[200px] h-[200px] top-[60%] right-[15%] rounded-full bg-gradient-to-br from-primary-light to-accent-light opacity-10 animate-float" style={{ animationDelay: "5s" }} />
                <div className="absolute w-[150px] h-[150px] bottom-[20%] left-[20%] rounded-full bg-gradient-to-br from-primary-light to-accent-light opacity-10 animate-float" style={{ animationDelay: "10s" }} />
            </div>
        </div>
    );
}
