export declare const duration: {
    readonly instant: 0;
    readonly quick: 0.12;
    readonly base: 0.2;
    readonly slow: 0.32;
    readonly deliberate: 0.48;
    readonly cinematic: 0.72;
    readonly stagger: 0.07;
    readonly ambient: 9;
    readonly drift: 24;
    readonly marquee: 48;
};
export declare const ease: {
    readonly out: [number, number, number, number];
    readonly inOut: [number, number, number, number];
    readonly exit: [number, number, number, number];
    readonly standard: [number, number, number, number];
    readonly emphasized: [number, number, number, number];
};
export declare const spring: {
    readonly snappy: {
        readonly type: "spring";
        readonly stiffness: 600;
        readonly damping: 49;
        readonly mass: 1;
    };
    readonly smooth: {
        readonly type: "spring";
        readonly stiffness: 420;
        readonly damping: 40;
        readonly mass: 1;
    };
    readonly gentle: {
        readonly type: "spring";
        readonly stiffness: 260;
        readonly damping: 32;
        readonly mass: 1;
    };
};
export declare const distance: {
    readonly lift: 2;
    readonly drop: 6;
    readonly rise: 8;
    readonly reveal: 24;
    readonly float: 10;
};
